"use client ";

import ChooseGrapic from "@/components/pages/graphicDesign/ChooseGrapic";
import ExploreWork from "@/components/pages/graphicDesign/ExploreWork";
import GraficHero from "@/components/pages/graphicDesign/GraficHero";
import GrapicService from "@/components/pages/graphicDesign/GrapicService";
import StartCloudGen from "@/components/pages/graphicDesign/StartCloudGen";
import WebContact from "@/components/pages/webDevelopment/WebContact";

export const metadata = {
  title: "Clooudgen | Graphics Design",
  description: "Welcome to Clooud Gen, your trusted IT solutions partner offering comprehensive services including web development, software development, digital marketing, video editing, and more. Contact us today to bring your ideas to life!",
};
const page = () => {
  return (
    <div className="relative overflow-hidden ">
        <GraficHero />
        <GrapicService/>
        <ChooseGrapic/>
        <ExploreWork/>
        <StartCloudGen/>
    </div>
  );
};

export default page;
