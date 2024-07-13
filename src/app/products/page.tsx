import { Button } from '@nextui-org/button';
import { Pagination } from '@nextui-org/react';
import Image from 'next/legacy/image';
import { notFound } from 'next/navigation';

import { subtitle, title } from '@/components/primitives';
import { getMachine } from '@/actions/machines';
import { Machines } from '@/domain/entities/Machines';

export default async function PricingPage() {
  const data = await getMachine();
  // console.log(data);

  if (!data || data.length === 0) {
    notFound();
  }

  const machines: Machines[] = data;

  return (
    <div>
      <div className=" flex w-full   flex-col items-center justify-start  gap-1  pt-[5rem]  text-center   sm:gap-9   ">
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
            <div
              key={index}
              className="flex cursor-pointer flex-col
             items-center justify-center gap-1
             rounded-xl bg-white p-5
             shadow-md sm:w-1/3 lg:w-1/4"
            >
              {machine.image_url.length != 0 && (
                <Image
                  priority
                  alt="Background Image"
                  className="transform transition-transform duration-300 hover:scale-110"
                  height={250}
                  //   layout="fixed"
                  //   sizes="(max-width: 900px) 100vw,
                  // (max-width: 70px) 500vw,
                  // 330vw"
                  src={machine.image_url}
                  width={250}
                />
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
              <h2 className={subtitle({ size: 'sm' })}>
                {machine.description}
              </h2>
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
            </div>
          ))}

          {/* <Button
          className="rounded-3xl p-3 px-5 text-xl font-semibold"
          color="primary"
          size="lg"
        >
          Explorer toutes les machines
        </Button> */}
          <Pagination
            isCompact
            showControls
            disableAnimation={false}
            initialPage={1}
            total={10}
          />
        </section>
        {/* <h1 className={title({ color: 'blue' })}>&nbsp;Should You Care?</h1> */}
      </div>
    </div>
  );
}
