'use client';

import Image from 'next/legacy/image';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import {
  Card,
  CardFooter,
  Button,
  Link,
  CardBody,
  Input,
  Textarea,
} from '@nextui-org/react';

import landing from '../../public/images/landing.jpg';
import phoneOptimization from '../../public/images/app.png';
import phone from '../../public/images/phone.png';
import responsiveDesign from '../../public/images/responsive-design.png';

import { title, subtitle } from '@/components/primitives';
import { roboto } from '@/config/fonts';
import Meteors from '@/components/magicui/meteors';
import { StarsBackground } from '@/components/landing/background/test';
import { Navbar } from '@/components/navbar';
import { motion } from 'framer-motion';

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
      <Section3 />
    </section>
  );
}

const HeroSection = () => {
  // const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <div className="sticky top-0 h-[100vh] w-full  ">
      {/* <Image
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        src={landing}
      /> */}
      {/* bg-[url('/images/landing.jpg')] object-fill */}

      <img
        alt="Responsive design"
        // height={90}
        src="/images/landing.jpg" // Adjust the path accordingly
        // width={90}
        style={{
          objectFit: 'cover',
          position: 'absolute',
          height: '100vh',
          width: '100vw',
        }}
      />
      <div className="relative flex h-[50hv]  w-full flex-col items-center justify-center gap-5 overflow-hidden bg-transparent px-10  pt-48  md:pt-32  ">
        <Meteors number={30} />
        <div className=" flex w-full flex-col justify-center text-center">
          <div className="mb-4 ">
            <h1 className={title()}>Level&nbsp;</h1>
            <h1 className={title({})}>Up&nbsp;</h1>
            <h1 className={title()}>Your </h1>
          </div>
          <div>
            <h1 className={title()}>Online</h1>
            <h1 className={title({ color: 'blue' })}>&nbsp;Presence</h1>
          </div>
        </div>
        <div className="w-fullfont-medium text-center text-cyan-50 sm:text-xl">
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
    <div className="md:pt-26 sticky  flex w-full flex-col  items-center justify-start  gap-9 overflow-hidden bg-black  pt-20 text-center lg:top-0 lg:h-[160vh]  ">
      <section className="flex flex-col items-center justify-start">
        <div className=" flex  w-48 flex-wrap justify-center sm:w-full">
          <h1 className={title({ size: 'md', class: 'mb-3  sm:mr-2' })}>
            Why Should{' '}
          </h1>
          <span className={title({ color: 'blue', size: 'md' })}>
            You Care?
          </span>
        </div>

        <h2 className={subtitle({ class: ' w-10/12 md:w-1/2', size: 'md' })}>
          We specialize in web design and development for clients anywhere.
          Every line of code is written by hand to ensure the best performance,
          which helps bring in more customers to your site and bring more
          revenue to your business
        </h2>
      </section>

      <section className="flex flex-wrap items-center justify-center gap-20 p-6 md:max-w-[80vw] lg:flex-nowrap">
        <div className="flex flex-col items-center justify-center gap-3">
          <img
            alt="Mobile phone"
            height={90}
            src="/images/phone.png" // Adjust the path accordingly
            width={90}
            style={{ objectFit: 'fill' }}
          />
          <h1
            className={title({ size: 'md', color: 'blue', className: 'mb-1' })}
          >
            Mobile-First Design
          </h1>
          <h2 className={subtitle({ size: 'sm' })}>
            We start building your site for mobile devices first then we add on
            to it to make tablet and desktop.
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <img
            alt="Responsive design"
            height={90}
            src="/images/responsive-design.png" // Adjust the path accordingly
            width={90}
            style={{ objectFit: 'fill' }}
          />
          <h1
            className={title({ size: 'md', color: 'blue', className: 'mb-1' })}
          >
            Fully Responsive
          </h1>
          <h2 className={subtitle({ size: 'sm' })}>
            Your website will fit all mobile screens sizes tablets, and desktop
            sizes so new clients can access your site from anywhere.
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <img
            alt="Phone optimization"
            height={90}
            src="/images/phone.png" // Adjust the path accordingly
            width={90}
            style={{ objectFit: 'fill' }}
          />
          <h1
            className={title({ size: 'md', color: 'blue', className: 'mb-1' })}
          >
            Optimization
          </h1>
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
    <div className="sticky flex  w-full flex-col  items-center justify-start gap-10 overflow-hidden  bg-gray-900  pt-20 text-center md:pt-36 lg:top-0 lg:h-[160vh]  ">
      <section className="flex flex-col items-center justify-start">
        <div className=" flex  w-48 flex-wrap justify-center sm:w-full">
          <h1 className={title({ size: 'md', class: 'mb-3 sm:mr-2' })}>
            Latest Work{' '}
          </h1>{' '}
          <span className={title({ color: 'blue', size: 'md' })}>Created</span>
        </div>
      </section>

      <section className="flex  flex-wrap items-center justify-center gap-12  p-20 pt-0 md:max-w-[80vw] md:pt-14 lg:flex-nowrap">
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
  return (
    <div className="md:pt-22 relative flex  h-[100vh] w-full flex-col   items-center  justify-start gap-16 overflow-hidden  bg-black  pt-20  sm:gap-6">
      <section className="flex flex-col items-center justify-start">
        <div className=" flex  w-48 flex-wrap justify-center sm:w-full">
          <h1 className={title({ size: 'sm', class: 'mb-3 sm:mr-2' })}>
            Contact{'  '}
          </h1>
          <span className={title({ color: 'blue', size: 'sm' })}>&nbsp;Us</span>
        </div>
      </section>

      <footer className=" flex w-full flex-wrap items-center justify-center gap-10 ">
        <Card className=" sm:w-3xl flex  w-9/12 max-w-2xl ">
          <CardBody>
            <form className="flex w-full flex-col flex-wrap gap-4 md:flex-nowrap ">
              <Input label="Name" type="name" />
              <Input label="Business" type="business" />
              <Input label="Email" type="email" />
              <Input label="Phone number" type="phone umber" />
              <Textarea
                label="Description"
                placeholder="Type your Message Here"
              />
            </form>
            <div className="flex justify-end pr-2 pt-6">
              <Button className="p-4" color="primary" size="md">
                Submit
              </Button>
            </div>
          </CardBody>
        </Card>
        {/* <Card className="sm:w-3xl perspective flex h-full w-10/12 max-w-2xl">
          <CardBody></CardBody>
        </Card> */}
      </footer>
    </div>
  );
};
