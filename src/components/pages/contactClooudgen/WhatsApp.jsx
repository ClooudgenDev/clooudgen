import Image from 'next/image';
import React from 'react';
import whatsapp from '@/assets/images/contactClooudgen/whatsapp.png'
const WhatsApp = () => {
    return (
        <div className='relative my-20'>
            <div className='relative border-foreground border-4 bg-white w-[80px] h-[80px] rounded-full grid justify-center items-center left-36 top-6'>
                <Image src={whatsapp} alt='' />
            </div>
            <div className='flex flex-col justify-center items-center bg-white w-[350px] h-[200px] rounded-xl space-y-4'>
                <h3>What&apos;s App</h3>
                <p>+880 1531-770084</p>
            </div>
        </div>
    );
};

export default WhatsApp;