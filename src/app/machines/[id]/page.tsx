// 'use client';
import { Button } from '@nextui-org/button';
import Image from 'next/legacy/image';

import machine1 from '/public/images/machines/A50.png';

import { Input } from '@nextui-org/input';

import IconTelephoneFill from '@/components/icons';
import { subtitle, title } from '@/components/primitives';
// import { useContactUsFormStore } from '@/app/lib/store';

export default function PricingPage() {
  // const { contactUsFormData, setContactsUsForm } = useContactUsFormStore();
  // const handleChange = (event: any) => {
  //   const { name, value } = event.target;

  //   setContactsUsForm({ ...contactUsFormData, [name]: value });
  // };

  const imgUrl =
    ' https://pmo19b450-pic37.websiteonline.cn/upload/JR1903B-4_50om.jpg';

  return (
    <div className="h-[100vh] p-5">
      <div className="flex flex-col items-center justify-center pt-6">
        <h1 className="-mb-2 text-xl font-bold text-green-500">
          commande par téléphone
        </h1>
        <Button
          className="my-4 flex w-11/12 items-center justify-center gap-2   "
          color="success"
          variant="bordered"
        >
          <IconTelephoneFill />
          <h1 className="font-bold"> 98 403 153</h1>
        </Button>
      </div>

      <div className="flex  cursor-pointer flex-col items-center justify-center gap-1 rounded-md bg-white p-5 sm:flex-row">
        <div className="flex flex-col  items-center justify-center   ">
          <h1
            className={title({
              size: 'md',
              color: 'blue',
              className: 'mb-1 bg-black sm:text-start',
            })}
          >
            Sewing
          </h1>

          <h2
            className={subtitle({
              size: 'sm',
              className: ' font-bold',
            })}
          >
            Ref:AT1002-190B
          </h2>
          <div className="w-[50vw] overflow-hidden sm:h-[60vh]">
            <Image
              priority
              alt="Background Image"
              height={400}
              //   layout="fixed"
              //   sizes="(max-width: 900px) 100vw,
              // (max-width: 70px) 500vw,
              // 330vw"
              // className="scale-80 "
              src={imgUrl}
              width={400}
            />
          </div>
        </div>
        <section className="min-w-[40vw] ">
          <div className="flex flex-col gap-5  p-5">
            <h1 className="text-2xl font-bold text-green-500">
              Ou commande online
            </h1>
            {/* <form
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
                  type="submit"
                >
                  Commander
                </Button>
              </div>
            </form> */}

            <Button
              className="w-full rounded-2xl p-3 px-5 text-xl font-semibold"
              color="primary"
              size="lg"
              type="submit"
            >
              Commander
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
