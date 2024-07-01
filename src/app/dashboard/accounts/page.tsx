'use client';

import { Button } from '@nextui-org/button';
import { signIn } from 'next-auth/react';

export default function Page() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-11 ">
      <h1>Accounts</h1>

      <Button onClick={() => signIn('instagram')}>connect instagram</Button>
    </div>
  );
}
