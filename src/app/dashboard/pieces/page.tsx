import DashboardPieces from './(components)/dahboard-pieces';

import { getAllPieces, searchPieces } from '@/actions/pieces';
import { Pieces } from '@/domain/entities/Pieces';

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
    data = await searchPieces(query);

    const ref = data.find((piece) => piece.reference === query.toUpperCase());

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
