import DashboardCommandes from './(components)/dahboard-commandes';

import { getCommandes } from '@/actions/commandes';
import { Commandes } from '@/domain/entities/Commandes';

export default async function Page({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  let data: Commandes[] = [];
  const query = searchParams?.query || '';

  // if (query.length === 0) {
  //   data = await getCommandes();
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
  data = await getCommandes();

  // const machines: Machines[] = data;

  return (
    <div className="flex flex-col items-center justify-center text-white">
      <DashboardCommandes commandes={data} />
    </div>
  );
}
