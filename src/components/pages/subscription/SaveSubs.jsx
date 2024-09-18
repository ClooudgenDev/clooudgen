
import Hero from '@/components/shared/hero/Hero';
import Image from 'next/image';
import React from 'react';
import save from '@/assets/images/subscription/save70.png'
import saveIcon from '@/assets/images/subscription/saveIcon.png'
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const SaveSubs = () => {
    return (
        <div className='my-10 md:my-20'>

            <div className='container h-[240px] relative flex flex-col justify-center md:my-20 my-10' style={{ backgroundImage: `url(./subBg.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

                <div className='px-5 py-5 space-y-5 text-center md:w-[75%] mx-auto'>
                    <p>It appears that you weren&apos;t pleased with our plan. Please let us know if there are any issues, and feel free to tailor the plan to better suit your preferences.</p>

                </div>
                <div className='flex justify-center'>
                    <Link href='/make-your-team'><Button>Make Your Team</Button></Link>
                </div>
            </div>
            <Hero className={'items-center border rounded-xl'} media={save}>
                <div className='p-5'>
                    <div className='relative flex items-center justify-center gap-3'>
                        <div>
                            <h2 className='w-full text-primary'>Save 70%</h2>

                        </div>
                        <Image className='relative bottom-8 max-w-[120px] w-full' src={saveIcon} alt='' />
                    </div>
                    <p>
                        <span className='text-primary'> If you hire remote IT professionals</span>, your savings could be up to 70%. Consider this: you won&apos;t have office costs. You also won&apos;t need to provide devices such as computers or laptops to your employees. More importantly, you won&apos;t have to spend valuable time managing your team. Moreover, you won&apos;t find such a large number of specialists at such a low cost in your area. Combining all these factors, it is clear that hiring a remote IT team is essential.
                    </p>
                    <div className='flex justify-center my-10'>
                        <Link href='/make-your-team'><Button>Make Your Team Now</Button></Link>
                    </div>
                </div>
            </Hero>
        </div>
    );
};

export default SaveSubs;