import { createBrowserClient, createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

export function createClient(useCookie = false) {
    // const cookieStore = cookies()

    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    // return null
                 return null;

                    // return cookies().getAll()
                },
                setAll(cookiesToSet) {
                    if(useCookie) return;
                    // cookiesToSet.forEach(({ name, value, options }) => cookies().set(name, value, options))
                },
            },
        }
    )
}


export function createClientB() {
    return createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
  }