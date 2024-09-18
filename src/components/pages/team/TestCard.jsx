import Image from 'next/image';
import Test from '@/assets/images/team/test.png'
import TestLine from '@/assets/images/team/line.png'
import { FaArrowRight } from "react-icons/fa";

const TestCard = () => {
    return (
        <section className='my-20 container mx-auto relative'>
            <Image src={Test} className='h-12 w-12 rounded-full bg-primary absolute -top-5 left-28 ' />
            <div className='border-2 border-primary md:w-1/4 lg:w-1/6 text-center' heigh={500}>
                <div className='relative my-2'>
                    <h4 className='text-foreground text-xl lg:text-2xl mt-7 bg-white inline-block'>It Consultancy</h4>
                    <Image src={TestLine} className='absolute top-10 right-0 lg:w-6' />
                    <Image src={TestLine} className='absolute top-10 left-0 lg:w-6' />
                </div>
                <p className='mb-3 p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quaerat vel provident temporibus aspernatur sed quas cupiditate. Perferendis, dolor totam!</p>
                <button className='rounded-full text-white bg-primary p-3 mb-6'><FaArrowRight /></button>
            </div>
        </section>
    );
};

export default TestCard;