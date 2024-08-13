export type Appointments = {
    id: number;
    patient_id: number;
    patient_name: string;
    doctor_id?: string; // ! 
    appointment_date: string;
    reminder_sent: boolean;
    phone_number: string
}