'use server'
import { revalidatePath } from "next/cache";

import { Commandes } from "@/domain/entities/Commandes";
import { createClient } from "@/utils/supabase/server";
import { getWhatsapps } from "./whatsapp";

export async function createCommande(machine_ref: string,prevState: any,formData:FormData) {
  const supabase = createClient(true);


  const commandes:Omit<Commandes, 'id' | 'machine_id' |'machine_ref'> = {
    entreprise: formData.get("entreprise") as string,
    name: formData.get('name') as string,
    phone_number: formData.get('phone_number') as string,
    // machine_id: formData.get('machine_id') as string,
  }
  // console.log({...commandes,machine_id:machine_id })
  //  await new Promise((resolve)=> setTimeout(resolve,2000));
  // console.log("prevState",prevState)

  // const { error } = await supabase
  // .from('commandes')
  // .insert({...commandes, machine_ref:machine_ref})

  // if(error){
  //   return error 
  // }
  revalidatePath('/dashboard/commandes');

  //? send whats app message part ?//

 // ? get all whats app number first 
  const whatsapps = await getWhatsapps()

// ? decalre how send message 

 const sendCommandesMessage = async ({toPhoneNumber}:{toPhoneNumber:string}) =>{
  const payload = {
    messaging_product: 'whatsapp',
    to: toPhoneNumber,
    recipient_type: "individual",
    // type: 'template',
    // template: {
    //   name: 'hello_world',
    //   language: {
    //     code: 'en_US'
    //   }
    // }

    // preview_url: false,
    type: 'text',
    text:{
      body: `Bonjour,\nUne nouvelle commande a été passée pour la machine à coudre ${machine_ref}.\nVoici les détails :\n
              Nom du client : ${commandes.name}\n
              Entreprise : ${commandes.entreprise}\n
              Numéro de téléphone : ${commandes.phone_number}`
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



  //? check if the whats app number is active or no
  for (const whatsapp of whatsapps) {
    if (whatsapp.is_active) {
      await sendCommandesMessage({toPhoneNumber:whatsapp.phone_number});
    }
  }

  return true;
}


export  async function  getCommandes ():Promise<Commandes[]> {
  const supabase = createClient(true);
  const { data } = await supabase.from('commandes')
  .select()
  .order('created_at', { ascending: false });
 //  if (!data || data.length === 0) {
 //     return data
 //    }
 if(!data) return []

 return data
}


export async function deleteCommande(id: number,prevState: any, formData:FormData){
  const supabase = createClient();

  const {data,error} = await supabase
  .from('commandes')
  .delete()
  .eq('id', id)

  revalidatePath('/dashboard/commandes');
 
}