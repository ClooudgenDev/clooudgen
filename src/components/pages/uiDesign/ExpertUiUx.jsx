import ExpertBg from '@/assets/images/uiux/ui/expertBg.png';
import Image from 'next/image';

const ExpertUiUx = () => {
  return (
    <div className="container my-10 lg:my-20">
      <div className="relative z-10 flex items-center justify-center pt-5 mx-auto sm:text-center">
        <Image
          className="absolute z-0 h-full -bottom-5"
          src={ExpertBg}
          alt=""
        />
        <div className="z-10">
          <div className="p-5 py-10">
            <h3 className="w-full mx-auto mb-5 sm:w-4/5 md:w-full">
              Elevate Your Brand with Expert UI/UX Design
            </h3>
            <p className="text-lg font-medium text-gray-600">
              At Clooud Gen, we specialize in crafting exceptional user
              interfaces and experiences that captivate audiences and drive
              results. Our team combines creativity with industry expertise to
              deliver designs that are not only visually stunning but also
              highly functional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertUiUx;
