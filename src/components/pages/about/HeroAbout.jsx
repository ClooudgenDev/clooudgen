
import ZoomIn from '@/components/shared/animation/ZoomIn';


import Link from 'next/link';

const HeroAbout = () => {
  return (

    <section
    id=""
    className={`w-full py-10 md:mt-32 mt-28 mb-20 md:py-12 lg:py-16 px-3 bg-slate-400 bg-fixed text-background`}
    style={{ backgroundImage: 'url(./aboutBg.jpg)' }}
  >
    <ZoomIn>
      <div className="container space-y-10 bg-[#002952] bg-opacity-40 rounded-xl p-5 sm:p-10">
        <div className="relative text-center">
          <h2 className="  pb-4 font-bold text-center border-b-2 ">
            About Clooud Gen
          </h2>
          {/* Animation */}
          <div className="absolute bottom-0 w-40  -translate-x-1/2 border-b-2 border-primary sm:w-60 left-1/2"></div>
          <div className="w-4 h-4 border-2 border-primary rounded-full bg-white absolute -translate-x-1/2 left-1/2 -bottom-1.5 animate-pulsex"></div>
          {/* Animation */}
        </div>
        <p className="font-medium md:text-2xl/relaxed dark:text-gray-400 sm:text-justify">
        The company was founded in 2023 by Mr. Omar Faruk Bhuiyan and is
            known as one of the leading IT service providers, keen on offering
            advanced solutions that suit various business needs. Our list of
            services is comprehensive, ranging from IT consulting to web and app
            development, software engineering, UI/UX design, graphic design, and
            digital marketing, all the way to video editing. At Clooud Gen, we
            excel in programming-related services, using new technologies to
            generate innovative ideas that drive business success. We ensure
            customer satisfaction through our agility in meeting specific
            requirements. More than just an IT partner, we are a partner for
            success in your business, thanks to our customer-centric approach
            that seeks excellence while empowering you to thrive in this digital
        </p>
      </div>
    </ZoomIn>
  </section>
  );

};

export default HeroAbout;
