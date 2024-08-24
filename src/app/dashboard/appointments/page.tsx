import { Machines } from '@/domain/entities/Machines';
import DashboardMachines from '@/app/dashboard/machines/(components)/dahboard-machines';
import { getAllMachines, getMachine, searchMachines } from '@/actions/machines';
import CreateAppointment from './(components)/create-appoitment';
import { getAllPatients } from '@/actions/patients';
import { createClient } from '@/utils/supabase/server';
import { getAppointments } from '@/actions/appointments';
import { IsPlanReachedLimit } from '@/actions/plan';
import { UsageLimitWrapper } from './(components)/usage-limit-wrapper';
import SupabaseService from '@/actions/abstarct/crud-entitie-supabse';
import { Doctors } from '@/domain/entities/Doctors';
import { getCurrentUserId } from '@/actions/doctors';

export default async function Page() {
  // pass doctor doctor id to get the doctor patients
  // update by default the id is passed
  const patients = await getAllPatients();

  const appointments = await getAppointments();

  const isWithinLimit = await IsPlanReachedLimit();



  const supabseTableName = 'doctors'
  const doctorCrud = new SupabaseService(supabseTableName);
  const doctorId = await getCurrentUserId();
  const doctor = await doctorCrud.getItemsByConditions<Doctors>({ user_id: doctorId || '' });
  const isPromoUserOrNot = doctor[0].is_promo_user




  return (
    <div className="flex flex-col items-center justify-center pt-24 p-3 text-white">
      <UsageLimitWrapper>
        <CreateAppointment isPlanReachedLimit={isWithinLimit && isPromoUserOrNot} patients={patients} appointments={appointments} />
      </UsageLimitWrapper>
    </div>
  );
}
