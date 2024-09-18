import icon from '@/assets/images/software/serviceIcon.png';
import icon2 from '@/assets/images/software/serviceIcon2.png';
import FadeIn from '@/components/shared/animation/FadeIn';
import Image from 'next/image';

const SoftwareServices = () => {
  return (
    <div className=" lg:flex justify-center items-center bg-blue-50 py-3 lg:mt-32 my-20">
      <Image
        className="relative lg:right-3 lg:bottom-24 w-[120px] lg:block hidden"
        src={icon}
        alt=""
      />
      <div className=" my-10">
        <FadeIn>
          <div className="lg:w-[1000px] container">
            <h1 className="w-full lg:text-4xl text-xl sm:w-4/5 md:w-full my-5 text-center">
              Custom software development services at Clooud Gen
            </h1>
            <p className="my-3 text-justify ">
              At our custom software development firm, we specialize in
              tailoring technological solutions to suit diverse business
              requirements across various industries.
            </p>
            <p className="text-justify">
              Our seasoned team of architects offers comprehensive services,
              including due diligence, auditing, and bespoke solution design.
              Our delivery framework ensures seamless knowledge management
              throughout each project lifecycle. Leveraging Clooud Gen&apos;s
              dynamic recruitment network, we consistently attract and retain
              top-tier talent, ensuring unparalleled project excellence.
            </p>
          </div>
        </FadeIn>
      </div>
      <Image
        className="relative lg:top-16 lg:left-3 w-[50px] lg:block hidden"
        src={icon2}
        alt=""
      />
    </div>
  );
};

export default SoftwareServices;
