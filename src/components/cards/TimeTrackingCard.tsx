"use client";
import React from "react";

const TimeTrackingCard: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col flex-1 shrink px-10 pt-10 rounded-2xl border-2 border-solid basis-0 bg-slate-50 bg-opacity-60 border-zinc-200 border-opacity-40 min-w-60 max-md:px-5 max-md:max-w-full">
      <div className="max-md:max-w-full">
        <h3 className="text-2xl font-medium tracking-tight leading-snug text-neutral-900 max-md:max-w-full">
          Time Tracking and Productivity Insights
        </h3>
        <p className="mt-3 text-base leading-7 opacity-80 text-zinc-700 max-md:max-w-full">
          Monitor work hours, track project time, and generate productivity
          <br />
          reports to ensure transparency.
        </p>
      </div>
      <div className="overflow-hidden self-center px-4 pt-4 mt-16 max-w-full bg-white rounded-xl border border-solid border-slate-200 min-h-[638px] w-[548px] max-md:mt-10">
        <div className="flex flex-col justify-center w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
            <h4 className="self-stretch my-auto text-lg font-medium leading-8 text-neutral-900">
              Current Time Tracker
            </h4>
            <button className="flex overflow-hidden gap-1.5 justify-center items-center self-stretch px-4 py-2 my-auto text-sm tracking-tight leading-6 text-center whitespace-nowrap bg-white rounded-lg border border-solid border-slate-200 text-zinc-700">
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4" />
              <span className="self-stretch my-auto">History</span>
            </button>
          </div>
        </div>
        <div className="mt-5 w-full max-md:max-w-full">
          <div className="overflow-hidden w-full bg-white rounded-xl border border-solid shadow-sm border-[color:var(--Border-border-secondary,#E0E4EE)] h-[161px] max-md:max-w-full">
            <div className="flex flex-col justify-center p-4 w-full bg-white min-h-[129px] max-md:max-w-full">
              <div className="flex flex-col justify-center w-full text-center max-md:max-w-full">
                <p className="text-xs leading-none text-gray-400 max-md:max-w-full">
                  ONGOING - START WIREFRAME
                </p>
                <div className="mt-1 text-4xl font-medium tracking-tighter leading-snug text-neutral-900 max-md:max-w-full">
                  07:18<span className="text-[rgba(171,175,186,1)]">:19</span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center mt-2 w-full text-sm leading-none whitespace-nowrap max-md:max-w-full">
                <div className="flex gap-4 items-center">
                  <button className="flex gap-1 items-center self-stretch my-auto text-neutral-900">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/a8e09099fed9c9a17b129def59e21b8d79fd5a4144567b5fce004ae3f9c7b14e?placeholderIfAbsent=true"
                      alt="Pause icon"
                      className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                    />
                    <span className="self-stretch my-auto">Pause</span>
                  </button>
                  <div
                    className="flex shrink-0 self-stretch my-auto w-px h-5 bg-slate-200"
                    aria-hidden="true"
                  />
                  <button className="flex gap-1 items-center self-stretch my-auto text-orange-600">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/07d053ca64a62a81bf62fb99098fe2bddcf111574273a71b43d6de02e770476e?placeholderIfAbsent=true"
                      alt="Stop icon"
                      className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                    />
                    <span className="self-stretch my-auto">Stop</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 items-center py-1.5 pr-2.5 pl-3 w-full text-sm tracking-tight leading-6 text-gray-400 border-b bg-slate-50 border-slate-200 max-md:max-w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/34e631ec7735953ba873aac9be2d02e9455fddda67f9eb53e214dcf1ef16daca?placeholderIfAbsent=true"
                alt="Project icon"
                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              />
              <span className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
                Alpha Website Design
              </span>
            </div>
          </div>
        </div>
        <button className="flex flex-wrap gap-2 justify-center items-center px-3 py-2 mt-5 w-full text-xs font-semibold tracking-tight leading-loose text-center text-white bg-blue-600 rounded min-h-[35px] max-md:max-w-full hover:bg-blue-700 transition-colors">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/1b5e07766345fcf7f6eac3be8bc1265c115c09df399deec8ab80730186d778af?placeholderIfAbsent=true"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[13px]"
            aria-hidden="true"
          />
          <span className="self-stretch my-auto">See Work History</span>
        </button>
        <div className="mt-5 w-full text-sm font-medium leading-none text-neutral-900 max-md:max-w-full">
          <div className="flex flex-wrap gap-10 justify-between items-start w-full min-h-[18px] max-md:max-w-full">
            <div className="w-[133px]">Member</div>
            <div className="w-[85px]">Daily limit</div>
            <div>Time Spent</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTrackingCard;
