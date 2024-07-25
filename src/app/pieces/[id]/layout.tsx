// import { createClient } from '@/utils/supabase/server';

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const supabase = createClient();
  // const { data } = await supabase.from('machines').select('*');

  // console.log(data);

  return (
    <section className="flex flex-col items-center justify-start text-center">
      {children}
    </section>
  );
}
