import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

const ProjectGallery = ({data = []}) => {
    return (
        <Carousel className="w-full max-w-[600px]  md:ml-auto  h-[400px]">
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1  h-[400px] overflow-x-hidden overflow-y-auto ">
               <Image src={item}  alt="project img" className="  overflow-hidden"/>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
};

export default ProjectGallery;