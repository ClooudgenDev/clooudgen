import WebContact from "@/components/pages/webDevelopment/WebContact";
import HeroMaintenance from "@/components/pages/webMaintenance/HeroMaintenance";
import OurMaintenance from "@/components/pages/webMaintenance/OurMaintenance";
import Reliable from "@/components/pages/webMaintenance/Reliable";
import WebService from "@/components/pages/webMaintenance/WebService";
import WebTabs from "@/components/pages/webMaintenance/WebTabs";

export const metadata = {
    title: "Clooudgen | Web Maintenance",
    description: "Welcome to Clooud Gen, your trusted IT solutions partner offering comprehensive services including web development, software development, digital marketing, video editing, and more. Contact us today to bring your ideas to life!",
  };

const page = () => {
    return (
        <div className="overflow-hidden ">
            <HeroMaintenance />
            <Reliable />
            <WebTabs />
            <WebService />
            <OurMaintenance />
            <WebContact />
        </div>
    );
};

export default page;