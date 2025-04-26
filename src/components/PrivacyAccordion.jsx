import React, { useState } from "react";
import frame from "../assets/privacy/frame.svg";
import money from "../assets/privacy/money.svg";
import pill from "../assets/privacy/pill.svg";
import check from "../assets/privacy/check.svg";
import heart from "../assets/privacy/heart.svg";
import elder from "../assets/privacy/elder.png";
import support from "../assets/privacy/support.png";
import insurance from "../assets/privacy/insurance.gif";
import coverage from "../assets/privacy/coverage.jpeg";

export default function PrivacyAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const getImageForIndex = (index) => {
    switch (index) {
      case 0:
        return support;
      case 1:
        return insurance;
      case 2:
      case 3:
        return coverage;
      case 4:
        return elder;
      default:
        return support;
    }
  };

  const accordionItems = [
    {
      title: "What is F*STI?",
      content:
        "Our healthcare providers are quick, discreet, and offer private, confidential care—no video or in-person visits required.",
      icon: frame,
      alt: "Frame",
    },
    {
      title: "How much does this cost?",
      content:
        "Through our providers and your insurance, you have options to protect your health and control your future.",
      icon: money,
      alt: "Money",
    },
    {
      title: "How effective are PrEP and DoxyPEP?",
      content:
        "PrEP is 99% effective at preventing HIV when taken as prescribed. DoxyPEP is highly effective at preventing certain bacterial STIs.",
      icon: pill,
      alt: "Pill",
    },
    {
      title: "Insurance coverage",
      content:
        "Most insurance plans cover PrEP and STI services. We can help you navigate your coverage options.",
      icon: check,
      alt: "Check",
    },
    {
      title: "Your trusted partner for everything STI-related",
      content:
        "From testing to treatment to prevention, we provide comprehensive STI care with 24/7 support.",
      icon: heart,
      alt: "Heart",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen px-5 py-8 lg:p-[64px] mt-[152px] custom-gradient-bg flex flex-col justify-center">
      {/* Heading at the very top */}
      <h3 className="font-manrope font-semibold text-[30px] sm:text-[32px] lg:text-[36px] leading-[38px] lg:leading-[46px] tracking-[-0.03em] text-gray-900 mb-3 text-center md:text-left">
        Fight STIs with Ease and Confidence
      </h3>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content Column */}
        <div className="order-1 md:order-1">
          <div className="flex flex-col">
            <p className="font-inter text-[18px] sm:text-[18px] md:text-[18px] leading-[24px] sm:leading-[26px] md:leading-[28px] tracking-[-0.03em] font-normal text-gray-600 text-center md:text-left">
              Through our providers and your insurance, you have options to
              protect your health and control your future.
            </p>

            <ul className="space-y-0">
              {accordionItems.map((item, index) => (
                <li key={index} className="border-b border-gray-border pb-4">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center text-left group pt-4 gap-2"
                  >
                    {/* Privacy Icon */}
                    <div className="flex-shrink-0 mt-4">
                      <img
                        src={item.icon}
                        alt={item.alt}
                        className={`w-6 h-6 sm:w-8 sm:h-8 object-contain transition-all duration-200 ${
                          activeIndex === index
                            ? "filter-violet"
                            : "filter-black"
                        }`}
                      />
                    </div>

                    {/* Title and Toggle */}
                    <div className="flex-grow flex justify-between items-end">
                      <span
                        className={`font-semibold mt-4 text-xl sm:text-2xl md:text-2xl leading-snug tracking-tight transition-colors ${
                          activeIndex === index
                            ? "text-violet-600"
                            : "text-black"
                        }`}
                      >
                        {item.title}
                      </span>
                      <span
                        className={`text-2xl font-normal transition-all duration-200 ${
                          activeIndex === index
                            ? "rotate-45 text-violet-600"
                            : "rotate-0 text-black"
                        }`}
                      >
                        +
                      </span>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      activeIndex === index
                        ? "max-h-[500px] opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    } font-inter text-lg leading-[24px] tracking-[-0.02em] text-gray-700`}
                  >
                    <p className="pr-4">{item.content}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image Column - with controlled sizing */}
        <div className="order-2 md:order-2 flex items-center justify-center h-full">
          <div className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[500px] mx-auto">
            <img
              src={getImageForIndex(activeIndex)}
              alt="Visual"
              className="mx-auto w-[330px] md:w-full h-auto rounded-2xl sm:rounded-3xl object-contain transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
