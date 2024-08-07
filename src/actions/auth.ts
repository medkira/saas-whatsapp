'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createDoctor } from './doctors'
import { registerSchema } from './server-validation/schema'

import { createClient } from '@/utils/supabase/server'

export async function login(prevState:any,formData: FormData) {
    const supabase = createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const user = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }


    const {error}:{error:any} = await supabase.auth.signInWithPassword(user)

    if (error) {
        return 'Invalid credentials.';
    }

    revalidatePath('/', 'layout')
    redirect('/dashboard')
}

export async function signup(prevState:any,formData: FormData) {
    const supabase = createClient()

    const user = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        confirmPassword: formData.get('confirm-password') as string,
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


    const { data, error } = await supabase.auth.signUp({email:user.email,password:user.password})
    
    // console.log(error)
    if (error) {
        redirect('/error')
    }
  
    await createDoctor({email:user.email,name:user.name})

    revalidatePath('/', 'layout')
    redirect('/')
}

export async function signOut() {
    const supabase = createClient()

    await supabase.auth.signOut()
    redirect('/login')
}