export const LargeButton = ({ LeftIcon, RightIcon, text, clickHandler,customStyle }) => {
    return (
        <button onClick={clickHandler} className={`
        ${customStyle && customStyle}
        bg-primary group md:mx-auto   
        px-16 md:px-20 flex  md:justify-center mt-7 rounded-full py-2 md:py-3 lg:py-4 text-md
         md:text-lg  text-white relative`}> {text}

        <LeftIcon className="absolute hidden md:flex  right-0 
         text-3xl opacity-0 invisible group-hover:visible 
         group-hover:opacity-100 
         group-hover:-translate-x-[241px]  items-center
          transition-all duration-300 -translate-x-44
           z-10 top-6 text-[#ff4e8c]"/>


        <RightIcon className="absolute hidden md:flex second right-0 text-[black] 
         text-3xl opacity-0 invisible group-hover:visible 
         group-hover:opacity-100 
         group-hover:translate-x-7 items-center
          transition-all duration-500 translate-x-0
           z-10 top-1"/>

           {/* if no icon is sent */}

          {
            !LeftIcon && <span className="absolute hidden md:flex  right-0 
            text-3xl opacity-0 invisible group-hover:visible 
           group-hover:opacity-100 
           group-hover:-translate-x-[247px]  items-center
            transition-all duration-300 -translate-x-44
             z-10 top-7 w-5 h-5 rounded-full bg-[#ff4e8c]"></span>
  
          } 
          
          {
            !RightIcon && 
            <span className="
            w-5 h-5 rounded-full bg-[#4eff60]
            absolute hidden md:flex right-0 
             text-3xl opacity-0 invisible group-hover:visible 
             group-hover:opacity-100 
             group-hover:translate-x-6 items-center
              transition-all duration-500 -translate-x-7
               z-10 top-1"></span>
    
          }
           
        </button>
    );
};

