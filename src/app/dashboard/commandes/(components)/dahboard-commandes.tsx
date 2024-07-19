import { Divider } from '@nextui-org/react';
import { Card } from '@nextui-org/card';

import { Commandes } from '@/domain/entities/Commandes';
import DeletecommandeModel from './delete-commande-model';

export default async function DashboardCommandes({
  commandes,
}: {
  commandes: Commandes[];
}) {
  const columns = [
    {
      key: 'ref',
      label: 'Ref',
    },
    {
      key: 'nom',
      label: 'NOM',
    },
    // {
    //   key: 'entreprise',
    //   label: 'ENTREPRISE',
    // },
    {
      key: 'telephone',
      label: 'TLEPHONE',
    },
  ];

  // const normalMachiesList = await getcommande();

  return (
    <div className="  w-[95vw] sm:w-[97%]">
      <div className="flex   items-end  justify-between gap-5 p-3  ">
        {/* <Searchcommande commandes={normalMachiesList} /> */}
        {/* <CreatecommandeModel /> */}
      </div>
      <Card className="h-[82vh] overflow-y-auto p-5  sm:h-[80vh]">
        <div className="mb-4 flex flex-row ">
          {columns.map((column) => (
            <div
              key={column.key}
              className="bg-red flex w-[60%] justify-start  font-semibold "
            >
              {column.label}
            </div>
          ))}
          {/* <div className="invisible flex w-[60%] justify-start pr-3 font-semibold sm:visible">
            ENTREPRISE
          </div> */}
          <div className="flex w-[60%] justify-end pr-3 font-semibold">
            Actions
          </div>
        </div>
        <Divider />

        {commandes.map((commande) => (
          <div
            key={commande.id}
            className="ounded-md dark:hover:bg-gray-700/25 "
          >
            <div
              className="flex cursor-pointer flex-row
                items-center  border-b
                 border-gray-700 py-3 "
            >
              <div className="flex w-[60%] justify-start">{commande.id}</div>
              <div className="flex w-[60%] justify-start ">{commande.name}</div>
              {/* 
              <div className="invisible flex w-[60%] justify-start sm:visible">
                {commande.entreprise}
              </div> */}
              <div className="flex w-[60%] justify-start ">
                {commande.phone_number}
              </div>

              <div className="  flex w-[60%] flex-col items-end  justify-end gap-2 lg:flex-row  ">
                <DeletecommandeModel commande={commande} />
              </div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}
