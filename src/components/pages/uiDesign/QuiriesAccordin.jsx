'use client'
import React, { useState } from 'react';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
const QuiriesAccordin = ({ info, openAccordion, setOpenAccordion }) => {
    const { answer, question, id } = info || {}
 
    const handleAccordionClick = (value) => {
        setOpenAccordion(value === openAccordion ? "0" : value);
        console.log(openAccordion, value)
    };

    return (
        <div className='my-1'>

            <AccordionItem value={id}>
                <AccordionTrigger className={`px-4 text-start lg:text-lg md:text-base text-sm font-medium ${openAccordion == id
                    ? 'bg-blue-100 text-primary'
                    : 'bg-secondary text-white'
                    }`}
                    onClick={() => handleAccordionClick(id)}>{question}</AccordionTrigger>
                <AccordionContent className={`bg-blue-50  p-4`}>
                    {answer}
                </AccordionContent>
            </AccordionItem>

        </div>
    );
};

export default QuiriesAccordin;