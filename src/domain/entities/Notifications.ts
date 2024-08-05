export type Notification = {
    id: number;
    message: string;
    created_at: Date;
    patient_id: number;
    appointment_id: string;
    doctor_id:string;
}