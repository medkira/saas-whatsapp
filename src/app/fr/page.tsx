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

import landing from '/public/images/landing.jpg';
import rent from '/public/images/projects/rent0.png';
import gym from '/public/images/projects/gym0.png';
import phoneOptimization from '/public/images/app.png';
import phone from '/public/images/phone.png';
import learn from '/public/images/projects/learn.png';
import responsiveDesign from '/public/images/responsive-design.png';

import { useContactUsFormStore } from '../lib/store';

import { title, subtitle } from '@/components/primitives';
import { roboto } from '@/config/fonts';
import Meteors from '@/components/magicui/meteors';
import { toast } from '@/components/ui/use-toast';
import { Navbar } from '@/components/navbar';

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
      <div className="fixed left-0 right-0 top-0 z-20 backdrop-blur-[1.9px] sm:backdrop-blur-none">
        <Navbar />
      </div>
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
    </section>
  );
}

const HeroSection = () => {
  // const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <div className="sticky top-0 h-[100vh] w-full  ">
      <Image
        priority
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        src={landing}
      />

      <div className="relative flex h-[50vh]  w-full flex-col items-center justify-center gap-1 overflow-hidden bg-transparent px-10 pt-[20vh]  sm:gap-6  md:pt-32  ">
        <Meteors number={30} />
        <div className=" flex w-full flex-col justify-center text-center sm:flex-row">
          <div className="-mb-5 sm:mb-0">
            <h1 className={title()}>Atteignez&nbsp;</h1>
            <h1 className={title()}>plus&nbsp;</h1>
          </div>
          <div>
            <h1 className={title()}>de</h1>
            <h1 className={title({ color: 'blue' })}>&nbsp;clients.</h1>
          </div>
        </div>
        <div className="w-full text-center font-medium text-cyan-50 sm:text-3xl">
          <h2>
            Regardez votre entreprise briller avec des{' '}
            <span className="bg-gradient-to-b from-[#5EA2EF] to-[#0072F5] bg-clip-text font-extrabold text-transparent">
              Sites Web{' '}
            </span>{' '}
            rapides et magnifiques avec Total Tech
          </h2>
        </div>
      </div>
    </div>
  );
};

const Section1 = () => {
  // const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <div className="sticky flex  w-full flex-col items-center  justify-start gap-9  overflow-hidden bg-black pt-20  text-center md:pt-14 lg:top-0 lg:h-[160vh]  ">
      <section className="flex flex-col items-center justify-start">
        <div className="   pb-2 sm:w-full">
          <h1 className={title({ size: 'md', class: 'mb-3  mr-2' })}>
            Pourquoi devriez-vous
          </h1>
          <span
            className={title({
              color: 'blue',
              size: 'md',
              className: 'bg-white',
            })}
          >
            vous en soucier ?
          </span>
        </div>

        <h2 className={subtitle({ class: 'w-10/12 md:w-1/2', size: 'md' })}>
          Nous sommes spécialisés dans la conception et le développement Web
          pour des clients du monde entier. Chaque ligne de code est écrite à la
          main pour garantir les meilleures performances, ce qui permet
          d&apos;attirer plus de clients sur votre site et d&apos;augmenter les
          revenus de votre entreprise.
        </h2>
      </section>

      <section className="flex  flex-wrap items-center justify-center gap-20  p-6 md:max-w-[80vw] lg:flex-nowrap">
        <div className="flex  flex-col items-center justify-center gap-3">
          <Image
            priority
            alt="Image de fond"
            height={90}
            layout="fixed"
            sizes="(max-width: 90px) 100vw,
          (max-width: 70px) 50vw,
          33vw"
            src={phone}
            width={90}
          />
          <h1
            className={title({ size: 'sm', color: 'blue', className: 'mb-1' })}
          >
            Conception mobile
          </h1>
          <h2 className={subtitle({ size: 'sm' })}>
            Nous commençons par construire votre site pour les appareils
            mobiles, puis nous l&apos;ajoutons pour les tablettes et les
            ordinateurs de bureau.
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 ">
          <Image
            priority
            alt="Image de fond"
            height={90}
            layout="fixed"
            sizes="(max-width: 90px) 100vw,
          (max-width: 90px) 50vw,
          33vw"
            src={responsiveDesign}
            width={90}
          />
          <h1
            className={title({ size: 'sm', color: 'blue', className: 'mb-1' })}
          >
            Entièrement réactif
          </h1>
          <h2 className={subtitle({ size: 'sm' })}>
            Votre site Web s&apos;adaptera à toutes les tailles d&apos;écrans
            mobiles, tablettes et ordinateurs de bureau afin que les nouveaux
            clients puissent accéder à votre site depuis n&apos;importe où.
          </h2>
        </div>
        <div className="flex  flex-col items-center justify-center gap-3 ">
          <Image
            priority
            alt="Image de fond"
            height={90}
            layout="fixed"
            sizes="(max-width: 90px) 100vw,
          (max-width: 90px) 50vw,
          33vw"
            src={phoneOptimization}
            width={90}
          />
          <h1
            className={title({ size: 'sm', color: 'blue', className: 'mb-1' })}
          >
            Optimisation
          </h1>
          <h2 className={subtitle({ size: 'sm' })}>
            60% de tout le trafic Internet provient des appareils mobiles. Nous
            optimisons donc votre mobile pour qu&apos;il performe au mieux dans
            les moteurs de recherche.
          </h2>
        </div>
      </section>

      {/* <h1 className={title({ color: 'blue' })}>&nbsp;Devriez-vous vous en soucier?</h1> */}
    </div>
  );
};

const Section2 = () => {
  // const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <div className="sticky flex  w-full flex-col  items-center justify-start gap-10 overflow-hidden  bg-gray-900  pt-20 text-center md:pt-28 lg:top-0 lg:h-[160vh]  ">
      <section className="flex flex-col items-center justify-start">
        <div className=" flex  w-48 flex-wrap justify-center sm:w-full">
          <h1 className={title({ size: 'md', class: ' sm:mr-2' })}>Derniers</h1>
          <span className={title({ color: 'blue', size: 'md' })}>Projets</span>
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
        () => {
          // console.log('FAILED...', error);
        },
      );
  };

  return (
    <div className="relative flex h-[100vh]  w-full flex-col items-center   justify-items-start  gap-8 overflow-hidden bg-black pt-24  sm:gap-6  md:gap-9 md:pt-[10vh]">
      <section className="flex flex-col items-center justify-start">
        <div className=" flex  w-48 flex-wrap justify-center sm:w-full">
          <h1 className={title({ size: 'md', class: '' })}>Contactez</h1>
          <span className={title({ color: 'blue', size: 'md' })}>
            &nbsp;nous
          </span>
        </div>
      </section>

      <footer className="flex w-full flex-wrap items-center justify-center gap-10 ">
        <Card className="sm:w-3xl flex w-9/12 max-w-2xl">
          <CardBody>
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
