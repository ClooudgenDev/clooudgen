import image from '@/assets/images/DigitalMarketing/marketing.png'
import { CheckIcon } from 'lucide-react';
import Hero from '@/components/shared/hero/Hero';
import ContactUsDialog from '@/components/shared/contactUsDialog/ContactUsDialog';

const DigitalPlatform = () => {
    return (
        <div>
            <Hero className={'items-center'} media={image}>
                <div>
                    <h1 className='my-5 w-full sm:w-4/5 md:w-full'>We provide <span className='text-primary'>tracking platform</span> for marketing</h1>
                    <p className='my-3 text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ratione est veritatis rerum. Sequi natus earum ducimus beatae alias. In deleniti et error fugiat praesentium ea! Ut reiciendis molestias minima.</p>
                    <ul className='my-5 text-gray-500'>
                        <li className="flex items-start">
                            <CheckIcon className="text-[#26c0d3] mt-1 mr-3 animate-pulse w-6 h-6" size={24} />
                            <div className='w-full'>
                                <p>Nullam placerat nunc id ornare convallis.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <CheckIcon className="text-[#26c0d3] mt-1 mr-3 animate-pulse w-6 h-6" size={24} />
                            <div className='w-full'>
                                <p>Mauris id dui aliquam, dapibus felis vel, iaculis risus.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <CheckIcon className="text-[#26c0d3] mt-1 mr-3 animate-pulse w-6 h-6" size={24} />
                            <div className='w-full'>
                                <p>Integer dapibus lorem in nisl hendrerit dictum.</p>
                            </div>
                        </li>

                    </ul>
                    <ContactUsDialog />{/*Get started*/}
                </div>
            </Hero>
        </div>

    );
};

export default DigitalPlatform;