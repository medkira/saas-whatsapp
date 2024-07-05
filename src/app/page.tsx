'use client';

import Image from 'next/legacy/image';
import { useEffect } from 'react';
import Lenis from 'lenis';
import {
  Card,
  CardFooter,
  Button,
  CardBody,
  Input,
  Textarea,
} from '@nextui-org/react';
import emailjs from '@emailjs/browser';
import Autoplay from 'embla-carousel-autoplay';

import rent from '/public/images/projects/rent0.png';
import gym from '/public/images/projects/gym0.png';
import phoneOptimization from '/public/images/app.png';
import phone from '/public/images/phone.png';
import learn from '/public/images/projects/learn.png';
import responsiveDesign from '/public/images/responsive-design.png';

import React from 'react';

import { useContactUsFormStore } from './lib/store';

import { title, subtitle } from '@/components/primitives';
import { roboto } from '@/config/fonts';
import { toast } from '@/components/ui/use-toast';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';

import landingGym from '/public/images/landing-gym.png';
import landingGym1 from '/public/images/landing-gym1.png';
import landingGym2 from '/public/images/landing-gym2.png';
import landingGym3 from '/public/images/landing-gym3.png';
import machine1 from '/public/images/machines/A50.png';
import IconTelephoneFill from '@/components/icons';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  // const container = useRef<HTMLElement>(null);

  // const { scrollYProgress } = useScroll({
  //   target: container as any,

  //   offset: ['start start', 'end end'],
  // });

  return (
    // <div className=" flex h-[100%] flex-col content-center justify-end bg-black">
    <section className={`${roboto.className}  `}>
      <HeroSection />
      <Section1 />
      {/* <Section2 /> */}
      <Section3 />
    </section>
  );
}

const HeroSection = () => {
  // const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const staticImages = [
    machine1,
    machine1,
    machine1,
    machine1,
    machine1,
    machine1,
    machine1,
  ];

  const [selectedImage, setSelectedImage] = React.useState(staticImages[0]);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
  // Function to handle next image
  const handleNext = () => {
    const nextIndex = (selectedImageIndex + 1) % staticImages.length;

    setSelectedImage(staticImages[nextIndex]);
    setSelectedImageIndex(nextIndex);
  };

  // Function to handle previous image
  const handlePrev = () => {
    const prevIndex =
      (selectedImageIndex - 1 + staticImages.length) % staticImages.length;

    setSelectedImage(staticImages[prevIndex]);
    setSelectedImageIndex(prevIndex);
  };

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <div className=" top-0 h-full min-h-[85vh] w-full sm:min-h-[100vh]  ">
      <div
        className="relative flex h-[50hv]
        w-full flex-col items-center justify-center
         gap-1 overflow-hidden bg-transparent  pt-[13vh] 
          sm:gap-6  md:pt-24"
      >
        <div className=" flex w-full flex-col justify-center text-center">
          <div className="-mb-3 sm:mb-1 ">
            <h1 className={title()}>La&nbsp;</h1>
            <h1 className={title()}>Page&nbsp;</h1>
            <h1 className={title()}>officielle&nbsp;</h1>
            <h1 className={title()}>pour&nbsp;</h1>
            {/* <h1 className={title()}>achete&nbsp;</h1> */}

            {/* <h1 className={title()}>Livraison&nbsp;</h1> */}
          </div>
          <div>
            <h1 className={title()}>achete&nbsp;</h1>
            <h1 className={title({ color: 'blue' })}>machines à coudre</h1>
          </div>
        </div>
        <div className="flex  items-center justify-center ">
          <div className="m-3 max-w-6xl rounded-md bg-white p-3 text-center ">
            <h1
              className={title({
                size: 'md',
                class: '  text-gray-600',
              })}
            >
              Livraison Partout{' '}
              <strong className="text-red-600">Tunisie</strong>
            </h1>
          </div>
        </div>
        <div className="w-full text-center font-bold  text-gray-950 sm:text-xl">
          <h2>
            Découvrez notre collection et trouvez la machine à coudre parfaite
            pour vos besoins. Contactez-nous !
          </h2>
        </div>
      </div>

      <section className=" px-16 pt-14 sm:pt-6">
        <Carousel
          className="w-full"
          opts={{
            align: 'center',
          }}
          plugins={[plugin.current as any]}
        >
          <CarouselContent>
            {staticImages.map((image, index) => (
              <CarouselItem
                key={index}
                className="flex   justify-center sm:basis-1/3  md:basis-1/4 lg:basis-1/5"
              >
                <div
                  key={index}
                  className="flex cursor-pointer flex-col items-center justify-center gap-1 rounded-md bg-white p-5 "
                >
                  <Image
                    priority
                    alt="Background Image"
                    //   height={110}
                    //   layout="fixed"
                    //   sizes="(max-width: 900px) 100vw,
                    // (max-width: 70px) 500vw,
                    // 330vw"
                    src={image}
                    //   width={110}
                  />
                  <h1
                    className={title({
                      size: 'sm',
                      color: 'blue',
                      className: 'mb-1',
                    })}
                  >
                    Sewing
                  </h1>
                  <h2
                    className={subtitle({
                      size: 'sm',
                      class: 'text-center',
                    })}
                  >
                    Ref:AT1002-190B
                  </h2>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  );
};

const Section1 = () => {
  const staticImages = [
    machine1,
    machine1,
    machine1,
    machine1,
    machine1,
    machine1,
  ];

  return (
    <div className=" flex w-full   flex-col items-center justify-start  gap-1 overflow-hidden pt-[5rem]  text-center   sm:gap-9   ">
      <section className="flex flex-col items-center justify-start">
        <div className="   pb-2 sm:w-full">
          <h1 className={title({ size: 'md', class: 'mb-3  mr-2' })}>
            Découvrez Nos Machines à
          </h1>
          <span
            className={title({
              color: 'blue',
              size: 'md',
              className: 'bg-white',
            })}
          >
            Coudre et à Broder
          </span>
        </div>
      </section>

      <section className="flex flex-wrap items-center justify-center gap-x-16 gap-y-14 p-6 ">
        {staticImages.map((image, index) => (
          <div
            key={index}
            className="flex cursor-pointer flex-col items-center justify-center gap-1 rounded-md bg-white p-5 sm:w-1/3 lg:w-1/4"
          >
            <Image
              priority
              alt="Background Image"
              //   height={110}
              //   layout="fixed"
              //   sizes="(max-width: 900px) 100vw,
              // (max-width: 70px) 500vw,
              // 330vw"
              src={image}
              //   width={110}
            />
            <h1
              className={title({
                size: 'sm',
                color: 'blue',
                className: 'mb-1',
              })}
            >
              Sewing
            </h1>
            <h2 className={subtitle({ size: 'sm' })}>Ref:AT1002-190B</h2>
            <div className="flex gap-3 p-5 sm:flex-col md:flex-row">
              <Button
                className="rounded-3xl p-3 px-5 text-xl font-semibold"
                color="primary"
                size="lg"
              >
                Commander
              </Button>
              <Button
                className="rounded-3xl p-3 px-5 text-xl font-semibold"
                color="primary"
                size="lg"
                variant="bordered"
              >
                Détails
              </Button>
            </div>
          </div>
        ))}

        <Button
          className="rounded-3xl p-3 px-5 text-xl font-semibold"
          color="primary"
          size="lg"
        >
          Explorer toutes les machines
        </Button>
      </section>

      {/* <h1 className={title({ color: 'blue' })}>&nbsp;Should You Care?</h1> */}
    </div>
  );
};

const Section2 = () => {
  // const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <div className="sticky flex  w-full flex-col  items-center justify-start gap-10 overflow-hidden  bg-gray-900  pt-20 text-center md:pt-28 lg:top-0 lg:h-[160vh]  ">
      <section className="flex flex-col items-center justify-start">
        <div className=" flex  w-48 flex-wrap justify-center sm:w-full">
          <h1 className={title({ size: 'md', class: ' sm:mr-2' })}>
            Latest Work
          </h1>
          <span className={title({ color: 'blue', size: 'md' })}>Created</span>
        </div>
      </section>

      <section className="flex  flex-wrap items-center justify-center gap-12  p-20 pt-0 md:pt-14 lg:flex-nowrap">
        <a
          className="flex flex-col items-center justify-start"
          href="https://totaltech-gym-0.vercel.app/"
          rel="noreferrer"
          target="_blank"
        >
          <Card isFooterBlurred className="flex border-none" radius="lg">
            <Image
              alt=""
              className="object-cover"
              height={500}
              src={gym}
              width={750}
            />
            <div className="flex items-center justify-center">
              <CardFooter className="absolute bottom-3 z-10  w-[calc(100%_-_15px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
                <p className="text-sm font-bold text-white/80">Gym</p>
                <Button
                  className="flex bg-black/20 text-tiny text-white"
                  color="default"
                  radius="lg"
                  size="sm"
                  variant="flat"
                >
                  Website
                </Button>
              </CardFooter>
            </div>
          </Card>
        </a>
        <a
          className="flex flex-col items-center justify-start"
          href="https://totaltech-design-interior-0.vercel.app/"
          rel="noreferrer"
          target="_blank"
        >
          <Card isFooterBlurred className="flex border-none" radius="lg">
            <Image
              alt=""
              className="object-fill"
              height={500}
              src={rent}
              width={750}
            />
            <div className="flex items-center justify-center">
              <CardFooter className="absolute bottom-3 z-10  w-[calc(100%_-_15px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
                <p className="text-sm  font-bold text-white/80">
                  Interior design
                </p>
                <Button
                  className="flex bg-black/20 text-tiny text-white"
                  color="default"
                  radius="lg"
                  size="sm"
                  variant="flat"
                >
                  Website
                </Button>
              </CardFooter>
            </div>
          </Card>
        </a>
        <a
          className="flex flex-col items-center justify-start"
          href="https://totaltech-ai-mock-interview.vercel.app/"
          rel="noreferrer"
          target="_blank"
        >
          {' '}
          <div className="flex flex-col items-center justify-start">
            <Card isFooterBlurred className="flex border-none" radius="lg">
              <Image
                alt="learn moch up "
                className="object-cover"
                height={500}
                src={learn}
                width={750}
              />
              <div className="flex items-center justify-center">
                <CardFooter className="absolute bottom-3 z-10  w-[calc(100%_-_15px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
                  <p className="text-sm  font-bold text-white/80">
                    Ai Mock Interview
                  </p>
                  <Button
                    className="flex bg-black/20 text-tiny text-white"
                    color="default"
                    radius="lg"
                    size="sm"
                    variant="flat"
                  >
                    SaaS
                  </Button>
                </CardFooter>
              </div>
            </Card>
          </div>
        </a>
      </section>

      {/* <h1 className={title({ color: 'blue' })}>&nbsp;Should You Care?</h1> */}
    </div>
  );
};

const Section3 = () => {
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
    <div className="relative flex h-[100vh]  w-full flex-col items-center   justify-items-start  gap-5 overflow-hidden pt-[5rem]  sm:gap-6  md:gap-9 md:pt-[10vh]">
      <section className="flex flex-col items-center justify-start">
        <div className=" flex  w-48  justify-center sm:w-full">
          <h1 className={title({ size: 'md', class: '' })}>Contactez</h1>
          <span className={title({ color: 'blue', size: 'md' })}>
            &nbsp;nous
          </span>
        </div>
      </section>

      <footer className="flex w-full flex-wrap items-center justify-center gap-10 ">
        <Card className="sm:w-3xl flex w-9/12 max-w-2xl">
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
  );
};
