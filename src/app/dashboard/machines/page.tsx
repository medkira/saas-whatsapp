import { Machines } from '@/domain/entities/Machines';
import DashboardMachines from '@/app/dashboard/machines/(components)/dahboard-machines';
import { getAllMachines, getMachine, searchMachines } from '@/actions/machines';

export default async function Page({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  let data: Machines[] = [];
  const query = searchParams?.query || '';

  if (query.length === 0) {
    data = await getAllMachines();
  } else if (query.length !== 0) {
    data = await searchMachines(query);

    const ref = data.find(
      (machine) => machine.reference === query.toUpperCase(),
    );

    if (ref) {
      data = [ref];
    }
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
