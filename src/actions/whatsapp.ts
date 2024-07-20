"use server"
import { revalidatePath } from "next/cache";

import { Whatsapp } from "@/domain/entities/Whatsapp";
import { createClient } from "@/utils/supabase/server";

export async function getWhatsapps ():Promise<Whatsapp[]> {
    const supabase = createClient(true);
    const { data } = await supabase.from('whatsapp')
    .select()
    .order('created_at', { ascending: false });
  

   if(!data) return []
  
   return data
}


export async function linkWhatsapp (prevState: any,formData:FormData){
    const supabase = createClient();

    const whatsApp:Omit<Whatsapp, 'id' | 'is_active' > = {
      phone_number: formData.get("phone_number") as string,
    }
    const { error } = await supabase
    .from('whatsapp')
    .insert({phone_number:`216${whatsApp.phone_number}`, is_active:true }) //! i will change it later



    const sendLinkMessage = async ({toPhoneNumber}:{toPhoneNumber:string}) =>{
        const payload = {
          messaging_product: 'whatsapp',
          to: toPhoneNumber,
          recipient_type: "individual",
          type: 'template',
          template: {
            name: 'activation_commendes',
            language: {
              code: 'fr'
            }
          }
     
         
        
        };



        const res = await fetch(`https://graph.facebook.com/v20.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization':  `Bearer ${process.env.META_ACCESS_TOKEN_SYSTEM_ADMIN}`
            },
            body: JSON.stringify(payload)
          }
        )
      
    } 

    await sendLinkMessage({toPhoneNumber:`216${whatsApp.phone_number}`});

    revalidatePath('/dashboard/whatsapp')
      
}

export async function desactiveWhatsapp(id:number,prevState: any, formData:FormData){
  const supabase = createClient();

  const { error } = await supabase
  .from('whatsapp')
  .update({is_active:false})
  .eq('id', id)

  revalidatePath('/dashboard/whatsapp')
}


export async function activeWhatsapp(id:number,prevState: any, formData:FormData){
  const supabase = createClient();

  const { error } = await supabase
  .from('whatsapp')
  .update({is_active:true})
  .eq('id', id)

  revalidatePath('/dashboard/whatsapp')
}