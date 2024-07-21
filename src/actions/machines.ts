'use server'
import { revalidatePath } from 'next/cache';

import { Machines } from '@/domain/entities/Machines';
import { createClient,createClientB } from '@/utils/supabase/server';



export async function filterMachines({categories, marks}:{categories: string[], marks:string[]}):Promise<Machines[]>{
   const supabase = createClient(true);
   // console.log(categories[0])
   const {data, error} = 
   await supabase.rpc("get_machins_filter", {categories: categories, marks: marks})
  

   return data
}



export async function searchMachines(search:string):Promise<Machines[]>{
   const supabase = createClient(true);

   const { data, error } = await supabase
   .rpc('search_machines', { machine_term: search })

   if(!data) return [];

   return data
}

//? pagination 

const ITEMS_PER_PAGE = 6;

   // ? this  pagination
 export  async function  getMachine (page:string ='1'):Promise<Machines[]> {
    const supabase = createClient(true);


    const pageNumber = Number(page)
   
    const start = ITEMS_PER_PAGE * (pageNumber - 1);
    const end = start + ITEMS_PER_PAGE - 1;

    const { data } = await supabase.from('machines')
    .select()
    .range(start,end)
    .order('created_at', { ascending: false });

   if(!data) return []

   return data
}

export  async function  getAllMachines ():Promise<Machines[]> {
   const supabase = createClient(true);

   const { data } = await supabase.from('machines')
   .select()
   .order('created_at', { ascending: false });

  if(!data) return []

  return data
}



//? returns total pages
export async function getMachinesPages():Promise<number>{
   const supabase = createClient(true);

   const {data, count } = await supabase
   .from('machines')
   .select('*', {count: 'exact', head:true})
 
   if(!count){return 0}

   const totalPage = Math.ceil(count / ITEMS_PER_PAGE);

   return totalPage;
}






export  async function  getMachineNo ():Promise<Machines[]> {
   const supabase = createClientB();
   const { data } = await supabase.from('machines')
   .select()
   .order('created_at', { ascending: false });

  //  if (!data || data.length === 0) {
  //     return data
  //    }
  if(!data) return []

  return data
}






export async function deleteMachine(id: number,prevState: any, formData:FormData){
   const supabase = createClient();

   // ? this should be another useCase
   const { data } = await supabase.from('machines').select().eq('id',id);

   const machine:Machines = data![0] //! data could be null

   const url = machine.image_url
 
   if(url){

      // extract the path of imaage from the image url
      const secondLastSlashIndex = url.lastIndexOf("/", url.lastIndexOf("/") - 1);
      const imageBacketPath = url.slice(secondLastSlashIndex + 1);

      await deleteFile(imageBacketPath);
      
   }
   
   
   const response = await supabase
   .from('machines')
   .delete()
   .eq('id', id)
   
  
   // await new Promise((resolve)=> setTimeout(resolve,2000));
  
  
   revalidatePath('/dashboard/machines');
   revalidatePath('/');
   revalidatePath('/products');
}


export async function updateMachine(id:number,prevState: any, formData:FormData) {
   const supabase = createClient();

   
   const image  = formData.get("file") as File;
   let imageUrl= "";

   if(image.size != 0){
      // ? this should be another useCase
      const { data } = await supabase.from('machines').select().eq('id',id);

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
      reference: formData.get("reference") as any,
      applicable: formData.get("applicable") as any,
      available: formData.get("available") as any,
      description: formData.get("description") as any,
      mark: formData.get("mark") as any,
      name: formData.get("name") as any
   }

   // console.log("imageUrl",imageUrl ? {image_url:imageUrl} : {})

   // this need to be changed supabse 
   //update need to know the entitie
   const { error } = await supabase
  .from('machines')
  .update({...machine,image_url:imageUrl})
  .eq('id', id)


  revalidatePath('/dashboard/machines');
  revalidatePath('/');
  revalidatePath('/products');
}


export async function createMachine(prevState: any,formData:FormData){
   // console.log("formData",formData.get("file"));

   const image:any = formData.get("file");
   let imageUrl ="";

   if(image.size != 0){
    imageUrl = await uploadFile(image);
   }

   // console.log("from server action", image)

   const machine:Omit<Machines, 'id' | 'image_url'>  = {
      category: formData.get("category") as any,
      price: formData.get("price") as any,
      reference: formData.get("reference") as any,
      applicable: formData.get("applicable") as any,
      available: formData.get("available") as any == "on",
      description: formData.get("description") as any,
      mark: formData.get("mark") as any,
      name: formData.get("name") as any
   }
   const supabase = createClient();

   // this need to be changed supabse 
   // create need to know the entitie

   // console.log("imageUrl",imageUrl ? {image_url:imageUrl} : {})

   if(image.size != 0) {
      const { error } = await supabase
      .from('machines')
      .insert({...machine,image_url:imageUrl});
   } else {
      const { error } = await supabase
      .from('machines')
      .insert({...machine});
   }


//   console.log(formData)

// if(error){
//   return e
// }

  revalidatePath('/dashboard/machines');
  revalidatePath('/');
  revalidatePath('/products');

  return true
}


async function uploadFile(file:File):Promise<string>{
   // const supabase = createClientComponentClient();
   const supabase = createClient();
   const { data, error } = await supabase.
   storage.from('MMC machines').upload(`machines/${file.name}`, file, {
      cacheControl: '3600',
      upsert: true
    })

  
   if (error) {
     // Handle error
     console.log(error)

     return error.message
   } else {
      const  {data} =  supabase
      .storage
      .from('MMC machines')
      .getPublicUrl(`machines/${file.name}`);

      // console.log(data.publicUrl)
      return data.publicUrl
      // console.log(data)
   }

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