'use client'
import React, { useState } from 'react';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
const QuiriesMarketing = ({ info, openAccordion, setOpenAccordion }) => {
    const { answer, question, id } = info || {}


    const handleAccordionClick = (value) => {
        setOpenAccordion(value === openAccordion ? "0" : value);
        console.log(openAccordion, value)
    };

    return (
        <div>

            <AccordionItem value={id} className='lg:w-[800px]'>
                <AccordionTrigger className={`px-4 text-start no-underline hover:no-underline lg:text-lg md:text-base text-sm font-medium ${openAccordion == id
                    ? 'bg-white  text-primary'
                    : 'bg-white '
                    }`}
                    onClick={() => handleAccordionClick(id)}>{question}</AccordionTrigger>
                <AccordionContent className={`bg-white text-gray-600 lg:w-[800px] text-start p-4`}>
                    {answer}
                </AccordionContent>
            </AccordionItem>

        </div>
    );
};

export default QuiriesMarketing;