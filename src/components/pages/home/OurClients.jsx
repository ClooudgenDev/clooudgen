import Image from 'next/image';
import Marquee from "react-fast-marquee";
import ZoomIn from '@/components/shared/animation/ZoomIn';
import Image1 from '@/assets/images/home/clients/apices.png'
import Image2 from '@/assets/images/home/clients/greenHarvestCo.png'
import Image3 from '@/assets/images/home/clients/hopeHorizons.png'
import Image4 from '@/assets/images/home/clients/integrityLawFirm.png'
import Image5 from '@/assets/images/home/clients/modish.png'
import Image6 from '@/assets/images/home/clients/teaterrace.png'

const OurClients = () => {
    return (
        <div className='container my-20'>
            <ZoomIn>
                <div className='relative text-center my-11'>
                    <h2 className="section-heading | font-bold text-center inline-block pb-4 px-7 sm:px-10 border-b-2">
                        Our Clients
                    </h2>
                    {/* Animation */}
                    <div className='absolute bottom-0 -translate-x-1/2 border-b-2 border-primary w-60 left-1/2'></div>
                    <div className='w-4 h-4 border-2 border-primary rounded-full bg-white absolute -translate-x-1/2 left-1/2 -bottom-1.5 animate-pulsex'></div>
                    {/* Animation */}

                </div>
            </ZoomIn>
            <Marquee autoFill={true} className=''>
                <div className='flex gap-10 items-center'>
                    <Image className="w-40   md:mb-20" src={Image1} width={200} alt="Apices" />
                    <Image className="w-40  md:mt-20" src={Image2} width={200} alt="Green Harvest" />
                    <Image className="w-40  md:mb-20" src={Image3} width={200} alt="Hope Horizons" />
                    <Image className="w-40  md:mt-20" src={Image4} width={200} alt="logo" />
                    <Image className="w-40  md:mb-20" src={Image5} width={200} alt="logo" />
                    <Image className="w-40  md:mt-20" src={Image6} width={200} alt="logo" />
                </div>
            </Marquee>
        </div>
    );
};

export default OurClients;