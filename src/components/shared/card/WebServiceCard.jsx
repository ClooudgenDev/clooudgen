/*
Purpose:
The purpose of this component is to display a card for a web service, 
including information such as title, description, and an optional CTA button.

Props:
- array: Array of web service data
- index: Index of the current web service data in the array
- service: Object containing information about the web service
- counter: Boolean indicating whether to display a counter
- style: Additional styles for the card
- description: Description of the web service
- CTA: Boolean indicating whether to display a Call to Action (CTA) button
- sliderView: Boolean indicating whether the card is part of a slider view
- currentIndex: Index of the current card in the slider view

Usage:
<WebServiceCard
    array={array}
    index={index}
    service={service}
    counter={counter}
    style={style}
    description={description}
    CTA={CTA}
    sliderView={sliderView}
    currentIndex={currentIndex}
/>
*/




import { Button } from '@/components/ui/button';
import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";


const WebServiceCard = (props) => {

    const {
        isEvenIndex,
        array,
        index,
        service,
        counter,
        style,
        description,
        CTA,
        sliderView,
        currentIndex,
    } = props

    return (
        <div className={`
        md:!bg-[#ffffff] shadow-md text-left
        ${isEvenIndex && '!bg-[#a9d6ff] md:!bg-[white]'}
        ${array?.length - 1 === index ? "lg:col-span-3 lg:w-[32%] lg:mx-auto  flex flex-col md:gap-9 sm:gap-7 min-h-[300px] gap-6 p-8 rounded-lg" :
                'flex flex-col md:gap-9 sm:gap-7 min-h-[300px] gap-6 p-8 rounded-lg'} // Conditional classes based on whether it's the last card in the array
        ${sliderView && `transition-all duration-700 absolute 
        ${currentIndex === index ? 'z-30 visible translate-x-0 opacity-100' : 'opacity-0 invisible translate-x-36 md:translate-x-0 md:opacity-100 md:visible'} md:static`} // Slider animation classes based on current index and slider view
    `}>
            {counter && // Render service ID if counter prop is true
                <h2 className='font-bold md:text-3xl sm:text-2xl text-xl'>{service?.id}</h2>
            }
            {/* Render service title  description*/}
            <h1 className='md:text-3xl sm:text-2xl text-xl font-semibold'>{service?.title}</h1>
        {/* make odd card text black in small device */}
            <p className={`
        ${isEvenIndex && 'text-[black] md:text-[#707070]'}
        ${description || 'sm:text-[15px] lg:text-[17px]'} text-[#707070]  leading-7`}> {service?.description.slice(0,140)}</p>
            {CTA && // Render CTA button if CTA prop is true
                <div className='text-left'>
                    <Button className='bg-[#f4f4f4] group flex gap-1 text-left' variant='ghost'>
                        Explore Trending <IoIosArrowRoundForward className='text-2xl group-hover:translate-x-2 transition-all duration-300' />
                    </Button>
                </div>
            }
        </div>
    );
};

export default WebServiceCard;