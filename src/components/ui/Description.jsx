// this file provides description styles with customizable power
// description is actual text, customStyle = utility classes to be applied

export const Description = ({ description, position, customStyle }) => {

    const conditionalPosition = position === 'center' ? 'md:flex justify-center' : (position === 'right' ? 'text-right' : 'text-left');

    return (
        <p className={`${conditionalPosition} ${customStyle} text-[#7c7c7c]  leading-7 md:leading-8 sm:text-justify text-[17px] md:text-[19px] lg:text-[22px] font-normal`}>{description}</p>
    );
};
