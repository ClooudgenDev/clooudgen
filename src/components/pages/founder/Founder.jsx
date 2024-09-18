import OmarPng from '@/assets/images/team/OmarFaruk.png'
import Image from 'next/image';
import Link from 'next/link';

const Founder = () => {
  return (
    <main className="container grid w-full mt-32 mb-20 place-items-center">
      <div className="mb-5">
        <Image
          className="rounded-full border-8 mx-auto p-1.5 border-foreground w-52 lg:w-auto"
          height={300}
          width={300}
          src={OmarPng}
          alt="Founder"
        />
        <div className="mx-auto text-center md:w-3/5">
          <h1 className="my-4">Omar Faruk Bhuiyan</h1>
          <p className="text-sm md:text-base">
            <span className="font-semibold">Mr. Bhuiyan</span> is an entrepreneur,
            programmer, and innovator driven by the use of technology to address
            practical issues. He leads a vibrant IT service provider that aims
            to ensure innovation at your doorstep.
          </p>
        </div>
      </div>

      <div className="mx-auto my-3">
        <h3 className="mb-2">Entrepreneurial Journey</h3>
        <p className="text-sm md:text-base">
          My entrepreneurial journey began with a dream to connect the dots
          between innovation and real-world application. Armed with knowledge in
          programming, web development, and software and app development, I
          embarked on establishing a tech-driven organization that goes beyond
          profit-making—emphasizing cutting-edge technology while prioritizing
          client satisfaction and societal impact
        </p>
      </div>
      <div className="mx-auto my-3">
        <h3 className="mb-2">What Makes Us Unique:</h3>
        <p className="text-sm md:text-base">
          We, as a corporation that was established on the foundations of
          invention and placed the customer at the center of all our activities,
          are different because of
        </p>

        <ul className="!list-disc ml-5 text-sm md:text-base">
          <li className="">
            <h4 className="inline font-semibold">
              High-Level Technological Know-How:
            </h4>
            <p className="inline">
              {' '}
              Our expert team of developers and computer programmers ensures
              that we use state-of-the-art technology to create strong and
              scalable solutions.
            </p>
          </li>
          <li className="">
            <h4 className="inline font-semibold">Attention to Our Clients:</h4>
            <p className="inline">
              {' '}
              Understanding our clients needs is our top priority. We prioritize
              communication to ensure we work hand-in-hand to develop solutions
              that perfectly match their goals.
            </p>
          </li>
          <li className="">
            <h4 className="inline font-semibold">Infinite Innovation:</h4>
            <p className="inline">
              {' '}
              The field of technology is continuously changing, and so must we.
              We ensure that we are at the forefront by adopting the latest
              technologies and approaches to develop solutions that will be
              relevant in the future.
            </p>
          </li>
        </ul>

        <p className="my-5 text-sm md:text-base">
          If you are a startup wanting to make your mark in the digital world or
          an enterprise looking to streamline your operations, reach out.
          Let&apos;s begin this transformative journey together
        </p>
        <p className="text-sm md:text-base">
          Contact me without hesitation through my email,{' '}
          <Link
            className="text-blue-500 underline"
            href={'mailto:cloudgen.corporate@gmail.com'}
          >
            omar@clooudgen.com
          </Link>{' '}
          to discuss how technology can drive your business to prosperity with
          Clooud Gen.
        </p>
      </div>
    </main>
  );
};

export default Founder;
