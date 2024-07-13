'use client';
import {
  Modal,
  ModalContent,
  Divider,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';
import { Card } from '@nextui-org/card';
import Link from 'next/link';
import Image from 'next/legacy/image';

import CreateMachineModel from './create-machine-model';
import UpdateMachineModel from './update-machine-model';
import DeleteMachineModel from './delete-machine-model';

import { Machines } from '@/domain/entities/Machines';
import { EyeIcon } from '@/components/dashboard/icons/table/eye-icon';
import ImageView from './dashboard-image-model';

export default function DashboardMachines({
  machines,
}: {
  machines: Machines[];
}) {
  const columns = [
    {
      key: 'category',
      label: 'NOM',
    },
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

  return (
    <div className=" flex w-full flex-col  items-center ">
      <div className="max-w-6xlxl mt-10 h-[90vh]  w-full min-w-fit p-5">
        <div className="flex   items-end  justify-end gap-5 p-5  pt-5 ">
          <CreateMachineModel />
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

          {machines.map((machine) => (
            <div
              key={machine.id}
              className="
               rounded-md dark:hover:bg-gray-700/25 "
            >
              <div
                className="flex cursor-pointer flex-row
                items-center justify-between gap-4 border-b
                 border-gray-700 py-3 "
              >
                <div className="flex w-1/3 justify-start">
                  {machine.category}
                </div>
                <div className="flex w-1/3 justify-start ">
                  {machine.reference}
                </div>

                <div className="flex w-1/3 justify-start">{machine.price}</div>
                <div className="invisible flex  w-0 justify-center  sm:visible sm:w-1/3 ">
                  {/* Open Image Model */}
                  <ImageView key={machine.id} machine={machine} />
                  {/* Open Image Model */}
                </div>
                <div className="  flex w-3/6 flex-col items-end  justify-end gap-2 lg:flex-row  ">
                  <UpdateMachineModel machine={machine} />
                  <DeleteMachineModel machine={machine} />
                  <div className="  sm:invisible sm:h-0 sm:w-0 ">
                    <Link
                      href={machine.image_url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Button>
                        Image <EyeIcon fill="white" />{' '}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}
