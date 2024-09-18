'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import FadeUp from '../animation/FadeUp';

const TabsData = ({data}) => {
   const [selectedTab,setSelectedTab] = useState(0)
    return (
        <>
           <div className='flex-wrap justify-center hidden gap-4 md:flex sm:gap-8 '>
             {
                data.map((tabTitle)=>(
                    <div key={tabTitle.id} onClick={()=>{setSelectedTab(tabTitle.id)}} className={`${selectedTab == tabTitle.id ? 'text-primary':''} lg:text-lg md:text-base text-sm font-semibold flex text-nowrap cursor-pointer`}>
                      {tabTitle.title}
                    </div>
                ))
             }
           </div>
           <div className='grid justify-center grid-cols-2 md:hidden '>
             {
                data.map((tabTitle)=>(
                    <div key={tabTitle.id} onClick={()=>{setSelectedTab(tabTitle.id)}} className={`${selectedTab == tabTitle.id ? 'text-white bg-primary':'text-white bg-foreground'} lg:text-lg md:text-base text-sm font-semibold   px-3 py-2  cursor-pointer text-center`}>
                      {tabTitle.title}
                    </div>
                ))
             }
           </div>
           <div className='grid grid-cols-1 gap-10 mt-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center'>
                    {
                        data[selectedTab]?.data.map((tabData,idx)=>(
                          <FadeUp key={idx}>
                            <div  className='mx-auto'>
                                <Image src={tabData.img} alt={'image'}/>
                            </div>
                          </FadeUp>

                        ))
                    }
           </div>
        </>

    );
};

export default TabsData;