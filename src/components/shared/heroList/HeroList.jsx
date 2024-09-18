import Image from 'next/image';

const HeroList = ({children, media, heading, description}) => {
    return (
        <section>
                    <h2 className='text-primary text-3xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl w-full sm:w-4/5 md:w-full'>{heading}</h2>
                    <h5 className="my-4 font-normal sm:text-justify ">
                       {description}
                    </h5>
                    {children}
        </section>
    );
};

export default HeroList;