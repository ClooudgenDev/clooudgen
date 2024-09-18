import AboutEndeover from '@/components/pages/about/AboutEndeover';
import HeroAbout from '@/components/pages/about/HeroAbout';
import OurGoal from '@/components/pages/about/OurGoal';
import OurMission from '@/components/pages/about/OurMission';
import OurVision from '@/components/pages/about/OurVision';

export const metadata = {
    title: "Clooudgen | About",
    description: "Welcome to Clooud Gen, your trusted IT solutions partner offering comprehensive services including web development, software development, digital marketing, video editing, and more. Contact us today to bring your ideas to life!",
  };

const About = () => {
    return (
        <div className='overflow-hidden'>
            <HeroAbout />
            <AboutEndeover />
            <OurVision/>
            <OurMission/>
            <OurGoal />
        </div>
    );
};

export default About;