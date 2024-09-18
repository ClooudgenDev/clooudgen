import React from 'react';

const VideoTitle = ({text,className}) => {
    return (
        <h1 className={`xl:text-[75px] lg:text-7xl md:text-6xl sm:text-5xl xsm:text-3xl text-xl text-center ${className}`}>{text}</h1>
    );
};

export default VideoTitle;