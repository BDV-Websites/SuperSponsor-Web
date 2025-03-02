"use client";
import React from "react";

const FooterSection: React.FC = () => {
  return (
    <footer className="flex flex-col self-stretch mt-28 w-full max-md:mt-10 max-md:max-w-full">
      <div className="overflow-hidden self-center pt-16 max-w-full bg-white rounded-2xl border border-solid border-slate-600 border-opacity-10 w-[1280px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/64ea7e5c31d0923f2eb781402a1e002f29f32821611ef2cfb6858e3676496dcd?placeholderIfAbsent=true"
          alt="Call to action banner"
          className="object-contain w-full aspect-[1.52] max-md:max-w-full"
        />
      </div>
      <div className="flex overflow-hidden flex-col justify-center px-16 py-24 mt-28 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap items-start max-md:max-w-full">
          <div className="min-w-60 w-[627px] max-md:max-w-full">
            <div className="flex gap-2 items-center w-full max-md:max-w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/01e4d4b6e9af6472d67a3ec179b7e9018e8ec3c677f955e3f1428e81a16a1927?placeholderIfAbsent=true"
                alt="Teamzo Logo"
                className="object-contain self-stretch my-auto aspect-[4.95] fill-neutral-900 min-w-60 w-[515px]"
              />
            </div>
            <div className="flex flex-col mt-20 max-w-full text-base leading-relaxed text-zinc-700 w-[346px] max-md:mt-10">
              <div className="flex relative gap-10 items-start w-full">
                <p className="z-0 my-auto opacity-80">
                  Copyright © 2025 Teamzo. All Rights Reserved.
                </p>
                <div className="flex absolute bottom-0 z-0 gap-6 items-center self-start min-h-[27px] right-[-82px]" />
              </div>
              <div className="flex gap-6 items-center self-start mt-4">
                <div className="flex relative gap-10 items-start self-stretch my-auto">
                  <a
                    href="/terms"
                    className="z-0 my-auto opacity-80 hover:opacity-100 transition-opacity"
                  >
                    Terms of Use
                  </a>
                  <div className="flex absolute bottom-0 z-0 gap-6 items-center self-start min-h-[27px] right-[-332px]" />
                </div>
                <div className="flex relative gap-10 items-start self-stretch my-auto">
                  <a
                    href="/privacy"
                    className="z-0 my-auto opacity-80 hover:opacity-100 transition-opacity"
                  >
                    Privacy Policy
                  </a>
                  <div className="flex absolute bottom-0 z-0 gap-6 items-center self-start min-h-[27px] right-[-326px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between min-h-[254px] min-w-60 w-[400px]">
            <nav
              className="flex gap-10 items-center self-start text-base font-medium leading-relaxed text-zinc-700"
              aria-label="Footer navigation"
            >
              <div className="self-stretch my-auto w-[131px]">
                <a
                  href="/about"
                  className="block hover:text-neutral-900 transition-colors"
                >
                  About Us
                </a>
                <a
                  href="/stories"
                  className="block mt-4 hover:text-neutral-900 transition-colors"
                >
                  Customer Stories
                </a>
                <a
                  href="/features"
                  className="block mt-4 hover:text-neutral-900 transition-colors"
                >
                  Features
                </a>
              </div>
              <div className="self-stretch my-auto">
                <a
                  href="/case-study"
                  className="block hover:text-neutral-900 transition-colors"
                >
                  Case Study
                </a>
                <a
                  href="/how-it-works"
                  className="block mt-4 hover:text-neutral-900 transition-colors"
                >
                  How it works
                </a>
                <a
                  href="/pricing"
                  className="block mt-4 hover:text-neutral-900 transition-colors"
                >
                  Pricing
                </a>
              </div>
            </nav>
            <div className="mt-24 w-full max-md:mt-10">
              <div className="w-full border-2 border-solid opacity-10 bg-zinc-700 border-zinc-700 min-h-px" />
              <div className="flex gap-8 justify-between items-center mt-6 max-w-full w-[191px]">
                <a href="https://facebook.com" aria-label="Facebook">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/cd4a7479b017d97dca042c07ded977873d95617bd7a93ad2fb839a8e15fb9549?placeholderIfAbsent=true"
                    alt="Facebook"
                    className="object-contain shrink-0 self-stretch my-auto w-6 rounded-md aspect-square"
                  />
                </a>
                <a href="https://twitter.com" aria-label="Twitter">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/6cff4446427d2d8ee83670a5f7c82db8c59cc987040317b7a9de4f29a1b36087?placeholderIfAbsent=true"
                    alt="Twitter"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square rounded-[50px]"
                  />
                </a>
                <a href="https://instagram.com" aria-label="Instagram">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/0bd62351ec1704fc1af3c129d0905521516038af6481a088644cb45e1b8909e6?placeholderIfAbsent=true"
                    alt="Instagram"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                </a>
                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/80acdf3b43bba62205813d6056ff59f4c2c5a39866dfd1faed264bdf3eee444a?placeholderIfAbsent=true"
                    alt="LinkedIn"
                    className="object-contain shrink-0 self-stretch my-auto aspect-[0.96] w-[23px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
