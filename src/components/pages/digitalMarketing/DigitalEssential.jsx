import MarketingEssential from '@/lib/data/digitalMarketing/MartekingEssential';
import cardBg from '@/assets/images/DigitalMarketing/Essential/bgCard.png'
import React from 'react';
import Image from 'next/image';

const DigitalEssential = () => {
    return (
        <div className='my-10 lg:my-20'>
            <div className='bg-[#F0F5FF] py-8 mb-10 text-center'>
                <div className='max-w-[700px] heading-2 lg:leading-[150%] mx-auto'>

                    <h2>Here are some points showing why <span className='text-primary'>digital marketing is essential for you.</span> </h2>
                </div>
            </div>

            <div className='container'>
                <div className='grid max-w-sm grid-cols-1 gap-10 my-10 sm:max-w-full xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2'>
                    {
                        MarketingEssential.map((item) => (
                            <div key={item.id} className='max-w-[400px] flex relative flex-col mx-auto shadow bg-gradient-to-b from-blue-100 via-white to-blue-200'>
                                <Image className='w-full' src={cardBg} alt='data' />
                                <div className='absolute flex items-center justify-between w-full gap-3 px-4 py-3 text-white '>
                                    <h4 className='text-lg'>{item.title}</h4>
                                    <Image className='max-w-[70px] relative top-3' src={item.img} alt='data' />
                                </div>
                                <div className='cursor-auto  py-7 px-5 flex flex-col gap-2 sm:h-[320px] h-auto scroll-m-0'>
                                    {item.description}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default DigitalEssential;