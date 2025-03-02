"use client";
import React from "react";

const TeamCommunicationCard: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col flex-1 shrink px-10 pt-10 rounded-2xl border-2 border-solid basis-0 bg-slate-50 bg-opacity-60 border-zinc-200 border-opacity-40 min-w-60 max-md:px-5 max-md:max-w-full">
      <div className="max-md:max-w-full">
        <h3 className="text-2xl font-medium tracking-tight leading-snug text-neutral-900">
          Team Communication Integration
        </h3>
        <p className="mt-3 text-base leading-7 opacity-80 text-zinc-700 max-md:max-w-full">
          Connect with tools like Slack or Microsoft Teams to streamline
          <br />
          communication and improve collaboration.
        </p>
      </div>
      <div className="overflow-hidden self-center px-4 pt-4 mt-16 max-w-full bg-white rounded-xl border border-solid border-slate-200 min-h-[638px] w-[548px] max-md:mt-10">
        <div className="flex flex-col justify-center w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
            <h4 className="self-stretch my-auto text-lg font-medium leading-8 text-neutral-900">
              Upcoming Events
            </h4>
            <div className="flex overflow-hidden gap-1.5 justify-center items-center self-stretch px-4 py-2 my-auto text-sm tracking-tight leading-6 text-center bg-white rounded-lg border border-solid border-slate-200 min-w-60 text-zinc-700">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/095d15b31a075708d6eb34b74aa536f5a2049539c32db36f2928b37a19d2d9d3?placeholderIfAbsent=true"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                aria-hidden="true"
              />
              <span className="self-stretch my-auto">
                9 October - 16 October 2025
              </span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/aecaa1d63ed5ff0bbb6f111252de4a9dbadfd7e68d42f41300e6288fd3323e6a?placeholderIfAbsent=true"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-wrap gap-1 items-start p-1.5 mt-6 w-full text-sm font-medium leading-none whitespace-nowrap rounded-md bg-slate-50 text-zinc-700 max-md:max-w-full">
          <button className="flex overflow-hidden flex-1 shrink gap-1.5 justify-center items-center px-1.5 py-1 rounded-md basis-0">
            <span className="self-stretch my-auto">Details</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/e138dbe595500c5e4d5569e7261bd10181ae73c4bb4d68f5c22ceaaf286c2d31?placeholderIfAbsent=true"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              aria-hidden="true"
            />
          </button>
          <button className="flex overflow-hidden gap-1.5 justify-center items-center px-1.5 py-1 bg-white rounded-md shadow-md text-neutral-900 w-[107px]">
            <span className="self-stretch my-auto">Participant</span>
            <div className="flex shrink-0 self-stretch my-auto w-4 h-4" />
          </button>
          <button className="flex overflow-hidden flex-1 shrink gap-1.5 justify-center items-center px-1.5 py-1 rounded-md basis-0">
            <span className="self-stretch my-auto">Comment</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/493cf0e1cca818e39e01b089f065a19d5c08ff463a2331c0c2a7b0001630d580?placeholderIfAbsent=true"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="mt-6 w-full max-md:max-w-full">
          <div className="p-4 w-full rounded-2xl border border-gray-200 border-solid max-md:max-w-full">
            <div className="flex flex-wrap gap-4 items-center pb-4 w-full text-sm tracking-tight leading-6 border-b border-gray-200 max-md:max-w-full">
              <div className="flex-1 shrink self-stretch my-auto basis-0 min-w-60 max-md:max-w-full">
                <h5 className="font-medium text-neutral-900 max-md:max-w-full">
                  Mastering HR Efficiency with Teamzo
                </h5>
                <p className="mt-1 opacity-60 text-zinc-700 max-md:max-w-full">
                  10:30 AM - 11:30 AM (EST)
                </p>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/718e761fb5961c0de72f7ec979e3c841ebf1185325d8489d6c789e3e309545c7?placeholderIfAbsent=true"
                alt="Calendar icon"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
            </div>
            <div className="flex flex-wrap gap-4 items-center mt-4 w-full max-md:max-w-full">
              <div className="flex flex-1 shrink gap-2 items-center self-stretch my-auto basis-0 min-w-60">
                <div className="flex flex-col justify-center self-stretch px-2 py-1 my-auto text-xs tracking-tight leading-tight text-center text-red-500 bg-red-50 rounded">
                  <span className="gap-1 self-stretch">High Priority</span>
                </div>
                <div className="flex gap-2 items-center self-stretch my-auto text-sm tracking-tight leading-6 text-zinc-700">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/78a4dfe3d3390391e86bfec4b32b77997a4831661dcb5a35e532f69288b39987?placeholderIfAbsent=true"
                    alt="Google Meet icon"
                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                  />
                  <span className="self-stretch my-auto opacity-60">
                    Google Meet
                  </span>
                </div>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/3e157e32fbc9909b1a02ebde0e292b761b9a50cf94f3a2b84f95e091b56af715?placeholderIfAbsent=true"
                alt="Attendees"
                className="object-contain shrink-0 gap-0 self-stretch my-auto w-14 aspect-[2.33]"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center p-4 mt-4 w-full text-sm tracking-tight rounded-2xl border border-gray-200 border-solid max-md:max-w-full">
            <div className="flex flex-wrap gap-4 items-center pb-4 w-full border-b border-gray-200 max-md:max-w-full">
              <div className="flex-1 shrink self-stretch my-auto basis-0 min-w-60 max-md:max-w-full">
                <h5 className="font-medium leading-6 text-neutral-900 max-md:max-w-full">
                  Teamzo HR Summit 2025
                </h5>
                <p className="mt-1 leading-relaxed opacity-60 text-zinc-700 max-md:max-w-full">
                  12:00 PM - 01:00 PM (EST)
                </p>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/2defb4b687b2f91419d7d12744086c3542f6a6cecc712f3ad778e3255e3d6af3?placeholderIfAbsent=true"
                alt="Calendar icon"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-[1.5]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCommunicationCard;
