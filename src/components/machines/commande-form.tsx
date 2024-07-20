'use client';

import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { useFormState, useFormStatus } from 'react-dom';
import toast from 'react-hot-toast';

import { createCommande } from '@/actions/commandes';

export default function CommandeForm({ machine_ref }: { machine_ref: string }) {
  const initialState = {};

  const createCommandeWithMachineId = createCommande.bind(null, machine_ref);

  const [state, dispatch] = useFormState(
    createCommandeWithMachineId,
    initialState,
  );

  // console.log('errorMessage', state);

  if (state === true) {
    toast.success('Commande Create');
  } else if (state instanceof Error) {
    toast.error(`${state.message}`);
  }

  return (
    <form
      action={dispatch}
      className="md:max-h-auto flex w-full flex-col flex-wrap gap-4 md:flex-nowrap"
    >
      <Input
        required
        className="h-12 md:h-auto md:max-h-12"
        id="name"
        label="Nom"
        name="name"
        type="name"
      />
      <Input
        className="h-12 md:h-auto md:max-h-12"
        id="entreprise"
        label="Entreprise"
        name="entreprise"
        type="text"
      />

      <Input
        className="h-12 md:h-auto md:max-h-12"
        id="phone_number"
        label="Numéro de téléphone"
        name="phone_number"
        type="phone number"
      />

      <div className="flex justify-end pr-2 pt-3">
        <CommandeButton />
      </div>
    </form>
  );
}

function CommandeButton() {
  const status = useFormStatus();

  // useEffect(() => {
  // }, [status.pending]);

  return (
    <Button
      className="w-full rounded-2xl p-3 px-5 text-xl font-semibold"
      color="primary"
      isLoading={status.pending}
      size="lg"
      type="submit"
      // onClick={notify}
    >
      Commander
    </Button>
  );
}
