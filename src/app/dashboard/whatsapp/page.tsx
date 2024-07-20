import React from 'react';

import { getWhatsapps } from '@/actions/whatsapp';
import DashboardWhatsApp from './(components)/dashboard-whatsapp';

export default async function App() {
  const data = await getWhatsapps();

  return (
    <div className="flex h-full items-center justify-center">
      <DashboardWhatsApp whatsapps={data} />
    </div>
  );
}
