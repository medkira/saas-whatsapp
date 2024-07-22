import { Button } from '@nextui-org/button';
import Image from 'next/legacy/image';
import Link from 'next/link';

import { subtitle, title } from '@/components/primitives';
import { Machines } from '@/domain/entities/Machines';

export default function GridMachines({ machines }: { machines: Machines[] }) {
  return (
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
    </section>
  );
}
