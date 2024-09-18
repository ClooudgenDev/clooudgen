import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectButton from '../projectButton/ProjectButton';

const ProjectCard = ({ service }) => {
  return (
    <div className="relative group cursor-pointer">
      {/* Image */}
      <Image
        src={service?.thumnail}
        alt="thumbnail"
        className="rounded-lg w-full transition-transform duration-300 ease-in-out"
      />

      {/* Overlay with Button (hidden by default) */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-lg">
        <Link href={`project-album/${service.id}`}>
          <ProjectButton text="View Details" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
