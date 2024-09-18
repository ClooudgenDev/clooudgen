import { Button } from '@/components/ui/button';
import React from 'react';
import mail from '@/assets/images/software/mail.png'
import whatsapp from '@/assets/images/software/whatsapp.png'
import call from '@/assets/images/software/call.png'
import Image from 'next/image';
const SubsContact = () => {
    return (
        <div className='lg:h-[300px] bg-tertiary flex flex-col justify-center md:my-20 my-10 '>
            <p className='container py-5 text-xl font-medium text-center lg:text-2xl text-background'>If you&apos;re unsure about how to begin your website project, feel free to reach out to us at <span className='text-yellow-300 whitespace-nowrap'>+880 1531-770084</span>  between <span className=' whitespace-nowrap'>8:30 AM</span> and <span className=' whitespace-nowrap'>9:00 PM.</span> Alternatively, you can initiate a live chat. Our live chat support is accessible <span className=' whitespace-nowrap'>24/7.</span></p>
            <div className='flex-col justify-center gap-5 mx-5 my-3 lg:flex lg:flex-row lg:mx-0'>
                    <Button className='w-full mb-3 uppercase bg-background hover:bg-white text-foreground lg:mb-0 lg:mr-3 lg:w-auto effect-blue'><Image className='w-[120px]' src={mail} alt=''/></Button>
                    <Button className='w-full mb-3 uppercase bg-background hover:bg-white text-foreground lg:mb-0 lg:mx-3 lg:w-auto effect-blue'><Image  className='w-[120px]' src={whatsapp} alt=''/></Button>
                    <Button className='w-full uppercase bg-background hover:bg-white text-foreground lg:w-auto effect-blue'><Image  className='w-[120px]' src={call} alt=''/></Button>
                </div>
        </div>
    );
};

export default SubsContact;