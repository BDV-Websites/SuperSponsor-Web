"use client";
import React from "react";

const HeroImage: React.FC = () => {
  return (
    <div className="flex relative flex-col items-center self-stretch px-20 mt-14 w-full min-h-[788px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/1430f1fbd9793dac630985b27eb6e2fc4b1473862f6f43c9803067ca0e4b57f4?placeholderIfAbsent=true"
        alt="Background pattern"
        className="object-cover absolute inset-0 size-full"
        aria-hidden="true"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/051c1fe65ab24849f27b134aa98568380ed5f0aece122ed88dd3ffa33bdfd6dc?placeholderIfAbsent=true"
        alt="Teamzo dashboard interface"
        className="object-contain z-10 mt-0 mb-0 w-full aspect-[1.24] max-w-[1123px] max-md:mb-2.5 max-md:max-w-full"
      />
    </div>
  );
};

export default HeroImage;
