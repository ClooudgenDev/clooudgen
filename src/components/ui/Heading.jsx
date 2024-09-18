
// this file provide heading style with custom style 

export const Heading = ({title,position,customStyle}) => {

    const conditionalPosition = position === 'center' ? 'md:text-center' : (position === 'right' ? 'text-right' : 'text-left');

    return (
        <h1 className={`
        ${conditionalPosition} ${customStyle}
         pb-3 md:pb-4 lg:pb-6 Heading w-full  md:w-full`}>{title}</h1>
    );
};

