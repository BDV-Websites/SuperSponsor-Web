"use client";
import React from "react";

const BenefitsSection: React.FC = () => {
  return (
    <section
      id="benefits"
      className="mt-32 w-full max-w-screen-xl max-md:mt-10 max-md:max-w-full"
      aria-labelledby="benefits-title"
    >
      <div className="flex justify-center items-start w-full text-zinc-700 max-md:max-w-full">
        <div className="flex flex-col items-center min-w-60 w-[665px]">
          <div className="flex overflow-hidden gap-1 justify-center items-center px-3 py-1 text-base leading-relaxed text-center whitespace-nowrap border border-solid bg-slate-50 border-gray-400 border-opacity-30 rounded-[36px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/f200ea171adcce5d7c4cd9f36310591046c4ab55c5feef6f5e3be48173f9b648?placeholderIfAbsent=true"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              aria-hidden="true"
            />
            <span className="self-stretch my-auto">Benefits</span>
          </div>
          <h2
            id="benefits-title"
            className="self-stretch mt-4 w-full text-6xl font-medium tracking-tighter leading-tight text-neutral-900 max-md:max-w-full max-md:text-4xl"
          >
            Benefits of using Teamzo
          </h2>
          <p className="mt-4 text-lg leading-8 text-center opacity-80 w-[540px] max-md:max-w-full">
            Teamzo makes it easy to handle all your HR tasks, from hiring and
            onboarding to payroll
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 items-center mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/b2ac770e074782c8309269eb0c5c9f441c9bc8750938bbd7f6c447395b833207?placeholderIfAbsent=true"
          alt="Benefit illustration 1"
          className="object-contain grow shrink self-stretch my-auto rounded-2xl aspect-[0.95] min-w-60 w-[328px]"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/22a177daecb6877a5a6a63945116523bd26dc5ca2f4c34e279f03d195b5b909c?placeholderIfAbsent=true"
          alt="Benefit illustration 2"
          className="object-contain grow shrink self-stretch my-auto rounded-2xl aspect-[0.95] min-w-60 w-[328px]"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/7f95f7a36ebfaee124829115e14ec191c0f17a2a9d33832ed073f875d40ce669?placeholderIfAbsent=true"
          alt="Benefit illustration 3"
          className="object-contain grow shrink self-stretch my-auto rounded-2xl aspect-[0.95] min-w-60 w-[328px]"
        />
      </div>
    </section>
  );
};

export default BenefitsSection;
