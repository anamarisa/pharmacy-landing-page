import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your local images
import bg1 from "../assets/images/bg-images/bg1.svg";
import bg2 from "../assets/images/bg-images/bg2.svg";
import bg3 from "../assets/images/bg-images/bg3.svg";

const backgroundImages = [bg1, bg2, bg3];

export default function SubscriptionSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: false,
        },
      },
    ],
  };

  return (
    <section className="relative px-4 sm:px-6 md:px-12 h-[512px] md:h-[460px] lg:px-16 mt-[90px] lg:mt-[152px] rounded-3xl overflow-hidden max-w-[1312px] mx-auto">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <Slider {...settings}>
          {backgroundImages.map((url, index) => (
            <div key={index}>
              <img
                src={url}
                alt={`Slide ${index + 1}`}
                className="w-full h-[512px] md:h-[460px] object-cover opacity-90"
                loading="lazy"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Subscription Form - Mobile Bottom Position */}
      <div className="absolute z-10 bottom-4 left-1/2 transform -translate-x-1/2 w-full px-4 md:hidden">
        <div className="bg-white p-5 rounded-xl shadow-lg w-full max-w-[340px] mx-auto text-center">
          <h3 className="font-inter font-bold text-[22px] leading-[24px] tracking-[-0.03em] text-gray-900 mb-3">
            Upgrade Your Health Game
          </h3>
          <p className="font-inter font-normal text-gray-500 text-[16px] leading-[22px] tracking-[-0.03em] mb-4">
            Be the first to know about new launches, exclusive deals, and expert
            health tips—delivered straight to your inbox.
          </p>

          <div className="space-y-3">
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-violet-600 focus:border-transparent text-[16px]"
              placeholder="name@domain.com"
            />
            <button className="w-full cursor-pointer bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-4 rounded-lg transition-colors shadow-md text-[16px]">
              Sign me up
            </button>
          </div>
        </div>
      </div>

      {/* Subscription Form - Desktop Position */}
      <div className="hidden md:block absolute z-10 top-9 right-10">
        <div className="bg-white p-6 rounded-xl shadow-lg w-[340px] text-left">
          <h3 className="font-inter font-bold text-[20px] leading-[24px] tracking-[-0.03em] text-gray-900 mb-3">
            Upgrade Your Health Game
          </h3>
          <p className="font-inter font-normal text-gray-500 text-[16px] leading-[24px] tracking-[-0.03em] mb-4">
            Be the first to know about new launches, exclusive deals, and expert
            health tips—delivered straight to your inbox.
          </p>

          <div className="space-y-4">
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-violet-600 focus:border-transparent text-sm"
              placeholder="name@domain.com"
            />
            <button className="w-full bg-purple-700 cursor-pointer hover:bg-purple-800 text-white font-medium py-2 px-4 rounded-lg transition-colors shadow-md text-sm">
              Sign me up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
