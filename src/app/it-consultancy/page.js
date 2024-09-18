import ItConsultProcess from "@/components/pages/itConsultancy/ItConsultProcess";
import ItContact from "@/components/pages/itConsultancy/ItContact";
import ItHero from "@/components/pages/itConsultancy/ItHero";
import ItService from "@/components/pages/itConsultancy/ItService";
import ItStrategy from "@/components/pages/itConsultancy/ItStrategy";


export const metadata = {
  title: "Clooudgen | It-Consaltancy",
  description: "Welcome to Clooud Gen, your trusted IT solutions partner offering comprehensive services including web development, software development, digital marketing, video editing, and more. Contact us today to bring your ideas to life!",
};

const ItConsultancy = () => {

  return (

    <main className="overflow-hidden">
      <ItHero />
      <ItService />
      <ItStrategy />
      <ItConsultProcess />
      <ItContact />
    </main>

  );
};

export default ItConsultancy;