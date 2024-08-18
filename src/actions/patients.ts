'use server'
import { createClient } from "@/utils/supabase/server";
import SupabaseService from "./abstarct/crud-entitie-supabse";

import { Patients } from "@/domain/entities/Patients";

const supabseTableName = 'patients'

const patientCrud = new SupabaseService(supabseTableName);


// export const getAllPatientsByDoctorId = async (doctor_id: string): Promise<Patients[]> => {
//     return await patientCrud.getItemsByConditions<Patients>({ 'doctor_id': doctor_id });
// }

export const getAllPatients = async (): Promise<Patients[]> => {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    return await patientCrud.getItemsByConditions<Patients>({ 'doctor_id': user!.id });
};

export const searchPatients = async (search: string) => {
    return await patientCrud.searchItems<Patients>(search);
}

const props = [
    // "id",
    "phone_number",
    "name",
    "doctor_id",
    // "email"
]


export const createPatient =
    async (prevState: any, formData: FormData) => {

        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();

        formData.append('doctor_id', user?.id as string)
        await patientCrud.createItem<Patients>(prevState, formData, props)
    }


export const deletePatient =
    async (id: number, prevState: any, formData: FormData) => {
        await patientCrud.deleteItem(id, prevState, formData,)
    }

export const updatePatient =
    async (id: number, prevState: any, formData: FormData) => {
        await patientCrud.updateItem(id, prevState, formData, props)

    }

