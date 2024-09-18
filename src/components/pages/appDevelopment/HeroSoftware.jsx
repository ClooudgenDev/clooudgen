import HeroImageGif1 from "@/assets/images/appdevelopment/HeroSec.png";
import ContactUsDialog from "@/components/shared/contactUsDialog/ContactUsDialog";
import Hero from "@/components/shared/hero/Hero";

const HeroSoftware = () => {
    const defaultData = {subject:'Need some app service',messege:'Hello there, I need some app related service. Is there anyone available to help me?'}
    return (
        <Hero className='items-center xl:gap-32 p-3 mt-32 mb-20' height={300} media={HeroImageGif1} >
            <div className="">
                <h1 className='w-full section-heading sm:w-4/5 md:w-full'>App Development</h1>
                <h5 className='my-3 text-base italic font-light text-primary'>We craft innovative mobile apps that elevate your brand and engage users</h5>

                <h4 className="my-10 font-medium sm:text-justify">
                    In today&apos;s mobile-first world, a well-designed app is essential for business success. Our team of experienced app developers brings your ideas to life, creating user-friendly, feature-rich applications that achieve your goals.
                </h4>

                <ContactUsDialog DefaultMessege={defaultData} element="Get Started" />
            </div>
        </Hero>
    );
};

export default HeroSoftware;