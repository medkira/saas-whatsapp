import { Button } from '@nextui-org/button';
import Image from 'next/legacy/image';
import { notFound } from 'next/navigation';
import { Card, Checkbox } from '@nextui-org/react';

import IconTelephoneFill from '@/components/icons';
import { subtitle, title } from '@/components/primitives';
import { getAllPieces } from '@/actions/pieces';
import { Pieces } from '@/domain/entities/Pieces';
import CommandeForm from '@/components/machines/commande-form';

// ? SSG
export const revalidate = 10;

export const generateStaticParams = async () => {
  const data: Pieces[] = await getAllPieces();

  return data.map((piece) => ({
    id: piece.id.toString(),
  }));
  // return [{ id: '173' }];
};

export default async function Page({ params }: { params: { id: string } }) {
  // console.log(params.id);

  // getpiece().then((pieces) => {
  //   const res = pieces.map((piece) => ({
  //     id: piece.id.toString(),
  //   }));

  //   console.log(res);
  // });

  // const supabase = createClient(true);
  // let { data } = await supabase.from('pieces').select('*').eq('id', params.id);
  const data: Pieces[] = await getAllPieces();

  if (!data || data.length === 0) {
    notFound();
  }

  // ? need type(entitie) for the piece
  const piece: Pieces = data[0];

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

      <div className="flex   flex-col items-center  justify-center gap-1 rounded-md bg-default-50  p-5 sm:flex-row">
        <div className="flex flex-col  items-center justify-center   ">
          <h1
            className={title({
              size: 'md',
              color: 'blue',
              className: 'mb-1 bg-black sm:text-start',
            })}
          >
            {piece.name}
          </h1>

          <h2
            className={subtitle({
              size: 'sm',
              className: ' font-bold',
            })}
          >
            Ref:{piece.reference}
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
              src={piece.image_url}
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
              <CommandeForm machine_ref={piece.reference} />
            </div>
          </section>
          <Card className="min-w-[40vw] rounded-xl bg-default-100/50  p-4 shadow-md">
            <h1 className="mb-4 text-3xl font-bold text-default-700">
              D É T A I L S
            </h1>
            <div className="text-start text-lg leading-10">
              {piece.name && (
                <p>
                  <strong>Nom :</strong> {piece.name}
                </p>
              )}
              {piece.description && (
                <p>
                  <strong>Description :</strong> {piece.description}
                </p>
              )}
              {piece.mark && (
                <p>
                  <strong>Marque :</strong> {piece.mark}
                </p>
              )}
              {/* {piece.applicable && (
                <p>
                  <strong>Applicable :</strong> {piece.applicable}
                </p>
              )} */}
              {typeof piece.available !== 'undefined' && (
                <div className="flex">
                  <strong className="pr-2">Disponible :</strong>{' '}
                  {piece.available ? (
                    'Oui'
                  ) : (
                    <p className="text-red-500">Sur Commande</p>
                  )}
                  {piece.available && (
                    <Checkbox
                      className="pl-5"
                      color="success"
                      isSelected={piece.available}
                      // defaultSelected={piece.available}
                    />
                  )}
                </div>
              )}
              <p>
                <strong>Prix :</strong> {piece.price} TND
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
