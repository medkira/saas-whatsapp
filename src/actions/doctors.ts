'use server'

import { Doctors } from "@/domain/entities/Doctors";
import { createClient } from "@/utils/supabase/server";

export async function createDoctor(doctor: Pick<Doctors, 'email' | 'name'>) {
   const supabase = createClient();

   const { error } = await supabase
       .from('doctors')
       .insert(doctor);

   if (error) {
       console.error('Error creating doctor record:', error.message);
       throw error; // Or handle the error appropriately
   }

   return true;
}