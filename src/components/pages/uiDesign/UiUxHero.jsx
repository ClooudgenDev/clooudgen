import Hero from '@/components/shared/hero/Hero';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import UiHeroImage from '@/assets/images/uiux/hero2.png'
import star from '@/assets/images/uiux/star2.png'
import ContactUsDialog from '@/components/shared/contactUsDialog/ContactUsDialog';
const UiUxHero = () => {
    const defaultData = {
        subject: 'UI/UX Design Service Details',
        messege:
            'Hello there, I would like to know more about UI/UX Design Service. Is there anyone available?',
    };

    return (
        <div>
            <Hero className={'items-center mb-10'} reverse={true} media={UiHeroImage}>
                <div>
                    <div className='relative mb-5' >
                        <h1 className='w-full my-5 heading-1 '>Innovative <span className='text-primary'>UI/UX <br /> Design</span> Services</h1>
                        <h4 className="text-primary sm:text-justify description-1">
                            Transforming Ideas into Intuitive Experiences
                        </h4>
                        <Image className='absolute sm:w-[130px] sm:block hidden lg:left-[380px] md:left-72 sm:left-52 -bottom-16 rotate-12 z-[-1]' src={star} alt='' />
                    </div>

                    <ContactUsDialog
                        DefaultMessege={defaultData}
                        element="Share your ideas"
                    />
                </div>
            </Hero> 
        </div>
    );
};

export default UiUxHero;