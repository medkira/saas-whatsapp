import { getAllPieces, searchPieces } from '@/actions/pieces';
import { Pieces } from '@/domain/entities/Pieces';
import DashboardPatients from './(components)/dashboard-patients';
import { Patients } from '@/domain/entities/Patients';
import { getAllPatients, searchPatients } from '@/actions/patients';

export default async function Page({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  // let data: Patients[] = [];
  const query = searchParams?.query || '';

  // if (query.length === 0) {
  //   data = await getAllPatients();
  // } else if (query.length !== 0) {
  //   // data = await searchPieces(query);
  // } else if (data.length === 0) {
  //   data = [];
  // }

  const data: Patients[] =
    query.length > 0 ? await searchPatients(query) : await getAllPatients();

  return (
    <div className="flex flex-col items-center justify-center text-white">
      <DashboardPatients Patients={data} />
    </div>
  );
}
