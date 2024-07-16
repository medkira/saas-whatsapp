import { Card } from '@nextui-org/card';
import { Button, Divider } from '@nextui-org/react';
import { notFound } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';
import { Machines } from '@/domain/entities/Machines';
import { useState } from 'react';
import DashboardMachines from '@/app/dashboard/machines/(components)/dahboard-machines';
import { getMachineNo } from '@/actions/machines';

export default async function Page() {
  // const test = useState();

  const supabase = createClient();
  // const { data } = await supabase.from('machines').select('*');
  const data = await getMachineNo();
  // console.log(data);

  if (!data || data.length === 0) {
    notFound();
  }

  const machines: Machines[] = data;

  // console.log(machines);

  // const columnh-screen s = [
  //   {
  //     key: 'category',
  //     label: 'CATEGORY',
  //   },
  //   {
  //     key: 'ref',
  //     label: 'REF',
  //   },
  //   // {
  //   //   key: 'status',
  //   //   label: 'STATUS',
  //   // },
  //   {
  //     key: 'prix',
  //     label: 'PRIX',
  //   },
  // ];

  return (
    <div
      className="flex flex-col 
 items-center justify-center   text-white"
    >
      <DashboardMachines machines={machines} />
    </div>
  );
}
