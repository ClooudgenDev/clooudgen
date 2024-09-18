"use client"
import React from 'react';
import { Project } from './Project';

const ProjectSection = () => {
    
    return (
        <div className="relative my-10 md:my-20 p-3">
            <h2 className="my-8 text-center section-heading">
                    Our Work
                </h2>
            <Project/>
            
        </div>
    );
};

export default ProjectSection;