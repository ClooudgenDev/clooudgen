import Image from 'next/image';
import Gurranty from '@/assets/images/shared/gurannty.png'
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';

const MoneyBack = () => {
    const pathname = usePathname()
   
    return (
        <div className='flex justify-center items-center lg:gap-7 container md:gap-5 gap-4 flex-col my-10'>
            <div className='sm:max-w-[260px] xsm:max-w-[240px] max-w-[200px]'>
                <Image className='w-full' src={Gurranty} alt='gurranty' />
            </div>
            {/* Title */}
            <div className='flex flex-col justify-center items-center md:gap-4 sm:gap-3 gap-2'>
                <h2 className='font-bold lg:text-2xl md:text-xl sm:text-lg text-base  '>ARE NOT YOU SATISFIED?</h2>
                <h1 className='font-bold lg:text-4xl md:text-3xl sm:text-2xl text-xl  '>GET YOUR MONEY BACK!</h1>
            </div>
            {/*  hr  */}
            <div className='sm:w-14 sm:h-[5px]  w-10 h-[3px] bg-[#3E6BB8] rounded-full'></div>
            <div className='max-w-[700px] mx-auto '>
                <p className='text-center md:text-base text-sm'>Your satisfaction is our top priority. If you&apos;re not completely satisfied with our work, we offer a 100% money-back guarantee. Simply let us know, and we&apos;ll promptly refund your investment. We&apos;re committed to delivering results that exceed your expectations.</p>
            </div>

            <div>
                {/* {
                    (pathname === '/web-development' || pathname === '/app-development' || pathname === '/graphics-design')
                    &&
                    <Button >
                        Discover Our Creations
                    </Button>
                } */}
            </div>
        </div>
    );
};

export default MoneyBack;



