import { getCommandes } from '@/actions/commandes';
import { Commandes } from '@/domain/entities/Commandes';

export default async function Page({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  let data: Commandes[] = [];
  const query = searchParams?.query || '';

  //   data = await getCommandes();

  return (
    <div className="flex flex-col items-center justify-center text-white">
      Hi
    </div>
  );
}
