import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your local images
import bg1 from "../assets/images/bg-images/bg1.png";
import bg2 from "../assets/images/bg-images/bg2.png";
import bg3 from "../assets/images/bg-images/bg3.png";

const backgroundImages = [bg1, bg2, bg3];

export default function SubscriptionSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };

  return (
    <section className="relative px-[64px] h-[512px] my-40 rounded-3xl overflow-hidden max-w-[1312px] mx-auto">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <Slider {...settings}>
          {backgroundImages.map((url, index) => (
            <div key={index}>
              <img
                src={url}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Subscription Form */}
      <div className="absolute top-10 right-10 z-10">
        <div className="bg-white p-6 rounded-xl shadow-lg w-[340px]">
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-violet focus:border-transparent text-sm"
              placeholder="name@domain.com"
            />
            <button className="w-full bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-4 rounded-lg transition-colors shadow-md text-sm">
              Sign me up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
