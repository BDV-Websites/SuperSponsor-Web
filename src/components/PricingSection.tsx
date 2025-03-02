"use client";
import React from "react";

const PricingSection: React.FC = () => {
  return (
    <section
      id="pricing"
      className="flex flex-col mt-36 w-full max-w-screen-xl max-md:mt-10 max-md:max-w-full"
      aria-labelledby="pricing-title"
    >
      <div className="flex justify-center items-start w-full text-center text-zinc-700 max-md:max-w-full">
        <div className="flex flex-col items-center min-w-60 w-[852px]">
          <div className="flex overflow-hidden gap-1 justify-center items-center px-3 py-1 text-base leading-relaxed border border-solid bg-slate-50 border-gray-400 border-opacity-30 rounded-[46px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/a2dae64163f16279be6d9f4550f7b0fa59b4d15a7e5c867d88da998a978d623a?placeholderIfAbsent=true"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              aria-hidden="true"
            />
            <span className="self-stretch my-auto">Pricing & Plan</span>
          </div>
          <h2
            id="pricing-title"
            className="self-stretch mt-4 w-full text-6xl font-medium tracking-tighter leading-tight text-neutral-900 max-md:max-w-full max-md:text-4xl"
          >
            Flexible plans for every business
          </h2>
          <p className="mt-4 text-lg leading-8 opacity-80 w-[540px] max-md:max-w-full">
            Teamzo makes it easy to handle all your HR tasks, from hiring and
            onboarding to payroll
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 items-center self-center mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col self-stretch pr-0.5 pb-9 pl-10 my-auto bg-white rounded-2xl border border-solid border-slate-600 border-opacity-10 min-w-60 w-[555px] max-md:pl-5 max-md:max-w-full">
          <div
            className="flex shrink-0 self-end mr-28 bg-white bg-opacity-50 h-[117px] w-[117px] max-md:mr-2.5"
            aria-hidden="true"
          />
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="w-4/5 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-start py-11 pr-3.5 pl-10 mx-auto w-full bg-white rounded-xl max-md:pl-5 max-md:max-w-full">
                  <div className="flex flex-col max-w-full w-[313px]">
                    <div className="flex gap-2 items-center self-start">
                      <h3 className="self-stretch my-auto text-2xl font-medium tracking-tight leading-snug text-neutral-900">
                        Starter Plan
                      </h3>
                      <div className="flex overflow-hidden gap-1 justify-center items-center self-stretch px-3 py-1 my-auto text-sm tracking-tight leading-6 text-center whitespace-nowrap rounded-md bg-slate-50 text-zinc-700">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/17c93a1c38cb33a79ba1b001a54177d97154b0feb5784a9202c9ca98aac69152?placeholderIfAbsent=true"
                          alt=""
                          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                          aria-hidden="true"
                        />
                        <span className="self-stretch my-auto">Individual</span>
                      </div>
                    </div>
                    <p className="mt-2 text-base leading-7 opacity-90 text-zinc-700">
                      Perfect for beginners exploring crypto management tools.
                    </p>
                  </div>
                  <div className="self-stretch mt-1.5 w-full max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                      <div className="w-[64%] max-md:ml-0 max-md:w-full">
                        <div className="flex relative gap-2 items-start self-stretch my-auto max-md:mt-10">
                          <div className="z-0 my-auto text-5xl font-medium tracking-tighter leading-tight text-neutral-900 max-md:text-4xl">
                            $129
                          </div>
                          <div className="absolute right-1.5 bottom-3.5 z-0 self-start text-base leading-relaxed text-right h-[27px] text-zinc-700 w-[86px]">
                            / per month
                          </div>
                        </div>
                      </div>
                      <div className="ml-5 w-[36%] max-md:ml-0 max-md:w-full">
                        <div
                          className="flex shrink-0 mx-auto bg-white bg-opacity-50 h-[117px] w-[117px] max-md:mt-10"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-1 max-w-full text-neutral-900 w-[395px]">
                    <h4 className="text-lg font-semibold leading-8">
                      What's included:
                    </h4>
                    <ul className="mt-4 w-full text-base leading-relaxed list-none">
                      <li className="flex gap-2 items-center w-full">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/20dc11dc2dbcd154f4362480756478221c9b8259ece7dd4effd6d14953ea2dd1?placeholderIfAbsent=true"
                          alt="Checkmark"
                          className="object-contain shrink-0 self-stretch my-auto w-4 rounded-none aspect-square"
                        />
                        <span className="self-stretch my-auto">
                          Manage up to 10 users with ease
                        </span>
                      </li>
                      <li className="flex gap-2 items-center mt-4 w-full">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/c4b61692fbdef0b2311f7e97141b44f1389e8f04aef17052b0ad7b65a36b3f77?placeholderIfAbsent=true"
                          alt="Checkmark"
                          className="object-contain shrink-0 self-stretch my-auto w-4 rounded-none aspect-square"
                        />
                        <span className="self-stretch my-auto">
                          Simplify HR with tools for employee records
                        </span>
                      </li>
                      <li className="flex gap-2 items-center mt-4 w-full">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/8fe5b7e970ace1d656c7966069c62f0fd2d39739c003c365ff85c7524bacfebd?placeholderIfAbsent=true"
                          alt="Checkmark"
                          className="object-contain shrink-0 self-stretch my-auto w-4 rounded-none aspect-square"
                        />
                        <span className="self-stretch my-auto">
                          Attendance, and leave management
                        </span>
                      </li>
                      <li className="flex gap-2 items-center mt-4 w-full">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/d9aee7962c02024177c6801cf2663467a36e19d5db87fbbc0185b4aa51253b44?placeholderIfAbsent=true"
                          alt="Checkmark"
                          className="object-contain shrink-0 self-stretch my-auto w-4 rounded-none aspect-square"
                        />
                        <span className="self-stretch my-auto">
                          Access basic reporting to track and analyze
                        </span>
                      </li>
                    </ul>
                  </div>
                  <a
                    href="/signup"
                    className="flex overflow-hidden gap-2 justify-center items-center px-6 py-3 mt-12 text-sm font-semibold leading-6 text-white bg-blue-600 rounded-xl max-md:px-5 max-md:mt-10 hover:bg-blue-700 transition-colors"
                  >
                    <span className="gap-4 self-stretch my-auto">
                      Get Started for Free
                    </span>
                  </a>
                </div>
              </div>
              <div className="ml-5 w-1/5 max-md:ml-0 max-md:w-full">
                <div
                  className="flex shrink-0 mx-auto mt-6 bg-white bg-opacity-50 h-[117px] w-[117px]"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col self-stretch pb-9 pl-10 my-auto bg-white rounded-2xl border border-solid border-slate-600 border-opacity-10 min-w-60 w-[555px] max-md:max-w-full">
          <div className="flex items-start self-end">
            <div
              className="flex shrink-0 self-end mt-6 bg-white bg-opacity-50 h-[117px] w-[117px]"
              aria-hidden="true"
            />
            <div
              className="flex shrink-0 self-start bg-white bg-opacity-50 h-[77px] w-[95px]"
              aria-hidden="true"
            />
          </div>
          <div className="flex z-10 flex-col items-start py-11 pr-1 pl-10 mt-0 max-w-full bg-white rounded-xl w-[475px] max-md:pl-5">
            <div className="self-stretch max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="w-[73%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col w-full">
                    <div className="w-full">
                      <div className="flex gap-2 items-end w-full">
                        <h3 className="text-2xl font-medium tracking-tight leading-snug text-neutral-900">
                          Growth Plan
                        </h3>
                        <div className="flex overflow-hidden gap-1 justify-center items-center px-3 py-1 text-sm tracking-tight leading-6 text-center rounded-md bg-slate-50 text-zinc-700">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/17c93a1c38cb33a79ba1b001a54177d97154b0feb5784a9202c9ca98aac69152?placeholderIfAbsent=true"
                            alt=""
                            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                            aria-hidden="true"
                          />
                          <span className="self-stretch my-auto">
                            for 2 to 50 users
                          </span>
                        </div>
                      </div>
                      <p className="mt-2 text-base leading-7 opacity-90 text-zinc-700">
                        Perfect for beginners exploring crypto management tools.
                      </p>
                    </div>
                    <div className="flex relative gap-2 items-start self-start mt-10">
                      <div className="z-0 my-auto text-5xl font-medium tracking-tighter leading-tight text-neutral-900 max-md:text-4xl">
                        $259
                      </div>
                      <div className="absolute -right-1.5 bottom-3.5 z-0 self-start text-base leading-relaxed text-right h-[27px] text-zinc-700 w-[86px]">
                        / per month
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-5 w-[27%] max-md:ml-0 max-md:w-full">
                  <div
                    className="flex shrink-0 mx-auto mt-16 bg-white bg-opacity-50 h-[117px] w-[117px] max-md:mt-10"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 max-w-full text-neutral-900 w-[395px]">
              <h4 className="text-lg font-semibold leading-8">
                What's included:
              </h4>
              <ul className="mt-4 w-full text-base leading-relaxed list-none">
                <li className="flex gap-2 items-center w-full">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/cbbb03498b5cb57f2c26b7b533fb9bfeaf61c45d8a4c4cb27f34533c9b4db86b?placeholderIfAbsent=true"
                    alt="Checkmark"
                    className="object-contain shrink-0 self-stretch my-auto w-4 rounded-none aspect-square"
                  />
                  <span className="self-stretch my-auto">
                    Manage up to 50 users with ease
                  </span>
                </li>
                <li className="flex gap-2 items-center mt-4 w-full">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/9991a057e20535b9f1d984049a59f6e0895ebad66c596dae0f4d86301d4dd562?placeholderIfAbsent=true"
                    alt="Checkmark"
                    className="object-contain shrink-0 self-stretch my-auto w-4 rounded-none aspect-square"
                  />
                  <span className="self-stretch my-auto">
                    Simplify HR with tools for employee records
                  </span>
                </li>
                <li className="flex gap-2 items-center mt-4 w-full">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/aa573a501429fd594dff97b2b82702486456ce3c1ec54963fca9fd6c4c9723ed?placeholderIfAbsent=true"
                    alt="Checkmark"
                    className="object-contain shrink-0 self-stretch my-auto w-4 rounded-none aspect-square"
                  />
                  <span className="self-stretch my-auto">
                    Attendance, and leave management
                  </span>
                </li>
                <li className="flex gap-2 items-center mt-4 w-full">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/eb8eec4763045ee53a7997ea62b4ac2990374050875cc253da8d34714910ab2e?placeholderIfAbsent=true"
                    alt="Checkmark"
                    className="object-contain shrink-0 self-stretch my-auto w-4 rounded-none aspect-square"
                  />
                  <span className="self-stretch my-auto">
                    Access basic reporting to track and analyze
                  </span>
                </li>
              </ul>
            </div>
            <a
              href="/signup"
              className="flex overflow-hidden gap-2 justify-center items-center px-6 py-3 mt-12 text-sm font-semibold leading-6 text-white bg-blue-600 rounded-xl max-md:px-5 max-md:mt-10 hover:bg-blue-700 transition-colors"
            >
              <span className="gap-4 self-stretch my-auto">
                Get Started for Free
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
