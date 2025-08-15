"use client";

import Tooltip from "@/components/Tooltip";
import Link from "next/link";
import React from "react";
import { HiMiniBellAlert } from "react-icons/hi2";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 xl:pl-0 lg:mb-0 sm:mb-0 text-white">
          About me
        </h2>
      </div>
      <h3 className="md:text-xl text-sm lg:text-xl font-medium text-left relative z-20 text-gray-400 max-w-7xl pb-8 lg:mb-4 pl-4 pr-4">
        <div>
          Hello, I'm Ramkumar, also known as{" "}
          <a 
            href="https://www.google.com/search?q=fuzziecoder" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300"
          >
            <Tooltip content="Click here to search fuzziecoder on Google">
              <span className="text-white">fuzziecoder</span>
            </Tooltip>
          </a>{" "}
          in the tech community.
        </div>
        <p className="mt-6">
          As a <span className="text-white">Data Analyst</span>
          , I leverage tools like<span className="text-white"></span>
          <span className="text-white">Power BI, Excel, and Python visualization libraries (Matplotlib, Seaborn, Plotly)</span>, I specialize
          in <span className="text-white"></span> to transform complex data into clear, actionable insights. 
        </p>
        <div className="mt-6">
          My technical expertise includes –{" "}
          <span className="text-white">Python</span>,{" "}
          <span className="text-white">SQL</span>, and{" "}
          <Tooltip content="React Native, ReactJS, NextJS, Storybook, Expo">
            <span className="text-white">React ecosystems</span>
          </Tooltip>
          , along with{" "}
          <Tooltip content="Python,Node Js,MongoDB Atlas">
            <span className="text-white">backend technologies</span>
          </Tooltip>
          ,{" "}
          <Tooltip content="AWS, Vercel, Netlify">
            <span className="text-white">cloud deployment</span>
          </Tooltip>
          ,{" "}
          <Tooltip content="Redux, Rematch, React Query">
            <span className="text-white">state management</span>
          </Tooltip>
          ,{" "}
          <Tooltip content="Websocket">
            <span className="text-white">real-time communication</span>
          </Tooltip>
          , and{" "}
          <Tooltip content="Figma, Adobe XD">
            <span className="text-white">UI development</span>
          </Tooltip>{" "}
          and{" "}
          <Tooltip content="Jest">
            <span className="text-white">testing</span>
          </Tooltip>.
        </div>
        <p className="mt-6">
          Currently, I&apos;m a {" "}
          <span className="text-white">Open Source Contributor</span> at {" "}
          <span className="text-white">Open Source Contributor India.</span>
        </p>
        <p className="mt-6">
          I&apos;m passionate about pushing technological boundaries and
          delivering impactful solutions that drive success. My commitment to
          innovation and excellence defines every project I undertake.
        </p>
      </h3>
      <div className="flex justify-center items-center">
        <a
          href="https://www.linkedin.com/in/fuzziecoder"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              &nbsp; Click to Crunch data! &nbsp;
              <HiMiniBellAlert className="mr-2 text-xl" />
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;