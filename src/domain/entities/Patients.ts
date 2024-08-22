export type Patients = {
    id: number;
    name: string;
    doctor_id: string;
    email?: string;
    local_time_zone: string;

    country_code: string;
    phone_number: string;
}