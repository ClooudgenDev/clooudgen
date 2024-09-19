"use client"
import React from 'react';
import { Project } from './Project';
import FadeUp from '../animation/FadeUp';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ProjectSection = () => {

    return (
        <div className="relative p-3 my-10 md:my-20">
            <h2 className="my-8 text-center section-heading">
                Our Work
            </h2>
            <Project />

            <FadeUp>
                <Link href="/project-album" className='flex justify-center'>
                    <Button >View all</Button>
                </Link>
            </FadeUp>

        </div>
    );
};

export default ProjectSection;