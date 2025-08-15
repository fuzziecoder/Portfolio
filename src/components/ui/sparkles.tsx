"use client";

import React, { useEffect, useState } from "react";
import { cn } from "../utils/cn";

export const SparklesCore = ({
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 100,
  className,
  particleColor = "#FFFFFF"
}: {
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}) => {
  const [particles, setParticles] = useState<Array<{
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
  }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: particleDensity }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * (maxSize - minSize) + minSize,
      speedX: (Math.random() - 0.5) * 0.1,
      speedY: (Math.random() - 0.5) * 0.1
    }));
    setParticles(newParticles);
  }, [particleDensity, maxSize, minSize]);

  useEffect(() => {
    const animate = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => ({
          ...particle,
          x: (particle.x + particle.speedX + 1) % 1,
          y: (particle.y + particle.speedY + 1) % 1
        }))
      );
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  return (
    <div
      className={cn("relative", className)}
      style={{ background }}
    >
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${particle.x * 100}%`,
            top: `${particle.y * 100}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particleColor,
            opacity: 0.5,
            transform: "translate(-50%, -50%)"
          }}
        />
      ))}
    </div>
  );
}; 