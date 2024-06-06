'use client';

import { Accordion, AccordionItem } from '@nextui-org/react';

import { title } from '@/components/primitives';
import { DrawerDialogDemo } from '@/components/shadcn/drawerDialog';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import CarouselTest from '@/components/dashboard/preview/carousel';

import * as React from 'react';
import Image from 'next/legacy/image';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';

import landing from '/public/images/landing.jpg';
// State variables
const staticImages = [
  landing,
  landing,
  landing,
  landing,
  landing,
  landing,
  landing,
  landing,
  landing,
];
const defaultContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export default function Page() {
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

  return (
    <div className="flex flex-col items-center justify-center gap-6 ">
      <h1 className={title({ className: 'p-6', size: 'lg' })}>WebSite</h1>

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
                <Card className=" flex w-[250px] items-center justify-center overflow-hidden ">
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
                            {/* <Icon icon="ooui:previous-ltr" width="14" height="14" /> */}
                            Previous
                          </Button>

                          {/* Next button */}
                          <Button
                            className="cursor-pointer"
                            variant="outline"
                            onClick={handleNext}
                          >
                            Next
                            {/* <Icon icon="ooui:previous-rtl" width="14" height="14" /> */}
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

      <section className="pt-6">
        <DrawerDialogDemo />
      </section>

      <h1 className={title({ className: 'pt-6', size: 'md' })}>About Us</h1>

      <section className=" w-[95vw]">
        <Accordion>
          <AccordionItem key="1" aria-label="Accordion 1" title="Who are we?">
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title="What services do we offer?"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Contact Us">
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </section>

      {/* <section>
        <CarouselTest />
      </section> */}
    </div>
  );
}
