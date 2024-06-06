//Carousel.tsx
'use client';
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

// import { Icon } from '@iconify/react/dist/iconify.js';

// Static image paths
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

// Carousel component
export default function Carousel() {
  // State variables
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

  // Render
  return (
    <div className="mx-auto w-[90vw] pt-6  sm:w-[60vw] sm:px-4 md:w-[40vw]">
      {/* Scrollbar title */}
      <span
        className="text-2xl font-medium"
        style={{ color: 'var(--foreground)' }}
      >
        Scrollbar
      </span>

      {/* Scrollable area */}
      <ScrollArea
        className="mt-2 whitespace-nowrap rounded-md border shadow-inner"
        style={{
          backgroundColor: 'var(--background)',
          backdropFilter: 'blur(10px)',
          borderColor: 'var(--border)',
        }}
      >
        <div className="flex p-8 ">
          {/* Image gallery */}
          {staticImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <figure className="shrink-0">
                  <div
                    className="mr-4 overflow-hidden rounded-md border shadow-2xl"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    <div className="relative shadow-lg">
                      {/* Image */}
                      <Image
                        alt={'Image ' + (index + 1)}
                        className="aspect-square h-fit w-fit cursor-pointer object-cover opacity-0 transition-opacity duration-100"
                        height={100}
                        src={image}
                        width={100}
                        onClick={() => {
                          setSelectedImage(image);
                          setSelectedImageIndex(index);
                        }}
                        onLoad={(event) => {
                          const target = event.target as HTMLImageElement;

                          target.classList.remove('opacity-0');
                        }}
                      />
                    </div>
                  </div>
                </figure>
              </DialogTrigger>

              {/* Dialog content */}
              <DialogContent
                className="grid-rows-carousel h-[90%] max-w-[85%] p-2"
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
                <div className="flex h-full flex-col items-center justify-between">
                  <div className="relative h-full w-full">
                    {/* Selected image */}
                    <Image
                      alt="Selected Image"
                      className="m-auto max-h-[95%] max-w-full object-contain opacity-0 transition-opacity duration-75"
                      src={selectedImage}
                      onLoad={(event) => {
                        const target = event.target as HTMLImageElement;

                        target.classList.remove('opacity-0');
                      }}
                    />
                  </div>

                  {/* Navigation buttons */}
                  <div className="flex items-center justify-between gap-2">
                    {/* Previous button */}
                    <Button
                      className="cursor-pointer"
                      variant="outline"
                      onClick={handlePrev}
                    >
                      {/* <Icon icon="ooui:previous-ltr" width="14" height="14" /> */}
                      Indietro
                    </Button>

                    {/* Next button */}
                    <Button
                      className="cursor-pointer"
                      variant="outline"
                      onClick={handleNext}
                    >
                      Avanti
                      {/* <Icon icon="ooui:previous-rtl" width="14" height="14" /> */}
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Scrollbar */}
        <ScrollBar
          className="scrollbar-thumb scrollbar-track"
          orientation="horizontal"
        />
      </ScrollArea>
    </div>
  );
}
