import { Button } from '@nextui-org/button';
import Image from 'next/legacy/image';
import { notFound } from 'next/navigation';
import { Checkbox } from '@nextui-org/react';

import { createClient } from '@/utils/supabase/server';
import IconTelephoneFill from '@/components/icons';
import { subtitle, title } from '@/components/primitives';
import CommandeForm from '@/components/machines/commande-form';
import { Machines } from '@/domain/entities/Machines';
import { getMachine } from '@/actions/machines';

// ? SSG
export const generateStaticParams = async () => {
  // const blogs = getBlogtMetadata('src/Blogs/');
  // const data: Machines[] = await getMachine();

  return [{ params: { id: '93' } }];
};

export default async function Page({ params }: { params: { id: string } }) {
  // console.log(params.id);

  const supabase = createClient();
  let { data } = await supabase
    .from('machines')
    .select('*')
    .eq('id', params.id);
  // console.log(error);

  if (!data || data.length === 0) {
    notFound();
  }

  // ? need type(entitie) for the machine
  const machine: Machines = data[0];

  return (
    <div className="h-[115vh]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="-mb-2 text-xl font-bold text-green-500">
          Commande Par Téléphone
        </h1>
        <Button
          className="my-4 flex w-11/12 items-center justify-center gap-2   "
          color="success"
          variant="bordered"
        >
          <IconTelephoneFill />
          <h1 className="font-bold"> 98 403 153</h1>
        </Button>
      </div>

      <div className="flex   flex-col items-center  justify-center gap-1 rounded-md bg-white p-5 sm:flex-row">
        <div className="flex flex-col  items-center justify-center   ">
          <h1
            className={title({
              size: 'md',
              color: 'blue',
              className: 'mb-1 bg-black sm:text-start',
            })}
          >
            {machine.category}
          </h1>

          <h2
            className={subtitle({
              size: 'sm',
              className: ' font-bold',
            })}
          >
            Ref:{machine.reference}
          </h2>
          <div className="w-[85vw] overflow-hidden sm:h-[60vh] sm:w-[45vw]">
            <Image
              alt="Background Image"
              height={400}
              priority={true}
              //   layout="fixed"
              //   sizes="(max-width: 900px) 100vw,
              // (max-width: 70px) 500vw,
              // 330vw"
              // className="scale-80 "
              src={machine.image_url}
              width={400}
            />
          </div>
        </div>

        <div>
          <section className="min-w-[40vw]">
            <div className="flex flex-col gap-5  p-5">
              <h1 className="text-2xl font-bold text-green-500">
                Ou Commande Online
              </h1>
              <CommandeForm />
            </div>
          </section>
          <section className="min-w-[40vw] rounded-md bg-gray-50 p-4 shadow-md">
            <h1 className="mb-4 text-3xl font-bold text-gray-700">
              D É T A I L S
            </h1>
            <div className="text-start text-lg leading-10">
              {machine.name && (
                <p>
                  <strong>Nom :</strong> {machine.name}
                </p>
              )}
              {machine.description && (
                <p>
                  <strong>Description :</strong> {machine.description}
                </p>
              )}
              {machine.mark && (
                <p>
                  <strong>Marque :</strong> {machine.mark}
                </p>
              )}
              {machine.applicable && (
                <p>
                  <strong>Applicable :</strong> {machine.applicable}
                </p>
              )}
              {typeof machine.available !== 'undefined' && (
                <div className="flex">
                  <p className="pr-5">
                    <strong>Disponible :</strong>{' '}
                    {machine.available ? 'Oui' : 'Non'}
                  </p>

                  <Checkbox
                    color="success"
                    isSelected={machine.available}
                    // defaultSelected={machine.available}
                  />
                </div>
              )}
              <p>
                <strong>Prix :</strong> {machine.price} DNT
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
