"use client";
import React from "react";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine, SingleOrMultiple } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "../utils/cn";
import { motion, useAnimation } from "framer-motion";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity
  } = props;
  const [init, setInit] = useState(false);
  
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const controls = useAnimation();

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 1
        }
      });
    }
  };

  if (!init) {
    return null;
  }

  return (
    <motion.div
      animate={controls}
      initial={{ opacity: 0 }}
      className={cn("absolute inset-0", className)}
    >
      <Particles
        id={id || "tsparticles"}
        className={cn("h-full w-full")}
        particlesLoaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: background || "transparent"
            }
          },
          fullScreen: {
            enable: false,
            zIndex: 1
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push"
              },
              onHover: {
                enable: true,
                mode: "repulse"
              },
              resize: {
                enable: true,
                delay: 0.5
              }
            },
            modes: {
              push: {
                quantity: 4
              },
              repulse: {
                distance: 100,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: particleColor || "#ffffff"
            },
            links: {
              color: particleColor || "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce"
              },
              random: false,
              speed: speed || 2,
              straight: false
            },
            number: {
              density: {
                enable: true,
                width: 800,
                height: 800
              },
              value: particleDensity || 80
            },
            opacity: {
              value: 0.5
            },
            shape: {
              type: "circle"
            },
            size: {
              value: { min: minSize || 1, max: maxSize || 3 }
            }
          },
          detectRetina: true
        }}
      />
    </motion.div>
  );
};