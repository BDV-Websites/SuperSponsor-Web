"use client";
import React from "react";

const WhatYouCanDoSection: React.FC = () => {
  return (
    <section
      className="flex relative flex-col self-stretch px-20 pb-48 mt-96 w-full min-h-[421px] max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full"
      aria-labelledby="what-you-can-do-title"
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/32cdb4f46a6e476662fea6d4b1e90be0d8c312487da6b4fbd942d02f0b1efd7c?placeholderIfAbsent=true"
        alt="Background pattern"
        className="object-cover absolute inset-0 size-full"
        aria-hidden="true"
      />
      <div className="relative z-10 mt-0 mb-0 w-full max-md:mt-0 max-md:mb-2.5 max-md:max-w-full">
        <div className="flex justify-center items-start w-full text-zinc-700 max-md:max-w-full">
          <div className="flex flex-col items-center min-w-60 w-[800px]">
            <div className="flex overflow-hidden gap-1 justify-center items-center px-3 py-1 text-base leading-relaxed text-center whitespace-nowrap border border-solid bg-slate-50 border-gray-400 border-opacity-30 rounded-[46px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/a2dae64163f16279be6d9f4550f7b0fa59b4d15a7e5c867d88da998a978d623a?placeholderIfAbsent=true"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                aria-hidden="true"
              />
              <span className="self-stretch my-auto">Benefits</span>
            </div>
            <h2
              id="what-you-can-do-title"
              className="self-stretch mt-4 w-full text-6xl font-medium tracking-tighter leading-tight text-neutral-900 max-md:max-w-full max-md:text-4xl"
            >
              What You Can Do with Teamzo
            </h2>
            <p className="mt-4 text-lg leading-8 text-center opacity-80 w-[540px] max-md:max-w-full">
              From payroll to time tracking, Teamzo simplifies every aspect of
              HR management for your team.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 items-center mt-20 w-full max-md:mt-10 max-md:max-w-full">
          <div className="grow shrink self-stretch my-auto min-w-60 w-[242px]">
            <div className="flex items-center justify-center px-6 text-2xl font-medium tracking-tight leading-snug text-center whitespace-nowrap bg-white rounded-lg border-solid border-[1.5px] border-slate-600 border-opacity-0 h-[60px] min-h-[60px] text-zinc-700 w-[60px] max-md:px-5">
              1
            </div>
            <div className="mt-6 w-full">
              <h3 className="text-2xl font-medium tracking-tight leading-snug text-neutral-900">
                Manage Payroll
              </h3>
              <p className="mt-3 text-base leading-7 opacity-80 text-zinc-700">
                Salary calculations, track
                <br />
                and deductions.
              </p>
            </div>
          </div>
          <div className="grow shrink self-stretch my-auto min-w-60 w-[242px]">
            <div className="flex items-center justify-center px-6 text-2xl font-medium tracking-tight leading-snug text-center whitespace-nowrap bg-white rounded-lg border-solid border-[1.5px] border-slate-600 border-opacity-0 h-[60px] min-h-[60px] text-zinc-700 w-[60px] max-md:px-5">
              2
            </div>
            <div className="mt-6 w-full">
              <h3 className="text-2xl font-medium tracking-tight leading-snug text-neutral-900">
                Track Attendance
              </h3>
              <p className="mt-3 text-base leading-7 opacity-80 text-zinc-700">
                Monitor attendance
                <br />
                and manage leave requests.
              </p>
            </div>
          </div>
          <div className="grow shrink self-stretch my-auto min-w-60 w-[242px]">
            <div className="flex items-center justify-center px-6 text-2xl font-medium tracking-tight leading-snug text-center whitespace-nowrap bg-white rounded-lg border-solid border-[1.5px] border-slate-600 border-opacity-0 h-[60px] min-h-[60px] text-zinc-700 w-[60px] max-md:px-5">
              3
            </div>
            <div className="mt-6 w-full">
              <h3 className="text-2xl font-medium tracking-tight leading-snug text-neutral-900">
                Events and Tasks
              </h3>
              <p className="mt-3 text-base leading-7 opacity-80 text-zinc-700">
                Plan and assign tasks,
                <br />
                schedule events, and track.
              </p>
            </div>
          </div>
          <div className="grow shrink self-stretch my-auto min-w-60 w-[242px]">
            <div className="flex items-center justify-center px-6 text-2xl font-medium tracking-tight leading-snug text-center whitespace-nowrap bg-white rounded-lg border-solid border-[1.5px] border-slate-600 border-opacity-0 h-[60px] min-h-[60px] text-zinc-700 w-[60px] max-md:px-5">
              4
            </div>
            <div className="mt-6 w-full">
              <h3 className="text-2xl font-medium tracking-tight leading-snug text-neutral-900">
                Monitor Work Hours
              </h3>
              <p className="mt-3 text-base leading-7 opacity-80 text-zinc-700">
                Track employee work hours and project time together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouCanDoSection;
