import Image from 'next/image';
import React from 'react';
import img from '@/assets/images/webdevelopment/Group 181.png'
import { TopData } from '@/lib/data/webDevelopment/webTopData';
import TopDataCard from './TopDataCard';
import ZoomIn from '@/components/shared/animation/ZoomIn';
import FadeIn from '@/components/shared/animation/FadeIn';
import FadeUp from '@/components/shared/animation/FadeUp';


const WebDevelopmentTop = () => {
    return (
        <div className='container my-10 mb-0 md:my-20'>

            <FadeIn>
                <div className='relative '>
                    <Image className='mx-auto lg:w-[300px] w-[200px]' src={img} alt=''></Image>
                    <div className='absolute flex justify-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' >
                        <h2 className=' border-4 rounded-full text-center  lg:w-[875px] w-[300px] py-3 border-primary bg-cover bg-center bg-blue-50 '>Top-tier Technical Support</h2>
                    </div>
                </div>
            </FadeIn>

            <div className='container grid grid-cols-1 gap-5 my-10 mb-0 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 lg:mt-20'>
                {
                    TopData?.map((data, index) =>
                        <FadeUp  key={index}>
                            <TopDataCard data={data}></TopDataCard>
                        </FadeUp>)
                }
            </div>
        </div>
    );
};

export default WebDevelopmentTop;