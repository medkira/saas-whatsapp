'use client';

import { Card, CardBody } from '@nextui-org/card';
import { Input, Textarea } from '@nextui-org/input';
import emailjs from '@emailjs/browser';
import { Button } from '@nextui-org/button';

import { useContactUsFormStore } from './lib/store';

import { toast } from '@/components/ui/use-toast';
import IconTelephoneFill from '@/components/icons';
import { title } from '@/components/primitives';

export default function LandingContact() {
  const { contactUsFormData, setContactsUsForm } = useContactUsFormStore();
  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setContactsUsForm({ ...contactUsFormData, [name]: value });
  };
  // ? this should be in a use case
  // ? {{email Js send email}}
  const sendEmail = (e: any) => {
    const templateParams = {
      to_name: 'totaltech',
      from_name: contactUsFormData.name,
      subject: 'Client Contact Us',
      message: `Client ${contactUsFormData.name} wants you to call them 
                or just email them at ${contactUsFormData.email}. \n
                client business: ${contactUsFormData.business}. \n
                client description: ${contactUsFormData.description} `,
    };

    e.preventDefault();
    emailjs
      .send('service_zh25lbr', 'template_tcfc0ub', templateParams, {
        publicKey: 'zCwC7ca2BSPtKUbpE',
      })
      .then(
        () => {
          // console.log('SUCCESS!');
          toast({
            description: 'Your message has been sent.',
            className:
              'font-bold top-10 sm:top-0 bg-black/60 backdrop-blur-[5px]',
          });
          e.target.reset();
        },
        (error) => {
          // console.log('FAILED...', error);
        },
      );
  };

  return (
    <>
      <div
        className="relative flex h-[100vh]  
      w-full flex-col items-center  justify-items-start  gap-5 overflow-hidden pt-[5rem]  sm:gap-6  md:gap-9 md:pt-[10vh]"
      >
        <section className="flex flex-col items-center justify-start">
          <div className=" flex  w-48  justify-center sm:w-full">
            <h1 className={title({ size: 'md', class: '' })}>Contactez</h1>
            <span className={title({ color: 'blue', size: 'md' })}>
              &nbsp;nous
            </span>
          </div>
        </section>

        <footer className="flex w-full flex-wrap items-center justify-center gap-10 ">
          <Card className="sm:w-3xl flex  w-9/12 max-w-2xl">
            <CardBody>
              <Button
                className="my-4 flex items-center justify-center gap-2"
                color="primary"
                variant="bordered"
              >
                <IconTelephoneFill />
                <h1 className="font-bold"> 98 403 153</h1>
              </Button>
              <form
                className="md:max-h-auto flex w-full flex-col flex-wrap gap-4 md:flex-nowrap"
                onSubmit={sendEmail}
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
                  required
                  className="h-12 md:h-auto md:max-h-12"
                  id="email"
                  label="Email"
                  name="email"
                  type="email"
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
                <Textarea
                  className="h-24 md:h-auto md:max-h-24"
                  id="description"
                  label="Description"
                  name="description"
                  placeholder="Tapez votre message ici"
                  onChange={handleChange}
                />
                <div className="flex justify-end pr-2 pt-6">
                  <Button
                    className="max-p-4"
                    color="primary"
                    size="md"
                    type="submit"
                  >
                    Envoyer
                  </Button>
                </div>
              </form>
            </CardBody>
          </Card>

          {/* <Card className="sm:w-3xl perspective flex h-full w-10/12 max-w-2xl">
          <CardBody></CardBody>
        </Card> */}
        </footer>
      </div>
    </>
  );
}
