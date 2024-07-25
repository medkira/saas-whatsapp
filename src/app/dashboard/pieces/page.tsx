import { Machines } from '@/domain/entities/Machines';
import DashboardMachines from '@/app/dashboard/machines/(components)/dahboard-machines';
import { getAllMachines, getMachine, searchMachines } from '@/actions/machines';
import { getAllPieces } from '@/actions/pieces';
import { Pieces } from '@/domain/entities/Pieces';
import DashboardPieces from './(components)/dahboard-pieces';

export default async function Page({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  let data: Pieces[] = [];
  const query = searchParams?.query || '';

  if (query.length === 0) {
    data = await getAllPieces();
  } else if (query.length !== 0) {
    data = await searchMachines(query); //! chnage !

    const ref = data.find(
      (machine) => machine.reference === query.toUpperCase(),
    );

    if (ref) {
      data = [ref];
    }
  } else if (data.length === 0) {
    data = [];
  }

  const Pieces: Pieces[] = data;

  return (
    <div className="flex flex-col items-center justify-center text-white">
      <DashboardPieces Pieces={Pieces} />
    </div>
  );
}
