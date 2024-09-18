import ReliableImage from '@/assets/images/maintenance/reliableImg.png';
import ReliableShadow from '@/assets/images/maintenance/reliableShadow.png';
import Image from 'next/image';

const Reliable = () => {
  return (
    <section className="container relative my-10 md:my-20">
      <div className="flex flex-col bg-white border-2 rounded-md lg:flex-row border-primary">
        <div className="lg:w-1/2">
          <Image
            className="rounded-lg"
            src={ReliableImage}
            height={400}
            alt="Maintenance Hero"
          />
        </div>
        <div className="p-3 text-right lg:w-2/3">
          <h4 className="mt-4 text-lg text-primary lg:text-3xl">
            We&apos;re the reliable company you can count on
          </h4>
          <p className="my-3 text-xs italic font-medium md:text-sm">
            For All Your Web Maintenance Needs
          </p>

          <div className="text-sm md:mt-10 md:text-lg">
            <p>
              Clooud Gen specializes in web design and maintenance, offering
              cost-effective services delivered promptly.Our focus is on keeping
              your website secure and current to facilitate your business
              growth. Utilizing our proprietary platform, we streamline the
              process for achieving this goal. Our in-house experts are ready to
              assist with your website&apos;s daily change requests and various
              content management, eCommerce, hosting, email, SSL certificate,
              and loading issues. As a platform-independent provider , we cater
              to a wide range of platform
            </p>
            <p className="my-4">
              {' '}
              Our website maintenance programs ensure continuous updates and
              security for your website, providing comprehensive support for
              your online marketing success in both the short and long term
            </p>
          </div>
          <Image
            src={ReliableShadow}
            height={230}
            className="absolute bottom-0 -right-6"
            alt="shadow"
          />
        </div>
      </div>
      {/* <Image src={ReliableBorder} className='absolute top-0 w-full' height={400} /> */}
    </section>
  );
};

export default Reliable;
