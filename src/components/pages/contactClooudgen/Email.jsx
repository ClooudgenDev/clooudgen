import Image from 'next/image';
import React from 'react';
import email from '@/assets/images/contactClooudgen/email.png'
const Email = () => {
    return (
        <div className='relative my-20'>

            <div className='relative border-foreground border-4 bg-white w-[80px] h-[80px] rounded-full grid justify-center items-center left-36 top-6'>
                <Image src={email} alt='' />
            </div>
            <div className='flex flex-col justify-center items-center bg-white w-[350px] h-[200px] rounded-xl space-y-4'>
                <h3>Email</h3>
                <p>info@clooudgen.com</p>
            </div>
        </div>
    );
};

export default Email;