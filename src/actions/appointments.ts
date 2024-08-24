'use server'
import { revalidatePath } from "next/cache";

import { Appointments } from "@/domain/entities/Appointments";
import { createClient } from "@/utils/supabase/server";
import SupabaseService from "./abstarct/crud-entitie-supabse";
import { Patients } from "@/domain/entities/Patients";
import { getCurrentDoctorId, getDoctorById } from "./doctors";
import { createAppointmentSchema } from "./server-validation/schema";
import { Doctors } from "@/domain/entities/Doctors";
import { IsPlanReachedLimit } from "./plan";
import { DateTime } from "luxon";


const supabseTableName = 'appointments'

const appointmentCrud = new SupabaseService(supabseTableName);


// The main function to create an appointment
// need to be refectored to follow the abstract crud
// need to be refectored in type returned for state:error & success
export async function createAppointment(
    appointment_time: string,
    appointment_date: string,
    patient: Patients | null,
    prevState: any,
    formData: FormData
) {
    console.log("appointment_time => ", appointment_time);

    const supabase = createClient();

    const doctorId = await getCurrentDoctorId();
    // Validate the fields including the entire patient object
    const validationResult = createAppointmentSchema.safeParse({
        appointment_date,
        appointment_time,
        patient,
        reminder_sent: formData.get("reminder_sent") === "true",
        doctor_id: doctorId,
    });

    if (!validationResult.success) {
        return validationResult.error.flatten().fieldErrors;

    }

    // Check  user Plan
    const isPlanReachedLimit = await IsPlanReachedLimit();
    if (isPlanReachedLimit) {
        return
    }

    // Check  user Plan
    // @ else
    const doctorCrud = new SupabaseService('doctors');
    const doctors = await doctorCrud.getItemsByConditions<Doctors>({ user_id: doctorId });
    const doctor = doctors[0]
    await updateRemindersUsed(doctorId, doctor.reminders_used)
    // ! i need to clean the code!


    // Safely construct the appointmentDateTime now that we know the date and time are valid
    const appointmentDateTime = `${appointment_date}T${appointment_time}`;
    const appointmentDateTimeInUserLocalTime = DateTime.fromISO(appointmentDateTime);

    // console.log("appointmentDateTime =>", appointmentDateTime);
    // console.log("appointmentDateTimeInUserLocalTime =>", appointmentDateTimeInUserLocalTime.toString());
    const appointment = {
        appointment_date: appointmentDateTimeInUserLocalTime.toString(),
        patient_id: patient!.id,
        reminder_sent: formData.get("reminder_sent") === "true",
        phone_number: patient!.phone_number,
        doctor_id: doctorId, // user => doctor , so this not doctor id 
        patient_name: patient?.name,
    };

    // console.log("appointment => ", appointment)

    // console.log("appointment created =>", appointment)
    // Insert the appointment into the database
    const { error, data } = await supabase
        .from('appointments')
        .insert({
            appointment_date: appointment.appointment_date,
            patient_id: appointment.patient_id,
            reminder_sent: appointment.reminder_sent,
            phone_number: appointment.phone_number,
            doctor_id: appointment.doctor_id,
            patient_name: appointment.patient_name,

        }).select();

    // if (error) {
    //    "Error inserting appointment: " + error.message;
    // }

    // Revalidate the path to update the appointments page
    revalidatePath('/dashboard/appointments');


    // Return null if there are no errors
    return data as any; // this need  to be refactored
}




export const getAppointments = async () => {
    const doctorId = await getCurrentDoctorId();
    return await appointmentCrud.getItemsByConditions<Appointments>({ 'doctor_id': doctorId });
}

async function updateRemindersUsed(doctorId: string, currentRemindersUsed: number) {
    const supabase = createClient();

    const { data, error } = await supabase
        .from('doctors')
        .update({ reminders_used: currentRemindersUsed + 1 })
        .eq('user_id', doctorId);

    if (error) {
        throw new Error('Error updating reminder count');
    }

    return data;
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

// const dateWithoutTimeZone = (appointment.appointment_date).split('[')[0];
