'use server'
import { Doctors } from "@/domain/entities/Doctors";
import SupabaseService from "./abstarct/crud-entitie-supabse";
import { getCurrentDoctorId } from "./doctors";

export async function IsPlanReachedLimit(): Promise<boolean> {
    const doctorId = await getCurrentDoctorId();
    const supabseTableName = 'doctors'
    const doctorCrud = new SupabaseService(supabseTableName);
    const doctors = await doctorCrud.getItemsByConditions<Doctors>({ user_id: doctorId });
    const doctor = doctors[0]

    return doctor.reminders_used < doctor.reminder_limit;
}