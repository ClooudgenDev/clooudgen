import whyImg from '@/assets/images/videoediting/whyVideo.png';
import ContactUsDialog from '@/components/shared/contactUsDialog/ContactUsDialog';
import Hero from '@/components/shared/hero/Hero';
const WhyVideo = () => {
  const defaultData = {
    subject: 'Need a Demo Video',
    messege:
      'Hello there, I need a demo video before working with Clooud Gen. Is there anyone available?',
  };
  return (
    <div className="container md:min-h-[600px] flex flex-col justify-center items-center my-10  md:mt-32">
      <Hero reverse={true} className={'items-center mb-10 '} media={whyImg}>
        <div>
          <div className="relative ">
            <h3 className="w-full my-8 text-primary heading-2">
              Why Choose Clooud Gen For Video Editing ?{' '}
            </h3>
            <h4 className=" description-1 mb-4">
              At ClouodGen, our video editing team is driven by a passion for
              storytelling. With expertise and industry-leading software, we
              ensure your videos stand out and connect with your audience.
              Whether it&apos;s a vlog, social media content, or a full-fledged
              film project, we are committed to delivering exAt Clooud Gen, our
              video editing team is driven by a passion for storytelling. With
              expertise and industry-leading software, we ensure your videos
              stand out and connect with your audience. Whether it&apos;s a
              vlog, social media content, or a full-fledged film project, we are
              committed to delivering exceptional video editing services.
            </h4>
            <ContactUsDialog
              DefaultMessege={defaultData}
              element="Request for a demo"
            />
          </div>
        </div>
      </Hero>
    </div>
  );
};

export default WhyVideo;
