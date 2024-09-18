'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

export function SharedCarousel({ children, nextStyle, autoplay, previous, next, ...rest }) {
    return (
        <Carousel
            plugins={
                autoplay
                    ? [
                        Autoplay({
                            delay: 4000,
                        }),
                    ]
                    : []
            }
            opts={{
                align: "center",
                loop: true,
            }} {...rest} className="w-full transition-all ease-linear duration-1000">
            <CarouselContent>
                {Array.isArray(children) ? (
                    children.map((child, index) => (
                        <CarouselItem className="w-full" key={index}>
                            <div className="">
                                {child}
                            </div>
                        </CarouselItem>
                    ))
                ) : (
                    <div className="carousel-item">
                        {children}
                    </div>
                )}
            </CarouselContent>
            <CarouselPrevious className={cn({ 'hidden': !previous })} />
            <CarouselNext className={cn(nextStyle, { 'hidden': !next })} >{next}</CarouselNext>
        </Carousel>
    )
}
