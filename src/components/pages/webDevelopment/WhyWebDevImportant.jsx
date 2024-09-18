import FadeIn from '@/components/shared/animation/FadeIn';
import Hero from '@/components/shared/hero/Hero';
import whyWeb from '@/assets/images/webdevelopment/whyWeb.png'
import Image from 'next/image';
import { WhyWeb } from '@/lib/data/webDevelopment/whyWeb';

const WhyWebDevImportant = () => {
    return (
        <div className='my-10 md:my-20'>
            <section className={`w-full  sm:px-5 my-10 px-2 min-h-[210px] flex justify-center items-center bg-no-repeat text-background `} style={{ backgroundImage: `url(./2ndSectionQuestOnMark.png)`, backgroundPosition: 'center', backgroundSize: '300px' }}>
                <div className='lg:text-center'>
                    <FadeIn>
                        <h1 className='w-full mx-auto text-center heading-2 sm:w-4/5 md:w-full gradient-blue '>Why is a website important
                            for your brand?
                        </h1>
                    </FadeIn>
                </div>
            </section>
            <Hero className={'items-center pt-0'} media={whyWeb}>
                <div className='p-3'>
                    <p className='lg:text-lg'>A website is essential for building and growing your brand in the digital era, enabling you to connect with your target audience and achieve business objectives effectively. A website is crucial for your brand&apos;s success for several reasons:</p>
                    <div className='mt-5 lg:text-lg'>
                        {
                            WhyWeb?.map((info, index) => <div className='flex gap-2' info={info} key={index}>
                                <Image className='h-6 my-2 lg:w-8' src={info?.image} alt='' />

                                <div className='flex my-1'>
                                    <p className='text-sm'>
                                        <span className='font-semibold'>{info.title} </span>{info?.data}
                                    </p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </Hero>

        </div>

    );
};

export default WhyWebDevImportant;