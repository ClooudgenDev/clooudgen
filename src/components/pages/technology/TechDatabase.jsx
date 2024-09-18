import DatabaseData from '@/lib/data/Technology/Database';
import Image from 'next/image';
import React from 'react';

const TechDatabase = () => {
    return (
        <div>
   <div className='py-20 bg-[#fff7ed]'>
            <h2 className='text-center heading-2'>We are using multiple databases</h2>
            <p className='my-3 text-sm font-semibold text-center text-gray-500 lg:text-lg md:text-base'>MongoDB | MySql | Oracle | Redis</p>
            <p className='text-center description-1'>Here&apos;s an overview of each database and why you might use them</p>

        </div>
                    <div className='flex flex-col '>
                    {
                      DatabaseData.map((item,idx)=>(
                          <div key={idx} style={{backgroundColor:item.color}} className='py-10 '>
                            <div className={`container flex  justify-between items-center ${item.direction === 'right' ? 'flex-row-reverse':''}`}>
                            <div className={` flex flex-col ${item.direction === 'right' ? 'items-end':''} gap-6`}>
                            <div className={`flex items-center gap-3 ${item.direction === 'right' ? 'items-end flex-row-reverse':''}`}>
                                   <Image className='max-w-[50px]' src={item.img}  alt='technology'/>
                                   <h2 className='heading-2'>{item.title}</h2>
                              </div>

                              <div className='flex max-w-[600px] flex-col gap-5'>
                                     {
                                        item.description.map((listItem,idx)=>(
                                            <p key={idx} className={`text-sm font-medium lg:text-lg md:text-base text-gray-500 ${item.direction === 'right' ? 'text-end':''}`}>{listItem}</p>
                                        ))
                                     }     
                               </div>
                            </div>
                            <div className='hidden lg:flex'>
                                <Image  src={item.img} alt='img'/>
                                </div> 
                            </div>
                           

                          </div>
                      ))
                    }
                  </div>
        </div>
     
    );
};

export default TechDatabase;