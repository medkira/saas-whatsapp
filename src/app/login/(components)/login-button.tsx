import { Button } from '@nextui-org/button';
import { ChevronRight } from 'lucide-react';
import { useFormStatus } from 'react-dom';

export default function LoginButton() {
  const state = useFormStatus();

  return (
    <Button
      className="font-geist group w-full transform-gpu rounded-lg bg-purple-200/10 px-4 py-10 text-xl font-medium tracking-tighter text-white duration-150 hover:bg-transparent/10 active:bg-blue-900 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]"
      isLoading={state.pending}
      type="submit"
    >
      Sign in
      <ChevronRight className="ml-2 inline-flex h-4 w-4 items-center justify-center duration-300 group-hover:translate-x-1" />
    </Button>
  );
}
