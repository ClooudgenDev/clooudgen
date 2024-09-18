import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FaArrowRight } from 'react-icons/fa6';
import Link from 'next/link';


const ServiceCard1 = ({ Icon, title, description, href }) => {
    const [fullDesc, setFullDesc] = useState(false)
    const navigate = useRouter()


    const LinkChange = () => {
        navigate.push(href)
    }
    return (

        <div onClick={LinkChange} className="h-full max-w-sm p-6 transition-all duration-500 border border-gray-200 rounded-lg shadow-sm cursor-pointer md:max-w-full bg-slate-50 hover:shadow-md hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">

            <div className={cn(`w-20 h-20 mx-auto flex justify-center items-center rounded-full bg-slate-100`)}>
                <Icon className='font-extrabold' size={52} />
            </div>
            <div className="mt-4">
                <h3 className="text-xl font-bold text-foreground gradient-blue">{title}</h3>

                <p className='text-gray-500 text-start sm:hidden'>{description?.slice(0, fullDesc ? description?.length : 120)}
                    <span onClick={(e) => { e.stopPropagation(); setFullDesc((prev) => !prev) }} className='text-sm font-semibold border-b cursor-pointer hover:text-blue-600 sm:hidden whitespace-nowrap'>{fullDesc ? ' See Less' : '...See More'}</span>
                </p>
                <p className="hidden mt-2 text-gray-500 dark:text-gray-400 sm:block">
                    {description.slice(0, description.lastIndexOf(' ', 120))}
                    <Dialog>
                        <DialogTrigger onClick={(e) => { e.stopPropagation(); setFullDesc((prev) => !prev) }} className=''>...<span className='text-xs font-semibold hover:text-blue-500'>See More</span></DialogTrigger>
                        <DialogContent onClick={(e) => { e.stopPropagation() }} className="p-0 bg-transparent border-none">
                            <div className="p-6 transition-all duration-500 border border-gray-200 rounded-lg shadow-sm bg-slate-50 hover:shadow-md hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">

                                <div className={cn(`w-20 h-20 mx-auto flex justify-center items-center rounded-full bg-slate-100`)}>
                                    <Icon className='font-extrabold' size={52} />
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-lg font-bold text-foreground gradient-blue">{title}</h3>
                                    <p className="mt-2 overflow-auto text-sm text-gray-500 dark:text-gray-400 max-h-96">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </p>
            </div>
            <Link href={href} className='relative flex items-center gap-1 mt-3 text-sm group hover:text-blue-600'>
                {/* <p className={cn('absolute top-3 right-0 hidden transition-opacity duration-500 group-hover:block rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 ')}>Learn More</p> */}
                {/* <FaArrowCircleRight size={36} className={cn('cursor-pointer text-foreground bottom-6 left-8 hover:bg-blue-700 rounded-full')} /> */}
                <span className='group-hover:pr-1.5 transition-all duration-100'>Learn more</span> <FaArrowRight />
            </Link>
        </div>


    );
};

export default ServiceCard1;