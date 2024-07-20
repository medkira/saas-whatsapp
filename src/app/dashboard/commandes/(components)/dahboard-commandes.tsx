'use client';
import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import { Card } from '@nextui-org/card';

import DeletecommandeModel from './delete-commande-model';

import { Commandes } from '@/domain/entities/Commandes';
import DetailsView from './dashboard-details-model';

export default function DashboardCommandes({
  commandes,
}: {
  commandes: Commandes[];
}) {
  const columns = [
    // {
    //   key: 'ref',
    //   label: 'No',
    // },
    {
      key: 'nom',
      label: 'Nom',
    },
    // {
    //   key: 'entreprise',
    //   label: 'ENTREPRISE',
    // },
    {
      key: 'telephone',
      label: 'Tél',
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
          <div className="invisible flex w-0 justify-start  font-semibold sm:visible sm:w-[30%]">
            N° Commande
          </div>
          {columns.map((column) => (
            <div
              key={column.key}
              className="flex w-[30%] justify-start  font-semibold "
            >
              {column.label}
            </div>
          ))}
          <div className="flex w-[30%] justify-start pr-3 font-semibold">
            Ref
          </div>

          <div className="flex w-[30%] justify-end pr-3 font-semibold">
            Actions
          </div>
        </div>
        <Divider />
        {/* <DetaillsModel isOpen={isOpen} onOpenChange={onOpenChange} /> */}

        {commandes.map((commande) => (
          <div
            key={commande.id}
            className="ounded-md dark:hover:bg-gray-700/25 "
          >
            <div
              className="flex w-[100%]
                cursor-pointer flex-row  items-center border-b
                 border-gray-700 py-3 "
            >
              <div className=" invisible flex w-0 justify-start sm:visible sm:w-[30%]">
                {commande.id}
              </div>
              <div className="flex w-[30%] justify-start ">{commande.name}</div>
              {/* 
              <div className="invisible flex w-[30%] justify-start sm:visible">
                {commande.entreprise}
              </div> */}
              <div className="flex w-[30%] justify-start ">
                {commande.phone_number}
              </div>
              <div className="flex w-[30%] justify-start">
                {commande.machine_ref}
              </div>

              <div className="  flex w-[30%]  flex-col items-end justify-end  gap-2   ">
                <DetailsView commande={commande} />
                <DeletecommandeModel commande={commande} />
              </div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}
