import { Machines } from '@/domain/entities/Machines';
import DashboardMachines from '@/app/dashboard/machines/(components)/dahboard-machines';
import { getAllMachines, getMachine, searchMachines } from '@/actions/machines';
import CreateAppointment from './(components)/create-appoitment';
import { getAllPatients } from '@/actions/patients';
import { createClient } from '@/utils/supabase/server';

export default async function Page() {
  // let data: Machines[] = [];
  // const query = searchParams?.query || '';

  // if (query.length === 0) {
  //   data = await getAllMachines();
  // } else if (query.length !== 0) {
  //   data = await searchMachines(query);

  //   const ref = data.find(
  //     (machine) => machine.reference === query.toUpperCase(),
  //   );

  //   if (ref) {
  //     data = [ref];
  //   }
  // } else if (data.length === 0) {
  //   data = [];
  // }

  // fetch doctor id 


  // console.log(user?.id)

  // pass doctor doctor id to ge t the doctor patients
  const patients = await getAllPatients();





  return (
    <div className="flex flex-col items-center justify-center text-white">
      <CreateAppointment patients={patients} />
    </div>
  );
}
