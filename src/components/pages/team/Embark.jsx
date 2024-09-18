import EmbarkImg from '@/assets/images/team/Embark.png';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
const Embark = () => {
  return (
    <section className="container my-10 md:my-20">
      <div className="flex flex-col md:flex-row">
        <div className="space-y-6 md:w-1/2">
          <div className="lg:space-y-3">
            <h1>
              Embark on your <span className="text-primary">career</span>
            </h1>
            <h1>
              Path <span className="text-primary">With Clooud Gen</span>
            </h1>
          </div>
          <p className="lg:text-lg">
            At Clooud Gen, we foster an atmosphere of ambition and purpose. Our
            workplace thrives on diligence and determination, offering a dynamic
            setting perfect for those eager to propel their careers forward
            while making a tangible difference in people&apos;s lives through
            their work. As we continue to experience rapid growth, we are
            constantly on the lookout for exceptional individuals to join our
            team. If you are passionate about the transformative power of
            education, Clooud Gen provides a platform to channel your talents in
            a meaningful direction. We don&apos;t just value leadership, we
            cultivate it. Our ethos revolves around empowering individuals to
            lead and innovate, rather than simply managing them.Explore our
            current job openings and seize the opportunity to become a valuable
            member of the Clooud Gen family.
          </p>
          <Link className='inline-block mt-10' href={'/career'}>
            <Button className="rounded-lg">Career</Button>
          </Link>
        </div>
        <div className="md:w-1/2">

          <Image src={EmbarkImg} height={400} alt='Embark Career' className="mt-8" />

        </div>
      </div>
    </section>
  );
};

export default Embark;
