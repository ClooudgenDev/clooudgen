import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';

const SolutionCard = ({ data }) => {
    const { title, description, image } = data || {}
    return (
        <div>
            <Card className='rounded-[55px] max-w-[397px] xl:h-[500px] bg-cyan-100'>
                <Image src={image} alt='' />

                <div className='p-5 pt-0'>
                    <CardTitle className='mb-5 text-lg tracking-normal md:text-xl text-foreground'>
                        {title}
                    </CardTitle>
                    <CardDescription>
                        {description}
                    </CardDescription>
                </div>
            </Card>
        </div>
    );
};

export default SolutionCard;