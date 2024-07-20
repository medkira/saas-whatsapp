import { whatsapp } from "@/domain/entities/Whatsapp";
import { createClient } from "@/utils/supabase/server";

export async function getWhatsapps ():Promise<whatsapp[]> {
    const supabase = createClient(true);
    const { data } = await supabase.from('whatsapp')
    .select()
    .order('created_at', { ascending: false });
  

   if(!data) return []
  
   return data
}