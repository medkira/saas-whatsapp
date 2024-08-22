export type Patients = {
    id: number;
    name: string;
    doctor_id: string;
    email?: string;
    localTimeZone: string;

    country_code: string;
    phone_number: string;
}