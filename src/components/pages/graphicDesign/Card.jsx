"use client"

import ZoomIn from "@/components/shared/animation/ZoomIn";

 
export const Card = ({ card }) => {


  const { title, description, image, price, designType, revisions, deliveryTime } = card || {};

  return (
    <ZoomIn>
      <div
        className="rounded-lg bg-white text-card-foreground shadow-lg shadow-[#ebebebca] w-full max-w-3xl"
        data-v0-t="card"
      >
        <div className="p-4">
          <div className="grid items-center gap-4 lg:grid-cols-2">
            <img
              src={image}

              alt={title}
              className="object-cover object-top w-full mx-auto overflow-hidden h-44 lg:w-full lg:h-full md:w-full md:h-32 rounded-xl lg:object-center "
            />
            <div className="space-y-2">
              <h3 className="text-[19px] md:text-xl font-bold">{title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {description}
              </p>
              <div className="grid gap-1">
                <p className="text-sm font-semibold">${price}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {designType} | {revisions} | {deliveryTime}
                </p>


                <button className="items-center justify-center h-8 py-1 mt-8 ml-auto text-sm font-medium transition-colors border rounded-full  bg-accentpx-3 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50-input hover:bg-accent/90 hover:text-accent-foreground">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>



    </ZoomIn>
  );
};

