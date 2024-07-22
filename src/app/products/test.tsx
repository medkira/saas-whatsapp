import { Button } from '@nextui-org/button';
import Image from 'next/legacy/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';

import PaginationProducts from './(components)/pagination';

import { subtitle, title } from '@/components/primitives';
import {
  filterMachines,
  getMachine,
  getMachinesPages,
  searchMachines,
} from '@/actions/machines';
import { Machines } from '@/domain/entities/Machines';

// // ? SSG
export const revalidate = 10;

export const generateStaticParams = async () => {
  let totalPages = await getMachinesPages();

  function createArrayPages(n: number) {
    return Array.from({ length: n }, (_, i) => ({ page: i + 1 }));
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
  let data: Machines[] = [];
  // const query = searchParams?.query || '';
  // const categories = searchParams?.categories || '';
  // const marks = searchParams?.marks || '';
  const page = params?.page || '1';

  // ? for getting all the maching
  // if (query.length === 0) {
  //   data = await getMachine(page);
  // } else if (query.length !== 0) {
  //   // ? for search
  //   data = await searchMachines(query);
  // } else if (data.length === 0) {
  //   data = [];
  // }

  function stringToArray(str: string) {
    const stringArray = str.split(',');

    const trimmedArray = stringArray.map((element) => element.trim());

    return trimmedArray;
  }

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

  const machines: Machines[] = data;

  let totalPages = await getMachinesPages();

  // if (marks.length !== 0 || categories.length !== 0 || query.length !== 0) {
  //   totalPages = 1;
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
      <section className="flex flex-wrap items-center justify-center gap-x-5 gap-y-14 p-6 ">
        {machines.map((machine, index) => (
          <Link
            key={index}
            className="flex max-w-[85vw]  cursor-pointer
            flex-col
            items-center justify-center gap-1
            rounded-xl bg-default-50  p-5
            shadow-md sm:max-h-[75vh]  sm:min-h-[70vh] sm:w-1/2  sm:min-w-[20vw]  lg:w-[19.5rem]"
            href={`/machines/${machine.id}`}
          >
            {machine.image_url.length != 0 && (
              <div className="transform transition-transform duration-300 hover:scale-110">
                <Image
                  priority
                  alt="Background Image"
                  className=" overflow-visible "
                  height={250}
                  //   layout="fixed"
                  //   sizes="(max-width: 900px) 100vw,
                  // (max-width: 70px) 500vw,
                  // 330vw"
                  quality={100}
                  src={machine.image_url}
                  width={250}
                />
              </div>
            )}

            <h1
              className={title({
                size: 'sm',
                color: 'blue',
                className: 'mb-1',
              })}
            >
              {machine.name}
            </h1>
            <h2
              className={subtitle({ size: 'sm' })}
            >{`Réf:${machine.reference}`}</h2>
            <div className="flex gap-3 p-5 sm:flex-col md:flex-row">
              <Button
                className="rounded-3xl p-3 px-5 text-xl font-semibold"
                color="primary"
                size="lg"
              >
                Commander
              </Button>
              <Button
                className="rounded-3xl p-3 px-5 text-xl font-semibold"
                color="primary"
                size="lg"
                variant="bordered"
              >
                Détails
              </Button>
            </div>
          </Link>
        ))}

        {/* <Button
          className="rounded-3xl p-3 px-5 text-xl font-semibold"
          color="primary"
          size="lg"
        >
          Explorer toutes les machines
        </Button> */}
      </section>
      <PaginationProducts totalPages={totalPages} />

      {/* <h1 className={title({ color: 'blue' })}>&nbsp;Should You Care?</h1> */}
    </div>
  );
}
