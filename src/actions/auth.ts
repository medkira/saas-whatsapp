'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { registerSchema } from './server-validation/schema'

import { createClient } from '@/utils/supabase/server'
import { createDoctor } from './doctors'
import { createCronJob, isCronJobExist } from './cronJobs'

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

        return validatedFields.error.flatten().fieldErrors
        // return {
        //     errors: validatedFields.error.flatten().fieldErrors,
        //     message: 'Missing Fields. Failed to Create Invoice.',
        // };
    }

    // console.log("user", user);

    const { data, error } = await supabase.auth.signUp({ email: user.email, password: user.password });

    // console.log(error)
    if (error) {
        redirect('/error')
    }

    // When create new account i need to check
    // if this account time zone exist in the saved crons job
    // if not i need to create that time zone and save it 
    // else just contenui sign up
    await createDoctor({ email: user.email, name: user.name, local_time_zone: user.local_time_zone, country_code: user.countryCode, phone_number: user.phoneNumber });

    // create a scheduled cron job in 8 am for the current  doctor local time zone
    // if the cron job exist continue
    // obj : cronjob = {localtimezon, timeOfscheduledCronJob }
    // => post req to cron-job.org to save the cron job

    const cronJobExist = await isCronJobExist(user.local_time_zone);
    if (!cronJobExist) {
        await createCronJob(user.local_time_zone);
    }


    revalidatePath('/', 'layout')
    redirect('/')
}

export async function signOut() {
    const supabase = createClient()

    await supabase.auth.signOut()
    redirect('/login')
}