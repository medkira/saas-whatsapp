import { Machines } from '@/domain/entities/Machines';
import DashboardMachines from '@/app/dashboard/machines/(components)/dahboard-machines';
import { getMachine, searchMachines } from '@/actions/machines';

export default async function Page({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  let data: Machines[] = [];
  const query = searchParams?.query || '';

  if (query.length === 0) {
    data = await getMachine();
  } else if (query.length !== 0) {
    data = await searchMachines(query);
  } else if (data.length === 0) {
    data = [];
  }

  const machines: Machines[] = data;

  return (
    <div className="flex flex-col items-center justify-center text-white">
      <DashboardMachines machines={machines} />
    </div>
  );
}
