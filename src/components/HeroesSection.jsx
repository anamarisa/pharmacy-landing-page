import React from "react";
import image from "../assets/images/image.png";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import bgEmerald from "../assets/bg-emerald.gif";

export default function HeroesSection() {
  return (
    <section className="relative h-[794px] my-30 w-full overflow-hidden bg-black">
      {/* Animated GIF Background */}
      <img
        src={bgEmerald}
        alt="Animated Background"
        className="absolute animate-fade-in inset-0 w-full h-full object-cover opacity-0 z-0"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/30 to-emerald-950/50 z-10"></div>

      {/* Text Content */}
      <div className="absolute top-[84px] left-0 w-full z-20 px-6 text-center">
        <div className="max-w-4xl mx-auto text-white transition-all duration-2000 ease-[cubic-bezier(0.25,1,0.5,1)] hover:opacity-90">
          <h2 className="font-manrope font-semibold text-[36px] leading-[46px] tracking-[-0.03em] mb-4">
            Celebrating Everyday Heroes{" "}
            <span className="block">Who Make a Difference</span>
          </h2>

          <p className="font-inter font-normal text-[18px] leading-[28px] tracking-[-0.03em] text-emerald-100 mb-4">
            Thank you to healthcare workers, educators, and{" "}
            <span className="block">
              first responders for their dedication.
            </span>
          </p>
        </div>
      </div>

      {/* Images Layout */}
      <div className="absolute top-[320px] w-full z-20 flex justify-center items-end space-x-[-40px]">
        {/* Left Image */}
        <div className="w-[260px] h-[340px] rounded-2xl overflow-hidden rotate-[-10deg] shadow-lg z-0">
          <img
            src={image}
            alt="Hero 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center Image */}
        <div className="w-[260px] h-[340px] rounded-2xl overflow-hidden shadow-xl z-10 scale-105">
          <img
            src={image1}
            alt="Hero 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Image */}
        <div className="w-[260px] h-[340px] rounded-2xl overflow-hidden rotate-[10deg] shadow-lg z-0">
          <img
            src={image2}
            alt="Hero 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
