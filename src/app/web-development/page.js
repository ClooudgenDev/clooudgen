import ContactUsDialog from '@/components/shared/contactUsDialog/ContactUsDialog';
import Hero from '@/components/shared/hero/Hero';
import WhyWebDevImportant from '@/components/pages/webDevelopment/WhyWebDevImportant';
import CloudgenWorkFor from '@/components/pages/webDevelopment/CloudgenWorkFor';
import BestWebdevelopmet from '@/components/pages/webDevelopment/BestWebdevelopmet';
import WebContact from '@/components/pages/webDevelopment/WebContact';
import WebDevelopmentTop from '@/components/pages/webDevelopment/WebDevelopmentTop';
import AboutWebDevelopment from '@/components/pages/webDevelopment/AboutWebDevelopment';
import WebVarious from '@/components/pages/webDevelopment/WebVarious';
import { Button } from '@/components/ui/button';
import WebdevHero from '@/components/pages/webDevelopment/WebdevHero';
import PageAnimation from '@/components/shared/animation/PageAnimation';

export const metadata = {
    title: "Clooudgen | Web Development",
    description: "Welcome to Clooud Gen, your trusted IT solutions partner offering comprehensive services including web development, software development, digital marketing, video editing, and more. Contact us today to bring your ideas to life!",
  };
const WebDevelopment = () => {
    return (
        <PageAnimation>
        <main className='pt-20 overflow-hidden md:mt-10'>
            <WebdevHero />
            <CloudgenWorkFor />
            <WhyWebDevImportant />
            <BestWebdevelopmet />
            <WebContact />
            <WebDevelopmentTop />
            <AboutWebDevelopment />
            <WebVarious />
        </main>
        </PageAnimation>

    );
};
export default WebDevelopment;