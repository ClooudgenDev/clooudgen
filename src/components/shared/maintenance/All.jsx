import Image from 'next/image';

const All = ({ children, media, heading, subHeading, description1, description2 }) => {
    return (
        <section className='container my-8 md:my-20 '>
            <div className='w-full md:w-4/5 text-center mx-2 md:mx-auto'>
                <h2 className="font-bold section-heading py-3 md:py-6">{heading} </h2>
                <h3 className="text-lg md:text-3xl pb-6">{subHeading} </h3>
                <p className='text-left'>{description1}</p>
                <p className='text-left pb-10'>{description2}</p>
            </div>
            <Image key={0} height={500} width={1300} src={media} alt="hero image" className="mx-auto" />
        </section>
    );
};

export default All;