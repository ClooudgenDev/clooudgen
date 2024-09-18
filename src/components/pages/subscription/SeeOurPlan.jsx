import React from 'react';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import MonthPackage from './MonthPackage';
import AnnualPackage from './AnnualPackage'; 
const SeeOurPlan = () => {
    return (
        <div id='plan' className='py-10'>
            <div className='container px-5 py-10 my-10 bg-gradient rounded-2xl'>
                <div className='flex flex-col items-center justify-center '>
                    <div className='text-center'>
                        <h1 className='text-background'>See Our Plans</h1>
                    </div>
                    <div>
                        <Tabs defaultValue="monthly" className="w-full">
                            <div className='mt-10 '>
                                <TabsList className="grid max-w-[400px] my-10 mx-auto grid-cols-2 bg-background">
                                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                                    <TabsTrigger value="annual">Annually(save 10%)</TabsTrigger>
                                </TabsList>
                            </div>
                            <TabsContent value="monthly">
                                <MonthPackage />
                            </TabsContent>
                            <TabsContent value="annual">
                                <AnnualPackage />
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeeOurPlan;