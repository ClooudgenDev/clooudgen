import React from 'react';
import Image from 'next/image';
import email from '@/assets/images/contactClooudgen/email.png'
import whatsapp from '@/assets/images/contactClooudgen/whatsapp.png'
import livechat from '@/assets/images/contactClooudgen/livechat.png'
import contact from '@/assets/images/contactClooudgen/contact.png'
import { Button } from '@/components/ui/button';
const ContactCard = () => {
    return (
        <div className='container mt-32 my-20'>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 '>
                <div className='flex flex-col items-center justify-center'>
                    <div className='relative border-foreground border-4 bg-white w-[80px] h-[80px] rounded-full grid justify-center items-center  top-6'>
                        <Image src={contact} alt='' />
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white w-[300px] h-[250px] space-y-4 rounded-xl '>
                        <h3 className='text-secondary'>Contact</h3>
                        <div className='text-center px-3'>
                            <p >If you need any help, please feel free to call us.</p>
                            <a href="tel:+880 1531-770084"><p>+880 1531-770084</p></a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='relative border-foreground border-4 bg-white w-[80px] h-[80px] rounded-full grid justify-center items-center top-6 '>
                        <Image src={email} alt='' />
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white w-[300px] h-[250px] rounded-xl space-y-4 text-center'>
                        <h3 className='text-secondary'>Email</h3>
                        <div className='flex flex-col'>
                            <a className='hover:underline hover:text-primary' href="mailto: sales@clooudgen.com">sales@clooudgen.com
                            </a>
                            <a className='hover:underline hover:text-primary' href="mailto: info@clooudgen.com">support@clooudgen.com

                            </a>
                            <a className='hover:underline hover:text-primary' href="mailto: info@clooudgen.com">info@clooudgen.com
                            </a>
                        </div>

                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='relative border-foreground border-4 bg-white w-[80px] h-[80px] rounded-full grid justify-center items-center  top-6'>
                        <Image src={whatsapp} alt='' />
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white w-[300px] h-[250px] rounded-xl space-y-4'>
                        <h3 className='text-secondary'>What&apos;s App</h3>
                        <Button variant="outline" className=' border-4  bg-background text-foreground uppercase mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto origin-top transform before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full  hover:before:bg-primary'>Message Us</Button>

                    </div>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <div className='relative border-foreground border-4 bg-white w-[80px] h-[80px] rounded-full grid justify-center items-center  top-6'>
                        <Image src={livechat} alt='' />
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white w-[300px] h-[250px] rounded-xl space-y-4'>
                        <h3 className='text-secondary'>24/7 Live Chat</h3>

                        <div className='px-4 text-center space-y-2'>
                            <p>We strive to respond to all inquiries within 24 hours.</p>
                            <Button variant="outline" className=' border-4  bg-background text-foreground uppercase mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto origin-top transform before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full  hover:before:bg-primary'><a href="https://tawk.to/chat/660b2ad71ec1082f04ddae9f/1hqdpundk"> Start Live Chat</a></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;