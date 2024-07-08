'use client';
import { Machines } from '@/domain/entities/Machines';

import { Card } from '@nextui-org/card';
import { Button, Checkbox, Divider } from '@nextui-org/react';
import { useState } from 'react';
import CreateMachineModel from './create-machine-model';
import UpdateMachineModel from './update-machine-model';
import DeleteMachineModel from './delete-machine-model';

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
    <div className="flex w-full flex-col items-center overflow-y-auto pl-40 sm:pl-0">
      <div className="flex w-[100vw] max-w-4xl  items-center  justify-end gap-5  pt-5  sm:pr-8">
        {/* <Button color="success">Create</Button> */}
        <CreateMachineModel />
        {/* <Button color="warning">update</Button>
        <Button color="danger">Delete</Button> */}
      </div>
      <div
        className="w-full min-w-fit max-w-4xl overflow-y-auto 
  p-5"
      >
        <Card className="p-5">
          <div className="mb-4 flex flex-row items-center justify-between gap-4 pl-1 md:pl-3">
            {columns.map((column) => (
              <div key={column.key} className="w-1/3 font-semibold">
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
                <div className="w-1/3 ">{machine.category}</div>
                <div className="w-1/3 ">{machine.reference}</div>
                <div className="w-1/3 ">{machine.price}</div>

                <div className="w-1/ flex gap-2">
                  <UpdateMachineModel machine={machine} />
                  <DeleteMachineModel machine={machine} />
                </div>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}
