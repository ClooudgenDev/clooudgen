import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import emblaCarouselAutoplay from 'embla-carousel-autoplay';
import ProjectData from '@/lib/data/project/project';
import Image from 'next/image';
import ProjectButton from '../projectButton/ProjectButton';
import Link from 'next/link';
import ProjectCard from './ProjectCard';

export function Project({}) {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[
        emblaCarouselAutoplay({
          delay: 4000,
        }),
      ]}
      className="w-8/12 sm:w-9/12 md:w-10/12 lg:w-[90%] xl:w-11/12 max-w-[1270px] mx-auto my-10"
    >
      <CarouselContent>
        {ProjectData?.map((service, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 mx-1 lg:basis-1/2 xl:basis-1/3 2xl:basis-1/3"
          >
            <ProjectCard service={service} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
