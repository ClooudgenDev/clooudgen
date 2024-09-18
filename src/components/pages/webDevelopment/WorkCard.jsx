import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import React from 'react';
import Image from 'next/image';
 import { cn } from '@/lib/utils';

const WorkCard = ({ workCards, pStyle, cardBg, cardBorder }) => {
    const { title, description, img } = workCards || {};
    return (

        <div className='relative flex flex-col w-full '>
            <Image className={cn(`relative bg-white rounded-full  w-[80px] -bottom-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10 border-white`, cardBorder)} src={img} alt="hero" />
            <div>
                <Card className={cn(`xl:h-[240px] lg:h-[245px] sm:h-[240px] flex-grow w-full flex flex-col p-5 bg-tertiary`, cardBg)}>
                    
                    <CardTitle className="my-3 xl:my-6 text-center text-gray-50">{title}</CardTitle>
                    <CardDescription className={cn(`text-white text-center`, pStyle)}>{description}</CardDescription>
                </Card>
            </div>
        </div>
    );
};

export default WorkCard;