import React from 'react';
import { Button } from '@/components/ui/button';
import ContactUsDialog from "@/components/shared/contactUsDialog/ContactUsDialog";
const LastContactSection = () => {
    const defaultData = {subject:'I want to make an app ',messege:'Hello there, I want to make an app for my business. Is there anyone available to help me?'}
    return (
        <div >
            <div className='lg:h-[200px] flex flex-col justify-center lg:mt-20 my-10 relative' style={{ backgroundImage: `url(./lastBg.png)`, backgroundSize: 'cover', backgroundPosition: 'center', height: '430px' }}>
                <p className='lg:text-3xl md:text-2xl sm:text-xl xsm:text-lg  py-5 text-center text-background container lg:w-[1000px]'>Don&apos;t wait any longer to turn your innovative app idea into a reality. Let&apos;s schedule a free consultation to discuss your vision and explore how our expert developers can bring it to life. We&apos;re confident we can create a user-friendly, high-performing app that exceeds your expectations. Let&apos;s Build Your Dream App!
                </p>

            </div>
            <div className='relative flex justify-center -top-24'>
            <ContactUsDialog DefaultMessege={defaultData} element="Let's build your dream app" />
            </div>
        </div>
    );
};

export default LastContactSection;