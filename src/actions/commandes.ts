'use server'
import { Commandes } from "@/domain/entities/Commandes";
import { createClient } from "@/utils/supabase/server";

export async function createCommande(machine_id: number,prevState: any,formData:FormData) {
  const supabase = createClient(true);


  const commandes:Omit<Commandes, 'id' | 'machine_id'> = {
    entreprise: formData.get("entreprise") as string,
    name: formData.get('name') as string,
    phone_number: formData.get('phone_number') as string,
    // machine_id: formData.get('machine_id') as string,
  }
  console.log({...commandes,machine_id:machine_id })

  const { error } = await supabase
  .from('commandes')
  .insert({...commandes, machine_id:machine_id})
}