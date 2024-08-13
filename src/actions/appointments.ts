'use server'
import { revalidatePath } from "next/cache";

import { Appointments } from "@/domain/entities/Appointments";
import { createClient } from "@/utils/supabase/server";
import SupabaseService from "./abstarct/crud-entitie-supabse";


const supabseTableName = 'appointments'

const appointmentCrud = new SupabaseService(supabseTableName);



export async function createAappointment(appointment_time: string, appointment_date: any, prevState: any, formData: FormData) {
    const supabase = createClient();

    // Get the appointment date from the form data
    // const appointmentDate = formData.get("appointment_date") as string;

    console.log(appointment_date)
    // Combine date and time into a single ISO 8601 datetime string
    const appointmentDateTime = new Date(`${appointment_date}T${appointment_time}`).toISOString();

    // Log the combined datetime
    console.log(appointmentDateTime);

    const appointment: Omit<Appointments, 'id' | 'phone_number' | 'patient_name'> = {
        appointment_date: appointmentDateTime,
        patient_id: formData.get("patient_id") as any,
        reminder_sent: formData.get("reminder_sent") as any,
    };

    // Insert the appointment into the database
    const { error } = await supabase
        .from('appointments')
        .insert({
            appointment_date: appointment.appointment_date,
            patient_id: appointment.patient_id,
            reminder_sent: appointment.reminder_sent
        });

    if (error) {
        console.error("Error inserting appointment:", error);
    } else {
        console.log("Appointment inserted successfully");
    }
}

// const dateWithoutTimeZone = (appointment.appointment_date).split('[')[0];
export const getAppointments = async () => {
    return await appointmentCrud.getAllItems<Appointments>();
}


// export async function getAppointments() {
// const supabase = createClient(true);

// const { data } = await supabase.from('appointments')
// .select()
// // .range(start,end)
// .order('created_at', { ascending: false });

// if (!data) return []

// console.log(data)
// return data

// }