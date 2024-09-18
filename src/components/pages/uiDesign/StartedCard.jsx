import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';

const StartedCard = ({ info }) => {
    const { title, descrip, image } = info || {}
    return (
        <div>
            <Card className='lg:h-[300px] bg-blue-50 items-center p-5'>
                <Image className='mx-auto' src={image} alt='' />

                <div className='text-center'>
                    <CardTitle className='my-5'>{title}</CardTitle>
                    <CardDescription>{descrip}</CardDescription>
                </div>
            </Card>
        </div>
    );
};

export default StartedCard;