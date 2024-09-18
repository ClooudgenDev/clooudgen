import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import check from '@/assets/images/subscription/checkmark.png'
import cross from '@/assets/images/subscription/cross.png'
import { MonthlyPackage } from '@/lib/data/subscription/monthlyPack'; 

const MonthPackage = () => {
    return (
        <div>
            <div className='grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-items-center gap-5 min-h-[500px]'>
                {
                    MonthlyPackage?.map((data, index) =>
                        <div className='w-full border-2 rounded-lg bg-background ' key={index}>
                            <div className='relative flex pt-6 justify-evenly rounded-t-lg bg-gradient-to-r from-blue-400 to-primary h-[100px] text-background p-2 '>
                                <div className='flex flex-col'>
                                    <h3>{data?.title}</h3>
                                    <p>{data?.pack}</p>
                                </div>
                                <div className='relative flex top-5'>
                                    <h3>${data?.price}</h3>
                                    <p className='relative top-2'>/Month</p>
                                </div>
                            </div>

                            <div className='px-5'>
                                <ul>

                                    {
                                        data?.availInfo?.map((listInfo) =>
                                            <li className='flex items-center gap-3 my-2' key={listInfo}>
                                                <Image src={check} alt='' />  <span>{listInfo}</span>
                                            </li>
                                        )
                                    }

                                    {
                                        data?.unavailInfo?.map((listInfo) =>
                                            <li className='flex items-center gap-3 my-2' key={listInfo}>
                                                <Image src={cross} alt='' />  <span>{listInfo}</span>
                                            </li>
                                        )
                                    }
                                </ul>
                                <p className='text-xl text-primary'>40Hours/week</p>
                                <div className='grid gap-3 my-5 md:grid-cols-2 justify-items-center '>
                                    <Button>Start Today</Button>
                                    <Button>Request trail</Button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default MonthPackage;