import AppBrand from "@/components/pages/appDevelopment/AppBrand";
import DevelopProcess from "@/components/pages/appDevelopment/DevelopProcess";
import HeroSoftware from "@/components/pages/appDevelopment/HeroSoftware";
import KeyService from "@/components/pages/appDevelopment/KeyService";
import LastContactSection from "@/components/pages/appDevelopment/LastContactSection";
import WhyChoose from "@/components/pages/appDevelopment/WhyChoose";
import WebContact from "@/components/pages/webDevelopment/WebContact";


export const metadata = {
  title: "Clooudgen | App Development",
  description: "Welcome to Clooud Gen, your trusted IT solutions partner offering comprehensive services including web development, software development, digital marketing, video editing, and more. Contact us today to bring your ideas to life!",
};

const page = () => {
  return (
    <div className='overflow-hidden '>
      <HeroSoftware />
      <KeyService />
      <AppBrand />
      <WhyChoose />
      <LastContactSection />
      <DevelopProcess />
      <WebContact />
    </div>
  );
};

export default page;