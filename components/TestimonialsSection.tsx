"use client";
import React from "react";

const TestimonialsSection: React.FC = () => {
  return (
    <section
      className="mt-36 w-full max-md:mt-10"
      aria-labelledby="testimonials-title"
    >
      <div className="flex justify-center items-start w-full max-w-screen-xl text-center text-zinc-700 max-md:max-w-full">
        <div className="flex flex-col items-center min-w-60 w-[540px]">
          <div className="flex overflow-hidden gap-1 justify-center items-center px-3 py-1 text-base leading-relaxed whitespace-nowrap border border-solid bg-slate-50 border-gray-400 border-opacity-30 rounded-[46px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/a2dae64163f16279be6d9f4550f7b0fa59b4d15a7e5c867d88da998a978d623a?placeholderIfAbsent=true"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              aria-hidden="true"
            />
            <span className="self-stretch my-auto">Testimonial</span>
          </div>
          <h2
            id="testimonials-title"
            className="self-stretch mt-4 w-full text-6xl font-medium tracking-tighter leading-tight text-neutral-900 max-md:max-w-full max-md:text-4xl"
          >
            What our client says
          </h2>
          <p className="mt-4 text-lg leading-8 opacity-80 max-md:max-w-full">
            Teamzo makes it easy to handle all your HR tasks, from hiring and
            onboarding to payroll
          </p>
        </div>
      </div>
      <div className="flex gap-6 items-center mt-16 max-md:mt-10 max-md:max-w-full">
        <div className="overflow-hidden self-stretch px-0.5 my-auto rounded-2xl border-2 border-solid bg-slate-50 bg-opacity-60 border-zinc-200 border-opacity-40 min-w-60 w-[529px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-2/5 max-md:ml-0 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/9d99e5b09bad376d1871a29cd0484f28d5f9b17e7cd870976d8846ef5314fbe6?placeholderIfAbsent=true"
                alt="Testimonial author"
                className="object-contain grow shrink-0 max-w-full aspect-[0.63] w-[200px] max-md:mt-6"
              />
            </div>
            <div className="ml-5 w-3/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                <blockquote className="text-lg font-medium leading-8 text-neutral-900">
                  "Teamzo has completely transformed the way we manage our HR
                  processes."
                </blockquote>
                <div className="flex flex-col self-start mt-32 min-h-[58px] max-md:mt-10">
                  <cite className="self-start text-lg font-semibold leading-8 text-center text-neutral-900 not-italic">
                    Jenny Wilson
                  </cite>
                  <p className="text-base leading-relaxed text-zinc-600">
                    Product Manager, Sparkweb
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden self-stretch px-0.5 my-auto rounded-2xl border-2 border-solid bg-slate-50 bg-opacity-60 border-zinc-200 border-opacity-40 min-w-60 w-[529px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-2/5 max-md:ml-0 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/9de14643decf852f51852742993348484963fde8d02daa6d10437aab139edc62?placeholderIfAbsent=true"
                alt="Testimonial author"
                className="object-contain grow shrink-0 max-w-full aspect-[0.63] w-[200px] max-md:mt-6"
              />
            </div>
            <div className="ml-5 w-3/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                <blockquote className="text-lg font-medium leading-8 text-neutral-900">
                  "Teamzo has completely transformed the way we manage our HR
                  processes."
                </blockquote>
                <div className="flex flex-col self-start mt-32 min-h-[58px] max-md:mt-10">
                  <cite className="self-start text-lg font-semibold leading-8 text-center text-neutral-900 not-italic">
                    Jenny Wilson
                  </cite>
                  <p className="text-base leading-relaxed text-zinc-600">
                    Product Manager, Sparkweb
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/6a32fc407f16f6e8df4ab6c5ae736ee7003e2b3015695d678cdc52fa90afcb9e?placeholderIfAbsent=true"
          alt="Testimonial card"
          className="object-contain shrink-0 self-stretch my-auto rounded-2xl aspect-[0.79] min-w-60 w-[529px]"
        />
      </div>
      <div className="flex justify-center mt-20 max-md:mt-10">
        <a
          href="/testimonials"
          className="inline-block px-6 py-3 text-base font-medium leading-relaxed text-white rounded-xl bg-neutral-900 hover:bg-neutral-800 transition-colors"
        >
          See all testimonials
        </a>
      </div>
    </section>
  );
};

export default TestimonialsSection;
