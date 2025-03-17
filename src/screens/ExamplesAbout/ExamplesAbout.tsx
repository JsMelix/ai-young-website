import React from "react";
import { ContentGridSection } from "./sections/ContentGridSection/ContentGridSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { ImageGridSection } from "./sections/ImageGridSection/ImageGridSection";

export const ExamplesAbout = (): JSX.Element => {
  // Data for the image placeholders
  const imagePlaceholders = [
    { id: 1, url: "public/image.svg" },
    { id: 2, url: "public/image.svg" },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      <HeaderSection />
      <HeroSection />
      <ContentGridSection />
      <ImageGridSection />
      <FooterSection />
    </div>
  );
};
