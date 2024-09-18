import Image from 'next/image';
import FadeRight from '@/components/shared/animation/FadeRight';
import FadeUp from '@/components/shared/animation/FadeUp';
import ServiceHeading from '@/assets/images/maintenance/serviceHeading.png'
import WorkCard from '@/components/pages/webDevelopment/WorkCard';
import webMaintenanceService from '@/lib/data/WebMaintenance/ServiceCard';

const WebService = () => {

    return (
        <div className='container my-10 lg:my-20'>
            <FadeRight>
                <heading className='flex flex-col items-center justify-center text-primary md:flex-row'>
                    <div>
                        <h4 className='text-xl md:text-3xl md:mb-2'>Nine pillars that could form the foundation of</h4>
                        <h4 className='text-xl md:text-3xl'>comprehensive web maintenance services</h4>
                    </div>
                    <Image src={ServiceHeading} alt='' height={150} className='hidden mb-10 md:block' />
                </heading>
            </FadeRight>

            <div className='grid grid-cols-1 mb-5 gap-x-6 xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 justify-items-center'>
                {
                    webMaintenanceService?.map((workCards, index) => <FadeUp key={index}><WorkCard cardBorder='border-4' cardBg='bg-tertiary' pStyle='text-md' workCards={workCards}></WorkCard></FadeUp>)
                }
            </div>
        </div>
    );
};

export default WebService;