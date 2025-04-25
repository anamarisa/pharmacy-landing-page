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
      transform: "translate(-50%, -60%)",
      bgGradient: "bg-gradient-to-br from-[#334155] to-[#475569]",
    },
    Gonorhea: {
      transform: "translate(-50%, -45%)",
      bgGradient: "bg-gradient-to-br from-[#065F46] to-[#059669]",
    },
    Chlamydia: {
      transform: "translate(-50%, -50%)",
      bgGradient: "bg-gradient-to-br from-[#292524] to-[#57534E]",
    },
    Trichomoniasis: {
      transform: "translate(-50%, -60%)",
      bgGradient: "bg-gradient-to-br from-[#EA580C] to-[#FB923C]",
    },
    Syphilis: {
      transform: "translate(-50%, -50%)",
      bgGradient: "bg-gradient-to-br from-[#2563EB] to-[#3B82F6]",
    },
    Herpes: {
      transform: "translate(-50%, -50%)",
      bgGradient: "bg-gradient-to-br from-[#7C3AED] to-[#5B21B6]",
    },
    "Hepatitis B": {
      transform: "translate(-50%, -35%)",
      bgGradient: "bg-gradient-to-br from-[#422006] to-[#7F3E0C]",
    },
    "Genital Warts": {
      transform: "translate(-55%, -55%)",
      bgGradient: "bg-gradient-to-br from-[#1A2E05] to-[#4D7C0F]",
    },
    Ureaplasma: {
      transform: "translate(-50%, -35%)",
      bgGradient: "bg-gradient-to-br from-[#BE123C] to-[#E11D48]",
    },
    Mycoplasma: {
      transform: "translate(-50%, -60%)",
      bgGradient: "bg-gradient-to-br from-[#DC2626] to-[#6D0909]",
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
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
          {categories.map((category) => (
            <div
              key={category.name}
              className="cursor-pointer"
              onClick={() => handleSelect(category.name)}
            >
              <div
                className={`relative bg-[#f3f4f7] w-full h-[200px] rounded-xl flex flex-col justify-between transition-colors duration-200 ${
                  hovered === category.name || selected === category.name
                    ? "bg-red-400 text-white"
                    : ""
                }`}
                onMouseEnter={() => setHovered(category.name)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Card Header */}
                <div className="flex justify-between items-start p-4">
                  <h4
                    className={`text-lg font-semibold capitalize ${
                      hovered === category.name || selected === category.name
                        ? "text-white"
                        : "text-gray-800"
                    }`}
                  >
                    {category.name}
                  </h4>
                </div>

                {/* Image / Animation */}
                <div className="flex-1 flex items-center justify-center relative overflow-hidden">
                  {(hovered === category.name || selected === category.name) &&
                  lottieAnimations[category.name] ? (
                    <Player
                      autoplay
                      loop
                      src={lottieAnimations[category.name]}
                      style={{ width: "100%", height: "100%" }}
                    />
                  ) : (
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-[full] h-[full] object-contain"
                      loading="lazy"
                    />
                  )}
                </div>

                {/* Static See More button - hidden on hover/select */}
                {!(hovered === category.name || selected === category.name) && (
                  <div className="flex justify-end p-4">
                    <span className="text-sm font-medium text-dark-violet">
                      See more
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop Grid (hidden on mobile) */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
        {categories.map((category) => {
          const isActive =
            hovered === category.name || selected === category.name;
          const animationStyle = animationStyles[category.name];

          console.log(category.name, animationStyle?.disableEffect);

          return (
            <div
              key={category.name}
              className={`
                relative w-[236px] h-[236px] rounded-xl flex flex-col justify-between cursor-pointer transition-colors duration-200
                ${
                  isActive && animationStyle?.bgGradient
                    ? animationStyle.bgGradient + " text-white"
                    : "bg-[#f3f4f7]"
                }
              `}
              onClick={() => handleSelect(category.name)}
              onMouseEnter={() => setHovered(category.name)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Card Header */}
              <div className="flex justify-between items-start p-6">
                <h4
                  className={`text-lg font-manrope font-semibold leading-[32px] tracking-[-0.02em] capitalize ${
                    isActive ? "text-white" : "text-gray-800"
                  }`}
                >
                  {category.name}
                </h4>
              </div>

              {/* Image / Animation */}
              <div
                className={`flex-1 flex items-center justify-center px-4 relative ${
                  isActive ? "overflow-visible" : "overflow-hidden"
                }`}
              >
                {isActive &&
                lottieAnimations[category.name] &&
                !animationStyle?.disableEffect ? (
                  <Player
                    autoplay
                    loop
                    src={lottieAnimations[category.name]}
                    style={{
                      position: "absolute",
                      top: "10%",
                      left: "50%",
                      transform: animationStyle?.transform,
                      width: "190px",
                      height: "190px",
                    }}
                  />
                ) : (
                  <img
                    src={category.image}
                    alt={category.name}
                    className="object-contain w-full h-full"
                    loading="lazy"
                  />
                )}
              </div>

              {/* Static See More button */}
              {!isActive && (
                <div className="flex justify-end p-6">
                  <span className="text-[16px] leading-0.5 font-inter tracking-[-0.02em] font-medium text-neutral">
                    See More
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Detail Card */}
      {selected && (
        <div
          className={`transition-opacity duration-300 ease-out mt-6 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <STIDetailCard
            selected={selected}
            categoryDetails={categoryDetails}
          />
        </div>
      )}
    </section>
  );
}
