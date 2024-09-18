import Image from "next/image";
import { IoHome } from "react-icons/io5";
import ProcessBg from '@/assets/images/maintenance/process/circleArrow.png'
import { cn } from "@/lib/utils";
import processData1 from "@/lib/data/WebMaintenance/processData1";
import ZoomIn from "@/components/shared/animation/ZoomIn";
import FadeLeft from "@/components/shared/animation/FadeLeft";
import FadeRight from "@/components/shared/animation/FadeRight";

const MaintenanceProcess = () => {
    return (
        <section className="container md:my-20">
            <div className="hidden md:block">
                {
                    processData1.map(data => <div key={data.idx} className="flex flex-col items-center justify-around space-y-5 md:gap-12 md:space-y-20 md:flex-row">

                        {
                            data.idx % 2 === 0 ?
                                <div className={cn(`md:w-1/3 mt-20`)}>
                                    <p>{data.description1}</p>
                                </div>
                                :
                                <div className={cn(`grid place-items-center  md:w-1/3 mt-20`,)}>
                                    <span className="text-6xl text-tertiary">{data.icon}</span>
                                    <h3 className="text-tertiary">{data.heading}</h3>
                                    <p className="">{data.description1}</p>
                                </div>
                        }
                        <div className="relative hidden md:block">
                            <Image src={ProcessBg} className={cn(`absolute z-10 -left-[40%] -top-[15%]`, { 'rotate-180 left-auto -right-[40%] -top-[15%]': data.idx % 2 === 0 })} alt='process circle' />
                            <div className="w-48 h-48 p-12 bg-gray-200 rounded-full text-tertiary">
                                <p className=" text-7xl">0{data.idx}</p>
                                <p className="text-4xl">Step</p>
                            </div>
                        </div>
                        {data.idx % 2 === 0 ?
                            <div className={cn(`grid place-items-center md:w-1/3`,)}>
                                {/* <IoHome className="mx-auto text-5xl " /> */}
                                <span className="text-6xl text-tertiary">{data.icon}</span>
                                <h3 className="text-tertiary">{data.heading}</h3>
                                <p className="">{data.description2}</p>
                            </div> :
                            <div className={cn(`md:w-1/3`)}>
                                <p>{data.description2}</p>
                            </div>}

                    </div>)
                }
            </div>
            <div className="block md:hidden">
                {
                    processData1.map(data => <div key={data.idx} className={cn(`grid place-items-center md:w-1/3 mt-8 md:mt-8`,)}>
                        <span className="text-6xl text-tertiary">{data.icon}</span>
                        <h3 className="text-tertiary">{data.heading}</h3>
                        <p className="">{data.idx % 2 !== 0 ? data.description2 : data.description1}</p>
                    </div>)
                }
            </div>
        </section>
    );
};

export default MaintenanceProcess;