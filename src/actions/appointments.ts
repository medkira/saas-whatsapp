'use server'
import { revalidatePath } from "next/cache";

import { Appointments } from "@/domain/entities/Appointments";
import { createClient } from "@/utils/supabase/server";


export async function createAappointment(prevState: any,formData:FormData){
  
    const supabse = createClient();


    
    const appointment:Omit<Appointments, 'id'| 'phone_number'> = {

        // ? need to be fixed
        appointment_date: formData.get("appointment_date") as string,
        patient_id: formData.get("patient_id") as any,
        reminder_sent: formData.get("reminder_sent") as any,
        // phone_number: formData.get("phone_number") as any,
    }

    // console.log(appointment)

    const dateWithoutTimeZone = (appointment.appointment_date).split('[')[0];
    const { error } = await supabse
    .from('appointments')
    .insert({ appointment_date:dateWithoutTimeZone, patient_id: "66", reminder_sent: false});
    // console.log("error", error)

    await getAppointments()


    // revalidatePath('/');
    // revalidatePath('/dashboard/appointments');

}   


export async function getAppointments() {
    const supabase = createClient(true);

    const { data } = await supabase.from('appointments')
    .select()
    // .range(start,end)
    .order('created_at', { ascending: false });

   if(!data) return []

   console.log(data)
   return data

}