import DigitalProcessdata from '@/lib/data/digitalMarketing/DigitalProcess';
import DigitalProcessBg from '@/assets/images/DigitalMarketing/process.png';
import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const DigitalProcess = () => {
    return (
        <div className='my-10 md:my-20 lg:mt-28 '>

            <div className='bg-[#F0F5FF] py-8 mb-10 text-center'>
                <div className='max-w-[900px] flex flex-col gap-4 px-3 lg:leading-[150%] mx-auto'>

                    <h2 className='heading-2'>Our Digital Marketing Process </h2>
                    <p className='text-primary description-1'>At CloodGen, we believe in a strategic and results-driven approach to digital marketing. Our process is meticulously designed to ensure that we deliver customized solutions that meet your unique business goals and drive measurable success. Here&apos;s how we work</p>

                </div>
            </div>
            <div className='container grid grid-cols-1 gap-10 my-10 lg:grid-cols-3 sm:grid-cols-2 lg:gap-3'>
                {
                    DigitalProcessdata.map((item, index) => (
                        <>
                            <div className={`hidden-md-to-xs  ${![1, 2, 7, 8, 3].includes(item.id) && 'hidden'}`}></div>

                            <div key={item.id} className='bg-gradient-to-b from-blue-100 via-white to-blue-200 sm:max-w-[400px] flex relative flex-col mx-auto'>

                                <div className='bg-[#002952] w-full h-12  flex justify-center items-center'>
                                    <h4 className='text-center text-white ' >{item.title}</h4>
                                </div>

                                <div className='cursor-auto scrollbar-hidden p-7 flex flex-col gap-2 h-[200px] overflow-auto scroll-m-0'>
                                    {item.description}
                                </div>

                                <div className={cn('absolute hidden lg:block', { ' -bottom-10 -translate-x-1/2 left-1/2': index === 0 }, { ' left-[97%] -translate-y-1/2 top-1/2': index === 1 }, { ' left-[97%] -translate-y-1/2 top-1/2': index === 3 }, { ' left-[97%] -translate-y-1/2 top-1/2': index === 5 }, { ' right-[97%] -translate-y-1/2 top-1/2': index === 2 }, { ' right-[97%] -translate-y-1/2 top-1/2': index === 4 }, { ' right-[97%] -translate-y-1/2 top-1/2': index === 6 }, { ' -top-10 -translate-x-1/2 left-1/2': index === 7 },)}>
                                    <div className='relative z-10 border rounded-full w-14 h-14 border-foreground'>
                                        <div className='absolute top-0 left-0 w-12 p-3 mx-auto text-center rounded-full -z-0 bg-secondary text-background ' >
                                            {index}
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className={cn(`hidden-md-to-xs relative mx-auto`, { 'hidden': item.id !== 4 })}>
                                <div className='absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 w-0.5 h-[295%] border-x border-primary border-dashed -z-10' />
                                <div className='absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 w-[300%] h-0.5 border-y border-primary border-dashed -z-10' />

                                <div className='absolute hidden lg:block -translate-x-1/2 left-1/2 w-[225%] xl:w-[245%] h-0.5 -translate-y-1/2 top-1/2 rotate-10 xl:rotate-6 -z-10'>
                                    <div className='rotate-45 border-dashed border-y border-foreground -z-10' />
                                </div>
                                <div className='absolute hidden lg:block -translate-x-1/2 left-1/2 w-[225%] xl:w-[245%] h-0.5 -translate-y-1/2 top-1/2 -rotate-10 xl:-rotate-6 -z-10'>
                                    <div className='-rotate-45 border-dashed border-y border-foreground -z-10' />
                                </div>

                                <Image className='max-w-[290px] w-full lg:w-[80%] xl:w-full mx-auto' src={DigitalProcessBg} alt='data' />
                            </div>
                        </>

                    ))
                }
            </div>
        </div>
    );
};

export default DigitalProcess;