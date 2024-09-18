import img2 from '@/assets/images/software/softhero.png'
import ContactUsDialog from '@/components/shared/contactUsDialog/ContactUsDialog';
import Hero from '@/components/shared/hero/Hero';

const SoftwareHero = () => {
    const defaultData = {
        subject: 'Software Development Service Details',
        messege:
            'Hello there, I would like to know more about Software Development Service. Is there anyone available?',
    };

    return (
        <div className='pt-20 mb-10 lg:pt-36 md:mt-10 '>
            <Hero className={'items-center'} reverse={true} media={img2}>
                <div>
                    <p className='my-3 text-lg font-bold text-primary'>Crafting Digital Solutions</p>
                    <h1 className='w-full sm:w-4/5 md:w-full'>SOFTWARE DEVELOPMENT</h1>
                    <p className="my-4 text-gray-500 sm:text-justify">
                        At our company, we pride ourselves on delivering elite custom software development solutions tailored to the unique needs of global enterprises and leading companies across various sectors. Our approach employs a matrix structure designed to guarantee redundancy, continuity, and the meticulous maintenance of requisite quality standards throughout our delivery processes.
                    </p>
                    <ContactUsDialog
                        DefaultMessege={defaultData}
                        element="Ask more"
                    />
                </div>
            </Hero>
        </div>
    );
};

export default SoftwareHero;