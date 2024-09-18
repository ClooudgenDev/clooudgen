import { UiUxBestData } from "@/lib/data/Ui/Ux/BestUiUxData";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import FadeUp from '@/components/shared/animation/FadeUp';



const BestUiUx = () => {
    return (
        <div className='container my-10'>
            <h1 className="sm:text-center heading-2">Why Are We Best for UI/UX Design?</h1>
            <div className="grid grid-cols-1 gap-5 md:mt-10 xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 justify-items-center" >
                {
                    UiUxBestData?.map((info, index) =>
                        <FadeUp  key={index}>
                        <div className="relative">
                            <Image className='w-[100px] mx-auto relative top-10' src={info?.img} alt="" />
                            <Card className='h-[280px] text-center px-3 flex xl:pt-0 pt-10 flex-col justify-center bg-blue-50 space-y-5'>
                                <CardTitle className='text-xl md:text-2xl'>
                                    {info?.title}
                                </CardTitle>
                                <CardDescription className='text-gray-600'>
                                    {info?.description}
                                </CardDescription>

                            </Card>
                        </div>
                        </FadeUp>
)
                }
            </div>
        </div>

    );
};

export default BestUiUx;