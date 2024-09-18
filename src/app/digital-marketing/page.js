import DigitalService from '@/components/pages/digitalMarketing/DigitalService';
import WhyDigitalMarketing from '@/components/pages/digitalMarketing/WhyDigitalMarketing';
import DigitalHero from '@/components/pages/digitalMarketing/DigitalHero';
import DigitalEssential from '@/components/pages/digitalMarketing/DigitalEssential';
import GetInTouch from '@/components/pages/digitalMarketing/GetInTouch';
import DIgitalQuestion from '@/components/pages/digitalMarketing/DIgitalQuestion';
import DigitalProcess from '@/components/pages/digitalMarketing/DigitalProcess';

export const metadata = {
    title: "Clooudgen | Digital Marketing",
    description: "Welcome to Clooud Gen, your trusted IT solutions partner offering comprehensive services including web development, software development, digital marketing, video editing, and more. Contact us today to bring your ideas to life!",
  };
const DigitalMarketing = () => {
    return (
        <main className='pt-20 overflow-hidden xl:pt-36 md:mt-10'>
            <DigitalHero />
            <DigitalService />
            <DigitalEssential />
            <WhyDigitalMarketing />
            <DigitalProcess/> 
            <GetInTouch />
            <DIgitalQuestion/>
        </main>
    );
};

export default DigitalMarketing;