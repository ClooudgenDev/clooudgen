import React from 'react';
import Image from 'next/image';
import email from '@/assets/images/contactClooudgen/email.png'
import whatsapp from '@/assets/images/contactClooudgen/whatsapp.png'
import livechat from '@/assets/images/contactClooudgen/livechat.png'
import contact from '@/assets/images/contactClooudgen/contact.png'
import { Button } from '@/components/ui/button';

const ContactCard = () => {
    return (
        <div className='container my-20 mt-32'>
            <div className='grid grid-cols-1 gap-10 xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 '>
                <div className='flex flex-col items-center justify-center'>
                    <div className='relative border-foreground border-4 bg-white w-[80px] h-[80px] rounded-full grid justify-center items-center  top-6'>
                        <Image src={contact} alt='' />
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white w-[300px] h-[250px] space-y-4 rounded-xl '>
                        <h3 className='text-secondary'>Contact</h3>
                        <div className='px-3 text-center'>
                            <p >If you need any help, please feel free to call us.</p>
                            <a className='flex items-center justify-center' href="tel:+14072082598">USA: {' '} <p> +14072082598</p></a>
                            <a className='flex items-center justify-center' href="tel:+8801531770084">BD: {' '} <p> +880 1531-770084</p></a>
                            <a className='flex items-center justify-center' href="tel:+8801531770084">BD: {' '} <p> +880 1603-491540</p></a>
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
                {/* <div className='flex flex-col items-center justify-center'>
                    <div className='relative border-foreground border-4 bg-white w-[80px] h-[80px] rounded-full grid justify-center items-center  top-6'>
                        <Image src={whatsapp} alt='' />
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white w-[300px] h-[250px] rounded-xl space-y-4'>
                        <h3 className='text-secondary'>What&apos;s App</h3>
                        <Button variant="outline" className='w-full mb-3 uppercase origin-top transform border-4 bg-background text-foreground lg:mb-0 lg:mr-3 lg:w-auto before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-primary'>Message Us</Button>

                    </div>
                </div> */}

                <div className='flex flex-col items-center justify-center'>
                    <div className='relative border-foreground border-4 bg-white w-[80px] h-[80px] rounded-full grid justify-center items-center  top-6'>
                        <Image src={livechat} alt='' />
                    </div>
                    <div className='flex flex-col justify-center items-center bg-white w-[300px] h-[250px] rounded-xl space-y-4'>
                        <h3 className='text-secondary'>24/7 Live Chat</h3>

                        <div className='px-4 space-y-2 text-center'>
                            <p>We strive to respond to all inquiries within 24 hours.</p>
                            <Button variant="outline" className='w-full mb-3 uppercase origin-top transform border-4 bg-background text-foreground lg:mb-0 lg:mr-3 lg:w-auto before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-primary'><a href="https://tawk.to/chat/660b2ad71ec1082f04ddae9f/1hqdpundk"> Start Live Chat</a></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;