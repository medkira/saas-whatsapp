'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(prevState:any,formData: FormData) {
    const supabase = createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    //? to this to work , it need a proper error handeling 
    //? class/function.... and to create an error object and thorw or return it 
    //? that will triger the catch statement 
    // try {
    //     await supabase.auth.signInWithPassword(data)

    // } catch(error){

    // }


    const {error}:{error:any} =    await supabase.auth.signInWithPassword(data)

    if (error) {
        const errName = error.name;  // Uses optional chaining
        const errStatus = error?.status;
        console.log("Error Name:", errName);
        console.log("Error Status:", errStatus);

        return 'Invalid credentials.';
        // redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/dashboard')
}

export async function signup(prevState:any,formData: FormData) {
    const supabase = createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }
    const { error } = await supabase.auth.signUp(data)


    if (error) {
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/')
}

export async function signOut() {
    const supabase = createClient()

    await supabase.auth.signOut()
    redirect('/login')
}