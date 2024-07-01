import { redirect } from 'next/navigation';

import { Layout } from '@/components/dashboard/layout/layout';
import '@/styles/globals.css';
// import { createClient } from '@/utils/supabase/server';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const supabase = createClient();
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // if (!user) {
  //   redirect('/login');
  // }
  redirect('/login');

  return <Layout>{children}</Layout>;
}
