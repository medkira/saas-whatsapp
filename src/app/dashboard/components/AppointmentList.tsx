// app/dashboard/components/AppointmentList.tsx
import { Appointments } from "@/domain/entities/Appointments";
import { Card } from "@nextui-org/card";

export default function AppointmentList({ appointments }: { appointments: Appointments[] }) {
    return (
        <Card className=" shadow rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                </thead>
                <tbody className=" divide-y divide-gray-200">
                    {appointments.map((appointment) => (
                        <tr key={appointment.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{new Date(appointment.appointment_date).toLocaleString()}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{appointment.patient_name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${appointment.reminder_sent ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                    {appointment.reminder_sent ? 'Reminder Sent' : 'Pending'}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}