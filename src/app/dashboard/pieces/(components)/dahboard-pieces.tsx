import { Divider } from '@nextui-org/react';
import { Card } from '@nextui-org/card';

import CreatePieceModel from './create-piece-model';
import ImageView from './dashboard-image-model';
import UpdatePiecesModel from './update-piece-model';
import DeletePieceModel from './delete-piece-model';
import SearchPieces from './search-pieces';

import { getAllPieces } from '@/actions/pieces';
import { Pieces } from '@/domain/entities/Pieces';

export default async function DashboardPieces({
  Pieces,
}: {
  Pieces: Pieces[];
}) {
  const columns = [
    // {
    //   key: 'category',
    //   label: 'CATEGORY',
    // },
    {
      key: 'ref',
      label: 'REF',
    },
    // {
    //   key: 'status',
    //   label: 'STATUS',
    // },
    {
      key: 'prix',
      label: 'PRIX',
    },

    // {
    //   key: 'image',
    //   label: 'IMAGE',
    // },
  ];

  const normalMachiesList = await getAllPieces();

  return (
    <div className="  w-[95vw] sm:w-[97%]">
      <div className="flex   items-end  justify-between gap-5 p-3  ">
        <SearchPieces pieces={normalMachiesList} />
        <CreatePieceModel />
      </div>
      <Card className="h-[82vh] overflow-y-auto p-5  sm:h-[80vh]">
        <div
          className="mb-4 flex flex-row items-center
           justify-between gap-4 "
        >
          {columns.map((column) => (
            <div
              key={column.key}
              className="flex w-1/3 justify-start font-semibold "
            >
              {column.label}
            </div>
          ))}

          <div className="invisible flex w-0 justify-center font-semibold sm:visible sm:w-1/3 ">
            IMAGE
          </div>
          <div className="flex w-1/2 justify-end pr-3 font-semibold">
            Actions
          </div>
        </div>
        <Divider />

        {Pieces.map((pieces) => (
          <div
            key={pieces.id}
            className="rounded-md dark:hover:bg-gray-700/25 "
          >
            <div
              className="flex cursor-pointer flex-row
                items-center justify-between gap-4 border-b
                 border-gray-700 py-3 "
            >
              {/* <div className="flex w-1/3 justify-start">{pieces.category}</div> */}
              <div className="flex w-1/3 justify-start ">
                {pieces.reference}
              </div>

              <div className="flex w-1/3 justify-start">{pieces.price}</div>
              <div className="invisible flex  w-0 justify-center  sm:visible sm:w-1/3 ">
                {/* Open Image Model */}
                <ImageView key={pieces.id} pieces={pieces} />
                {/* Open Image Model */}
              </div>
              <div className="  flex w-3/6 flex-col items-end  justify-end gap-2 lg:flex-row  ">
                <UpdatePiecesModel piece={pieces} />
                <DeletePieceModel piece={pieces} />
                <div className="  sm:invisible sm:h-0 sm:w-0 ">
                  {/* Open Image Model */}
                  <ImageView key={pieces.id} pieces={pieces} />
                  {/* Open Image Model */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}
