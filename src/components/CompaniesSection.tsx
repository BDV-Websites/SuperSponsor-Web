"use client";
import React from "react";

const CompaniesSection: React.FC = () => {
  return (
    <section
      className="flex flex-col justify-center items-center py-7 mt-10 w-full max-w-[1392px] min-h-[225px] max-md:mt-10 max-md:max-w-full"
      aria-labelledby="companies-title"
    >
      <div className="flex flex-col w-full max-w-screen-xl max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <h2
            id="companies-title"
            className="self-center text-4xl font-medium tracking-tighter leading-snug text-neutral-900 max-md:max-w-full"
          >
            1200+ companies use our tool
          </h2>
          <p className="mt-2 text-xl leading-9 text-center text-zinc-700 max-md:max-w-full">
            Trusted by the world's most innovative teams
          </p>
        </div>
        <div className="flex flex-col items-center self-center mt-12 w-full text-2xl font-extrabold leading-none text-center whitespace-nowrap text-zinc-700 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-8 justify-center items-center w-full max-md:max-w-full">
            <div className="flex gap-2 justify-center items-center self-stretch my-auto w-44">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/15d418120a334a8c9bc2d31824d838ba13d0b2a02d1f2644af057adc99b6da02?placeholderIfAbsent=true"
                alt="Sparkweb logo"
                className="object-contain shrink-0 self-stretch my-auto aspect-[0.91] fill-zinc-700 w-[29px]"
              />
              <span className="self-stretch my-auto">Sparkweb</span>
            </div>
            <div
              className="shrink-0 self-stretch my-auto w-0 h-5 border border-solid bg-zinc-700 border-zinc-700 opacity-[0.14]"
              aria-hidden="true"
            />
            <div className="gap-2 self-stretch my-auto w-44 font-bold">
              Netdot
            </div>
            <div
              className="shrink-0 self-stretch my-auto w-0 h-5 border border-solid bg-zinc-700 border-zinc-700 opacity-[0.14]"
              aria-hidden="true"
            />
            <div className="flex gap-2 justify-center items-center self-stretch my-auto w-44 font-semibold">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/bfeaacb69867aa5d18aa47786dcadb5680a532cdf9d0615190c52c0887c6e6d5?placeholderIfAbsent=true"
                alt="Digitech logo"
                className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square fill-zinc-700"
              />
              <span className="self-stretch my-auto">Digitech</span>
            </div>
            <div
              className="shrink-0 self-stretch my-auto w-0 h-5 border border-solid bg-zinc-700 border-zinc-700 opacity-[0.14]"
              aria-hidden="true"
            />
            <div className="gap-2 self-stretch my-auto w-44 font-semibold">
              SiteForge
            </div>
            <div
              className="shrink-0 self-stretch my-auto w-0 h-5 border border-solid bg-zinc-700 border-zinc-700 opacity-[0.14]"
              aria-hidden="true"
            />
            <div className="flex gap-2 justify-center items-center self-stretch my-auto w-44">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/053457e7fc5d5ac703c7010092ce223c6bbe490898c61ad53895ecc1f257dcec?placeholderIfAbsent=true"
                alt="Codelink logo"
                className="object-contain shrink-0 self-stretch my-auto aspect-[0.94] fill-zinc-700 w-[30px]"
              />
              <span className="self-stretch my-auto">Codelink</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
