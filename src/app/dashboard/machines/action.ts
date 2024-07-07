'use server'
import { createClient } from '@/utils/supabase/server';

 export  async function  getMachine ()  {
    const supabase = createClient();
    const { data } = await supabase.from('machines').select('*');

   //  if (!data || data.length === 0) {
   //     return data
   //    }

      return data
}


