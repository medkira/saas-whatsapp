'use client';

import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';

import { useContactUsFormStore } from '@/app/lib/store';

export default function CommandeForm() {
  const { contactUsFormData, setContactsUsForm } = useContactUsFormStore();
  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setContactsUsForm({ ...contactUsFormData, [name]: value });
  };

  return (
    <form
      className="md:max-h-auto flex w-full flex-col flex-wrap gap-4 md:flex-nowrap"
      // onSubmit={sendEmail}
    >
      <Input
        required
        className="h-12 md:h-auto md:max-h-12"
        id="name"
        label="Nom"
        name="name"
        type="name"
        onChange={handleChange}
      />
      <Input
        className="h-12 md:h-auto md:max-h-12"
        id="business"
        label="Entreprise"
        name="business"
        type="business"
        onChange={handleChange}
      />

      <Input
        className="h-12 md:h-auto md:max-h-12"
        id="phoneNumber"
        label="Numéro de téléphone"
        name="phoneNumber"
        type="phone number"
        onChange={handleChange}
      />

      <div className="flex justify-end pr-2 pt-3">
        <Button
          className="w-full rounded-2xl p-3 px-5 text-xl font-semibold"
          color="primary"
          size="lg"
          // type="submit"
          onClick={() => console.log('hi')}
        >
          Commander
        </Button>
      </div>
    </form>
  );
}
