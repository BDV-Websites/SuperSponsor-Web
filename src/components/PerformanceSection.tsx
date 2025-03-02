"use client";
import React from "react";

const PerformanceSection: React.FC = () => {
  return (
    <section
      className="flex flex-col self-stretch mt-5 w-full"
      aria-labelledby="performance-title"
    >
      <div className="flex justify-center items-start mt-40 w-full max-w-screen-xl text-center text-zinc-700 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-center min-w-60 w-[540px]">
          <div className="flex overflow-hidden gap-1 justify-center items-center px-3 py-1 text-base leading-relaxed border border-solid bg-slate-50 border-gray-400 border-opacity-30 rounded-[36px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/a2dae64163f16279be6d9f4550f7b0fa59b4d15a7e5c867d88da998a978d623a?placeholderIfAbsent=true"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              aria-hidden="true"
            />
            <span className="self-stretch my-auto">Track Performance</span>
          </div>
          <h2
            id="performance-title"
            className="self-stretch mt-4 w-full text-6xl font-medium tracking-tighter leading-[72px] text-neutral-900 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]"
          >
            Track Your
            <br />
            Team's Performance
          </h2>
          <p className="mt-4 text-lg leading-8 opacity-80 max-md:max-w-full">
            Teamzo makes it easy to handle all your HR tasks, from hiring and
            onboarding to payroll
          </p>
        </div>
      </div>
      <div className="flex flex-col self-center mt-20 max-w-full w-[945px] max-md:mt-10">
        <div className="overflow-hidden self-center px-7 pt-6 max-w-full bg-white rounded-xl border border-solid border-[color:var(--Neutral-Neutral-01,#FFF)] w-[754px] max-md:px-5">
          <div className="flex flex-col justify-center w-full max-md:max-w-full">
            <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
              <h3 className="self-stretch my-auto text-lg font-medium leading-8 text-neutral-900">
                Average Team KPI
              </h3>
              <div className="flex overflow-hidden gap-1.5 justify-center items-center self-stretch px-4 py-2 my-auto text-sm tracking-tight leading-6 text-center whitespace-nowrap bg-white rounded-lg border border-solid border-slate-200 text-zinc-700">
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4" />
                <span className="self-stretch my-auto">Yearly</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 justify-between mt-4 w-full max-md:max-w-full">
            <div className="font-medium">
              <div className="text-4xl tracking-tighter leading-snug text-neutral-900">
                82.47%
              </div>
              <div className="px-4 mt-1 max-w-full text-base tracking-tight leading-relaxed text-teal-700 w-[205px]">
                <span className="text-[rgba(25,94,255,1)]">50.09%</span>{" "}
                <span className="font-normal text-sm leading-6 tracking-[-0.28px] text-[rgba(55,58,70,1)]">
                  higher than last year.
                </span>
              </div>
            </div>
            <button className="overflow-hidden gap-1.5 self-end px-4 py-2 mt-10 text-sm tracking-tight leading-6 text-center text-blue-600 bg-white rounded-lg max-md:mt-10 hover:bg-slate-50 transition-colors">
              Download Report
            </button>
          </div>
          <div className="flex flex-wrap gap-6 mt-4">
            <div className="flex flex-col items-center text-sm tracking-tight leading-6 text-center whitespace-nowrap text-zinc-700">
              <div>100%</div>
              <div className="mt-5">80%</div>
              <div className="mt-5">60%</div>
              <div className="mt-5">40%</div>
              <div className="mt-5">20%</div>
              <div className="mt-5">10%</div>
              <div className="self-stretch mt-5 leading-relaxed">0</div>
            </div>
            <div className="grow shrink-0 self-start mt-3 basis-0 w-fit max-md:max-w-full">
              <div className="shrink-0 h-px border border-dashed opacity-10 bg-zinc-700 border-zinc-700 max-md:max-w-full" />
              <div className="flex relative flex-col py-7 mt-4 w-full min-h-[230px] max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/d49de4ea2056d38d1968a644295086dd5b6223b1d99eaff7e61dae6a4484fc4d?placeholderIfAbsent=true"
                  alt="Performance chart"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative shrink-0 h-px border border-dashed opacity-10 bg-zinc-700 border-zinc-700 max-md:max-w-full" />
                <div className="flex relative mt-4 max-md:pr-5 max-md:max-w-full">
                  <div className="shrink-0 my-auto mr-0 h-px border border-dashed opacity-10 bg-zinc-700 border-zinc-700 max-md:max-w-full" />
                  <div>
                    <div className="text-sm font-medium tracking-tight leading-6 text-neutral-900">
                      18.32%
                    </div>
                    <div className="text-xs leading-5 text-zinc-700">
                      April 24, 2025
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 mt-6 h-px border border-dashed opacity-10 bg-zinc-700 border-zinc-700 max-md:max-w-full" />
                <div className="relative shrink-0 mt-11 h-px border border-dashed opacity-10 bg-zinc-700 border-zinc-700 max-md:mt-10 max-md:max-w-full" />
                <div className="relative shrink-0 mt-11 h-px border border-dashed opacity-10 bg-zinc-700 border-zinc-700 max-md:mt-10 max-md:max-w-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 items-center mt-20 w-full max-md:mt-10 max-md:max-w-full">
          <div className="self-stretch my-auto">
            <div className="text-5xl font-medium tracking-tighter leading-tight text-neutral-900 max-md:text-4xl">
              76%
            </div>
            <div className="text-base leading-relaxed text-zinc-600">
              Time Utilization Rate
            </div>
          </div>
          <div className="self-stretch my-auto">
            <div className="text-5xl font-medium tracking-tighter leading-tight text-neutral-900 max-md:text-4xl">
              95%
            </div>
            <div className="text-base leading-relaxed text-zinc-600">
              Attendance Rate
            </div>
          </div>
          <div className="self-stretch my-auto">
            <div className="text-5xl font-medium tracking-tighter leading-tight text-neutral-900 max-md:text-4xl">
              3 Hours
            </div>
            <div className="text-base leading-relaxed text-zinc-600">
              Task Completion Rate
            </div>
          </div>
          <div className="self-stretch my-auto">
            <div className="text-5xl font-medium tracking-tighter leading-tight text-neutral-900 max-md:text-4xl">
              8.5/10
            </div>
            <div className="text-base leading-relaxed text-zinc-600">
              Engagement Score
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
