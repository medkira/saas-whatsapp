'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { registerSchema } from './server-validation/schema'

import { createClient } from '@/utils/supabase/server'
import { createDoctor } from './doctors'
import { createCronJob, isCronJobExist } from './cronJobs'
import { isPromoAvailable, } from './plan'

export async function login(prevState: any, formData: FormData) {
    const supabase = createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const user = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }


    const { error }: { error: any } = await supabase.auth.signInWithPassword(user)

    if (error) {
        return 'Invalid credentials.';
    }

    revalidatePath('/', 'layout')
    redirect('/dashboard')
}

export async function signup(userLocalTimeZone: string, countryCode: string, phoneNumber: string, prevState: any, formData: FormData) {
    const supabase = createClient()

    const user = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        confirmPassword: formData.get('confirm-password') as string,
        countryCode: countryCode,
        phoneNumber: phoneNumber,
        local_time_zone: userLocalTimeZone,
    }


    const validatedFields = registerSchema.safeParse(user);


    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {

        // flatten method is provided by Zod 
        // It transforms the error structure into a simpler format.
        // console.log("from auth",validatedFields.error.flatten().fieldErrors.confirmPassword);
        // console.log(validatedFields.error.flatten().fieldErrors)
        // const zodErrors = validatedFields.error.flatten().fieldErrors;


        return validatedFields.error.flatten().fieldErrors

    }

    const cronJobExist = await isCronJobExist(user.local_time_zone);
    if (!cronJobExist) {
        await createCronJob(user.local_time_zone);
    }

    const { data, error } = await supabase.auth.signUp({ email: user.email, password: user.password });

    // need to fix this in proper error handling.
    // the current code sucks
    // refactor check if the email is exist should be in hight priority
    if (error) {
        return { AuthError: [error.code] } as any
    }






    // Check if User Can Have Promo Plan
    const isPromoeUserOrNot = await isPromoAvailable();

    // When create new account i need to check
    // if this account time zone exist in the saved crons job
    // if not i need to create that time zone and save it 
    // else just contenui sign up
    await createDoctor({
        email: user.email, name: user.name,
        local_time_zone: user.local_time_zone,
        country_code: user.countryCode, phone_number: user.phoneNumber,
        user_id: data.user?.id!,
        is_promo_user: isPromoeUserOrNot,
    });

    // create a scheduled cron job in 8 am for the current  doctor local time zone
    // if the cron job exist continue
    // obj : cronjob = {localtimezon, timeOfscheduledCronJob }
    // => post req to cron-job.org to save the cron job




    revalidatePath('/', 'layout')
    redirect('/dashboard')
}

export async function signOut() {
    const supabase = createClient()

    await supabase.auth.signOut()
    redirect('/login')
}