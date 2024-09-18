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

const PaymentMethod = () => {
    return (
        <div className='container'>
            <div className='grid gap-5 sm:grid-cols-2 sm:hidden justify-items-center'>
                <div className='space-y-5 border-2  h-[200px] px-3 '>
                    <h3 className='my-5 text-center uppercase '>Mobile Banking</h3>
                    <div className='grid grid-cols-3 gap-3 justify-items-center'>
                        <Image className='w-[100px] border-2' src={bkash} alt='' />
                        <Image className='w-[100px] border-2' src={nagad} alt='' />
                        <Image className='w-[100px] border-2' src={rocket} alt='' />
                    </div>
                </div>
                <div className='px-3 space-y-5 border-2  h-[200px]'>
                    <h3 className='my-5 text-center uppercase'>Bank Transfer</h3>
                    <div className='grid grid-cols-3 gap-3 !justify-items-center !place-content-center !place-items-center '>
                        <Image className='w-[100px] border-2' src={brac} alt='' />
                        <Image className='w-[100px] border-2' src={dbbl} alt='' />
                        <Image className='w-[100px] border-2' src={islamibank} alt='' />
                        <Image className='w-[100px] border-2' src={asia} alt='' />
                    </div>
                </div>
                <div className='px-3 space-y-5 border-2 h-[200px]'>
                    <h3 className='my-5 text-center uppercase '>International</h3>
                    <div className='grid grid-cols-3 gap-3 justify-items-center'>
                        <Image className='w-[100px] border-2' src={master} alt='' />
                        <Image className='w-[100px] border-2' src={paypal} alt='' />
                        <Image className='w-[100px] border-2' src={visa} alt='' />
                        <Image className='w-[100px] border-2' src={amex} alt='' />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PaymentMethod;