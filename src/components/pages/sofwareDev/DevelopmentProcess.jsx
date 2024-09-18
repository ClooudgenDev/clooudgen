'use client'
import React, { useState } from 'react';
import icon from '@/assets/images/software/processIcon.png'
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import SoftwareProcessData from '@/lib/data/softwareDevelopment/SoftwareProcess';
const DevelopmentProcess = () => {
    const [tabNumber, setTabNumber] = useState(0)
    return (
        <div className='container my-10 '>
            <div className='flex items-center justify-center'>
                <h1 className='relative text-center lg:text-5xl lg:left-32'>
                    Our Software Development Process
                </h1>
                <Image className='lg:w-[200px] lg:block hidden' src={icon} alt='' />
            </div>

            <div className='gap-10 mt-10 lg:flex'>
                <div className='lg:w-1/2'>
                    {
                        SoftwareProcessData.map((item, idx) => (
                            <Card onClick={() => { setTabNumber(idx) }} key={idx} className={`lg:h-[80px] !lg:w-full shadow-lg py-3  text-center flex flex-col justify-center items-center ${idx === tabNumber ? 'text-white bg-primary' : 'bg-blue-50'} cursor-pointer  `}>
                                <p>{idx + 1}</p>
                                <p>{item.title}</p>
                            </Card>
                        ))
                    }
                </div>
                {/* <ProcessCard /> */}
                <Card className='flex flex-col items-center justify-center p-10 my-5 shadow-lg lg:my-0 lg:w-1/2 bg-blue-50'>
                    <p>
                        {SoftwareProcessData[tabNumber].description}
                    </p>

                </Card>
            </div>
        </div>
    );
};

export default DevelopmentProcess;