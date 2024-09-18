import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';

const TopDataCard = ({ data }) => {
    const { title, descripsion, image } = data || {}
    return (
        <div className='w-full'>
            <Card className='text-center p-5 lg:h-[350px] sm:h-[330px] shadow-lg bg-[#E9F7FF]'>
                <Image className='mx-auto' src={image} alt='' />
                <CardTitle className='my-5'>{title}</CardTitle>
                <CardDescription>{descripsion}</CardDescription>
            </Card>
        </div>
    );
};

export default TopDataCard;