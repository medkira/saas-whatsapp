'use server'
import { revalidatePath } from 'next/cache';

import { Machines } from '@/domain/entities/Machines';
import { createClient } from '@/utils/supabase/server';

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
   console.log("formData",formData.get("file"));

   const test:any = formData.get("file");

   uploadFile(test)

   // console.log(formData.get("category"));
//    const machine:Omit<Machines, 'id' | 'image_url'>  = {
//       category: formData.get("category") as any,
//       price: formData.get("price") as any,
//       reference: formData.get("reference") as any
//    }
//    const supabase = createClient();

//    const { error } = await supabase
//   .from('machines')
//   .insert({...machine });

  revalidatePath('/dashboard/machines');
}


async function uploadFile(file:File) {
   // const supabase = createClientComponentClient();
      const supabase = createClient();
   const { data, error } = await supabase.
   storage.from('MMC machines').upload(`machines/${file.name}`, file, {
      cacheControl: '3600',
      upsert: false
    })

  
   if (error) {
     // Handle error
     console.log(error)
   } else {
      const  urlImage = supabase
      .storage
      .from('avatars')
      .getPublicUrl(`machines/${file.name}`);

      console.log(urlImage)
      console.log(data)
   }
 }