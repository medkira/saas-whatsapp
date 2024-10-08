import { Button } from '@nextui-org/button';
import Image from 'next/legacy/image';
import { notFound } from 'next/navigation';
import { Card, Checkbox } from '@nextui-org/react';
import { Metadata } from 'next';

import IconTelephoneFill from '@/components/icons';
import { subtitle, title } from '@/components/primitives';
import CommandeForm from '@/components/machines/commande-form';
import { Machines } from '@/domain/entities/Machines';
import { getAllMachines, getMachineById } from '@/actions/machines';
import { generateProductJsonLd } from '@/utils/jsonLd/generateJsonLd';

// ? Meta Data
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const response = await getMachineById(params.id);

  if (!response) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist',
    };
  }

  return {
    openGraph: {
      title: response.name,
      description: response.description,
      images: response.image_url,
    },
  };
}

// ? SSG
export const revalidate = 10;

export const generateStaticParams = async () => {
  const data: Machines[] = await getAllMachines();

  return data.map((machine) => ({
    id: machine.id.toString(),
  }));
};

export default async function Page({ params }: { params: { id: string } }) {
  let data = await getMachineById(params.id);

  // ? need type(entitie) for the machine

  const machine: Machines = data;

  //? json-ld
  const jsonLd = generateProductJsonLd({
    name: machine.name!,
    description: machine.description || '',
    imageUrl: machine.image_url,
    category: machine.category,
    reference: machine.reference,
    mark: machine.mark!,
    applicable: machine.applicable || '',
    available: machine.available || true,
    price: machine.price,
  });

  if (!data) {
    notFound();
  }

  return (
    <div className="h-[115vh]">
      {/* for structured Data */}
      <section>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          type="application/ld+json"
        />
      </section>

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

      <div className="flex   flex-col items-center  justify-center gap-1 rounded-md bg-default-50  p-5 sm:flex-row">
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
              <CommandeForm machine_ref={machine.reference} />
            </div>
          </section>
          <Card className="min-w-[40vw] rounded-xl bg-default-100/50  p-4 shadow-md">
            <h1 className="mb-4 text-3xl font-bold text-default-700">
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
                  <strong className="pr-2">Disponible :</strong>{' '}
                  {machine.available ? (
                    'Oui'
                  ) : (
                    <p className="text-red-500">Sur Commande</p>
                  )}
                  {machine.available && (
                    <Checkbox
                      className="pl-5"
                      color="success"
                      isSelected={machine.available}
                      // defaultSelected={machine.available}
                    />
                  )}
                </div>
              )}
              <p>
                <strong>Prix :</strong> {machine.price} TND
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
