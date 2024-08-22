import { NextResponse, type NextRequest } from 'next/server'
import { createClient } from './utils/supabase/server';

import { updateSession } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
    return await updateSession(request)

    // const supabase = createClient();
    // const {
    //   data: { user },
    // } = await supabase.auth.getUser();

    // if (!user) {
    //   redirect('/login');
    // }

    //   const supabase = createClient();
    //   const { data: { user } } = await supabase.auth.getUser();

    //   if (!user) {
    //     // return NextResponse.redirect(new URL('/login', request.url));
    //     console.log("no user")
    //     NextResponse.redirect('http://localhost:3000/login');

    //   } else {

    //       console.log("use exists")
    //   }

    //   return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}