'use server'
import SupabaseService from "./abstarct/crud-entitie-supabse";

import { Patients } from "@/domain/entities/Patients";

const supabseTableName = 'patients'

const patientCrud = new SupabaseService(supabseTableName);


export const getAllPatients = async () => {
    return await patientCrud.getAllItems<Patients>();
};

export const searchPatients = async (search:string) => {
    return await patientCrud.searchItems<Patients>(search);
}

const props = [
    // "id",
    "phone_number",
    "name",
    // "doctor_id",
    // "email"
    ]

    

export const createPatient = 
    async (prevState: any, formData: FormData) => {
    await patientCrud.createItem<Patients>(prevState, formData, props)
}