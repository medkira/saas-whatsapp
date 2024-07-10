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

   // ? this should be another useCase
   const { data } = await supabase.from('machines').select('*').eq('id',id);

   const machine:Machines = data![0] //! data could be null

   const url = machine.image_url 

   // extract the path of imaage from the image url
   const secondLastSlashIndex = url.lastIndexOf("/", url.lastIndexOf("/") - 1);
   const imageBacketPath = url.slice(secondLastSlashIndex + 1);

   
   
   
   const response = await supabase
   .from('machines')
   .delete()
   .eq('id', id)
   
   await deleteFile(imageBacketPath);

   revalidatePath('/dashboard/machines');
}


export async function updateMachine(id:number,prevState: any, formData:FormData) {
   const supabase = createClient();

   
   const image  = formData.get("file") as File;
   let imageUrl;

   if(image.size != 0){
      // ? this should be another useCase
      const { data } = await supabase.from('machines').select('*').eq('id',id);

      const machine:Machines = data![0] //! data could be null

      const url = machine.image_url 

      // extract the path of imaage from the image url
      const secondLastSlashIndex = url.lastIndexOf("/", url.lastIndexOf("/") - 1);
      const imageBacketPath = url.slice(secondLastSlashIndex + 1);

      await deleteFile(imageBacketPath);

       imageUrl = await uploadFile(image);
   }



   const machine:Omit<Machines, 'id' | 'image_url'>  = {
      category: formData.get("category") as any,
      price: formData.get("price") as any,
      reference: formData.get("reference") as any
   }
   // this need to be changed supabse 
   //update need to know the entitie
   const { error } = await supabase
  .from('machines')
  .update({...machine,...(imageUrl ? {image_url:imageUrl} : {}),
  })
  .eq('id', id)

  revalidatePath('/dashboard/machines');

}


export async function createMachine(prevState: any,formData:FormData){
   // console.log("formData",formData.get("file"));

   const image:any = formData.get("file");

   const imageUrl = await uploadFile(image);

   // console.log(formData.get("category"));
   const machine:Omit<Machines, 'id' | 'image_url'>  = {
      category: formData.get("category") as any,
      price: formData.get("price") as any,
      reference: formData.get("reference") as any
   }
   const supabase = createClient();

   // this need to be changed supabse 
   //create need to know the entitie

   const { error } = await supabase
  .from('machines')
  .insert({...machine,image_url:imageUrl });

  revalidatePath('/dashboard/machines');
}


async function uploadFile(file:File):Promise<string>{
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
      const  {data} = supabase
      .storage
      .from('MMC machines')
      .getPublicUrl(`machines/${file.name}`);

      console.log(data.publicUrl)
      return data.publicUrl
      // console.log(data)
   }

   return ''
 }


async function deleteFile(filePath:string){

   const supabase = createClient();


   const { data, error } = await supabase
   .storage
   .from('MMC machines')
   .remove([filePath])
 }






//  const url = "https://fouoflrwnuelvlfgsats.supabase.co/storage/v1/object/public/MMC%20machines/machines/JR20U43.jpg";
// const test = "test"
// console.log(test.lastIndexOf("t",3))

// // Get the index of the second last "/"
// const secondLastSlashIndex = url.lastIndexOf("/", url.lastIndexOf("/") - 1);

// // Extract the substring from the second last "/" to the end
// const lastTwoSlashes = url.slice(secondLastSlashIndex);
// // console.log("secondLastSlashIndex",secondLastSlashIndex)
// console.log(lastTwoSlashes);