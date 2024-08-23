export type Doctors = {
    id: number;
    name: string;
    email?: string;
    password: string;
    specialty: string;
    local_time_zone: string;

    phone_number: string;
    country_code: string;
    user_id: string;

    reminder_limit: number;
    reminders_used: number;
    is_promo_user: Boolean;
}


