"use client";
import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav
      className="flex flex-wrap gap-10 justify-between items-center w-full max-w-[1273px] max-md:max-w-full"
      aria-label="Main navigation"
    >
      <div className="flex gap-2 items-center self-stretch my-auto min-w-60 w-[242px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/790a134b91bbb92a39d286409b629ac17605870eadcf57518a85e70d5819e312?placeholderIfAbsent=true"
          alt="Teamzo Logo"
          className="object-contain self-stretch my-auto aspect-[4.95] fill-neutral-900 w-[119px]"
        />
      </div>
      <div className="flex gap-10 items-center self-stretch my-auto text-base leading-relaxed whitespace-nowrap min-w-60 text-zinc-700">
        <a
          href="#features"
          className="self-stretch my-auto hover:text-neutral-900 transition-colors"
        >
          Features
        </a>
        <a
          href="#pricing"
          className="self-stretch my-auto hover:text-neutral-900 transition-colors"
        >
          Pricing
        </a>
        <a
          href="#company"
          className="self-stretch my-auto hover:text-neutral-900 transition-colors"
        >
          Company
        </a>
        <a
          href="#contacts"
          className="self-stretch my-auto hover:text-neutral-900 transition-colors"
        >
          Contacts
        </a>
      </div>
      <div className="flex gap-4 items-center self-stretch my-auto min-w-60">
        <a
          href="/login"
          className="self-stretch my-auto text-base leading-relaxed text-neutral-900 hover:underline"
        >
          Log In
        </a>
        <a
          href="/signup"
          className="gap-2 self-stretch px-6 py-3 my-auto text-sm font-medium tracking-tight leading-6 text-white rounded-xl bg-neutral-900 max-md:px-5 hover:bg-neutral-800 transition-colors"
        >
          Create Free Account
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
