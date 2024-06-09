'use client';

import { Accordion, AccordionItem } from '@nextui-org/react';
import * as React from 'react';
import Image from 'next/legacy/image';

import { title } from '@/components/primitives';
import { DrawerDialogDemo } from '@/components/shadcn/drawerDialog';
import { Card } from '@/components/ui/card';
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
import { Button } from '@/components/ui/button';

import landing from '/public/images/landing.jpg';
import landingGym from '/public/images/landing-gym.png';
import landingGym1 from '/public/images/landing-gym1.png';
import landingGym2 from '/public/images/landing-gym2.png';
import landingGym3 from '/public/images/landing-gym3.png';

import { useDateStore, useFormStore } from '@/app/lib/store';
import Lenis from 'lenis';
// State variables
const staticImages = [landingGym, landingGym1, landingGym2, landingGym3];
// const defaultContent =
//   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export default function Page() {
  const { globalDate } = useDateStore();
  const { formData, setFormData } = useFormStore();
  // console.log(globalDate);

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

  // SCROLL SMOOOOTH xd
  React.useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      {/* Header Section */}
      <header className="flex flex-col items-center py-6 text-center">
        <div className="flex flex-col gap-0">
          <h1
            className={title({
              className: '-mb-10 p-3 pt-3 font-bold md:-mb-5 md:!text-5xl',
              size: 'lg',
            })}
          >
            Welcome to Your
          </h1>
          <h1
            className={title({
              className: 'p-3 pt-3 font-bold md:!text-5xl',
              size: 'lg',
            })}
          >
            Website Preview
          </h1>
        </div>

        <p className="px-4 text-lg  text-gray-600 md:px-0">
          We are excited to show you a preview of your new website. Explore the
          sections below to see the design and functionality we have crafted for
          your business.
        </p>
      </header>

      {/* Web Site Preview */}
      <section className="max-w-s w-[70vw]">
        <Carousel
          className="w-full "
          opts={{
            align: 'center',
          }}
        >
          <CarouselContent>
            {staticImages.map((image, index) => (
              <CarouselItem
                key={index}
                className="flex justify-center  md:basis-1/2 lg:basis-1/3"
              >
                <Card className=" flex w-[500px] items-center justify-center overflow-hidden ">
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      {/* Image */}
                      <Image
                        alt={'Image ' + (index + 1)}
                        className="aspect-square h-fit w-fit cursor-pointer object-cover opacity-0 transition-opacity duration-100"
                        objectFit="cover"
                        src={image}
                        onClick={() => {
                          setSelectedImage(image);
                          setSelectedImageIndex(index);
                        }}
                        onLoad={(event) => {
                          const target = event.target as HTMLImageElement;

                          target.classList.remove('opacity-0');
                        }}
                      />
                    </DialogTrigger>

                    {/* Dialog content */}
                    <DialogContent
                      className="grid-rows-carousel max-w-[85%] p-2 md:h-[90%]"
                      style={{
                        color: 'var(--foreground)',
                        backgroundColor: 'var(--card)',
                        backdropFilter: 'blur(20px)',
                      }}
                    >
                      {/* Dialog header */}
                      <DialogHeader className="mx-auto h-12">
                        <span className="my-auto text-2xl font-light">
                          {selectedImageIndex + 1}/{staticImages.length}
                        </span>
                      </DialogHeader>

                      {/* Image display and navigation */}
                      <div className="flex h-full flex-col items-center justify-evenly gap-4">
                        <div className="flex overflow-hidden md:h-[70vh]">
                          {/* Selected image */}
                          <Image
                            className="m-auto max-h-[95%] max-w-full object-contain opacity-0 transition-opacity duration-75"
                            src={selectedImage}
                            onLoad={(event) => {
                              const target = event.target as HTMLImageElement;

                              target.classList.remove('opacity-0');
                            }}
                          />
                        </div>

                        {/* Navigation buttons */}
                        <div className="flex items-center justify-between gap-6">
                          {/* Previous button */}
                          <Button
                            className="cursor-pointer"
                            variant="outline"
                            onClick={handlePrev}
                          >
                            Previous
                          </Button>

                          {/* Next button */}
                          <Button
                            className="cursor-pointer"
                            variant="outline"
                            onClick={handleNext}
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Get website */}
      <section className="pt-8">
        <DrawerDialogDemo />
      </section>

      {/* About Us Accordion */}
      <h1 className={title({ className: 'pt-6', size: 'md' })}>About Us</h1>
      <section className=" w-[95vw] sm:w-[50vw]">
        <Accordion>
          <AccordionItem key="1" aria-label="Accordion 1" title="Who are we?">
            <p>
              Total Tech is a cutting-edge agency specializing in web and mobile
              development. Our team of expert developers and designers is
              dedicated to creating innovative and user-friendly solutions
              tailored to your business needs.
            </p>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title="What services do we offer?"
          >
            <ul className="flex flex-col items-center justify-center gap-6">
              <li className="flex flex-col gap-3">
                <strong>Web Development</strong> We build responsive and robust
                websites using the latest technologies and best practices to
                ensure optimal performance and user experience.
              </li>
              <li className="flex flex-col gap-3">
                <strong>Mobile Development</strong> Our team creates
                high-quality mobile applications for both iOS and Android
                platforms, focusing on seamless functionality and engaging user
                interfaces.
              </li>
              <li className="flex flex-col gap-3">
                <strong>UI/UX Design</strong> Our designers craft intuitive and
                visually appealing interfaces that enhance user satisfaction and
                drive engagement.
              </li>
              <li className="flex flex-col gap-3">
                <strong>Custom Solutions</strong> We offer tailored solutions to
                meet specific business requirements, ensuring scalability and
                flexibility.
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Contact Us">
            <p>
              You can reach us at any time by making an appointment. Provide
              your email or phone number, and choose a convenient day and time.
              We will call you to discuss your website creation needs and
              pricing.
            </p>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
