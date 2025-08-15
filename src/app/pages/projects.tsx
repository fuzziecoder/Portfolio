"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { PiGitForkBold } from "react-icons/pi";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const GITHUB_USERNAME = "lassiecoder";

const ThreeDCard = () => {
  const [repoStats, setRepoStats] = useState<{
    [key: string]: { stars: number; forks: number };
  }>({});

  useEffect(() => {
    const fetchRepoStats = async () => {
      try {
        const repoData = await Promise.all(
          dummyData.map(async (item) => {
            const response = await fetch(
              `https://api.github.com/repos/${GITHUB_USERNAME}/${item.repo}`
            );
            const data = await response.json();
            return {
              repo: item.repo,
              stars: data.stargazers_count,
              forks: data.forks_count
            };
          })
        );

        const stats = repoData.reduce(
          (acc: { [key: string]: { stars: number; forks: number } }, curr) => {
            acc[curr.repo] = { stars: curr.stars, forks: curr.forks };
            return acc;
          },
          {}
        );

        setRepoStats(stats);
      } catch (error) {
        console.error("Failed to fetch GitHub data", error);
      }
    };

    fetchRepoStats();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 mt-20">
      <div className="px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 text-white">
          Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 sm:gap-3">
        {dummyData.map((item, index) => (
          <div key={index}>
            <CardContainer className="inter-var font-medium">
              <CardBody className="bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.2] w-auto h-[400px] sm:h-[420px] lg:h-[450px] rounded-xl p-6 border flex flex-col justify-between">
                {/* Title */}
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-gray-100 dark:text-white"
                >
                  {item.title}
                </CardItem>

                {/* Description with Clamp */}
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-gray-400 text-sm mt-2 line-clamp-3 hover:line-clamp-none transition-all duration-300"
                >
                  {item.description}
                </CardItem>

                {/* Image with Fixed Height */}
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={item.image}
                    height={1000}
                    width={1000}
                    className="h-40 sm:h-44 md:h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                    priority
                  />
                </CardItem>

                {/* Stats and Button */}
                <div className="flex justify-between items-center mt-4 text-gray-400 text-sm">
                  {item.projectType !== "work-project" && (
                    <div className="flex gap-4">
                      {repoStats[item.repo]?.stars !== 0 && (
                        <span className="flex items-center gap-1">
                          <FaStar className="text-yellow-400 text-base" />
                          {repoStats[item.repo]?.stars || 0}
                        </span>
                      )}

                      {repoStats[item.repo]?.forks !== 0 && (
                        <span className="flex items-center gap-1">
                          <PiGitForkBold className="text-gray-300 text-base" />
                          {repoStats[item.repo]?.forks || 0}
                        </span>
                      )}
                    </div>
                  )}

                  <Link href={item.link} target="_blank">
                      <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                          View Project →
                        </span>
                      </button>
                  </Link>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeDCard;

const dummyData = [
  {
    title: "Revon AI-powered",
    description:
      "Revon is an AI-powered disease prediction web application designed to help users identify potential diseases based on the symptoms they enter. The app uses machine learning models to analyze user input, predict possible health conditions, and offer personalized suggestions such as diet tips, precautions, and nearby hospitals",
    image: "/project-1.png",
    link: "https://github.com/fuzziecoder/revon",
    repo: "Revon",
    projectType: ""
  },
  {
    title: "Smart-Home",
    description:
      "Smart Home Dashboard is a modern, interactive web application designed to simulate and manage smart home functionalities with a futuristic user interface. It allows users to control and monitor various smart home devices such as lights, temperature, humidity sensors, and energy usage from a single dashboard.",
    image: "/project-2.png",
    link: "https://github.com/fuzziecoder/Smart-Home",
    repo: "Smart-Home",
    projectType: ""
  },
  {
    title: "Brocode-Event App",
    description:
      "BroCode is a real-time, mobile-first web application designed to make planning and managing group meetups with friends seamless, interactive, and fun.",
    image: "/project-3.png",
    link: "https://github.com/fuzziecoder/Brocode",
    repo: "brocode-meetup",
    projectType: ""
  },
];