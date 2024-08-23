import { Machines } from '@/domain/entities/Machines';
import DashboardMachines from '@/app/dashboard/machines/(components)/dahboard-machines';
import { getAllMachines, getMachine, searchMachines } from '@/actions/machines';
import CreateAppointment from './(components)/create-appoitment';
import { getAllPatients } from '@/actions/patients';
import { createClient } from '@/utils/supabase/server';
import { getAppointments } from '@/actions/appointments';
import { IsPlanReachedLimit } from '@/actions/plan';
import { UsageLimitWrapper } from './(components)/usage-limit-wrapper';

export default async function Page() {
  // pass doctor doctor id to get the doctor patients
  // update by default the id is passed
  const patients = await getAllPatients();

  const appointments = await getAppointments();

  const isWithinLimit = await IsPlanReachedLimit();


  return (
    <div className="flex flex-col items-center justify-center pt-24 p-3 text-white">
      <UsageLimitWrapper>
        <CreateAppointment isPlanReachedLimit={isWithinLimit} patients={patients} appointments={appointments} />
      </UsageLimitWrapper>
    </div>
  );
}
