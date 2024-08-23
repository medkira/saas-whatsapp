// app/dashboard/components/PatientList.tsx
import { Patients } from "@/domain/entities/Patients";
import { Card } from "@nextui-org/card";

export default function PatientList({ patients }: { patients: Patients[] }) {
    return (
        <Card className=" shadow rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {patients.map((patient) => (
                        <tr key={patient.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{patient.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{patient.phone_number}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}