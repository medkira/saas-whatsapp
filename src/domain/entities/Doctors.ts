export type Doctors = {
    id: number;
    name: string;
    email?: string;
    password: string;
    specialty: string;
    local_time_zone: string;

    phone_number: string;
    country_code: string;
}