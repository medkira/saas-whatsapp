import { notFound, redirect } from 'next/navigation';

import PaginationProducts from '../../(components)/pagination';
import GridMachines from '../../(components)/grid-machines';

import { title } from '@/components/primitives';
import { filterMachines, searchMachines } from '@/actions/machines';
import { Machines } from '@/domain/entities/Machines';
import NoData from '../../(components)/no-data';

// // ? SSG
// export const revalidate = 10;

// export const generateStaticParams = async () => {
//   let totalPages = await getMachinesPages();

//   function createArrayPages(n: number) {
//     return Array.from({ length: n }, (_, i) => ({ page: i + 1 }));
//   }

//   return createArrayPages(totalPages);
// };

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    // page?: string;
    categories?: any;
    marks?: any;
  };
}) {
  // const data = await getMachineNo();
  // console.log(data);
  let data: Machines[] = [];
  const query = searchParams?.query || '';
  const categories = searchParams?.categories || '';
  const marks = searchParams?.marks || '';
  // const page = searchParams?.page || '1';

  if (query.length !== 0) {
    // ? for search
    data = await searchMachines(query);
  } else if (data.length === 0) {
    data = [];
  }

  function stringToArray(str: string) {
    const stringArray = str.split(',');

    const trimmedArray = stringArray.map((element) => element.trim());

    return trimmedArray;
  }

  // ? for filtering
  if (marks.length !== 0 || categories.length !== 0) {
    // console.log('marks', stringToArray(marks));
    // console.log('categories', stringToArray(categories));
    data = await filterMachines({
      categories: stringToArray(categories),
      marks: stringToArray(marks),
    });
  } else if (data.length === 0) {
    redirect('/products/machines/1'); //???
  }

  // if (!data || data.length === 0) {
  //   notFound();
  // }

  const machines: Machines[] = data;

  // let totalPages = await getMachinesPages();

  // if (marks.length !== 0 || categories.length !== 0 || query.length !== 0) {
  const totalPages = 1;
  // }

  return (
    <div className=" flex w-full   flex-col items-center justify-start  gap-1  pt-[1rem]  text-center   sm:gap-9   ">
      <section className="flex flex-col items-center justify-start">
        <div className="   pb-2 sm:w-full">
          <h1 className={title({ size: 'md', class: 'mb-3  mr-2' })}>
            Découvrez Nos Machines à
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
      {data.length !== 0 ? (
        <>
          <GridMachines machines={machines} />
          <PaginationProducts basePath="machines" totalPages={totalPages} />
        </>
      ) : (
        <NoData />
      )}

      {/* <h1 className={title({ color: 'blue' })}>&nbsp;Should You Care?</h1> */}
    </div>
  );
}
