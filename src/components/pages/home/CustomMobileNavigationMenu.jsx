import Link from 'next/link';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { RxCross2 } from "react-icons/rx";
import servicesData from '@/lib/data/servicesData';
import companyData from '@/lib/data/companyData';
import AboutUs from './AboutUs';
import WhyCloudgen from './WhyCloudgen';
import Footer from '@/components/shared/Footer';
import { CardFooter } from '@/components/ui/card';

const CustomMobileNavigationMenu = ({ className, setMobileNav }) => {
    const offNavigationMenu = () => {
        setMobileNav(false)
    }
    return (
        <Accordion className={className} type="single" collapsible defaultValue="item-2">
            <RxCross2 size={28} onClick={() => { setMobileNav((prev) => !prev), document.body.classList.remove("overflow-x-hidden") }} className='absolute rounded-full right-2 top-3.5 text-foreground' />

            <AccordionItem className="" value="item-1">
                <Link onClick={offNavigationMenu} href="/#" className='flex items-center justify-between flex-1 py-4 font-semibold transition-all ps-5 hover:underline'>
                    Home
                </Link>
            </AccordionItem>

            <AccordionItem className="" value="item-3">
                <Link onClick={offNavigationMenu} href="/make-your-team" className='flex items-center justify-between flex-1 py-4 font-semibold transition-all ps-5 hover:underline'>
                    Make Your Team
                </Link>
            </AccordionItem>

            <AccordionItem className="" value="item-2">
                <AccordionTrigger className="text-base font-semibold ps-5">Services</AccordionTrigger>
                <AccordionContent className="pb-0 font-semibold">
                    <ul>
                        {servicesData.map((component) => (
                            <li
                                key={component.title}

                                className='p-2 px-5 text-sm font-semibold border-t'
                            >
                                <Link onClick={offNavigationMenu} href={component.href}>{component.title}</Link>
                            </li>
                        ))}
                    </ul>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem className="" value="item-3">
                <AccordionTrigger className="text-base font-semibold ps-5">Company</AccordionTrigger>
                <AccordionContent className="pb-0 font-semibold">
                    <ul>
                        {companyData.map((company) => (
                            <li
                                key={company.title}

                                className='p-2 px-5 text-sm font-semibold border-t'
                            >
                                <Link onClick={offNavigationMenu} href={company.href}>{company.title}</Link>
                            </li>
                        ))}
                    </ul>
                </AccordionContent>
            </AccordionItem>

            {/* <AccordionItem className="" value="item-3">
                <Link onClick={offNavigationMenu} href="/news-room" className='flex items-center justify-between flex-1 py-4 font-semibold transition-all ps-5 hover:underline'>
                    News Room
                </Link>
            </AccordionItem> */}

            <AboutUs />
            <WhyCloudgen />
            <Footer />
        </Accordion>
    );
};

export default CustomMobileNavigationMenu;
