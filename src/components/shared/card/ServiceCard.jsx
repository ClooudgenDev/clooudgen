import React from "react";

const ServiceCard = ({ Icon, IconBgColor, IconStrokeColor, title, count }) => {
  return (
    <div
      className="group relative min-h-[396px] mt-10 rounded-lg p-10 bg-cover bg-center bg-no-repeat  text-white hover:shadow-md"
      style={{
        mage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/service-03.jpg)`,
        backgroundPosition: "0 0, 64%",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="absolute inset-0 bg-white rounded-lg opacity-0 group-hover:opacity-100 duration-200"></div>
      <span className="icon | absolute p-4 h-20 w-20 -top-8 bg-primary group-hover:bg-black duration-200 rounded-full ">
        <img
          src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/13.png"
          alt="service icon"
        />
      </span>
      <div className="mt-10">
        <h2 className="font-semibold group-hover:text-black duration-200 z-20">
          Web
          <br />
          Development
        </h2>
        <div className="card-content | mt-6 space-y-2 text-gray-600 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 duration-300">
          <p>
            We offers plan and assemble managing for you from startups to the
            last creation or closing creation.
          </p>
          <a
            href=""
            className="tracking-widest pt-4 duration-200 text-blue-300 "
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

function SummaryCard() {}
