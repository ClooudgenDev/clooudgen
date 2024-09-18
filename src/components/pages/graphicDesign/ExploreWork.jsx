import ExploreWork1, { ExploreWork2 } from '@/lib/data/GrapicDesign/ExploreWork';
import TabsData from '@/components/shared/grapicDesign/TabsData';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ExploreWork = () => {
    return (

        <div className='container my-20 '>
            <Link href='/project-album?tab=graphicDesign'> <Button className='flex justify-center py-5 mx-auto text-xl text-center'>Explore Our Work</Button> </Link>
        </div>
    );
};

export default ExploreWork;