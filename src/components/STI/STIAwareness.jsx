import React, { useState } from "react";
import STIDetailCard from "./STIDetailCard";
import { categoryDetails, categories } from "../../data/categoryDetails";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeader from "../SectionHeader";

import { Player } from "@lottiefiles/react-lottie-player";
import hivAnimation from "../../animations/hiv.json";
import herpesAnimation from "../../animations/herpes.json";
import hpvAnimation from "../../animations/hpv.json";
import genitalAnimation from "../../animations/genital.json";
import trichomonasAnimation from "../../animations/trichomonas.json";
import mycoplasmaAnimation from "../../animations/mycoplasma.json";
import ureaplasmaAnimation from "../../animations/ureaplasma.json";
import gonorheaAnimation from "../../animations/gonorhea.json";
import chlamydiaAnimation from "../../animations/chlamydia.json";
import syphilisAnimation from "../../animations/syphilis.json";

export default function STIAwareness() {
  const [selected, setSelected] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);
  const [hovered, setHovered] = useState(null);

  const lottieAnimations = {
    HIV: hivAnimation,
    Gonorhea: gonorheaAnimation,
    Chlamydia: chlamydiaAnimation,
    Syphilis: syphilisAnimation,
    Herpes: genitalAnimation,
    "Hepatitis B": herpesAnimation,
    "Genital Warts": hpvAnimation,
    Trichomoniasis: trichomonasAnimation,
    Mycoplasma: mycoplasmaAnimation,
    Ureaplasma: ureaplasmaAnimation,
  };

  const animationStyles = {
    HIV: {
      bgGradient: "bg-gradient-to-br from-[#334155] to-[#475569]",
      size: { width: "220px", height: "220px" },
    },
    Gonorhea: {
      bgGradient: "bg-gradient-to-br from-[#065F46] to-[#059669]",
      size: { width: "160px", height: "160px" },
    },
    Chlamydia: {
      bgGradient: "bg-gradient-to-br from-[#292524] to-[#57534E]",
      size: { width: "180px", height: "180px" },
    },
    Trichomoniasis: {
      bgGradient: "bg-gradient-to-br from-[#EA580C] to-[#FB923C]",
      size: { width: "240px", height: "240px" },
    },
    Syphilis: {
      bgGradient: "bg-gradient-to-br from-[#2563EB] to-[#3B82F6]",
      size: { width: "120px", height: "120px" },
    },
    Herpes: {
      bgGradient: "bg-gradient-to-br from-[#7C3AED] to-[#5B21B6]",
      size: { width: "280px", height: "280px" },
    },
    "Hepatitis B": {
      bgGradient: "bg-gradient-to-br from-[#422006] to-[#7F3E0C]",
      size: { width: "200px", height: "200px" },
    },
    "Genital Warts": {
      bgGradient: "bg-gradient-to-br from-[#1A2E05] to-[#4D7C0F]",
      size: { width: "280px", height: "280px" },
    },
    Ureaplasma: {
      bgGradient: "bg-gradient-to-br from-[#BE123C] to-[#E11D48]",
      size: { width: "190px", height: "190px" },
    },
    Mycoplasma: {
      bgGradient: "bg-gradient-to-br from-[#DC2626] to-[#6D0909]",
      size: { width: "280px", height: "280px" },
    },
  };

  const handleSelect = (category) => {
    if (selected === category) {
      setSelected(null);
      setFadeIn(false);
    } else {
      setFadeIn(false);
      setTimeout(() => {
        setSelected(category);
        setFadeIn(true);
      }, 50);
    }
  };

  // Slider settings for mobile
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.2,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Common card component with consistent 1:1 ratio
  const STICard = ({ category, isActive, onClick, onMouseEnter, onMouseLeave }) => {
    const animationStyle = animationStyles[category.name];
    
    return (
      <div
        className={`
          relative aspect-square rounded-xl flex flex-col justify-between cursor-pointer transition-all duration-200 overflow-hidden
          ${isActive && animationStyle?.bgGradient ? animationStyle.bgGradient + " text-white" : "bg-[#f3f4f7]"}
        `}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {/* Card Header */}
        <div className="flex justify-between items-start p-4 sm:p-5">
          <h4 className={`text-[16px] md:text-lg font-manrope font-semibold leading-[32px] tracking-[-0.02em] capitalize ${
            isActive ? "text-white" : "text-gray-800"
          }`}>
            {category.name}
          </h4>
        </div>

        {/* Animation/Image Container */}
        <div className="flex-1 w-full relative flex items-center justify-center">
          {isActive && lottieAnimations[category.name] ? (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-8/10">
              <Player
                autoplay
                loop
                src={lottieAnimations[category.name]}
                style={{
                  width: animationStyle?.size?.width || "190px",
                  height: animationStyle?.size?.height || "190px",
                }}
              />
            </div>
          ) : (
            <img
              src={category.image}
              alt={category.name}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "contain",
              }}
              loading="lazy"
            />
          )}
        </div>

        {/* See More button */}
        {!isActive && (
          <div className="flex justify-end p-4 sm:p-6">
            <span className="text-[16px] leading-0.5 font-inter tracking-[-0.02em] font-medium text-neutral">
              See More
            </span>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="px-5 lg:px-[64px] mt-[152px]">
      {/* Desktop Header (hidden on mobile) */}
      <SectionHeader
        layout="side-by-side"
        title={
          <>
            Understanding the Risks,
            <br />
            Taking the Right Steps
          </>
        }
        subtitle={
          <>
            Educate yourself about common STIs to
            <br />
            stay safe and make informed decisions.
          </>
        }
      />

      {/* Mobile Only - Awards Header */}
      <div className="md:hidden mb-4">
        <SectionHeader
          layout="center"
          title={
            <>
              Understanding the Risks,
              <br />
              Taking the Right Steps
            </>
          }
          subtitle={
            <>
              Educate yourself about common STIs to
              <br />
              stay safe and make informed decisions.
            </>
          }
        />
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden">
        <Slider {...sliderSettings} className="mb-12">
          {categories.map((category) => {
            const isActive = hovered === category.name || selected === category.name;
            return (
              <div key={category.name} className="px-2 h-full">
                <STICard
                  category={category}
                  isActive={isActive}
                  onClick={() => handleSelect(category.name)}
                  onMouseEnter={() => setHovered(category.name)}
                  onMouseLeave={() => setHovered(null)}
                />
              </div>
            );
          })}
        </Slider>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
        {categories.map((category) => {
          const isActive = hovered === category.name || selected === category.name;
          return (
            <STICard
              key={category.name}
              category={category}
              isActive={isActive}
              onClick={() => handleSelect(category.name)}
              onMouseEnter={() => setHovered(category.name)}
              onMouseLeave={() => setHovered(null)}
            />
          );
        })}
      </div>

      {/* Detail Card */}
      {selected && (
        <div className={`transition-opacity duration-300 ease-out mt-6 ${fadeIn ? "opacity-100" : "opacity-0"}`}>
          <STIDetailCard selected={selected} categoryDetails={categoryDetails} />
        </div>
      )}
    </section>
  );
}