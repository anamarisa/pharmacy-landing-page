import React, { useState } from "react";
import STIDetailCard from "./STIDetailCard";
import { categoryDetails, categories } from "../../data/categoryDetails";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeader from "../SectionHeader";

export default function STIAwareness() {
  const [selected, setSelected] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);

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
    <section className="px-5 py-8 lg:px-[64px] mt-20 lg:mt-[152px]">
      {/* Desktop Header (hidden on mobile) */}
      <SectionHeader
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
        layout="side-by-side"
      />

      {/* Mobile Only - Awards Header */}
      <div className="md:hidden mb-4">
        <h3 className="font-manrope text-[30px] lg:text-[36px] sm:text-3xl leading-[1.2] tracking-[-0.03em] font-semibold text-center">
          Our Awards & Credentials
        </h3>
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden">
        <Slider {...sliderSettings} className="mb-12">
          {categories.map((category) => (
            <div
              key={category.name}
              className="px-2 py-4 text-center cursor-pointer"
              onClick={() => handleSelect(category.name)}
            >
              <div className="flex items-center justify-center mb-2">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-[300px] object-fit"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop Grid (hidden on mobile) */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="text-center cursor-pointer hover:scale-105 transition-transform"
            onClick={() => handleSelect(category.name)}
          >
            <div className="aspect-square flex items-center justify-center mb-2 overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ))}
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
