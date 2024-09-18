import Image from "next/image";
import Image1 from '@/assets/images/uiux/ui/picture1.png'
import Image2 from '@/assets/images/uiux/ui/picture2.png'
import Image3 from '@/assets/images/uiux/ui/picture3.png'
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const ExploreUiUx = () => {
    return (
        <section className="mb-10 gradient-theme-v1 lg:mt-20 overflow-hidden">
            <div className="container items-center justify-center mx-auto text-white xl:flex">
                <div className="py-5 space-y-10 lg:max-w-2/5">
                    <h2 className="font-medium heading-2">Explore Our Work</h2>
                    <p className="description-1">View a selection of our recent projects showcasing our diverse UI Ux design capabilities. Each project reflects our dedication to quality and innovation in visual communication.</p>
                    <Link href={'/project-album'} className='relative flex items-center w-[150px] gap-1 px-4 py-2 mt-3 text-sm font-medium text-white border-4 rounded-lg group btn border-sky-300'>
                        <span className='transition-all duration-100 group-hover:pr-2'>Learn more</span> <FaArrowRight />
                    </Link>
                </div>

                <div className="relative z-0 flex gap-5 mx-5 lg:gap-72 md:gap-52 ">
                    <Image src={Image1} className="max-w-[340px] h-auto mt-10  " alt='' />
                    <Image src={Image2} className="max-w-[380px] h-auto absolute  xl:left-[290px] lg:left-[290px] md:left-56 md:block hidden" alt='' />
                    <Image src={Image3} className="max-w-[340px] h-auto mt-10 md:block sm:block hidden " alt='' />
                </div>

            </div>
        </section>
    );
};

export default ExploreUiUx;