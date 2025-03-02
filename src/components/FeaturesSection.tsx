"use client";
import React from "react";
import TeamCommunicationCard from "./cards/TeamCommunicationCard";
import AttendanceTrackingCard from "./cards/AttendanceTrackingCard";
import TaskManagementCard from "./cards/TaskManagementCard";
import TimeTrackingCard from "./cards/TimeTrackingCard";

const FeaturesSection: React.FC = () => {
  return (
    <section
      id="features"
      className="flex flex-col self-stretch pl-20 mt-5 w-full max-md:pl-5 max-md:max-w-full"
      aria-labelledby="features-title"
    >
      <div className="w-full max-w-screen-xl max-md:max-w-full">
        <div className="flex justify-center items-start w-full text-center text-zinc-700 max-md:max-w-full">
          <div className="flex flex-col items-center min-w-60 w-[923px]">
            <div className="flex overflow-hidden gap-1 justify-center items-center px-3 py-1 text-base leading-relaxed whitespace-nowrap border border-solid bg-slate-50 border-gray-400 border-opacity-30 rounded-[46px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/f200ea171adcce5d7c4cd9f36310591046c4ab55c5feef6f5e3be48173f9b648?placeholderIfAbsent=true"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                aria-hidden="true"
              />
              <span className="self-stretch my-auto">Features</span>
            </div>
            <h2
              id="features-title"
              className="self-stretch mt-4 w-full text-6xl font-medium tracking-tighter leading-tight text-neutral-900 max-md:max-w-full max-md:text-4xl"
            >
              Tools to Simplify Your HR Workflow
            </h2>
            <p className="mt-4 text-lg leading-8 opacity-80 w-[540px] max-md:max-w-full">
              Teamzo makes it easy to handle all your HR tasks, from hiring and
              onboarding to payroll
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 items-center mt-20 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap grow shrink gap-6 items-start self-stretch my-auto min-w-60 w-[1024px] max-md:max-w-full">
            <TeamCommunicationCard />
            <AttendanceTrackingCard />
          </div>
          <div className="flex flex-wrap grow shrink gap-6 items-start self-stretch my-auto min-w-60 w-[1024px] max-md:max-w-full">
            <TaskManagementCard />
            <TimeTrackingCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
