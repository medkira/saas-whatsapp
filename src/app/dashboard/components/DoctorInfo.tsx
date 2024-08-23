// app/dashboard/components/DoctorInfo.tsx
import { Doctors } from "@/domain/entities/Doctors";
import { Card } from "@nextui-org/card";

export default function DoctorInfo({ doctor }: { doctor: Doctors }) {
    return (
        <Card className="shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Doctor Information</h2>
            <p><strong>Name:</strong> {doctor.name}</p>
            <p><strong>Email:</strong> {doctor.email}</p>
            <p><strong>Phone:</strong> {doctor.country_code}{doctor.phone_number}</p>
            <p><strong>Timezone:</strong> {doctor.local_time_zone}</p>
        </Card>
    );
}