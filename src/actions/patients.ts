'use server'
import { createClient } from "@/utils/supabase/server";
import SupabaseService from "./abstarct/crud-entitie-supabse";

import { Patients } from "@/domain/entities/Patients";
import { getCurrentDoctorId, getDoctorById } from "./doctors";
import { Doctors } from "@/domain/entities/Doctors";

const supabseTableName = 'patients';

const patientCrud = new SupabaseService(supabseTableName);




// export const getAllPatientsByDoctorId = async (doctor_id: string): Promise<Patients[]> => {
//     return await patientCrud.getItemsByConditions<Patients>({ 'doctor_id': doctor_id });
// }

export const getAllPatients = async (): Promise<Patients[]> => {
    const doctorId = await getCurrentDoctorId();

    return await patientCrud.getItemsByConditions<Patients>({ 'doctor_id': doctorId });
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

        formData.append('doctor_id', user?.id as string);
        const phonenumber = formData.get('phone_number')
        formData.delete('phone_number');

        // this the curent user xD , the current user => doctor
        // sp this is get current user Id, bcs user cold be doctor , patient etc....
        const id = await getCurrentDoctorId();


        const supabseTableName = 'doctors'

        const doctorCrud = new SupabaseService(supabseTableName);

        const doctor = await doctorCrud.getItemsByConditions<Doctors>({ user_id: id });
        console.log(doctor);
        formData.append('phone_number', `${doctor[0].country_code}${phonenumber}`)
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
