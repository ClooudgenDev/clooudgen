import { CheckIcon } from 'lucide-react';
import HeroImageGif1 from "@/assets/images/maintenance/hero.png"; 
import Hero from '@/components/shared/hero/Hero';

const AnExhaustive = () => {
    return (
        <section>
             <Hero media={HeroImageGif1}>
             <div>
                    <h1 className='text-primary text-3xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl w-full sm:w-4/5 md:w-full'> Creative Process</h1>
                    <h5 className="my-4 font-normal sm:text-justify text-[#284B82] ">
                        We specialize in building skilled terms tailored to your needs, ensuring that your organization thrives through collaboration, expertise and innovation.
                    </h5>
                    <ul className="space-y-4 text-lg">
                        <li className="flex items-start">
                            <CheckIcon className="bg-primary rounded-full" size={24} />
                            <div className='w-full ms-3'>
                                <p>Financial Analysis</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <CheckIcon className="bg-primary rounded-full" size={24} />
                            <div className='w-full ms-3'>
                                <p>Strategy Development</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <CheckIcon className="bg-primary rounded-full" size={24} />
                            <div className='w-full ms-3'>
                                <p>Business Plan Development</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <CheckIcon className="bg-primary rounded-full" size={24} />
                            <div className='w-full ms-3'>
                                <p>Get your Clarification</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <CheckIcon className="bg-primary rounded-full" size={24} />
                            <div className='w-full ms-3'>
                                <p>24/7/365 Support</p>
                            </div>
                        </li>
                    </ul>
                    <div className='mt-10'>
                        <button className='bg-primary text-xl p-2'>Free Consultation</button>
                    </div>
                </div>
      </Hero>
        </section>
    );
};

export default AnExhaustive;