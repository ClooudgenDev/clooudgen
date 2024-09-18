import goalHero from '@/assets/images/about/ourGoal.png';
import Image from 'next/image';
const OurGoal = () => {
  return (
    <div className="container">
      <div
        className="lg:h-[300px] flex flex-col justify-center lg:my-20 my-10 relative md:px-20 "
        style={{
          backgroundImage: `url(./ourGoalBg.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '600px',
        }}
      >
        <div className="items-center justify-center gap-10 md:flex">
          <div className="border border-primary max-w-[600px] md:h-[350px] h-[300px] flex flex-col justify-center md:mx-5 text-center bg-foreground rounded-xl mx-auto">
            <h1 className="text-white border-white border sm:w-[300px] w-[200px] mx-auto lg:p-4 rounded-lg">
              Our <span className="text-primary">Goal</span>
            </h1>
            <p className="px-5 py-5 text-sm text-center lg:text-xl text-background">
              Clooud Gen envisions a future where businesses seamlessly harness
              the power of technology to innovate, grow, and thrive in a rapidly
              evolving digital landscape. We aspire to be the trusted partner
              that empowers organizations to unlock their full potential through
              cutting-edge IT solutions and services.
            </p>
          </div>
          <Image
            className="lg:w-[450px] md:w-[300px] w-[350px] mx-auto"
            src={goalHero}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OurGoal;
