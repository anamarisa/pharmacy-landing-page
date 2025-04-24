import React from "react";
import image from "../assets/images/image.png";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import bgEmerald from "../assets/bg-emerald.gif";
import SectionHeader from "./SectionHeader";

export default function HeroesSection() {
  return (
    <section className="relative h-svh lg:min-h-screen overflow-hidden bg-black flex flex-col items-center justify-center px-6 lg:px-16 mt-[152px]">
      {/* Animated GIF Background */}
      <img
        src={bgEmerald}
        alt="Animated Background"
        className="absolute inset-0 w-full h-full object-cover opacity-0 animate-fade-in z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/30 to-emerald-950/50 z-10" />

      {/* Content Wrapper */}
      <div className="relative z-20 text-center text-white">
        {/* Headings */}
        <div className="transition-all duration-2000 ease-[cubic-bezier(0.25,1,0.5,1)] hover:opacity-90">
          <SectionHeader
            layout="center"
            title={
              <>
                Celebrating Everyday Heroes{" "}
                <span className="block">Who Make a Difference</span>
              </>
            }
            subtitle={
              <p className="text-emerald-100">
                Thank you to healthcare workers, educators, and{" "}
                <span className="block">
                  first responders for their dedication.
                </span>
              </p>
            }
          />
        </div>

        {/* Images Layout */}
        <div className="flex justify-center items-end space-x-[-40px] sm:space-x-[-20px] my-10">
          {/* Left Image */}
          <div className="w-[200px] sm:w-[220px] md:w-[260px] h-[280px] md:h-[340px] rounded-2xl overflow-hidden rotate-[-10deg] shadow-lg z-0">
            <img
              src={image}
              alt="Hero 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center Image */}
          <div className="w-[200px] sm:w-[220px] md:w-[260px] h-[280px] md:h-[340px] rounded-2xl overflow-hidden shadow-xl z-10 scale-105">
            <img
              src={image1}
              alt="Hero 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Image */}
          <div className="w-[200px] sm:w-[220px] md:w-[260px] h-[280px] md:h-[340px] rounded-2xl overflow-hidden rotate-[10deg] shadow-lg z-0">
            <img
              src={image2}
              alt="Hero 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
