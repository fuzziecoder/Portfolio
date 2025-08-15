"use client";

import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

const Networking = () => {
  const words = ["Connecting, Learning, and Growing Together"];

  return (
    <div className="max-w-7xl mx-auto px-4 mt-10">
      <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 xl:pl-0 lg:mb-0 sm:mb-0 relative z-10 w-[100%]">
        <div className="subtitle-box">
          <FlipWords words={words} duration={1000} />
        </div>
      </h2>
      <h3 className="md:text-xl text-sm lg:text-xl font-medium text-left text-gray-400 max-w-7xl lg:mb-4 pl-0 relative z-0">
        <p className="pb-12">
          Explore my insights and experiences from various{" "}
          <span className="text-white">industry events</span> and{" "}
          <span className="text-white">meetups</span>, where I share{" "}
          <span className="text-white">key takeaways</span>,{" "}
          <span className="text-white">valuable connections</span>, and moments
          that shaped my professional journey.
        </p>
      </h3>
      <button className="relative inline-flex h-200 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl px-4 py-4">
          <ParallaxScroll items={images} />
        </span>
      </button>
    </div>
  );
};

export default Networking;

const images = [
  {
    src: "/networking-1.png",
    href: "https://www.linkedin.com/posts/fuzziecoder_microsoftglobalaitour-seasonsofagents-technexus-activity-7329859927743614976-1CXv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZfjzABGfy1_4MeXrjTFwGDTXyGp3qqfvk"
  },
  {
    src: "/networking-2.png",
    href: "https://www.linkedin.com/posts/fuzziecoder_internshipexperience-cosmic365-ai-activity-7354480494102671360-5QzH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZfjzABGfy1_4MeXrjTFwGDTXyGp3qqfvk"
  },
  {
    src: "/networking-3.png",
    href: "https://www.linkedin.com/posts/fuzziecoder_python-datascience-lifelonglearning-activity-7349937557742252032-0C_2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZfjzABGfy1_4MeXrjTFwGDTXyGp3qqfvk"
  },
  {
    src: "/networking-4.png",
    href: "https://www.linkedin.com/posts/fuzziecoder_powerbi-datavisualization-ai-activity-7327880574323359744-H4jU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZfjzABGfy1_4MeXrjTFwGDTXyGp3qqfvk"
  },
  {
    src: "/networking-5.png",
    href: "https://www.linkedin.com/posts/fuzziecoder_python-dataanalysis-freecodecamp-activity-7350560646993698817-a5Cl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZfjzABGfy1_4MeXrjTFwGDTXyGp3qqfvk"
  },
  {
    src: "/networking-6.png",
    href: "https://www.linkedin.com/posts/fuzziecoder_crud-operations-in-mongodb-was-issued-by-activity-7355134587385139200-JmmJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZfjzABGfy1_4MeXrjTFwGDTXyGp3qqfvk"
  },
  {
    src: "/networking-7.png",
    href: "https://www.linkedin.com/posts/fuzziecoder_socialmediamarketing-udemy-digitalmarketing-activity-7326032042696081408-kXhm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZfjzABGfy1_4MeXrjTFwGDTXyGp3qqfvk"
  },
  {
    src: "/networking-8.png",
    href: "https://www.linkedin.com/posts/fuzziecoder_letsupgrade-studentambassador-edtech-activity-7361580170186510336-KEv2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZfjzABGfy1_4MeXrjTFwGDTXyGp3qqfvk"
  },
  {
    src: "/networking-9.png",
    href: "https://www.linkedin.com/posts/fuzziecoder_forage-certificate-activity-7331644365905256450-DM0X?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZfjzABGfy1_4MeXrjTFwGDTXyGp3qqfvk"
  },
  {
    src: "/networking-10.png",
    href: "https://www.linkedin.com/posts/fuzziecoder_excel-certification-oneroadmap-activity-7356380863019847685-2aPV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZfjzABGfy1_4MeXrjTFwGDTXyGp3qqfvk"
  },
  {
    src: "/networking-11.png",
    href: "https://www.linkedin.com/posts/fuzziecoder_opensource-opensourcecontributor-opensourcecommunity-activity-7361780963699273728-ylN8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZfjzABGfy1_4MeXrjTFwGDTXyGp3qqfvk"
  },
  {
    src: "/networking-12.png",
    href: "https://www.linkedin.com/posts/fuzziecoder_datascience-analytics-hplife-activity-7325350238729236481-xS1b?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZfjzABGfy1_4MeXrjTFwGDTXyGp3qqfvk"
  },
  {
    src: "/networking-13.png",
    href: "https://www.linkedin.com/posts/fuzziecoder_socialmediamarketing-udemy-digitalmarketing-activity-7326032042696081408-kXhm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZfjzABGfy1_4MeXrjTFwGDTXyGp3qqfvk"
  },
  {
    src: "/networking-14.png",
    href: "https://www.linkedin.com/posts/fuzziecoder_hackerrank-skill-certificate-activity-7335392707638435840-jZ9i?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZfjzABGfy1_4MeXrjTFwGDTXyGp3qqfvk"
  },
  {
    src: "/networking-15.png",
    href: "https://www.linkedin.com/posts/fuzziecoder_aws-cloudcomputing-generativeai-activity-7362142274509529088-gqpX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZfjzABGfy1_4MeXrjTFwGDTXyGp3qqfvk"
  }
];