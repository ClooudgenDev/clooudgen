import business from '@/assets/images/subscription/business.png';
import remote from '@/assets/images/subscription/remote.png';
import Image from 'next/image';

const SubscripStartup = () => {
  return (
    <div className="container my-10 md:my-20 ">
      <div>
        <div className="grid items-center justify-center grid-cols-1 gap-5 lg:grid-cols-2 justify-items-center">
          <Image
            className="max-w-[500px] order-2 lg:order-1 w-full"
            src={remote}
            alt=""
          />
          <div className="border-2 border-primary max-w-[600px] min-h-[450px] flex flex-col items-center justify-center order-1 lg:order-2 rounded-t-xl rounded-br-xl">
            <div className="p-5 m-5 space-y-5 text-center bg-blue-100">
              <h3 className="text-primary">
                Why do you need a remote IT team?
              </h3>
              <p>
                If you have a digital business, then you surely have a website.
                If your business is a bit larger or you sell your products
                through e-commerce, then having a mobile app is quite natural.
                Since you are running your business online, you definitely need
                digital marketing as well. To do digital marketing, you will
                undoubtedly need graphics design, video editing, etc. And
                definitely, you will need IT consulting services. If you want to
                set up a physical IT department to handle all these tasks, it
                will increase your expenses on one hand, and on the other hand,
                maintaining it will be a hassle. So, if you want to get rid of
                both the costs and the hassle, our service, Clooud Gen Remote IT
                Team is just for you.
              </p>
            </div>
          </div>
        </div>
        <div className="grid items-center justify-center grid-cols-1 gap-5 mt-10 lg:grid-cols-2 justify-items-center">
          <div className="border-2 border-primary max-w-[600px] min-h-[450px] flex flex-col items-center justify-center rounded-b-xl rounded-tl-xl ">
            <div className="p-5 m-5 space-y-5 text-center bg-blue-100">
              <h3 className="text-primary">
                Why do you need a remote IT team?
              </h3>
              <p>
                If you have a digital business, then you surely have a website.
                If your business is a bit larger or you sell your products
                through e-commerce, then having a mobile app is quite natural.
                Since you are running your business online, you definitely need
                digital marketing as well. To do digital marketing, you will
                undoubtedly need graphics design, video editing, etc. And
                definitely, you will need IT consulting services. If you want to
                set up a physical IT department to handle all these tasks, it
                will increase your expenses on one hand, and on the other hand,
                maintaining it will be a hassle. So, if you want to get rid of
                both the costs and the hassle, our service, Clooud Gen Remote IT
                Team is just for you.
              </p>
            </div>
          </div>
          <Image className="max-w-[500px] w-full " src={business} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SubscripStartup;
