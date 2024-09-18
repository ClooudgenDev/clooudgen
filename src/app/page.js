import HeroImageGif from '@/assets/hero/web-development-services.gif';
import AboutUs from '@/components/pages/home/AboutUs';
import Benefits from '@/components/pages/home/Benefits';
import ItSupport from '@/components/pages/home/ItSupport';
import OurClients from '@/components/pages/home/OurClients';
import RemoteTeam from '@/components/pages/home/RemoteTeam';
import Services from '@/components/pages/home/Services';
import WhyCloudgen from '@/components/pages/home/WhyCloudgen';
import ContactUsDialog from '@/components/shared/contactUsDialog/ContactUsDialog';
import Hero from '@/components/shared/hero/Hero';
import ProjectSection from '@/components/shared/project/ProjectSection';

//* import Advertisement from '../components/shared/advertisement/Advertisement'; //Uncomment if needed the popup

export default function Home() {
  const defaultData = {
    subject: ' I would like to learn more details about Clooud Gen',
    messege:
      'Hello there, I would like to know more about Clooud Gen. Is there anyone available to reply me?',
  };
  return (
    <main className="pt-20 overflow-hidden lg:pt-36 md:mt-10">
      {/* hero section start  */}
      <Hero reverse={true} media={HeroImageGif}>
        <div>
          <h2 className="w-full sm:w-4/5 md:w-full gradient-blue">
          Clooud Gen - Empowering Businesses with IT Solutions from Florida,USA
          </h2>
          <h4 className="my-4 text-gray-600 ">
            At Clooud Gen, a Florida-based company, we deliver innovative
            software, app, and web development solutions tailored to elevate
            your brand. From free IT consultancy to remote IT teams, web and app
            creation, and digital marketing, we turn your digital dreams into
            reality with the latest technology and creativity.
          </h4>
          <ContactUsDialog DefaultMessege={defaultData} element="Ask more" />
          {/*Get started*/}
        </div>
      </Hero>

      {/* <Advertisement /> */}

      {/*------------------------- hero section ends -------------------------*/}
      {/* services section start */}
      <Services />
      {/*------------------- services section ends -------------------*/}

      {/* ------Project section start from here------ */}
      {/* <ProjectSection /> */}
      {/* ------Project section start from here------ */}
      {/* itSupport section start */}
      <ItSupport />
      {/*------------------- itSupport section ends -------------------*/}

      <Benefits />
      {/*------------------- benefit section ends -------------------*/}

      {/* Quality section started */}
      <RemoteTeam />
      {/* Quality section ended */}

      {/* why cloudgenn section start */}
      <WhyCloudgen />
      {/*-------------- why cloudgenn section ends --------------*/}

      {/* about section start */}
      <AboutUs />
      {/*---------------- about section ends ----------------*/}

      {/* ----------Remote It section started---------  */}
      {/* <RemoteIt/> */}
      {/* ----------Remote It section end---------  */}

      {/* <OurFacility /> */}

      {/* Our clients section start */}

      <OurClients />

      {/*--------------- Our clients section ends ---------------*/}

      {/* Contact Clooud Gen section start */}

      {/*--------------- Contact Clooud Gen section ends ---------------*/}
    </main>
  );
}
