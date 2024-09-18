import React from "react";
import processImg from "@/assets/images/it-consultancy/consultProcess.png";
import Image from "next/image";
import { ItProcess } from "@/lib/data/itConsult/process";
import { cn } from "@/lib/utils";

const ItConsultProcess = () => {
  return (
    <div className="container my-20 md:rounded-tl-[50px] md:rounded-br-[50px] relative lg:mt-32 bg-gradient-to-tr from-cyan-50 to-blue-200 ">
      <div className="px-5 pt-16 space-y-5 sm:text-center">
        <h1 className="heading-2">Our IT Consulting Process</h1>
        <p className="md:max-w-[70%] mx-auto text-tertiary text-sm  lg:text-lg md:text-base">
        With a decade of experience and a commitment to innovation, Intellectsoft continues to lead the way in transforming IT strategies for various organizations. Our team comprises seasoned experts, many
          with over fifteen years of hands-on experience, making us a powerhouse
          of knowledge and skill. Our approach is simple yet effective: we
          deliver tailored solutions quickly, guaranteeing tangible value with
          every project
        </p>
      </div>

      <div className="grid items-center grid-cols-1 mt-10 xl:grid-cols-2 justify-items-center xl:mt-0">
        <Image
          className="sm:w-[350px] w-[400px] mx-auto sm:mt-0"
          src={processImg}
          alt=""
        />
        <div className="my-20">
          <div className="max-w-[800px] mx-auto relative xl:right-24 bottom-6">
            {ItProcess?.slice(0, 1).map((data, index) => (
              <div key={index}>
                <div
                  className={cn(
                    "h-[170px] w-[180px] rounded-full absolute xl:-top-3 xl:right-36 z-0 xl:block hidden",
                    data?.bgcolor
                  )}
                ></div>
                <div className="hidden 2xl:block">
                  <p className="absolute bg-[#A9D4FE] h-10 w-10 rounded-full xl:-left-56 xl:top-40 border-white border-4 flex justify-center items-center text-white">
                    A
                  </p>
                </div>
                <div className="bg-white sm:h-[150px] py-6 sm:max-w-[600px] sm:flex gap-5 items-center p-3 md:rounded-full relative xl:-left-36">
                  <div className="ml-6 space-y-2">
                    <h3 className="text-xl">{data?.title}</h3>
                    <p className="text-sm xl:text-xs"> {data?.details}</p>
                  </div>
                  <Image
                    className="w-[100px] mx-auto h-[100px] sm:mt-0 mt-5"
                    src={data?.img}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="relative hidden 2xl:block">
            <p
              className={cn(
                "absolute h-10 w-10 rounded-full xl:-left-56 xl:top-20 border-white border-4 flex justify-center items-center text-white bg-[#3C9EFD]"
              )}
            >
              B
            </p>
          </div>

          <div className="max-w-[800px] mx-auto relative space-y-6 md:pr-5">
            {ItProcess?.slice(1, 3).map((data, index) => (
              <div key={index} className="relative">
                <div
                  className={cn(
                    "h-[170px] w-[180px] rounded-full absolute xl:-top-3 xl:right-24 z-0 xl:block hidden",
                    data?.bgcolor
                  )}
                ></div>

                <div className="bg-white sm:h-[150px] py-6 sm:max-w-[600px] sm:flex gap-5 items-center p-3 md:rounded-full relative xl:-left-28">
                  <div className="ml-6 space-y-2">
                    <h3 className="text-xl">{data?.title}</h3>
                    <p className="text-sm xl:text-xs">{data?.details}</p>
                  </div>
                  <Image
                    className="w-[100px] sm:mt-0 mt-5 mx-auto h-[100px]"
                    src={data?.img}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="relative hidden 2xl:block">
            <p className="absolute bg-[#1670CA] h-10 w-10 rounded-full xl:-left-56 xl:bottom-20 border-white border-4 flex justify-center items-center text-white">
              C
            </p>
          </div>

          <div className="max-w-[800px] mx-auto relative xl:right-24 top-6 ">
            {ItProcess?.slice(3, 4).map((data, index) => (
              <div key={index} className="relative">
                <div
                  className={cn(
                    "h-[170px] w-[180px] rounded-full absolute xl:-top-3 xl:right-36 z-0 xl:block hidden",
                    data?.bgcolor
                  )}
                ></div>
                <div className="hidden 2xl:block">
                  <p className="absolute bg-[#034F9C] h-10 w-10 rounded-full xl:-left-52 xl:-top-14   border-white border-4 grid justify-center items-center text-white">
                    D
                  </p>
                </div>
                <div className="bg-white sm:h-[150px] py-6 sm:max-w-[600px] sm:flex gap-5 items-center p-3 md:rounded-full relative xl:-left-36">
                  <div className="ml-6 space-y-2">
                    <h3 className="text-xl">{data?.title}</h3>
                    <p className="text-sm xl:text-xs">{data?.details}</p>
                  </div>
                  <Image
                    className="w-[100px] mx-auto h-[100px] sm:mt-0 mt-5"
                    src={data?.img}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItConsultProcess;
