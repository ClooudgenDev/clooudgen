import question from '@/assets/images/uiux/question1.png';
import FourButton from '@/components/shared/FourButton';
import Image from 'next/image';

const WhyUi = () => {
  return (
    <div className="py-5 my-20 gradient-theme-v1">
      <div className="container flex items-center">
        <div className="">
          <h2 className="text-foreground">
            Why Choose Clooud Gen For Your UI/UX?
          </h2>
          <p className="my-10 description-1 text-foreground">
            With years of experience in the UI/UX design space, we understand
            the importance of user-centric design. Our approach focuses on
            creating seamless interactions that leave a lasting impression. By
            choosing us, you gain a strategic design partner committed to your
            success.
          </p>
          <div className="max-w-[500px]">
            <FourButton />
          </div>
        </div>
        <Image
          className="hidden sm:block w-full max-w-[300px]"
          src={question}
          alt=""
        />
      </div>
    </div>
  );
};

export default WhyUi;
