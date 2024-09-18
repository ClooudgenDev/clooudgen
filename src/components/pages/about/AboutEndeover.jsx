import { AboutEnd, AboutEnd2 } from '@/lib/data/about/EndeoverData';
import React from 'react';
import icon from '@/assets/images/about/Polygon.png'
import Image from 'next/image';

const AboutEndeover = () => {
    return (
        <div className='container mt-20'>
            <div className='md:text-center lg:max-w-[900px] mx-auto space-y-5'>
                <h1>As We Are New To This Endeavor</h1>
                <p className='font-medium'>
                    As a new IT services provider, we aim to revolutionize the industry with innovative solutions tailored to modern needs. Our goal is to leverage the latest technology to provide a seamless experience that empowers businesses and individuals alike. With a focus on innovation and reliability, we strive to exceed expectations, ensuring our customers stay ahead of the curve in today&apos;s dynamic digital environment.</p>
            </div>

            <div className='my-10 xl:flex'>
                <div className='relative mt-10'>
                    {
                        AboutEnd?.map((info, indx) =>
                            <div className='flex items-center sm:max-w-[700px] mx-auto' key={indx}>

                                <p className='relative z-10 items-center justify-center hidden text-white border rounded-full shadow-lg border-primary sm:border-r-0 bg-primary sm:h-10 sm:w-10 md:flex bottom-10 left-[82px] sm:block'>{info?.id}</p>
                                <p className='border border-primary rounded-md rounded-r-none sm:border-r-0 sm:h-20 flex flex-col justify-center p-3 my-5 sm:w-[550px] relative bg-white sm:left-[69.5px] '>
                                    {info?.title}
                                </p>
                                <Image className='h-[100px] w-[100px] sm:block hidden' src={icon} alt='' />


                            </div>
                        )
                    }
                </div>
                <div className='mb-10 lg:mt-24'>
                    {
                        AboutEnd2?.map((info, indx) =>
                            <div className='flex items-center max-w-[700px] mx-auto' key={indx}>
                                <Image className='h-[100px] w-[100px] sm:block hidden' src={icon} alt='' />
                                <p className='border border-primary rounded sm:rounded-l-none sm:border-l-0 sm:h-20 flex flex-col justify-center sm:text-end p-3 my-5 sm:w-[550px] relative bg-white sm:-left-[69.5px]'>
                                    {info?.title}
                                </p>
                                <p className='relative z-10 items-center justify-center hidden w-10 h-10 text-base text-white rounded-full shadow-lg bg-primary md:flex bottom-10 -left-[82px] sm:block'>{info?.id}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default AboutEndeover;