import DevelopmentProcess from '@/components/pages/sofwareDev/DevelopmentProcess';
import IndustriesSupport from '@/components/pages/sofwareDev/IndustriesSupport';
import SoftwareContact from '@/components/pages/sofwareDev/SoftwareContact';
import SoftwareHero from '@/components/pages/sofwareDev/SoftwareHero';
import SoftwareServices from '@/components/pages/sofwareDev/SoftwareServices';

export const metadata = {
    title: "Clooudgen | Software Development",
    description: "Welcome to Clooud Gen, your trusted IT solutions partner offering comprehensive services including web development, software development, digital marketing, video editing, and more. Contact us today to bring your ideas to life!",
  };
const SoftwareDev = () => {
    return (
        <main className='overflow-hidden'>
            <SoftwareHero />
            <SoftwareServices />
            <IndustriesSupport />
            <SoftwareContact />
            <DevelopmentProcess />
        </main>
    );
};

export default SoftwareDev;