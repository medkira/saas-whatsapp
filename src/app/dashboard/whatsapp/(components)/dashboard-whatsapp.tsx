'use client';
import {
  Button,
  Chip,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import { Card } from '@nextui-org/card';

import { Commandes } from '@/domain/entities/Commandes';
import CreateWhatsAppModel from './create-whatsapp-model';
import { Whatsapp } from '@/domain/entities/Whatsapp';
import DesectiveWhatsapp from './desactive-whatsapp-model';
import ActiveWhatsapp from './active-whatsapp-model';

export default function DashboardWhatsApp({
  whatsapps,
}: {
  whatsapps: Whatsapp[];
}) {
  const columns = [
    // {
    //   key: 'ref',
    //   label: 'No',
    // },
    // {
    //   key: 'nom',
    //   label: 'Nom',
    // },
    // {
    //   key: 'entreprise',
    //   label: 'ENTREPRISE',
    // },
    {
      key: 'id',
      label: 'Id',
    },
    {
      key: 'telephone',
      label: 'Tél',
    },
    {
      key: 'status',
      label: 'status',
    },
  ];

  // const normalMachiesList = await getcommande();

  return (
    <div className="  w-[95vw] sm:w-[97%]">
      <div className="flex   items-end  justify-between gap-5 p-3  ">
        {/* <Searchcommande commandes={normalMachiesList} /> */}
        <CreateWhatsAppModel />
      </div>
      <Card className="h-[82vh] overflow-y-auto p-5  sm:h-[80vh]">
        <div className="mb-4 flex flex-row ">
          {/* <div className="invisible flex w-0 justify-start  font-semibold sm:visible sm:w-[30%]">
            N° Commande
          </div> */}
          {columns.map((column) => (
            <div
              key={column.key}
              className="flex w-[30%] justify-start  font-semibold "
            >
              {column.label}
            </div>
          ))}
          {/* <div className="flex w-[30%] justify-start pr-3 font-semibold">
            Ref
          </div> */}

          <div className="flex w-[30%] justify-end pr-3 font-semibold">
            Actions
          </div>
        </div>
        <Divider />
        {/* <DetaillsModel isOpen={isOpen} onOpenChange={onOpenChange} /> */}

        {whatsapps.map((whatsapp) => (
          <div
            key={whatsapp.id}
            className="ounded-md dark:hover:bg-gray-700/25 "
          >
            <div
              className="flex w-[100%]
                cursor-pointer flex-row  items-center border-b
                 border-gray-700 py-3 "
            >
              {/* <div className=" invisible flex w-0 justify-start sm:visible sm:w-[30%]">
                {whatsapp.id}
              </div> */}
              <div className="  flex w-[30%] justify-start sm:visible">
                {whatsapp.id}
              </div>

              {/* <div className="flex w-[30%] justify-start ">{whatsapp.name}</div> */}
              {/* 
              <div className="invisible flex w-[30%] justify-start sm:visible">
                {whatsapp.entreprise}
              </div> */}
              <div className="flex w-[30%] flex-row justify-start gap-2">
                <p> {`${whatsapp.phone_number.slice(0, 3)} `}</p>
                <p> {`${whatsapp.phone_number.slice(3)}`}</p>{' '}
              </div>
              <div className="flex w-[30%] justify-start">
                {whatsapp.is_active ? (
                  <Chip color="success" size="lg">
                    Active
                  </Chip>
                ) : (
                  <Chip color="warning">Not Active</Chip>
                )}
              </div>

              <div className="  flex w-[30%]  flex-col items-end justify-end  gap-2   ">
                {/* <DetailsView commande={commande} /> */}
                {whatsapp.is_active ? (
                  <DesectiveWhatsapp whatsapp={whatsapp} />
                ) : (
                  <ActiveWhatsapp whatsapp={whatsapp} />
                )}
              </div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}
