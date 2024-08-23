import { Card } from "@nextui-org/card";

// app/dashboard/components/DashboardStats.tsx
export default function DashboardStats({
    appointmentsCount,
    patientsCount
}: {
    appointmentsCount: number;
    patientsCount: number;
}) {
    return (
        <Card className=" shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Dashboard Stats</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="text-gray-600">Total Appointments</p>
                    <p className="text-2xl font-bold">{appointmentsCount}</p>
                </div>
                <div>
                    <p className="text-gray-600">Total Patients</p>
                    <p className="text-2xl font-bold">{patientsCount}</p>
                </div>
            </div>
        </Card>
    );
}