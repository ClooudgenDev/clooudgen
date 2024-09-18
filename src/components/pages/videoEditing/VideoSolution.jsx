import EditingSolutionData from '@/lib/data/videoEditing/editingData';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';

const VideoSolution = () => {
    return (
        <div className='container my-10 md:my-20'>
            <div className='space-y-5 text-center'>
                <h2 className='text-tertiary'>Comprehensive Video Editing Solutions</h2>
                <p className='text-primary'>Explore our comprehensive range of video editing services designed to craft compelling stories</p>
            </div>
            <div className='grid grid-cols-1 gap-5 mx-auto my-20 justify-items-center lg:grid-cols-2 xl:grid-cols-4 md:grid-cols-2 '>
                {
                    EditingSolutionData?.map((data, index) =>
                        <div key={index}>
                            <Card className='xl:rounded-t-[50px] rounded-t-[50px] sm:rounded-t-[50px]
                             rounded-b-3xl sm:max-w-[390px] w-[300px] xl:h-[500px] bg-cyan-100'>
                                <Image className='max-w-[390px] w-[300px]'  src={data?.image} alt='' />

                                <div className='p-5 '>
                                    <CardTitle className='mb-5'>
                                        {data?.title}
                                    </CardTitle>
                                    <CardDescription>
                                        {data?.description}
                                    </CardDescription>
                                </div>
                            </Card>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default VideoSolution;