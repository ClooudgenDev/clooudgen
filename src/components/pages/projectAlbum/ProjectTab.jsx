"use client";

import React, { useEffect, useState } from 'react';
import ZoomIn from '@/components/shared/animation/ZoomIn';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MobProjctTab from './MobProjctTab';
import ProjectData from '@/lib/data/project/project';
import ProjectCard from '@/components/shared/project/ProjectCard';

const ProjectTab = () => {
    const [defaultTab, setDefaultTab] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const queryParams = new URLSearchParams(window.location.search);
            const param = queryParams.get('tab');
            if(param == null){
                setDefaultTab('webDevelopment')
            }
            else{
                setDefaultTab(param);

            }
        }
    }, []);

    return (
        <div className='container mt-40 mb-20'>
            <ZoomIn>
                <div className='relative text-center'>
                    <div>
                        <h2 className="section-heading | font-bold text-center inline-block pb-4 px-7 sm:px-10 border-b-2">
                        Explore Our Projects
                        </h2>
                    </div>
                    {/* Animation */}
                    <div>
                        <div className='absolute bottom-0 -translate-x-1/2 border-b-2 border-primary w-60 left-1/2'></div>
                        <div className='w-4 h-4 border-2 border-primary rounded-full bg-white absolute -translate-x-1/2 left-1/2 -bottom-1.5 animate-pulsex'></div>
                    </div>
                    {/* Animation */}
                </div>
            </ZoomIn>

            <div className="grid md:grid-cols-2 mt-20 gap-10 grid-cols-1">
                {ProjectData?.map((project,idx)=> (<ProjectCard service={project} key={idx}/>))}

            </div>

        </div>
    );
};

export default ProjectTab;
