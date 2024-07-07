'use server'
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


export async function updateMachine(id:string, updates:Machines) {
   const supabase = createClient();

   const { error } = await supabase
  .from('machines')
  .update({ ...updates})
  .eq('id', id)

}

export async function deleteMachine(id: string){
   const supabase = createClient();
   const response = await supabase
   .from('machines')
   .delete()
   .eq('id', id)
}

export async function createMachine(data:Machines ){
   const supabase = createClient();

   const { error } = await supabase
  .from('machines')
  .insert({...data })
}

