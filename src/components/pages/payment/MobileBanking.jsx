import ZoomIn from '@/components/shared/animation/ZoomIn';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';
import bkash from '@/assets/images/payment/bkash.svg'
import nagad from '@/assets/images/payment/nagad.svg'
import rocket from '@/assets/images/payment/rocket.svg'
import brac from '@/assets/images/payment/brac.svg'
import dbbl from '@/assets/images/payment/dbbl.svg'
import islamibank from '@/assets/images/payment/islamibank.svg'
import asia from '@/assets/images/payment/asia.svg'
import master from '@/assets/images/payment/master.svg'
import paypal from '@/assets/images/payment/paypal.svg'
import visa from '@/assets/images/payment/visa.svg'
import amex from '@/assets/images/payment/amex.svg'
import Image from 'next/image';

const MobileBanking = () => {
    return (
        <div className='container hidden my-10 md:my-20 sm:block'>
            <div>
                <ZoomIn>
                    <div className='relative text-center'>

                        <div>
                            <h2 className="section-heading | font-bold text-center inline-block pb-4 px-7 sm:px-10 border-b-2 uppercase">
                                Our Payment Method
                            </h2>
                        </div>
                        {/* Animation */}

                        <div >
                            <div className='absolute bottom-0 -translate-x-1/2 border-b-2 border-primary w-60 left-1/2'></div>
                            <div className='w-4 h-4 border-2 border-primary rounded-full bg-white absolute -translate-x-1/2 left-1/2 -bottom-1.5 animate-pulsex'></div>
                        </div>
                        {/* Animation */}

                    </div>
                </ZoomIn>
                <p className='mx-auto my-5 text-center lg:w-1/2'>Choose your preferred payment method. Secure, convenient options tailored to your needs. Simplify transactions effortlessly.</p>
            </div>
            <div className='flex justify-center'>
                <Tabs defaultValue="mobileBanking" className="container mx-0 my-8 md:mx-auto">
 
                    <TabsList className='w-full py-8 space-x-2 text-primary'>
                        <TabsTrigger className='hover:bg-primary hover:text-background text-foreground data-[state=active]:bg-primary data-[state=active]:text-background h-12 border w-1/2' value="mobileBanking">
                            <p>Mobile Banking</p>
                        </TabsTrigger>
                        <TabsTrigger className='hover:bg-primary hover:text-background text-foreground data-[state=active]:bg-primary data-[state=active]:text-background h-12 border w-1/2' value="bankTransfer">
                            <p>Bank Transfer</p></TabsTrigger>
                        <TabsTrigger className='hover:bg-primary hover:text-background text-foreground data-[state=active]:bg-primary data-[state=active]:text-background h-12 border w-1/2' value="international">
                            <p>International Payment</p></TabsTrigger>

                    </TabsList>

                    <TabsContent className='grid gap-5 justify-items-center md:grid-cols-3 sm:grid-cols-2 ' value="mobileBanking">

                        <Image className='w-[500px] border-2 rounded-xl' src={bkash} alt='' />
                        <Image className='w-[500px] border-2 rounded-xl' src={nagad} alt='' />
                        <Image className='w-[500px] border-2 rounded-xl' src={rocket} alt='' />

                    </TabsContent>
                    <TabsContent className='grid gap-5 justify-items-center md:grid-cols-3 sm:grid-cols-2 ' value="bankTransfer">

                        <Image className='w-[500px] border-2 rounded-xl' src={asia} alt='' />
                        <Image className='w-[500px] border-2 rounded-xl' src={brac} alt='' />
                        <Image className='w-[500px] border-2 rounded-xl' src={dbbl} alt='' />
                        <Image className='w-[500px] border-2 rounded-xl' src={islamibank} alt='' />

                    </TabsContent>
                    <TabsContent className='grid gap-5 justify-items-center md:grid-cols-3 sm:grid-cols-2 ' value="international">

                        <Image className='w-[500px] border-2 rounded-xl' src={master} alt='' />
                        <Image className='w-[500px] border-2 rounded-xl' src={paypal} alt='' />
                        <Image className='w-[500px] border-2 rounded-xl' src={visa} alt='' />
                        <Image className='w-[500px] border-2 rounded-xl' src={amex} alt='' />

                    </TabsContent>

                </Tabs>
            </div>


        </div>
    );
};

export default MobileBanking;