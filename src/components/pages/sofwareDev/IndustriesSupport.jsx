import Image from 'next/image';
import headingImg from '@/assets/images/software/headingBg.png'
import headingImg1 from '@/assets/images/software/headingBg1.png'
import headingImg2 from '@/assets/images/software/headingBg2.png'
import industriesData from '@/lib/data/softwareDevelopment/industries';
import SoftwareCard from '@/components/shared/software/SoftwareCard';
import ContactUsDialog from '@/components/shared/contactUsDialog/ContactUsDialog';
const IndustriesSupport = () => {
    const defaultData = {
        subject: 'Need custom website',
        messege: 'Hello there, I need a custom Software. Is there anyone available to assist me?',
    };

    return (
        <section className='container mt-10 lg:mt-24'>
            {/* heading section */}
            <div className='relative flex items-center justify-center my-10 text-center'>
                <Image alt='' src={headingImg1} className='absolute md:left-72 md:bottom-4' />
                <Image alt='' src={headingImg} className='z-10' />
                <Image alt='' src={headingImg2} className='absolute md:right-72 md:top-4' />
                <h2 className='absolute z-20 text-sm font-bold text-foreground md:text-4xl'>Industries we support</h2>
            </div>
            {/* card sections */}
            <div className='grid grid-cols-1 gap-5 mx-auto mt-20 mb-10 lg:grid-cols-2 xl:grid-cols-4 md:grid-cols-2 justify-items-center'>
                {industriesData.map((data, idx) => <SoftwareCard key={idx} media={data.image} title={data.title} descriptions={data.descriptions} />)}
            </div>
            <div className="flex justify-center">
                <ContactUsDialog
                    DefaultMessege={defaultData}
                    element="Contact for Customization"
                />
            </div>
        </section>
    );
};

export default IndustriesSupport;