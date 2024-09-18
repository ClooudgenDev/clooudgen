'use client'

import { usePathname } from 'next/navigation';
import MoneyBack from './MoneyBack';
import ContactUs from '@/components/pages/home/ContactUs';
import { SharedCarousel } from './carousel/SharedCarousel';
import Image from 'next/image';
import HeroImageGif from '@/assets/hero/coder1.gif'
import { Services } from './Services';

const ConditionalCommon = () => {

    const pathname = usePathname()

    return (
        <div className=' overflow-hidden'>
            {pathname !== '/founder' && pathname !== '/team' && pathname !== '/ckdb' && pathname !== '/career/1' && '/career/2' && '/career' &&
                <>
                    <MoneyBack />
                    <ContactUs />
                <Services />
                </>
            }
            {
                pathname === '/career' && pathname === '/career/1' && pathname === '/career/' && <Services/>
            }
        </div>
    );
};

export default ConditionalCommon;