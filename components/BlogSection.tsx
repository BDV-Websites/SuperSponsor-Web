"use client";
import React from "react";

const BlogSection: React.FC = () => {
  return (
    <section
      className="mt-36 w-full max-w-screen-xl max-md:mt-10 max-md:max-w-full"
      aria-labelledby="blog-title"
    >
      <div className="flex justify-center items-start w-full text-center max-md:max-w-full">
        <div className="flex flex-col items-center min-w-60 max-md:max-w-full">
          <h2
            id="blog-title"
            className="text-6xl font-medium tracking-tighter leading-tight text-neutral-900 max-md:max-w-full max-md:text-4xl"
          >
            Latest from our blogs{" "}
          </h2>
          <p className="mt-4 text-lg leading-8 opacity-80 text-zinc-700 w-[446px] max-md:max-w-full">
            Teamzo makes it easy to handle all your HR tasks, from hiring and
            onboarding to payroll
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 items-center mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <article className="grow shrink self-stretch my-auto min-w-60 w-[496px] max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/6a556fe59ea9a7da5c6120e0d385a41385e0dff7832a32078364a5686d57be34?placeholderIfAbsent=true"
            alt="Blog post thumbnail"
            className="object-contain max-w-full aspect-[1.55] w-[620px]"
          />
          <div className="mt-6 w-full max-md:max-w-full">
            <div className="w-full max-md:max-w-full">
              <h3 className="text-2xl font-medium tracking-tight leading-snug text-neutral-900 max-md:max-w-full">
                5 Common HR Challenges and How to Overcome Them
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-600 max-md:max-w-full">
                Highlight common pain points in HR management and how tools like
                Teamzo can resolve them.
              </p>
            </div>
          </div>
        </article>
        <article className="grow shrink self-stretch my-auto min-w-60 w-[496px] max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/0862dd1df313ee53869d04f188301b9021329534a08839f7903d144a2b23d7e4?placeholderIfAbsent=true"
            alt="Blog post thumbnail"
            className="object-contain max-w-full aspect-[1.55] w-[620px]"
          />
          <div className="mt-6 w-full max-md:max-w-full">
            <div className="w-full max-md:max-w-full">
              <h3 className="text-2xl font-medium tracking-tight leading-snug text-neutral-900 max-md:max-w-full">
                5 Common HR Challenges and How to Overcome Them
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-600 max-md:max-w-full">
                Highlight common pain points in HR management and how tools like
                Teamzo can resolve them.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogSection;
