import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import icon1 from '@/assets/footer/digiicon1.svg'
import icon2 from '@/assets/footer/digiicon2.svg'
import icon3 from '@/assets/footer/digiicon3.svg'
import FadeIn from '@/components/shared/animation/FadeIn';
import ZoomIn from '@/components/shared/animation/ZoomIn';

const DigitalFeature = () => {
    return (
        <div className='container md:my-20'>
            <FadeIn> 
                <div className='text-center md:w-[900px] mx-auto'>
                    <h1 className=' w-full sm:w-4/5 md:w-full my-5'>Lets See <span className='text-primary' >Digital Features</span></h1>
                    <p className='my-5 md:mb-10 text-gray-500 text-justify md:text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, facilis, libero dolorem repudiandae soluta assumenda natus doloremque reprehenderit, ipsa a ab. Beatae, est! Quidem asperiores ipsa, et facilis facere quos?</p>
                </div>
            </FadeIn>
           <ZoomIn duration={1}>
           <div className='md:flex justify-center gap-10'>
                <Card className='p-3 md:w-[320px]'>
                    <div>
                        <Image alt='' className='w-[100px] mb-5 mx-auto ' src={icon1} ></Image>
                    </div>
                    <CardTitle className='my-2 text-center'>Marketing Automation</CardTitle>
                    <CardDescription className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis, quam ut consectetur semper, velit turpis</CardDescription>
                </Card>
                <Card className='p-3 md:my-0 my-5 md:w-[320px] '>
                    <div>
                        <Image alt='' className='w-[100px] mb-5 mx-auto ' src={icon2} ></Image>
                    </div>
                    <CardTitle className='my-2 text-center'>Sales & CRM</CardTitle>
                    <CardDescription className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis, quam ut consectetur semper, velit turpis</CardDescription>
                </Card>
                <Card className='p-3 md:w-[320px] '>
                    <div>
                        <Image alt='' className='w-[100px] mb-5 mx-auto ' src={icon3} ></Image>
                    </div>
                    <CardTitle className='my-2 text-center'>Advanced Reporting</CardTitle>
                    <CardDescription className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis, quam ut consectetur semper, velit turpis</CardDescription>
                </Card>
            </div>
           </ZoomIn>
        </div>
    );
};

export default DigitalFeature;