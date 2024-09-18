import React from 'react';
import bgIcon from '@/assets/images/appdevelopment/brandbgpng.png'
import brandHero from '@/assets/images/appdevelopment/brand.png'
import Image from 'next/image';
const AppBrand = () => {
    return (
        <div className='container my-10'>
            <div className='relative sm:block hidden'>
                <div className='md:flex justify-between md:gap-5'>
                    <Image className='xl:w-[800px] lg:w-[650px] md:w-[500px] mx-auto h-[400px]' src={bgIcon} alt='' />
                    <Image className='md:w-[300px] lg:w-[450px] sm:w-[450px] mx-auto lg:mt-0 sm:mt-5 ' src={brandHero} alt='' />
                </div>
                <div className='xl:w-[600px] lg:w-[550px] md:w-[430px] sm:w-[550px] w-[270px] space-y-8 absolute xl:top-10 xl:left-10 lg:left-5 lg:top-20 sm:bottom-0 md:top-16 sm:left-4 sm:top-28 top-5 '>
                    <h1 className='text-center xl:text-5xl lg:text-4xl'>Why is a App important for your brand?</h1>
                    <p className='xl:text-lg text-sm'>An app is crucial for your brand as it provides a direct, personalized connection with customers, enhancing brand loyalty and engagement. It offers convenience, enabling users to access your services/products anytime, anywhere. With push notifications and tailored content, you can strengthen brand visibility, gather valuable data, and adapt strategies to meet customer needs effectively, ultimately driving growth and competitive edge.</p>
                </div>
            </div>

        </div>
    );
};

export default AppBrand;