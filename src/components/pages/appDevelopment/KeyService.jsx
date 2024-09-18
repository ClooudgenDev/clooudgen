import Image from 'next/image';
import FadeUp from '@/components/shared/animation/FadeUp';
import keyServiceData from '@/lib/data/AppDevelopment/KeyService';
import { Card } from '@/components/ui/card';
import titleBg from '@/assets/images/appdevelopment/bgkeyService.png';
import ContactUsDialog from "@/components/shared/contactUsDialog/ContactUsDialog";

const KeyService = () => {
    const defaultData = {subject:'Want to talk about the project',messege:'Hello there, I want to talk about my new app project. Is anyone available to talk with me?'}
    return (
        <div className='container mb-20 mt-36 '>

            <div className='relative flex items-center justify-center bottom-10'>
                <Image className='xl:max-w-[500px] absolute z-0 lg:max-w-[450px] md:max-w-[350px] sm:max-w-[300px] max-w-[250px]' src={titleBg} alt='title bg' />
                <h2 className='relative z-10 font-bold text-center text-white'>Key Service</h2>
            </div>

            <div className='flex flex-wrap items-center justify-center gap-10 mt-10 lg:gap-20'>
                {keyServiceData?.map((CardData, idx) => (
                    <FadeUp key={idx}>
                        <Card className='shadow-md p-5 sm:w-[340px] w-[300px]  h-[450px]  bg-blue-50'>
                            <Image className=' w-[95%] mx-auto' src={CardData.image} alt={'card-bg'} />
                            <div className='flex flex-col p-3 mt-8 text-center'>
                                <h2 className='text-lg font-semibold sm:text-xl '>{CardData.title}</h2>
                                <p className='mt-3 text-sm sm:text-base'>{CardData.description}</p>
                            </div>
                        </Card>
                    </FadeUp>
                ))}
            </div>

            <h4 className='mt-10 mb-5 text-center md:mt-20 '>We are really interested in hearing about your project.</h4>
            <div className='flex justify-center'>
            <ContactUsDialog DefaultMessege={defaultData} element="Let's talk" />
            </div>

        </div>
    );
};

export default KeyService;