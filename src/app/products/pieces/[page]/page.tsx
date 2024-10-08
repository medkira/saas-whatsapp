import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import PaginationProducts from '../../(components)/pagination';
import GridPieces from '../../(components)/grid-pieces';

import { title } from '@/components/primitives';
import { getPieces, getPiecesPages } from '@/actions/pieces';
import { Pieces } from '@/domain/entities/Pieces';

// ? SSG
export const revalidate = 10;

export const generateStaticParams = async () => {
  let totalPages = await getPiecesPages();

  function createArrayPages(n: number) {
    return Array.from({ length: n }, (_, i) => ({ page: (i + 1).toString() }));
  }

  return createArrayPages(totalPages);
};

export default async function ProductsPage({
  params,
}: {
  params?: {
    page?: string;
  };
}) {
  // const data = await getMachineNo();
  // console.log(data);
  let data: Pieces[] = [];
  // const query = searchParams?.query || '';
  // const categories = searchParams?.categories || '';
  // const marks = searchParams?.marks || '';
  const page = params?.page || '1';
  // console.log('page', page);

  data = await getPieces(page);
  // ? for getting all the maching
  // if (query.length === 0) {
  // } else if (query.length !== 0) {
  //   // ? for search
  //   data = await searchMachines(query);
  // } else if (data.length === 0) {
  //   data = [];
  // }

  // function stringToArray(str: string) {
  //   const stringArray = str.split(',');

  //   const trimmedArray = stringArray.map((element) => element.trim());

  //   return trimmedArray;
  // }

  // ? for filtering
  // if (marks.length !== 0 || categories.length !== 0) {
  //   // console.log('marks', stringToArray(marks));
  //   // console.log('categories', stringToArray(categories));
  //   data = await filterMachines({
  //     categories: stringToArray(categories),
  //     marks: stringToArray(marks),
  //   });
  // }
  if (!data || data.length === 0) {
    notFound();
  }

  const piece: Pieces[] = data;

  let totalPages = await getPiecesPages();

  // if (marks.length !== 0 || categories.length !== 0 || query.length !== 0) {
  //   totalPages = 1;
  // }

  return (
    <div className=" flex w-full   flex-col items-center justify-start  gap-1  pt-[1rem]  text-center   sm:gap-9   ">
      <section className="flex flex-col items-center justify-start">
        <div className="   pb-2 sm:w-full">
          <h1 className={title({ size: 'md', class: 'mb-3  mr-2' })}>
            Découvrez Nos pièce pour le machine
          </h1>
          <span
            className={title({
              color: 'blue',
              size: 'md',
              className: 'bg-white',
            })}
          >
            Coudre et à Broder
          </span>
        </div>
      </section>
      <GridPieces pieces={piece} />
      <Suspense>
        <PaginationProducts basePath="pieces" totalPages={totalPages} />
      </Suspense>

      {/* <h1 className={title({ color: 'blue' })}>&nbsp;Should You Care?</h1> */}
    </div>
  );
}
