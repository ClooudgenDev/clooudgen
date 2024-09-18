import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import emblaCarouselAutoplay from "embla-carousel-autoplay"
import serviceCardsData from "@/lib/data/home/serviceCardsData"
import { FaArrowRight } from "react-icons/fa6"
import Link from "next/link"

export function Services({ autoplay = true }) {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={
                autoplay
                    ? [
                        emblaCarouselAutoplay({
                            delay: 4000,
                        }),
                    ]
                    : []
            }
            className="w-8/12 sm:w-9/12 md:w-10/12 lg:w-[90%] xl:w-11/12 max-w-[1270px] mx-auto my-10"
        >
            <CarouselContent>
                {serviceCardsData.map((service, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
                        <div className="p-1">
                            <Card>
                                <CardContent className="p-6 border-gray-200 rounded-lg bg-slate-50 hover:border-gray-300">
                                    <div className={"w-20 h-20 mx-auto flex justify-center items-center rounded-full bg-slate-100"}>
                                        <service.Icon className='font-extrabold' size={52} />
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-xl font-bold xl:text-base text-foreground gradient-blue">{service?.title}</h3>
                                    </div>
                                    <Link href={service.href} className='relative flex items-center gap-1 mt-3 text-sm group hover:text-blue-600'>
                                        <span className='group-hover:pr-1.5 transition-all duration-100'>Learn more</span> <FaArrowRight />
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
