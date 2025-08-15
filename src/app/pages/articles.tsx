"use client";
import React from "react";
import Link from "next/link";
import ReactGA from "react-ga4";
import { SiReaddotcv } from "react-icons/si";
import { PinContainer } from "@/components/ui/3d-pin";

export function Article() {
  const trackReadMoreClick = () => {
    ReactGA.event("article_read_more", {
      category: "Articles",
      label: "Read more - Tech Scoop"
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 mt-32 pb-20 overflow-hidden font-medium">
      <div className="px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left xl:pl-0 lg:mb-0 lg:pl-5 sm:mb-0 sm:pl-2 text-white">
          Articles
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[0rem] w-full">
        {pinData.map((item, index) => (
          <div key={index}>
            <PinContainer title={item.techstack} className="max-w-full">
              <Link href={item.href} target="_blank" className="block w-full h-full">
                <div className="flex flex-col p-4 tracking-tight text-slate-100/50 h-[12rem] w-[18rem] lg:w-[16rem] lg:h-[14rem] sm:w-[18rem]">
                  <h3 className="font-bold text-base text-gray-100 mb-2">
                    {item.heading}
                  </h3>
                  <div className="text-sm text-gray-400 mb-4">
                    {item.description}
                  </div>
                </div>
              </Link>
            </PinContainer>
          </div>
        ))}
      </div>
      <Link
        onClick={trackReadMoreClick}
        href={"https://medium.com/@fuzziecoder"}
        target="_blank"
        className="flex justify-end items-center gap-1 w-full text-gray-300 hover:text-blue-400 transition-colors duration-300"
      >
        <span className="md:text-sm text-sm lg:text-sm font-normal px-1">
          Read more
        </span>
        <SiReaddotcv className="text-xl" />
      </Link>
    </div>
  );
}

const pinData = [
  {
    techstack: "@medium.com/fuzziecoder",
    href: "https://medium.com/@ramvj2005/agents-of-ai-the-invisible-helpers-shaping-our-daily-lives-0e7b42e36357",
    heading: "Agents of AI: The Invisible Helpers Shaping Our Daily Lives",
    description:
      "As we build and shape the future of AI, it’s important to understand how these agents work, not just use them blindly. Behind every AI action is a decision-making process, and understanding it gives us more control and awareness."
  },
  {
    techstack: "@medium.com/fuzziecoder",
    href: "https://fuzziecoder.medium.com/data-analysis-turning-raw-data-into-real-insights-how-d469b83ca1a8",
    heading: "Data Analysis =Turning Raw Data into Real Insights How?",
    description:
      "Data Analysis is the process of collecting, cleaning, exploring, and interpreting data to extract useful information, find patterns, and make decisions."
  },
  {
    techstack: "@medium.com/fuzziecoder",
    href: "https://fuzziecoder.medium.com/react-js-the-king-of-frontend-41e56d19aeb2",
    heading: "React.js The King of Frontend:",
    description:
      "React.js is an open-source JavaScript library developed by Facebook (now Meta) for building user interfaces, especially for single-page applications (SPAs)."
  },
  {
    techstack: "@medium.com/fuzziecoder",
    href: "https://fuzziecoder.medium.com/ai-in-2025-not-the-future-we-expected-but-the-one-we-needed-6f67b4de459e",
    heading: "AI in 2025: Not the Future We Expected — But the One We Needed",
    description:
      "It’s not about machines taking over. It’s about AI quietly solving real-world problems — in healthcare, where early diagnosis saves lives; in farming, where climate data guides better harvests; in education."
  },
  {
    techstack: "@medium.com/fuzziecoder",
    href: "https://fuzziecoder.medium.com/real-people-real-problems-real-ai-solutions-no-hype-just-results-2f88094bf4a2",
    heading: "Real People, Real Problems, Real AI Solutions – No Hype, Just Results.",
    description:
      "This is AI at its best: practical, invisible, and life-changing"
  },
  {
    techstack: "@medium.com/fuzziecoder",
    href: "https://fuzziecoder.medium.com/the-rise-of-aiops-when-your-infrastructure-starts-thinking-for-itself-33212ca3358c",
    heading: "The Rise of AIOps: When Your Infrastructure Starts Thinking for Itself",
    description:
      "This isn't DevOps 2.0 — it's DevOps with foresight AIOps is not hype. It's how the smartest systems stay online."
  },
  {
    techstack: "@medium.com/fuzziecoder",
    href: "https://fuzziecoder.medium.com/618f99f5dcd5",
    heading: "NVIDIA 2025: The Real Brains Behind AI's Big Bang",
    description:
      "NVIDIA 2025 — Not just GPUs anymore. It’s the brain of the AI era."
  },
  {
    techstack: "@medium.com/fuzziecoder",
    href: "https://fuzziecoder.medium.com/bengaluru-2025-indias-silicon-valley-at-a-crossroads-1465ba56c7ea",
    heading: "Bengaluru 2025: India's Silicon Valley at a Crossroads",
    description:
      "Bengaluru 2025 — Still India’s tech crown jewel, but now caught between soaring AI ambition and aging infrastructure. Can the city keep pace with the revolution it helped spark?"
  }
];