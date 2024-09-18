
"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import React from 'react';

const MobProjctTab = () => {
    return (
        <div className='flex justify-center sm:hidden'>
            <Tabs defaultValue="webDevelopment" className="mx-0 md:mx-auto my-8 max-w-[470px] ">

                <TabsList className='container flex w-full py-8  max-h-32 md:shadow-md md:border md:rounded-full md:inline-flex text-primary sm:flex-row md:max-h-16 '>
                    <TabsTrigger className='hover:bg-primary rounded-full hover:text-background text-foreground data-[state=active]:bg-primary data-[state=active]:text-background h-10 sm:text-md text-sm  w-full ' value="webDevelopment">Web Development</TabsTrigger>
                    <TabsTrigger className='hover:bg-primary rounded-full hover:text-background text-foreground data-[state=active]:bg-primary data-[state=active]:text-background h-10 sm:text-md text-sm   w-full' value="appDevelopment">App Development</TabsTrigger>
                </TabsList>
                <TabsList className='flex justify-center'>
                    <TabsTrigger className='hover:bg-primary rounded-full hover:text-background text-foreground data-[state=active]:bg-primary data-[state=active]:text-background h-10 sm:text-md text-sm   w-1/2 ' value="graphicDesign">Graphics Design</TabsTrigger>
                </TabsList>


                <div className='mt-10'>
                    <TabsContent className='w-full px-5 py-5 text-center' value="webDevelopment">

                        <p >Web Development Content Not upload yet</p>

                    </TabsContent>
                    <TabsContent className='w-full px-5 py-5 text-center' value="appDevelopment">

                        <p >App Development Content Not upload yet </p>

                    </TabsContent>
                    <TabsContent className='w-full px-5 py-5 text-center' value="graphicDesign">

                        <p >Graphics Design Content Not upload yet</p>

                    </TabsContent>
                </div>
            </Tabs>
        </div>
    );
};

export default MobProjctTab;