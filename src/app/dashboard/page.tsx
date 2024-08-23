// app/dashboard/page.tsx
import { getAppointments } from '@/actions/appointments';
import { getCurrentDoctorId, getDoctorById } from '@/actions/doctors';
import { getAllPatients } from '@/actions/patients';
import { Suspense } from 'react';
import AppointmentList from './components/AppointmentList';
import DashboardStats from './components/DashboardStats';
import DoctorInfo from './components/DoctorInfo';
import PatientList from './components/PatientList';
import SupabaseService from '@/actions/abstarct/crud-entitie-supabse';
import { Doctors } from '@/domain/entities/Doctors';


export default async function DashboardHome() {
  const doctorId = await getCurrentDoctorId();
  const supabseTableName = 'doctors'
  const doctorCrud = new SupabaseService(supabseTableName);
  const doctor = await doctorCrud.getItemsByConditions<Doctors>({ user_id: doctorId });
  const appointments = await getAppointments();
  const patients = await getAllPatients();

  return (
    <div className="container mx-auto px-6 py-8 pt-20 h-[100vh] overflow-y-auto">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Suspense fallback={<div>Loading doctor info...</div>}>
          <DoctorInfo doctor={doctor[0]} />
        </Suspense>

        <Suspense fallback={<div>Loading stats...</div>}>
          <DashboardStats
            appointmentsCount={appointments.length}
            patientsCount={patients.length}
          />
        </Suspense>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Recent Appointments</h2>
        <Suspense fallback={<div>Loading appointments...</div>}>
          <AppointmentList appointments={appointments.slice(0, 5)} />
        </Suspense>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Recent Patients</h2>
        <Suspense fallback={<div>Loading patients...</div>}>
          <PatientList patients={patients.slice(0, 5)} />
        </Suspense>
      </div>
    </div>
  );
}