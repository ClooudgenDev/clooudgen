import SaveSubs from '@/components/pages/subscription/SaveSubs';
import SeeOurPlan from '@/components/pages/subscription/SeeOurPlan';
import SubsContact from '@/components/pages/subscription/SubsContact';
import SubsHero from '@/components/pages/subscription/SubsHero';
import SubscripStartup from '@/components/pages/subscription/SubscripStartup';


export const metadata = {
    title: "Clooudgen | Subscription",
    description: "Welcome to Clooud Gen, your trusted IT solutions partner offering comprehensive services including web development, software development, digital marketing, video editing, and more. Contact us today to bring your ideas to life!",
  };
const page = () => {
    return (
        <div className='overflow-hidden'>
            <SubsHero />
            <SubscripStartup />
            <SeeOurPlan />
            <SaveSubs />
            <SubsContact />
        </div>
    );
};

export default page;