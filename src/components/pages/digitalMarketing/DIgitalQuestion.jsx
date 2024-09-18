'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import questionMark from '@/assets/images/DigitalMarketing/Qna.png'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import QuiriesMarketing from './QuiriesMarketing';
import { DigitalQueryData } from '@/lib/data/digitalMarketing/DigitalQuerydata';

const DIgitalQuestion = () => {
    const [openAccordion, setOpenAccordion] = useState("0");
    return (
        <div className='mt-20 mb-10 digital-gradient py-10'>
            <div className='container flex items-center lg:flex-row flex-col justify-between lg:gap-0 gap-8 relative' >
            <Image  src={questionMark}  className='opacity-35 max-w-[500px] lg:flex hidden  justify-start items-start absolute' alt='image'/>
                <div className='max-w-[450px] '>

                <h2 className='heading-2'>Common Inquiries about <span className='text-[#3A61B0]'> Digital Marketing</span></h2>
                </div>
                 <div className='lg:w-[800px]'>
                 <Accordion type="single" collapsible className="w-full">
            {
                    DigitalQueryData?.map((info, index) =>
                        <QuiriesMarketing key={index} setOpenAccordion={setOpenAccordion} openAccordion={openAccordion} info={info}>
                        </QuiriesMarketing>)
                }
            </Accordion>
                 </div>
            </div>
        </div>
    );
};

export default DIgitalQuestion;