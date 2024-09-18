import FadeUp from '@/components/shared/animation/FadeUp';
import GrapicCard from '@/components/shared/card/GrapicCard';
import GrapicServiceData from '@/lib/data/GrapicDesign/GrapicService';
import React from 'react';

const GrapicService = () => {
    return (
        <div className='container my-20 space-y-3 lg:mt-36 '>
            <h1 className='text-center heading-2'>Comprehensive Graphic Design Services</h1>
            <p className='text-center  max-w-[800px] md:mx-auto '>Explore our comprehensive range of services designed to enhance your brand&apos;s presence and engagement</p>
            <div className='grid grid-cols-1 gap-5 p-3 mt-10 md:mt-12 sm:mt-8 md:p-0 md:gap-10 xsm:gap-8 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2'>
                {
                    GrapicServiceData.map((item,idx)=>(
                            <FadeUp key={idx}>
                                <GrapicCard item={item}/>
                            </FadeUp>
                            
                        
                    ))
                }
            </div>
        </div>
    );
};

export default GrapicService;