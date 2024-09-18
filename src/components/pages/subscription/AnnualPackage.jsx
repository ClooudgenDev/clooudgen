import { AnnullyPackage } from '@/lib/data/subscription/monthlyPack';
import React from 'react';
import check from '@/assets/images/subscription/checkmark.png'
import cross from '@/assets/images/subscription/cross.png'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
const AnnualPackage = () => {
    return (
        <div>
            <div className='grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-items-center gap-5 min-h-[500px] '>
                {
                    AnnullyPackage?.map((info, indx) =>
                        <div  className='w-full border-2 rounded-lg bg-background' key={indx}>
                            <div className='relative flex pt-6 justify-evenly rounded-t-lg bg-gradient-to-r from-blue-400 to-primary h-[100px] text-background p-2 '>

                                <div className='flex flex-col'>
                                    <h3>{info?.title}</h3>
                                    <p>{info?.pack}</p>
                                </div>
                                <div className='relative flex top-5'>
                                    <h3>${info?.price}</h3>
                                    <p className='relative top-2'>/Annual</p>
                                </div>
                            </div>
                            <div className='px-5'>
                                <ul>

                                    {
                                        info?.availInfo?.map((listInfo) =>
                                            <li className='flex items-center gap-3 my-2' key={listInfo}>
                                                <Image src={check} alt='' />  <span>{listInfo}</span>
                                            </li>
                                        )
                                    }
                                    {
                                        info?.unavailInfo?.map((listInfo) =>
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

export default AnnualPackage;