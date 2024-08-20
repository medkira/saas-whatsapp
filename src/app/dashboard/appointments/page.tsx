import { Machines } from '@/domain/entities/Machines';
import DashboardMachines from '@/app/dashboard/machines/(components)/dahboard-machines';
import { getAllMachines, getMachine, searchMachines } from '@/actions/machines';
import CreateAppointment from './(components)/create-appoitment';
import { getAllPatients } from '@/actions/patients';
import { createClient } from '@/utils/supabase/server';
import { getAppointments } from '@/actions/appointments';

export default async function Page() {
  // pass doctor doctor id to get the doctor patients
  // update by default the id is passed
  const patients = await getAllPatients();

  const appointments = await getAppointments();




  return (
    <div className="flex flex-col items-center justify-center text-white">
      <CreateAppointment patients={patients} appointments={appointments} />
    </div>
  );
}
