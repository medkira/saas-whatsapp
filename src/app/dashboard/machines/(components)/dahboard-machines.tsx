'use client';

import { Card } from '@nextui-org/card';
import { Button, Divider } from '@nextui-org/react';
import Link from 'next/link';

import CreateMachineModel from './create-machine-model';
import UpdateMachineModel from './update-machine-model';
import DeleteMachineModel from './delete-machine-model';

import { Machines } from '@/domain/entities/Machines';

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
  ];

  return (
    <div className="flex w-full flex-col items-center   ">
      <div
        className="w-full min-w-fit max-w-4xl  
  p-5"
      >
        <div className="flex max-w-4xl  items-end  justify-end gap-5 p-5  pt-5 ">
          <CreateMachineModel />
        </div>
        <Card className="p-5">
          <div
            className="mb-4 flex flex-row items-center
           justify-between gap-4  md:pl-3"
          >
            {columns.map((column) => (
              <div key={column.key} className="w-1/5 font-semibold">
                {column.label}
              </div>
            ))}
            <div className="flex w-1/3 justify-end pr-3">Actions</div>
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
                 border-gray-700 py-3 pl-1 md:pl-3"
              >
                <div className="w-1/4 ">{machine.category}</div>
                <div className="w-1/4 ">{machine.reference}</div>
                <div className="w-1/4 ">{machine.price}</div>

                <div className="flex w-1/3 flex-col gap-2 sm:flex-row">
                  <UpdateMachineModel machine={machine} />
                  <DeleteMachineModel machine={machine} />
                  <Link
                    href={machine.image_url}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Button>Image</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}
