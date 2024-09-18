import Image from "next/image";
import Link from "next/link";
import TeamImage from "@/assets/images/home/team/team.png"
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";

const Team = () => {
    return (
        <section className="container flex flex-col items-center justify-between max-w-sm gap-10 px-5 my-8 transition-all duration-500 border border-gray-200 rounded-lg shadow-sm cursor-pointer sm:max-w-full md:gap-5 lg:gap-0 md:flex-row bg-slate-50 hover:shadow-md hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
            <Image className="" src={TeamImage} height={316} alt="Team" />
            <div className="p-3 space-y-6 md:p-5">
                <h2 className="text-2xl font-bold text-gray-900 gradient-blue dark:text-white">Your complete IT team is here</h2>
                <p className='mt-2 text-gray-500 md:text-justify dark:text-gray-400'>Experience seamless IT management with our expert team. From development to deployment and maintenance to digital marketing, we provide comprehensive solutions tailored to your business needs. Let us handle your technology, so you can focus on what you do best. Trust us for reliable, round-the-clock support and innovative IT strategies that drive success.</p>
                <Link href={'/subscription'} className="flex items-center gap-1 hover:text-blue-600">
                    <span className='hover:pr-1.5 transition-all duration-100'>Learn more</span> <FaArrowRight />
                </Link>
                <div className="flex justify-end">
                    <Link href='/subscription#plan'> <Button >Subscription Plans</Button></Link>
                </div>
            </div>
        </section>
    );
};

export default Team;