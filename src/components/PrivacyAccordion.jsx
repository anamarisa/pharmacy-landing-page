import React, { useState } from "react";
import frame from "../assets/privacy-icons/frame.png";
import money from "../assets/privacy-icons/money.png";
import pill from "../assets/privacy-icons/pill.png";
import check from "../assets/privacy-icons/check.png";
import heart from "../assets/privacy-icons/heart.png";
import elder from "../assets/privacy-icons/elder.png";
import support from "../assets/privacy-icons/support.png";
import insurance from "../assets/privacy-icons/insurance.gif";
import coverage from "../assets/privacy-icons/coverage.jpeg";

export default function PrivacyAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

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
    <section className="px-[64px] py-16 custom-gradient-bg grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="font-manrope text-[30px] lg:text-[36px] leading-[32px] lg:leading-[46px] tracking-[-0.03em] font-semibold mb-4">
          Fight STIs with Ease and Confidence
        </h3>
        <p className="font-inter text-[18px] leading-[28px] font-normal tracking-[-0.03em] text-gray-700 mb-6">
          Through our providers and your insurance, you have options to protect
          your health and control your future.
        </p>

        <ul className="space-y-0">
          {accordionItems.map((item, index) => (
            <li key={index} className="border-b border-gray-border pb-4">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center text-left group pt-4 gap-2"
              >
                {/* Privacy Icon */}
                <div className="flex items-center justify-center flex-shrink-0 w-[25px] h-[25px]">
                  <img
                    src={item.icon}
                    alt={item.alt}
                    className="w-8 h-8 object-contain"
                  />
                </div>

                {/* Title and Toggle */}
                <div className="flex-grow flex justify-between items-center">
                  <span
                    className={`font-semibold text-[20px] md:text-[24px] leading-[32px] tracking-[-0.03em] transition-colors ${
                      activeIndex === index ? "text-violet-600" : "text-black"
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
                } font-inter text-[16px] leading-[24px] text-gray-700`}
              >
                <p className="pr-4 text-[16px]">{item.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-center text-center">
        <img
          src={getImageForIndex(activeIndex)}
          alt="Visual"
          className="w-auto rounded-3xl h-auto transition-all duration-500 ease-in-out"
        />
      </div>
    </section>
  );
}
