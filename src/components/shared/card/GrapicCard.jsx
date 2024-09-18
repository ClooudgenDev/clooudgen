import { Card } from '@/components/ui/card';
import React from 'react';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import FadeUp from '../animation/FadeUp';

const GrapicCard = ({item}) => {
    return (
            <Card className='w-full shadow-md border border-[#409FD5] max-w-[400px]  mx-auto flex flex-col gap-3 rounded-t-md sm:mt-10'>
            <Image className=' mx-auto w-[150px] p-4' src={item.img} alt='Image1'/>
            <div className='flex flex-col  justify-start rounded-b-md gap-6 bg-gradient-to-b from-[#2C6994] h-[210px] p-5 to-[#409FD5]'>
            <h3 className='font-semibold text-center text-white '>{item.title}</h3>
            <p className='text-center text-white sm:text-base'>{item.description}</p>
            </div>
           
        </Card>

    );
};

export default GrapicCard;