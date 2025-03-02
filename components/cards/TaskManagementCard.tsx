"use client";
import React from "react";

const TaskManagementCard: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col px-10 pt-10 rounded-2xl border-2 border-solid bg-slate-50 bg-opacity-60 border-zinc-200 border-opacity-40 min-w-60 w-[500px] max-md:px-5 max-md:max-w-full">
      <div className="max-md:max-w-full">
        <h3 className="text-2xl font-medium tracking-tight leading-snug text-neutral-900">
          Smart Task Management
        </h3>
        <p className="mt-3 text-base leading-7 opacity-80 text-zinc-700 max-md:max-w-full">
          Simplify hiring with job postings,
          <br />
          application tracking.
        </p>
      </div>
      <div className="overflow-hidden self-center px-4 pt-6 mt-16 max-w-full bg-white rounded-xl border border-solid border-slate-200 w-[350px] max-md:mt-10">
        <div className="flex flex-col justify-center w-full text-base font-medium leading-relaxed text-zinc-800">
          <div className="flex gap-10 justify-between items-center w-full">
            <h4 className="self-stretch my-auto">Team Communication</h4>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/62e88387b9117bb5cbd6c3fee129be41740e32f0b91cad3b85a900c7609c8915?placeholderIfAbsent=true"
              alt="Settings icon"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
          </div>
        </div>
        <div className="flex flex-col mt-5 w-full">
          <div className="flex gap-1.5 justify-center items-center p-1.5 w-full rounded bg-slate-50">
            <button
              className="flex overflow-hidden gap-0.5 justify-center items-center self-stretch px-1 my-auto w-6 h-6 bg-white rounded shadow-sm"
              aria-label="Previous month"
            >
              <div className="flex self-stretch my-auto w-4 min-h-4" />
            </button>
            <div className="flex-1 shrink self-stretch my-auto text-sm font-medium leading-none text-center basis-0 text-zinc-800">
              November, 2024
            </div>
            <button
              className="flex overflow-hidden gap-0.5 justify-center items-center self-stretch px-1 my-auto w-6 h-6 bg-white rounded shadow-sm"
              aria-label="Next month"
            >
              <div className="flex self-stretch my-auto w-4 min-h-4" />
            </button>
          </div>
          <div className="flex gap-2 items-center self-start mt-6 text-center whitespace-nowrap">
            <div className="flex flex-col justify-center self-stretch px-3 py-2 my-auto rounded-lg border border-gray-200 border-solid w-[62px]">
              <span className="text-sm tracking-tight leading-snug text-zinc-700">
                Mon
              </span>
              <span className="text-base font-bold tracking-tight text-neutral-900">
                11
              </span>
            </div>
            <div className="flex flex-col justify-center self-stretch px-3 py-2 my-auto rounded-lg border border-gray-200 border-solid w-[62px]">
              <span className="text-sm tracking-tight leading-snug text-zinc-700">
                Tue
              </span>
              <span className="text-base font-bold tracking-tight text-neutral-900">
                12
              </span>
            </div>
            <div className="flex flex-col justify-center self-stretch px-3 py-2 my-auto rounded-lg border border-gray-200 border-solid w-[62px]">
              <span className="text-sm tracking-tight leading-snug text-zinc-700">
                Wed
              </span>
              <span className="text-base font-bold tracking-tight text-neutral-900">
                13
              </span>
            </div>
            <div className="flex flex-col justify-center self-stretch px-3 my-auto text-white bg-blue-600 rounded-lg h-[62px] w-[62px]">
              <span className="text-sm tracking-tight leading-snug">Thu</span>
              <span className="text-base font-bold tracking-tight">14</span>
            </div>
            <div className="flex flex-col justify-center self-stretch py-2 pr-1 pl-3 my-auto rounded-lg border border-gray-200 border-solid w-[62px]">
              <span className="text-sm tracking-tight leading-snug text-zinc-700">
                Fri
              </span>
              <span className="text-base font-bold tracking-tight text-neutral-900">
                15
              </span>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden gap-1 items-start p-1.5 mt-7 w-full text-sm font-medium leading-none whitespace-nowrap rounded-sm bg-slate-50 min-h-9">
          <button className="flex overflow-hidden flex-1 shrink gap-1.5 justify-center items-center px-1.5 py-1 bg-white rounded-md shadow-md basis-0 text-zinc-800">
            <span className="self-stretch my-auto">Meetings</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/ce7a1b99bcf1376ef16a6de30ff9c46141746d63b443b4d25695219dcb0b0aee?placeholderIfAbsent=true"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              aria-hidden="true"
            />
          </button>
          <button className="flex overflow-hidden flex-1 shrink gap-1.5 justify-center items-center px-1.5 py-1 rounded-md basis-0 text-slate-600">
            <span className="self-stretch my-auto">Task</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/cb2e722040acdade4900d91b4d06f41b21a315e52ef251ba1976e245eeb3c201?placeholderIfAbsent=true"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="mt-8 w-full text-sm tracking-tight leading-6">
          <div className="flex overflow-hidden gap-3 justify-center items-center p-2.5 w-full bg-white rounded border border-solid border-slate-200 max-w-[318px] min-h-11">
            <div className="flex gap-10 justify-between items-center self-stretch my-auto min-h-6 min-w-60 w-[298px]">
              <div className="flex gap-2 items-center self-stretch my-auto font-medium text-zinc-800">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/028869e594b7ffde26778ed57b8be206e56b356bd771ae4ac83acb4473a60a63?placeholderIfAbsent=true"
                  alt="User avatar"
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
                <span className="self-stretch my-auto">Henry H.</span>
              </div>
              <span className="my-auto opacity-60 text-zinc-700 w-[161px]">
                10:30 AM - 11:30 AM (EST)
              </span>
            </div>
          </div>
          <div className="flex gap-3 mt-2 w-full bg-white rounded border border-solid border-slate-200 min-h-11" />
        </div>
      </div>
    </div>
  );
};

export default TaskManagementCard;
