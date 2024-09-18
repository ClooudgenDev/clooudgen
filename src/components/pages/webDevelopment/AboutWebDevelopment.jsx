'use client'
import Image from 'next/image';
import AboutAccordin from './AboutAccordin';
import { AboutData } from '@/lib/data/webDevelopment/aboutAccordinData';
import about from '@/assets/images/webdevelopment/question mark - 7th section.png'
import { useState } from 'react';
import { Accordion } from '@/components/ui/accordion';

const AboutWebDevelopment = () => {
    const [openAboutAccordion, setOpenAboutAccordion] = useState("0");

    return (
        <div className='container my-10 md:my-20'>
            <div className="relative">
                <Image className="mx-auto lg:w-[600px] max-h-[350px] object-cover object-top" src={about} alt="" />
                <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <h1 className="w-full text-center section-heading sm:w-4/5 md:w-full gradient-blue heading-2">
                        Common Inquiries about Web Development
                    </h1>
                </div>
            </div>
            <div className="">
                <Accordion type="single" collapsible className="w-full">
                    {AboutData?.map((info, index) => (
                        <AboutAccordin key={index} info={info}
                            setOpenAboutAccordion={setOpenAboutAccordion} openAboutAccordion={openAboutAccordion}
                        ></AboutAccordin>
                    ))}
                </Accordion>

            </div>
        </div>
    );
};

export default AboutWebDevelopment;