'use client';

import Image from 'next/legacy/image';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

import { Card, CardFooter, Button, Link } from '@nextui-org/react';

import landing from '../../public/images/landing.jpg';
import phoneOptimization from '../../public/images/app.png';
import phone from '../../public/images/phone.png';
import responsiveDesign from '../../public/images/responsive-design.png';

import { title, subtitle } from '@/components/primitives';
import { roboto } from '@/config/fonts';
import Meteors from '@/components/magicui/meteors';

import { StarsBackground } from '@/components/landing/background/test';
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
      <HeroSection />
      <Section1 />
      <Section2 />
      {/* <Section3 /> */}
    </section>
  );
}

const HeroSection = () => {
  // const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <div className="sticky top-0 h-[100vh] w-full">
      <Image
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        src={landing}
      />
      <div className="relative flex h-[50hv]  w-full flex-col items-center justify-center gap-5 overflow-hidden bg-transparent px-10  pt-48  md:pt-36  ">
        <Meteors number={30} />
        <div className=" flex w-full flex-col justify-center text-center">
          <div className="-mb-4 md:mb-2">
            <h1 className={title()}>Level&nbsp;</h1>
            <h1 className={title({})}>Up&nbsp;</h1>
            <h1 className={title()}>Your </h1>
          </div>
          <div>
            <h1 className={title()}>Online</h1>
            <h1 className={title({ color: 'blue' })}>&nbsp;Presence</h1>
          </div>
        </div>
        <div className="w-fullfont-medium text-center text-cyan-50 sm:text-2xl">
          <h2>
            Watch Your Business Shine with Fast and Beautiful Websites with
            Total Tech
          </h2>
        </div>
      </div>
    </div>
  );
};

const Section1 = () => {
  // const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <div className="sticky  flex w-full flex-col  items-center justify-start  gap-10 overflow-hidden bg-black  pt-36 text-center lg:top-0 lg:h-[160vh]  ">
      <section className="flex flex-col items-center justify-start">
        <div className=" w-48  sm:w-full">
          <h1 className={title({ size: 'sm' })}>
            Why{' '}
            <span className={title({ color: 'blue', size: 'sm' })}>
              Should You Care?
            </span>
          </h1>
        </div>

        <h2 className={subtitle({ class: 'mt-8 w-80 md:w-1/2' })}>
          We specialize in web design and development for clients anywhere.
          Every line of code is written by hand to ensure the best performance,
          which helps bring in more customers to your site and bring more
          revenue to your business
        </h2>
      </section>

      <section className="flex  flex-wrap items-center justify-center gap-12  p-20 md:max-w-[80vw] lg:flex-nowrap">
        <div className="flex  flex-col items-center justify-center gap-8">
          <Image
            alt="Background Image"
            height={150}
            objectFit="fill"
            src={phone}
            width={150}
          />
          <h1 className={title({ size: 'sm', color: 'blue' })}>
            Mobile-First Design
          </h1>

          <h2 className={subtitle({ size: 'sm' })}>
            We start building your site for mobile devices first then we add on
            to it to make tablet and desktop.
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 ">
          <Image
            alt="Background Image"
            height={150}
            objectFit="fill"
            src={responsiveDesign}
            width={150}
          />
          <h1 className={title({ size: 'sm', color: 'blue' })}>
            Fully Responsive
          </h1>

          <h2
            className={subtitle({
              size: 'sm',
              class: ' ',
            })}
          >
            Your website will fit all mobile screens sizes tablets, and desktop
            sizes so new clients can access your site from anywhere.
          </h2>
        </div>
        <div className="flex  flex-col items-center justify-center gap-8 ">
          <Image
            alt="Background Image"
            height={150}
            objectFit="fill"
            src={phoneOptimization}
            width={150}
          />
          <h1 className={title({ size: 'sm', color: 'blue' })}>Optimization</h1>

          <h2 className={subtitle({ size: 'sm' })}>
            60% of all internet traffic is on mobile devices, so we optimize
            your mobile to perform their best in search engines.
          </h2>
        </div>
      </section>

      {/* <h1 className={title({ color: 'blue' })}>&nbsp;Should You Care?</h1> */}
    </div>
  );
};

const Section2 = () => {
  // const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <div className="  relative flex  w-full flex-col  items-center justify-start gap-10 overflow-hidden bg-gray-900 pt-36 text-center lg:h-[100vh]  ">
      <section className="flex flex-col items-center justify-start">
        <div className=" w-48  sm:w-full">
          <h1 className={title({ size: 'sm' })}>
            Laetest Work{' '}
            <span className={title({ color: 'blue', size: 'sm' })}>
              Created
            </span>
          </h1>
        </div>

        {/* <h2 className={subtitle({ class: 'mt-8 w-80' })}>
          We specialize in web design and development for clients anywhere.
          Every line of code is written by hand to ensure the best performance,
          which helps bring in more customers to your site and bring more
          revenue to your business
        </h2> */}
      </section>

      <section className="flex  flex-wrap items-center justify-center gap-12  p-20 md:max-w-[80vw] lg:flex-nowrap">
        <div className="flex flex-col items-center justify-start">
          <Card isFooterBlurred className="flex border-none" radius="lg">
            <Image
              alt="Woman listing to music"
              className="object-cover"
              height={400}
              src={landing}
              width={400}
            />
            <div className="flex items-center justify-center">
              <CardFooter className="absolute bottom-3 z-10  w-[calc(100%_-_15px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
                <p className="text-tiny text-white/80">Available soon.</p>
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
        </div>
        <div className="flex flex-col items-center justify-start">
          <Card isFooterBlurred className="flex border-none" radius="lg">
            <Image
              alt="Woman listing to music"
              className="object-cover"
              height={400}
              src={landing}
              width={400}
            />
            <div className="flex items-center justify-center">
              <CardFooter className="absolute bottom-3 z-10  w-[calc(100%_-_15px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
                <p className="text-tiny text-white/80">Available soon.</p>
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
        </div>
        <div className="flex flex-col items-center justify-start">
          <Card isFooterBlurred className="flex border-none" radius="lg">
            <Image
              alt="Woman listing to music"
              className="object-cover"
              height={400}
              src={landing}
              width={400}
            />
            <div className="flex items-center justify-center">
              <CardFooter className="absolute bottom-3 z-10  w-[calc(100%_-_15px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
                <p className="text-tiny text-white/80">Available soon.</p>
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
        </div>
      </section>

      {/* <h1 className={title({ color: 'blue' })}>&nbsp;Should You Care?</h1> */}
    </div>
  );
};

const Section3 = () => {
  // const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <div className="  relative flex  w-full flex-col  items-center justify-start gap-10 overflow-hidden bg-gray-900 pt-36 text-center lg:h-[100vh]  ">
      <footer className=" relative flex w-full items-center justify-center bg-black py-10">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
          title="nextui.org homepage"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">NextUI</p>
        </Link>
      </footer>
    </div>
  );
};
