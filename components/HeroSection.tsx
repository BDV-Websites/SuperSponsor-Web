"use client";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="flex flex-col mt-28 w-full max-w-[1040px] max-md:mt-10 max-md:max-w-full"
      aria-labelledby="hero-title"
    >
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex items-center self-center p-px max-w-full rounded-3xl bg-slate-50 w-[425px]">
          <div className="flex gap-3 self-stretch pr-1.5 my-auto min-w-60 w-[423px] max-md:max-w-full">
            <span className="px-2.5 py-1 text-sm tracking-tight leading-6 text-white bg-blue-400 rounded-3xl">
              🌟 New
            </span>
            <div className="flex flex-auto gap-0 items-center pb-px my-auto">
              <p className="self-stretch my-auto text-sm tracking-tight leading-6 text-zinc-700">
                Get 3 months free when you sign up before April 25
              </p>
              <div className="flex overflow-hidden justify-center items-start self-stretch my-auto w-[18px]">
                <div className="flex items-start px-2 py-1.5 w-[18px]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/d47d9cad4dfdab14c96d615c4848757d1c138b177afe147c05b87cbe893099ff?placeholderIfAbsent=true"
                    alt="Arrow"
                    className="object-contain w-1 aspect-[0.5] stroke-[1.2px] stroke-zinc-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 w-full text-center max-md:max-w-full">
          <div className="flex relative flex-col w-full max-md:max-w-full">
            <h1
              id="hero-title"
              className="z-0 text-7xl italic font-medium tracking-tighter leading-[88px] text-neutral-900 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]"
            >
              Simple HR{" "}
              <span className="font-['Instrument_Serif'] font-normal italic text-[100px] leading-[110px]">
                management
              </span>
              <br />
              for your remote team
            </h1>
            <p className="z-0 self-center mt-4 text-lg leading-8 opacity-80 text-zinc-700 w-[554px] max-md:max-w-full">
              Teamzo makes it easy to handle all your HR tasks, from hiring and
              onboarding to payroll and employee management.
            </p>
            <div
              className="flex absolute z-0 h-[83px] min-h-[83px] right-[71px] top-[39px] w-[83px]"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center self-center mt-8 text-sm font-semibold leading-6 max-md:max-w-full">
        <div className="flex overflow-hidden gap-2 justify-center items-center self-stretch p-4 my-auto text-white rounded-2xl border-2 border-solid bg-white bg-opacity-30 border-white border-opacity-50 min-h-[79px]">
          <a
            href="/signup"
            className="flex overflow-hidden gap-2 justify-center items-center self-stretch px-6 py-3 my-auto bg-blue-600 rounded-xl max-md:px-5 hover:bg-blue-700 transition-colors"
          >
            <span className="gap-4 self-stretch my-auto">
              Get Started for Free
            </span>
          </a>
        </div>
        <div className="flex overflow-hidden gap-2 justify-center items-center self-stretch p-4 my-auto rounded-2xl border-2 border-solid bg-white bg-opacity-30 border-white border-opacity-50 min-h-[79px] text-neutral-900">
          <a
            href="/demo"
            className="flex overflow-hidden gap-2 justify-center items-center self-stretch px-6 py-3 my-auto bg-white rounded-xl max-md:px-5 hover:bg-gray-100 transition-colors"
          >
            <span className="gap-4 self-stretch my-auto">Book A Free Demo</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
