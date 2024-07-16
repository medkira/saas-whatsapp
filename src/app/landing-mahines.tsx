import { notFound } from 'next/navigation';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { Button } from '@nextui-org/button';

import { Machines } from '@/domain/entities/Machines';
import { subtitle, title } from '@/components/primitives';
import { getMachine } from '@/actions/machines';
import { createClientB } from '@/utils/supabase/server';

export default async function LandingMachines() {
  // const data = await getMachine();
  // // console.log(data);

  const supabase = createClientB();
  let { data } = await supabase.from('machines').select('*');

  if (!data || data.length === 0) {
    notFound();
  }
  const machines: Machines[] = data;

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
        {machines.map((machine, index) => (
          <Link
            key={index}
            className="flex cursor-pointer  flex-col  items-center
              justify-center gap-1 rounded-xl
              bg-white p-5 shadow-md
              sm:max-h-[75vh] sm:min-h-[70vh] sm:w-1/3 lg:w-1/4"
            href={`/machines/${machine.id}`}
          >
            {machine.image_url.length != 0 && (
              <div className="transform transition-transform duration-300 hover:scale-110">
                <Image
                  priority
                  alt="Background Image"
                  className=""
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
      </section>
      <Button
        as={Link}
        className="rounded-3xl p-3 px-5 text-xl font-semibold"
        color="primary"
        href="/products"
        size="lg"
      >
        Explorer toutes les machines
      </Button>
      {/* <h1 className={title({ color: 'blue' })}>&nbsp;Should You Care?</h1> */}
    </div>
  );
}
