import React from "react";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center py-40 w-full bg-neutral-100">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="font-title-hero text-[72px] font-bold text-[#1e1e1e] tracking-[-2.16px] leading-[120%]">
          Bogota Hub
        </h1>
        <p className="font-subtitle text-[32px] font-normal text-[#757575] leading-[120%]">
          Young AI Leaders
        </p>
      </div>
    </section>
  );
};
