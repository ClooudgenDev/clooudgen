'use client'
import React, { useState } from 'react';
import question from '@/assets/images/uiux/question2.png'
import Image from 'next/image';
import { UiUxInquiries } from '@/lib/data/Ui/CommonQuiries';
import { Accordion } from '@/components/ui/accordion';
import QuiriesAccordin from './QuiriesAccordin';

const UiUxQuiries = () => {
    const [openAccordion, setOpenAccordion] = useState("0");

    return (
        <div className='container mt-5 mb-10 '>
            <div className='flex items-center justify-center '>
                <h1 className='heading-2'>Common Inquiries about UI/UX Design</h1>
                <Image className=' relative right-10 w-[200px] md:block hidden' src={question} alt='' />
            </div> 

            <div className='mt-7'>
            <Accordion type="single" collapsible className="w-full">
            {
                    UiUxInquiries?.map((info, index) =>
                        <QuiriesAccordin key={index} setOpenAccordion={setOpenAccordion} openAccordion={openAccordion} info={info}>
                        </QuiriesAccordin>)
                }
            </Accordion>

            </div>
        </div>
    );
};

export default UiUxQuiries;