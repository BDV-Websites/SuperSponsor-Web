"use client";
import React from "react";

const AttendanceTrackingCard: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col px-10 pt-10 rounded-2xl border-2 border-solid bg-slate-50 bg-opacity-60 border-zinc-200 border-opacity-40 min-w-60 w-[500px] max-md:px-5 max-md:max-w-full">
      <div className="max-md:max-w-full">
        <h3 className="text-2xl font-medium tracking-tight leading-snug text-neutral-900">
          Leave and Attendance Tracking
        </h3>
        <p className="mt-3 text-base leading-7 opacity-80 text-zinc-700 max-md:max-w-full">
          Track employee attendance and manage
          <br />
          leave requests.
        </p>
      </div>
      <div className="overflow-hidden self-center pt-6 pb-3 mt-16 max-w-full bg-white rounded-xl border border-solid border-slate-200 w-[350px] max-md:mt-10">
        <div className="flex z-10 flex-col px-4 w-full">
          <div className="flex gap-10 justify-between items-center text-base font-medium leading-relaxed whitespace-nowrap min-h-8 text-zinc-800">
            <h4 className="self-stretch my-auto">Attendance</h4>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/3267ad18f1ca727f46309d893b6aecac6c310d535a5089a00f75e730e9dba814?placeholderIfAbsent=true"
              alt="Settings icon"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
          </div>
          <div className="mt-4 w-full">
            <div className="flex gap-1 items-start w-full whitespace-nowrap">
              <span className="text-2xl font-medium leading-none text-black">
                98.3%
              </span>
              <div className="flex gap-1 items-center px-2 py-0.5 text-xs text-lime-600 bg-lime-50 rounded-[999px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/24621542d7ae729e66f371bc4c6f1508493f5b8179b153983669f7cd43b3e3e1?placeholderIfAbsent=true"
                  alt="Up arrow"
                  className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                />
                <span className="self-stretch my-auto">12%</span>
              </div>
            </div>
            <p className="mt-1 text-sm leading-none text-zinc-600">
              of employee is attend to work this month!
            </p>
          </div>
          <div className="flex relative flex-col self-end px-2 py-2 mt-10 mr-11 max-w-full text-xs font-semibold tracking-tight leading-relaxed text-center min-h-[34px] text-neutral-900 w-[118px] max-md:mr-2.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/0ae1e110739376b5f15ae1264f08b3e74139d70528bbe37adf82c452510489ed?placeholderIfAbsent=true"
              alt="Time indicator background"
              className="object-contain absolute top-2/4 left-2/4 z-0 -translate-x-2/4 -translate-y-2/4 aspect-[2.12] h-[34px] shadow-[-4px_10px_14px_rgba(0,0,0,0.08)] w-[72px]"
              aria-hidden="true"
            />
            <div className="flex z-0 flex-col justify-center self-end">
              <span className="self-stretch">09h 45m</span>
            </div>
          </div>
        </div>
        <div className="flex gap-1.5 justify-between mx-4 -mt-12 h-[178px] max-md:mx-2.5">
          <div className="text-xs leading-none text-center whitespace-nowrap text-slate-600 w-[23px]">
            <div>12h</div>
            <div className="mt-5">8h</div>
            <div className="mt-5">4h</div>
            <div className="mt-5">2h</div>
            <div className="mt-5">0</div>
          </div>
          <div className="self-start min-w-60 w-[290px]">
            <div className="flex gap-1 items-end w-full">
              {/* Chart columns - first column */}
              <div className="w-[18px]">
                <div className="flex rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
              </div>
              {/* Second column */}
              <div className="w-[18px]">
                <div className="flex rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
              </div>
              {/* Third column */}
              <div className="w-[18px]">
                <div className="flex rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
              </div>
              {/* Fourth column */}
              <div className="w-[18px]">
                <div className="flex rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
              </div>
              {/* Fifth column */}
              <div className="w-[18px]">
                <div className="flex rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
              </div>
              {/* Sixth column - blue highlights start */}
              <div className="w-[18px]">
                <div className="flex rounded bg-blue-400 bg-opacity-80 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-blue-400 bg-opacity-50 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-blue-400 bg-opacity-30 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-blue-400 bg-opacity-10 h-[18px] min-h-[18px] w-[18px]" />
              </div>
              {/* Seventh column */}
              <div className="w-[18px]">
                <div className="flex rounded bg-blue-600 bg-opacity-90 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-blue-600 bg-opacity-80 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-blue-600 bg-opacity-50 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-blue-600 bg-opacity-30 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-blue-600 bg-opacity-10 h-[18px] min-h-[18px] w-[18px]" />
              </div>
              {/* Eighth column */}
              <div className="w-[18px]">
                <div className="flex bg-blue-600 rounded h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-blue-600 bg-opacity-90 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-blue-600 bg-opacity-80 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-blue-600 bg-opacity-50 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-blue-600 bg-opacity-30 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-blue-600 bg-opacity-10 h-[18px] min-h-[18px] w-[18px]" />
              </div>
              {/* Ninth column */}
              <div className="w-[18px]">
                <div className="flex rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
              </div>
              {/* Tenth column */}
              <div className="w-[18px]">
                <div className="flex rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
              </div>
              {/* Eleventh column */}
              <div className="w-[18px]">
                <div className="flex rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
              </div>
              {/* Twelfth column */}
              <div className="w-[18px]">
                <div className="flex rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
              </div>
              {/* Thirteenth column */}
              <div className="w-[18px]">
                <div className="flex rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
                <div className="flex mt-1.5 rounded bg-slate-100 h-[18px] min-h-[18px] w-[18px]" />
              </div>
            </div>
            <div className="flex gap-5 items-center mt-2 w-full text-xs leading-none text-center whitespace-nowrap text-slate-600">
              <span className="self-stretch my-auto">Sat</span>
              <span className="self-stretch my-auto">Sun</span>
              <span className="self-stretch my-auto">Mon</span>
              <span className="self-stretch my-auto font-medium text-blue-600">
                Tue
              </span>
              <span className="self-stretch my-auto w-[37px]">Web</span>
              <span className="self-stretch my-auto w-[33px]">Thu</span>
              <span className="self-stretch my-auto w-[21px]">Fri</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceTrackingCard;
