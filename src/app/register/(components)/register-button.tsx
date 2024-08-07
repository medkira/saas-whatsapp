import { Button } from '@nextui-org/button';
import { useFormStatus } from 'react-dom';

export default function RegisterButton() {
  const state = useFormStatus();

  return (
    <Button
      className="flex w-full justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
      isLoading={state.pending}
      type="submit"
    >
      Sign up
    </Button>
  );
}
