'use client'
import { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
const AboutAccordin = ({ info, openAboutAccordion, setOpenAboutAccordion }) => {
    const { question, answer, id } = info || {}

    const handleAccordionClick = (value) => {
        setOpenAboutAccordion(value === openAboutAccordion ? "0" : value);
    };

    return (
        <div className='my-1 '>
            <AccordionItem value={id}>
                <AccordionTrigger className={`px-4 ${openAboutAccordion === id
                    ? 'bg-blue-100 text-primary'
                    : 'bg-secondary text-white'
                    }`}
                    onClick={() => handleAccordionClick(id)}>{question}
                </AccordionTrigger>
                <AccordionContent className='bg-blue-50 p-4'>
                    {answer}
                </AccordionContent>
            </AccordionItem>
        </div>
    );
};

export default AboutAccordin;