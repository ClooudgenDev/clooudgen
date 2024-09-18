import Image from "next/image";


const SoftwareCard = ({ title, media, descriptions }) => {
    return (
        <div className='relative group overflow-hidden'>
            <Image alt='' src={media} className='object-cover w-full h-64 md:h-96' width={400}/>
            <div style={{
                    transitionDelay: '50ms',
                    animationDelay: '50ms'
            }} className='absolute  inset-x-0 h-10 text-white transition-all  opacity-75 trana bg-foreground md:h-16 top-28 md:top-40 duration-1000 group-hover:md:top-[400px]'>
                <p className='mt-2 font-bold text-center text-md md:text-xl md:mt-4'>{title}</p>
            </div>
            {/* card hover bg */}
            <div className="absolute inset-0 flex h-0 text-white transition-all duration-1000 bg-opacity-25 group-hover:h-full bg-foreground opacity-70">
                <p className="h-full p-3 overflow-hidden text-center transition-all delay-300 opacity-0 group-hover:opacity-100 flex justify-center items-center">{descriptions}</p>
            </div>
        </div>
    );
};

export default SoftwareCard;