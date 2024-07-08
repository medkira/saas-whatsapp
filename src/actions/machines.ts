'use server'
import { Machines } from '@/domain/entities/Machines';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

 export  async function  getMachine ()  {
    const supabase = createClient();
    const { data } = await supabase.from('machines').select('*');

   //  if (!data || data.length === 0) {
   //     return data
   //    }

      return data
}




export async function deleteMachine(id: number,prevState: any, formData:FormData){
   const supabase = createClient();
   const response = await supabase
   .from('machines')
   .delete()
   .eq('id', id)

   revalidatePath('/dashboard/machines');
}


export async function updateMachine(id:number,prevState: any, formData:FormData) {
   const supabase = createClient();

   const machine:Omit<Machines, 'id' | 'image_url'>  = {
      category: formData.get("category") as any,
      price: formData.get("price") as any,
      reference: formData.get("reference") as any
   }

   // console.log("ID", id);

   const { error } = await supabase
  .from('machines')
  .update({...machine})
  .eq('id', id)

  revalidatePath('/dashboard/machines');

}


export async function createMachine(prevState: any,formData:FormData){
   // console.log(prevState);
   // console.log(formData.get("category"));
   const machine:Omit<Machines, 'id' | 'image_url'>  = {
      category: formData.get("category") as any,
      price: formData.get("price") as any,
      reference: formData.get("reference") as any
   }
   const supabase = createClient();

   const { error } = await supabase
  .from('machines')
  .insert({...machine });

  revalidatePath('/dashboard/machines');
}

