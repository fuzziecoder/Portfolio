"use client";

import HomeScreen from "@/app/_components/homescreen";
import { Article } from "@/app/pages/articles";
import ThreeDCard from "@/app/pages/projects";
import About from "@/app/pages/about";
import ContactForm from "./pages/contact";
import { SparklesCore } from "./components/ui/sparkles";
import Footer from "@/components/footer";
import TopSocialIcons from "@/app/_components/TopSocialIcons";
// import Navbar from "@/components/navbar";

import ReactGA from "react-ga4";
import { useEffect } from "react";
import { Experience } from "./pages/experience";
import Networking from "./pages/networking";

export default function Home() {
  useEffect(() => {
    ReactGA.initialize("G-PYQ50G2GWN");
  }, []);

  return (
    <main className="relative min-h-screen bg-black overflow-hidden text-white">
      {/* Top Social Icons */}
      <TopSocialIcons />
      
      {/* Particle Background */}
      <div className="absolute inset-0 -z-10">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleColor="#FFFFFF"
          particleDensity={100}
          className="absolute inset-0"
        />
      </div>

      {/* Content */}
      <section className="relative z-10">
        <HomeScreen />
        <About />
        <Experience />
        <ThreeDCard />
        <Article />
        <Networking />
        <ContactForm />
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}