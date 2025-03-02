"use client";
import React, { useState } from "react";

interface FaqItemProps {
  question: string;
  answer?: string;
  isOpen?: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({
  question,
  answer,
  isOpen = false,
  onClick,
}) => {
  return (
    <div
      className={`flex overflow-hidden flex-col justify-center py-9 mt-4 w-full rounded-xl border border-solid ${
        isOpen ? "bg-slate-50 bg-opacity-80" : ""
      } border-slate-600 border-opacity-10 max-md:max-w-full`}
    >
      <div className="flex flex-col justify-center px-8 w-full max-md:px-5 max-md:max-w-full">
        <button
          className="flex flex-wrap gap-10 justify-between items-center w-full text-lg font-medium leading-8 text-neutral-900 max-md:max-w-full"
          onClick={onClick}
          aria-expanded={isOpen}
        >
          <span className="self-stretch my-auto text-left">{question}</span>
          <img
            src={
              isOpen
                ? "https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/8cd978b0b3cc3174a33f144057f711b85d5468f909db3e317cf1e52b2f763206?placeholderIfAbsent=true"
                : "https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/f97849acbf7cfdfa0dae002f1b3d3f527d29699754f6bfdfa32ddd0058af91a3?placeholderIfAbsent=true"
            }
            alt={isOpen ? "Collapse" : "Expand"}
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </button>
        {isOpen && answer && (
          <p className="mt-7 text-base leading-7 opacity-80 text-zinc-700 max-md:max-w-full">
            {answer}
          </p>
        )}
      </div>
    </div>
  );
};

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(1);

  const faqItems = [
    {
      question: "Is Teamzo suitable for small businesses?",
      answer:
        "Yes, Teamzo is designed to be scalable and works great for businesses of all sizes, from small startups to large enterprises.",
    },
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes, we offer a free 14-day trial for new users to explore Teamzo's features and see how it works for their business.",
    },
    {
      question: "Can I track employee work hours with Teamzo?",
      answer:
        "Absolutely! Teamzo offers comprehensive time tracking features that allow you to monitor work hours, track project time, and generate detailed reports.",
    },
    {
      question: "How do I get started with Teamzo?",
      answer:
        "Getting started is easy! Simply sign up for a free account, follow our guided setup process, and you'll be up and running in minutes.",
    },
    {
      question: "Is my team's data secure on Teamzo?",
      answer:
        "Yes, we take security very seriously. Teamzo uses industry-standard encryption and security practices to ensure your data is always protected.",
    },
  ];

  return (
    <section
      className="flex flex-wrap gap-10 items-start mt-32 max-md:mt-10 max-md:max-w-full"
      aria-labelledby="faq-title"
    >
      <div className="min-w-60 w-[506px] max-md:max-w-full">
        <div className="flex flex-col w-full text-zinc-700 max-md:max-w-full">
          <div className="flex overflow-hidden gap-1 justify-center items-center self-start px-3 py-1 text-base leading-relaxed text-center whitespace-nowrap border border-solid bg-slate-50 border-gray-400 border-opacity-30 rounded-[46px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/9b13381c9e7143b39ee2b70f535002ca/a2dae64163f16279be6d9f4550f7b0fa59b4d15a7e5c867d88da998a978d623a?placeholderIfAbsent=true"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              aria-hidden="true"
            />
            <span className="self-stretch my-auto">FAQ</span>
          </div>
          <h2
            id="faq-title"
            className="mt-4 w-full text-6xl font-medium tracking-tighter leading-[72px] text-neutral-900 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]"
          >
            Your question
            <br />
            answered
          </h2>
          <p className="mt-4 text-lg leading-8 opacity-80 max-md:max-w-full">
            Have questions about Teamzo? Here are some of the most common
            queries to help you get started.
          </p>
        </div>
        <div className="flex overflow-hidden flex-col justify-center px-6 py-7 mt-20 max-w-full bg-white rounded-lg border border-solid border-slate-600 border-opacity-10 w-[410px] max-md:px-5 max-md:mt-10">
          <div className="w-full">
            <div className="flex flex-col w-full">
              <h3 className="gap-2 self-start text-2xl font-medium tracking-tight leading-snug text-neutral-900">
                Still have questions?
              </h3>
              <p className="mt-2 text-base leading-7 opacity-90 text-zinc-700">
                Can't find the answer you're looking for? Please chat to our
                friendly team!
              </p>
            </div>
            <a
              href="/contact"
              className="flex overflow-hidden gap-2 justify-center items-center px-6 py-3 mt-10 w-full text-sm font-semibold leading-6 text-white bg-blue-600 rounded-xl max-md:px-5 hover:bg-blue-700 transition-colors"
            >
              <span className="gap-4 self-stretch my-auto">Contact us</span>
            </a>
          </div>
        </div>
      </div>
      <div className="min-w-60 w-[608px] max-md:max-w-full">
        <FaqItem
          question={faqItems[0].question}
          answer={faqItems[0].answer}
          isOpen={openIndex === 0}
          onClick={() => setOpenIndex(openIndex === 0 ? -1 : 0)}
        />
        <FaqItem
          question={faqItems[1].question}
          answer={faqItems[1].answer}
          isOpen={openIndex === 1}
          onClick={() => setOpenIndex(openIndex === 1 ? -1 : 1)}
        />
        <FaqItem
          question={faqItems[2].question}
          answer={faqItems[2].answer}
          isOpen={openIndex === 2}
          onClick={() => setOpenIndex(openIndex === 2 ? -1 : 2)}
        />
        <FaqItem
          question={faqItems[3].question}
          answer={faqItems[3].answer}
          isOpen={openIndex === 3}
          onClick={() => setOpenIndex(openIndex === 3 ? -1 : 3)}
        />
        <FaqItem
          question={faqItems[4].question}
          answer={faqItems[4].answer}
          isOpen={openIndex === 4}
          onClick={() => setOpenIndex(openIndex === 4 ? -1 : 4)}
        />
      </div>
    </section>
  );
};

export default FaqSection;
