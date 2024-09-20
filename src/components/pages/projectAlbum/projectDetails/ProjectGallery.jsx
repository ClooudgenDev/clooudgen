import ProjectButton from "@/components/shared/projectButton/ProjectButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { SlFrame } from "react-icons/sl";
import Image from "next/image";
import Link from "next/link";

const ProjectGallery = ({ data = [], id }) => {
    return (
        <Carousel className="w-full max-w-[600px]  md:ml-auto  h-[400px]">
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={index}>
              <Link href={`/project-album/full-screen/${id}`} className="p-1  h-[400px] overflow-x-hidden overflow-y-auto relative group block">
                <Image src={item} alt="project img" className="overflow-hidden " />
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out rounded-lg opacity-0 bg-slate-700/80 bg-opacity-70 group-hover:opacity-100">
                  <SlFrame className="text-white transition-all duration-500 size-14 hover:size-16" />
                  <ProjectButton text="Full Screen" />
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
};

export default ProjectGallery;