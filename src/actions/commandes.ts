'use server'
import { revalidatePath } from "next/cache";

import { Commandes } from "@/domain/entities/Commandes";
import { createClient } from "@/utils/supabase/server";

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

  const { error } = await supabase
  .from('commandes')
  .insert({...commandes, machine_ref:machine_ref})

  if(error){
    return error 
  }
  revalidatePath('/dashboard/commandes');

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