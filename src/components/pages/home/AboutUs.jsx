import ZoomIn from '@/components/shared/animation/ZoomIn';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <section
      id=""
      className={`w-full py-10 my-10 md:my-20 md:py-12 lg:py-16 px-3 bg-slate-400 bg-fixed text-background`}
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
            Clooud Gen stands at the forefront of web development, offering
            comprehensive services spanning from website construction to
            seamless backend-frontend integration. Our mission is to empower
            businesses with digital solutions that not only meet but exceed
            expectations. With a blend of expertise and passion, we redefine the
            digital landscape, one project at a time.
          </p>

          <Button>
            <Link href={'/about'}>Know More</Link>
          </Button>
        </div>
      </ZoomIn>
    </section>
  );
};

export default AboutUs;

const about = () => {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16">
      <div className="container flex flex-col gap-4">
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-8">
          <div className="flex items-center justify-center p-6 m-10 ml-0 bg-slate-500 rounded-xl">
            {/* <div className="relative">
        <img
        alt="Origami"
        className="rounded-lg"
        height="300"
        src="https://www.reshot.com/preview-assets/illustrations/ZK3N2W7CDX/website-design-ZK3N2W7CDX-w1600.jpg"
        style={{
            aspectRatio: "300/300",
            height: "300px",
            objectFit: "cover",
            width: "300px",
        }}
        width="300"
        />
        <div className="absolute bottom-0 left-0 ml-6 mb-6 bg-[#333333] text-white p-4 rounded-lg">
        <p>We&aposre delivering the best customer experience!</p>
        </div>
    </div> */}
            <Image
              alt="Teamwork"
              className="invisible ml-4 rounded-lg"
              height="400"
              src={About}
              style={{
                aspectRatio: '300/400',
                height: '400px',
                objectFit: 'cover',
                width: '300px',
              }}
              width="300"
            />
          </div>

          <div className="m-10 mr-0 space-y-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              About Clooud Gen
            </h2>
            <p className="text-justify text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Clooud Gen stands at the forefront of web development, offering
              comprehensive services spanning from website construction to
              seamless backend-frontend integration. Our mission is to empower
              businesses with digital solutions that not only meet but exceed
              expectations. With a blend of expertise and passion, we redefine
              the digital landscape, one project at a time.
            </p>
            <Button>Know More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
