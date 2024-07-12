import { Button } from '@nextui-org/button';
import { Pagination } from '@nextui-org/react';

import machine1 from '/public/images/machines/A50.png';

import Image from 'next/legacy/image';

import { subtitle, title } from '@/components/primitives';

export default function PricingPage() {
  return (
    <div>
      <Section1 />
    </div>
  );
}

const Section1 = () => {
  const staticImages = [
    machine1,
    machine1,
    machine1,
    machine1,
    machine1,
    machine1,
  ];

  return (
    <div className=" flex w-full   flex-col items-center justify-start  gap-1 overflow-hidden pt-[5rem]  text-center   sm:gap-9   ">
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

      <section className="flex flex-wrap items-center justify-center gap-x-16 gap-y-14 p-6 ">
        {staticImages.map((image, index) => (
          <div
            key={index}
            className="flex cursor-pointer flex-col items-center justify-center gap-1 rounded-md bg-white p-5 sm:w-1/3 lg:w-1/4"
          >
            <Image
              priority
              alt="Background Image"
              className="transform transition-transform duration-300 hover:scale-125"
              //   height={110}
              //   layout="fixed"
              //   sizes="(max-width: 900px) 100vw,
              // (max-width: 70px) 500vw,
              // 330vw"
              src={image}
              //   width={110}
            />
            <h1
              className={title({
                size: 'sm',
                color: 'blue',
                className: 'mb-1',
              })}
            >
              Sewing
            </h1>
            <h2 className={subtitle({ size: 'sm' })}>Ref:AT1002-190B</h2>
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
  );
};
