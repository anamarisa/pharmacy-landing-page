import React from "react";
import Slider from "react-slick";
import QuoteIcon from "../assets/icons/quote.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeader from "./common/SectionHeader";

export default function Testimonials() {
  const testimonialsRow1 = [
    `F*** HIV, I don't have to go to CVS anymore, F* STI delivers to my doorstep discreetly.`,
    `I referred my partner and he loved it, they don't judge and offer support for any condition.`,
    `F* STI's program gave us the right guidance and support to overcome gonorrhea.`,
  ];

  const testimonialsRow2 = [
    `I had Gonorrhea and Trica, and they helped me with both within a few days.`,
    `Thanks to F*STI, we were able to clear gonorrhea and move forward confidently.`,
    `My insurance covered everything for me, and when my partner applied it covered it for him too.`,
  ];

  // Desktop settings
  const settingsLeft = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: "unslick" },
    ],
  };

  const settingsRight = {
    ...settingsLeft,
    rtl: true,
  };

  // Mobile settings
  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  // Fixed card dimensions
  const Card = ({ text }) => (
    <div className="px-2">
      <div className="h-[300px] md:h-[246px] w-full text-sm md:text-[18px] flex flex-col justify-between bg-gradient-to-b from-[#7C3AED] to-[#2E1065] text-white p-6 rounded-xl shadow-md">
        <div>
          <img
            src={QuoteIcon}
            alt="quote"
            className="w-7 h-7 md:w-8 md:h-8 mb-4"
          />
          <p className="font-inter leading-relaxed">{text}</p>
        </div>
        <p className="mt-4 font-inter italic">F* STI Patient</p>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      {/* Desktop Version */}
      <div>
        <div className="px-5 lg:pt-8 lg:px-[64px] mt-[80px] lg:mt-[152px]">
          <SectionHeader
            layout="custom"
            title={
              <>
                <span className="hidden md:block">
                  Life-Changing Stories from Our Users
                </span>
                <span className="hidden md:block">
                  Who Took Control of Their Health
                </span>
                <span className="md:hidden">
                  Life-Changing Stories from Our Users Who Took Control of Their
                  Health
                </span>
              </>
            }
            subtitle="Read experiences from those transformed by Prep. See how it empowers them to protect their health."
          />
        </div>

        {/* Mobile Version */}
        <div className="md:hidden px-5">
          <div className="mx-auto">
            <Slider {...mobileSettings}>
              {[...testimonialsRow1, ...testimonialsRow2].map((text, i) => (
                <Card key={`m-${i}`} text={text} />
              ))}
            </Slider>
          </div>
        </div>

        <div className="hidden md:block py-4 w-full mx-auto">
          <div>
            <Slider {...settingsLeft}>
              {testimonialsRow1.map((text, i) => (
                <Card key={`d-1-${i}`} text={text} />
              ))}
            </Slider>
          </div>
          <div className="mt-8">
            <Slider {...settingsRight}>
              {testimonialsRow2.map((text, i) => (
                <Card key={`d-2-${i}`} text={text} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
