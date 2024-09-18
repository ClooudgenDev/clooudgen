import QualityData from '@/lib/data/home/Quality';
import React from 'react';

const Quality = () => {
    return (
        <div className='bg-gray-200'>
                    <div className='container grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between py-20 gap-10 flex-wrap lg:mt-32 my-20'>
            {QualityData.map((item,idx)=>(
                <div key={idx} className='flex rounded-lg flex-col bg-white   max-w-[430px] gap-3 shadow-lg p-7'>
                    <div className='flex gap-4 items-center'>
                         <item.icon className='sm:text-3xl text-2xl font-semibold'/>
                         <p className='sm:text-2xl text-xl font-semibold'>{item.title}</p>
                    </div>
                    <p className='sm:text-base text-sm text-gray-500'>{item.description}</p>
                </div>
            ))}
        </div>
             </div>

    );
};

export default Quality;