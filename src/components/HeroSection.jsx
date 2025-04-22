import React from "react";
import Slider from "react-slick";
import { useRef, useEffect } from "react";
import Button from "./common/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import frame1 from "../assets/images/frame1.png";
import frame2 from "../assets/images/frame2.png";
import frame3 from "../assets/images/frame3.png";
import frame4 from "../assets/images/frame4.png";
import frame5 from "../assets/images/frame5.png";
import frame6 from "../assets/images/frame6.png";
import frame7 from "../assets/images/frame7.png";
import frame8 from "../assets/images/frame8.png";

export default function HeroSection({ scrollToComparison }) {
  const keywordSliderRef = useRef(null);
  const subtitleSliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (keywordSliderRef.current && subtitleSliderRef.current) {
        keywordSliderRef.current.slickNext();
        subtitleSliderRef.current.slickNext();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const textSliderSettings = {
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 3000,
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    cssEase: "ease-in-out",
  };

  const imageSliderSettings = {
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    cssEase: "linear",
    centerMode: true, // Added for better mobile centering
    centerPadding: "0px", // Ensures no extra padding
  };

  const imageSliderSettingsReversed = {
    ...imageSliderSettings,
    rtl: true,
  };

  const textContent = [
    {
      keyword: "HIV",
      subtitle: "Fight STIs, take control now.",
    },
    {
      keyword: "STI",
      subtitle: "Fight HIV, protect lives everywhere.",
    },
  ];

  const column1 = [frame1, frame2, frame3, frame4];
  const column2 = [frame5, frame6, frame7, frame8];

  return (
    <section className="w-full bg-white text-black px-4 sm:px-6 lg:px-[64px] flex flex-col lg:flex-row justify-between gap-6 items-center lg:max-w-[1440px] mx-auto mb-20 text-center lg:text-left relative">
      {/* Left Side Content */}
      <div className="w-full max-w-[500px] lg:max-w-none mx-auto lg:mx-0 lg:text-left flex flex-col items-center lg:items-start">
        {/* Badge */}
        <div className="inline-flex items-center rounded-[4px] p-[4px_12px] gap-1 border border-[#F5F3FF] bg-[#F5F3FF] mb-4 mt-16">
          <p className="font-inter font-normal text-[12px] sm:text-[16px] leading-[24px] tracking-[-0.02em] text-[#6A31CE]">
            F HEALTH WORRIES, SAY HELLO TO GOOD HEALTH
          </p>
        </div>

        {/* Title with Sliding Word */}
        <div className="flex items-center h-[87px] overflow-hidden">
          <h2 className="font-manrope font-semibold text-dark-violet text-[64px] leading-[87px] flex">
            F*
            <div className="w-[120px] ml-1">
              <Slider ref={keywordSliderRef} {...textSliderSettings}>
                {textContent.map((item, index) => (
                  <div key={index}>
                    <span>{item.keyword}</span>
                  </div>
                ))}
              </Slider>
            </div>
          </h2>
        </div>

        <h3 className="font-manrope font-semibold text-[20px] sm:text-[48px] leading-[40px] sm:leading-[52px] tracking-[-0.04em] mb-2 sm:mb-4">
          Empower Your Health Journey
        </h3>

        {/* Subtitle slider */}
        <div className="h-[32px] overflow-hidden mb-5 sm:mb-4 w-full">
          <Slider
            ref={subtitleSliderRef}
            {...{ ...textSliderSettings, autoplay: false }}
            className="w-full max-w-[500px] mx-auto lg:mx-0"
          >
            {textContent.map((item, index) => (
              <div key={index}>
                <p className="font-inter text-[18px] sm:text-[20px] leading-[24px] sm:leading-[28px] text-black/70 tracking-[-0.03em] font-normal">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </Slider>
        </div>

        {/* Static Subtitle */}
        <p className="font-inter font-normal text-[12px] leading-[16px] tracking-[-0.02em] text-[#0A0A0A] opacity-30 mb-6 sm:mb-10 hidden sm:block">
          99% of Patients Pay $0* For The Medication.*
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 ">
          <Button onClick={scrollToComparison} className="">
            Get Started
          </Button>
          <Button variant="secondary" className="hidden sm:flex">
            Why F*STI
          </Button>
        </div>
      </div>

      {/* Dual Column Vertical Sliders */}
      <div className="relative w-full max-w-[700px] h-[360px] sm:h-[578px] mt-8 lg:mt-0 overflow-hidden">
        <div className="grid grid-cols-2 gap-1 sm:gap-4 w-full h-full mx-auto">
          {/* Column 1 */}
          <div className="w-full h-full">
            <Slider {...imageSliderSettings}>
              {column1.map((src, index) => (
                <div key={index} className="px-1">
                  <div className="relative w-full aspect-square">
                    <img
                      src={src}
                      alt={`Slide ${index}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Column 2 */}
          <div className="w-full h-full">
            <Slider {...imageSliderSettingsReversed}>
              {column2.map((src, index) => (
                <div key={index} className="px-1">
                  <div className="relative w-full aspect-square">
                    <img
                      src={src}
                      alt={`Slide Reverse ${index}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Gradient Overlay - Fixed to be visible */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
