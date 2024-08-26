'use server'
import { Doctors } from "@/domain/entities/Doctors";
import SupabaseService from "./abstarct/crud-entitie-supabse";
import { getCurrentDoctorId } from "./doctors";
import { createClient } from "@/utils/supabase/server";

export async function IsPlanReachedLimit(): Promise<boolean> {
    const doctorId = await getCurrentDoctorId();
    const supabseTableName = 'doctors'
    const doctorCrud = new SupabaseService(supabseTableName);
    const doctors = await doctorCrud.getItemsByConditions<Doctors>({ user_id: doctorId });
    const doctor = doctors[0]

    return doctor.reminders_used > doctor.reminder_limit;
}



export async function isPromoUser(): Promise<boolean> {
    const supabase = createClient();

    const { data, error } = await supabase
        .from('doctors')
        .select('*', { count: 'exact' });

    if (error) {
        console.error('Error fetching doctor records:', error.message);
        throw error; // Or handle the error appropriately
    }

    // Check if the number of doctors is less than 100
    if (data.length < 25) {
        return true;
    } else {
        return false;
    }
}
