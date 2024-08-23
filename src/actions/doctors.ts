"use server"
import { Doctors } from "@/domain/entities/Doctors";
import { createClient } from "@/utils/supabase/server";
import { redirect } from 'next/navigation'
import SupabaseService from "./abstarct/crud-entitie-supabse";




const supabseTableName = 'doctors'

const doctorCrud = new SupabaseService(supabseTableName);


// Utility function to get the current user ID
export const getCurrentUserId = async (): Promise<string | null> => {
    const supabase = createClient();
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) {
        console.error("Failed to retrieve user:", error?.message || "No user found");
        return null;  // or throw an error, depending on your use case
    }

    return user.id;
}

// Function to get the current doctor's ID
export const getCurrentDoctorId = async (): Promise<string> => {
    const supabase = createClient();
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user || !user.id) {
        // throw new Error("Doctor ID not found or user not authenticated");
        redirect("/")
    }

    return user.id;
};




export async function createDoctor(doctor: Pick<Doctors, 'user_id' | 'email' | 'name' | 'local_time_zone' | 'country_code' | 'phone_number'>) {
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


export async function getDoctorById(id: string) {
    const doctor = await doctorCrud.getItemsByConditions<Doctors>({ id: id });

    return doctor[0];
}