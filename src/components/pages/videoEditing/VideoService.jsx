import serviceImg from '@/assets/images/videoediting/videoService.png';
import Hero from '@/components/shared/hero/Hero';
const VideoService = () => {
  return (
    <div className="container md:min-h-[600px] flex flex-col justify-center items-center my-10 border rounded-[40px] border-primary  md:my-32">
      <Hero reverse={true} className={'items-center mb-10 '} media={serviceImg}>
        <div>
          <div className="relative ">
            <h3 className="w-full my-8 text-primary">
              About Clooud Gen&apos;s video editing services{' '}
            </h3>
            <h4 className=" description-1">
              Clooud Gen offers professional video editing services designed to
              elevate your creative vision. Whether you&apos;re a content
              creator, business owner, or filmmaker, our team of skilled editors
              is dedicated to transforming your raw footage into polished,
              captivating videos.
            </h4>
          </div>
        </div>
      </Hero>
    </div>
  );
};

export default VideoService;
