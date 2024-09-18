'use client'

import { useState } from 'react';
import FadeUp from '@/components/shared/animation/FadeUp';
import ZoomIn from '@/components/shared/animation/ZoomIn';
import ServiceCard1 from '@/components/shared/card/ServiceCard1';
import serviceCardsData from '@/lib/data/home/serviceCardsData';
import { Button } from '@/components/ui/button';
import Team from './Team';

const Services = () => {
    const [limit, setLimit] = useState(8)
    const remaining = serviceCardsData.length;

    return (
        <section className="services | container mt-8">
            <div className='my-20'>

                {/* <h3 className="section-topheading | text-blue-600 uppercase text-center">
                    Ideal solutions for you
                </h3> */}
                <ZoomIn>
                    <div className='relative text-center'>
                        <h2 className="section-heading | font-bold text-center inline-block pb-4 px-7 sm:px-10 border-b-2 gradient-blue capitalize">
                            What we do
                        </h2>
                        {/* Animation */}
                        <div className='absolute bottom-0 -translate-x-1/2 border-b-2 border-primary w-60 left-1/2'></div>
                        <div className='w-4 h-4 border-2 border-primary rounded-full bg-white absolute -translate-x-1/2 left-1/2 -bottom-1.5 animate-pulsex'></div>
                        {/* Animation */}

                    </div>
                </ZoomIn>
            </div>

            <Team />

            <div className="">
                {" "}
                {/* dashboard summary */}
                <div className="grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center justify-items-center">
                    {serviceCardsData.slice(0, limit).map((card, index) => (
                        <FadeUp key={index}>
                            <ServiceCard1
                                idx={index}
                                href={card.href}
                                Icon={card.Icon}
                                IconBgColor={card.IconBgColor}
                                IconStrokeColor={card.IconStrokeColor}
                                title={card.title}
                                description={card.description}
                                count={card.count}
                            />
                        </FadeUp>

                    ))}

                </div>
                <FadeUp>
                    <div className='flex justify-center pt-10'>
                        <Button id='about' onClick={() => setLimit(limit === 8 ? remaining : 8)}>{limit === remaining ? 'Show Less' : 'Show More'}</Button>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
};

export default Services;