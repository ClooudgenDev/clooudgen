import TechDatabase from '@/components/pages/technology/TechDatabase';
import TechnologyHero from '@/components/pages/technology/TechnologyHero';
import TechPara from '@/components/pages/technology/TechPara';

export const metadata = {
    title: "Clooudgen | Technology",
    description: "Welcome to Clooud Gen, your trusted IT solutions partner offering comprehensive services including web development, software development, digital marketing, video editing, and more. Contact us today to bring your ideas to life!",
  };
const page = () => {
    return (
        <div className='overflow-hidden'>
        <TechnologyHero/>
         <TechPara/>
         <TechDatabase/>
        </div>
    );
};

export default page;