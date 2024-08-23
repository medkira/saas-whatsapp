import React from 'react';

import { getWhatsapps } from '@/actions/whatsapp';
import DashboardWhatsApp from './(components)/dashboard-whatsapp';

export default async function App() {
  const data = await getWhatsapps();

  return (
    <div className="flex h-full items-center justify-center">
      {/* <DashboardWhatsApp whatsapps={data} /> */}
      <h1 className='mb-6 pl-5 text-start text-5xl font-extrabold leading-tight text-transparent text-white sm:text-center md:text-7xl'>Coming Soon...</h1>
    </div>
  );
}
