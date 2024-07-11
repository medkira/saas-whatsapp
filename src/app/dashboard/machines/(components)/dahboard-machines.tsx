'use client';

import { Card } from '@nextui-org/card';
import { Button, Divider } from '@nextui-org/react';
import Link from 'next/link';

import CreateMachineModel from './create-machine-model';
import UpdateMachineModel from './update-machine-model';
import DeleteMachineModel from './delete-machine-model';

import { Machines } from '@/domain/entities/Machines';
import { EyeIcon } from '@/components/dashboard/icons/table/eye-icon';

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
    <div className="flex w-full flex-col items-center   ">
      <div
        className="max-w-6xlxl w-full min-w-fit  
  p-5"
      >
        <div className="flex   items-end  justify-end gap-5 p-5  pt-5 ">
          <CreateMachineModel />
        </div>
        <Card className="p-5">
          <div
            className="mb-4 flex flex-row items-center
           justify-between gap-4 "
          >
            {columns.map((column) => (
              <div
                key={column.key}
                className="flex w-1/3 justify-center font-semibold "
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
                <div className="flex w-1/3 justify-center">
                  {machine.category}
                </div>
                <div className="flex w-1/3 justify-center ">
                  {machine.reference}
                </div>

                <div className="flex w-1/3 justify-center">{machine.price}</div>
                <div className="invisible flex  w-0 justify-center  sm:visible sm:w-1/3 ">
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
