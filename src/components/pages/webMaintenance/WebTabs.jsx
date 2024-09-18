import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TabHeader from '@/assets/images/maintenance/tabHeader.png'
import TabImg1 from '@/assets/images/maintenance/tabs/tab3.png'
import TabImg2 from '@/assets/images/maintenance/tabs/tab2.png'
import TabImg3 from '@/assets/images/maintenance/tabs/tab1.png'

const WebTabs = () => {
    return (
        <section className="container my-10 md:my-20">
            <heading className="relative flex flex-col items-center justify-center text-center">
                <Image src={TabHeader} alt='' height={100} className="" />
                <h3 className="absolute text-xs font-medium text-primary md:text-2xl">All aspects of Website Maintenance Services</h3>
            </heading>
            <div className="mx-2 mt-3 space-y-5 text-primary md:mt-8">
                <p className="text-sm md:text-lg">A website maintenance service ensures your website remains up-to-date, functioning smoothly, and protected from cybersecurity threats. Depending on your business type and size, you may need various maintenance tasks, such as adding content, updating blogs, introducing new products, fixing links, adjusting the website&apos;s appearance, or uploading media.</p>
                <p className="text-sm md:text-lg">Outsourcing website maintenance offers several benefits, including enhanced productivity, cost savings by avoiding in-house staffing, access to diverse professional designers, and flexible pricing options.</p>
            </div>

            <Tabs defaultValue="account" className="h-full md:my-1  ">

                <TabsList className='w-full py-8 my-6 flex sm:flex-row flex-col mt-28 mb-28 gap-2  text-primary'>

                    <TabsTrigger value="account" className="sm:w-1/3 w-full border-2 border-primary">
                        <div className="flex flex-col items-center w-full py-2 rounded-sm ">
                            <Image src={TabImg1} height={80} alt='' className="hidden my-5 md:block" />
                            <h4>What are website </h4>
                            <h4>maintenance services?</h4>
                        </div>
                    </TabsTrigger>

                    <TabsTrigger value="password" className="sm:w-1/3 w-full border-2 border-primary">
                        <div className="flex flex-col items-center w-full py-2 rounded-sm">
                            <Image src={TabImg2} height={80} alt='' className="hidden my-5 md:block" />
                            <h4>How does website </h4>
                            <h4>maintenance work?</h4>
                        </div>
                    </TabsTrigger>

                    <TabsTrigger value="contact" className="sm:w-1/3 w-full border-2 border-primary">
                        <div className="flex flex-col items-center w-full py-2 rounded-sm">
                            <Image src={TabImg3} height={80} alt='' className="hidden my-5 md:block" />
                            <h4>What are the benefits of</h4>
                            <h4>website maintenance?</h4>
                        </div>
                    </TabsTrigger>

                </TabsList>

                <TabsContent className='relative w-full p-5 text-white bg-primary ' value="account">
                    <div style={{ clipPath: 'polygon(50% 0, 0 100%, 100% 100%)' }} className="hidden-sm-to-xs absolute w-[10%]  h-11 -top-10 -translate-x-[13%] left-[13%] bg-primary"></div>
                    <p className="text-sm md:text-lg">Website maintenance services encompass a range of ongoing tasks to ensure your website stays secure, up-to-date, and performing optimally. This includes regular content updates, software and security updates, backup management, technical support, performance optimization, SEO maintenance, design updates, e-commerce support, and content management. These services help maintain the functionality, security, and relevance of your website, ultimately enhancing the user experience and supporting your online business goals.</p>

                </TabsContent>
                <TabsContent className='relative w-full p-5 mt-10 space-y-5 text-white bg-primary' value="password">
                    <div style={{ clipPath: 'polygon(50% 0, 0 100%, 100% 100%)' }} className="hidden-sm-to-xs absolute w-[10%] h-10 -top-10 -translate-x-1/2 left-1/2 bg-primary"></div>
                    <p className="text-sm md:text-lg">Website maintenance involves regular updates to keep a site secure, functional, and up-to-date. This includes content updates, software and security patches, backup management, technical support, performance optimization, SEO upkeep, design enhancements, and e-commerce support. These efforts ensure a website remains reliable, user-friendly, and aligned with current standards and trends.</p>

                </TabsContent>
                <TabsContent className='relative w-full p-5 mt-10 space-y-5 text-white bg-primary' value="contact">
                    <div style={{ clipPath: 'polygon(50% 0, 0 100%, 100% 100%)' }} className="hidden-sm-to-xs absolute w-[10%] h-10 -top-10 -translate-x-[13%] right-[10%] bg-primary"></div>
                    <p className="text-sm md:text-lg">Regular updates fortify defenses against cyber threats, protecting data integrity and user trust.Optimizations enhance speed and usability, fostering positive user experiences and search engine visibility.Ensuring content freshness and resolving issues maintain visitor engagement and satisfaction.Continuous upkeep boosts search engine rankings, drives organic traffic, and enhances online presence.Backup systems and recovery plans minimize downtime, ensuring uninterrupted operations.Proactive maintenance mitigates the need for costly emergency fixes and prevents revenue loss.
                    </p>

                </TabsContent>

            </Tabs>
        </section>
    );
};

export default WebTabs;