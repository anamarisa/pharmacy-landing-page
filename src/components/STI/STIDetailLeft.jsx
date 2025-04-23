import React from "react";

export default function STIDetailLeft({ title, description, className }) {
  return (
    <div className={`font-manrope ${className}`}>
      <h2 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl leading-[1.2] tracking-tight mb-2 sm:mb-3">
        {title}
      </h2>
      <p className="font-inter font-normal text-sm sm:text-base leading-relaxed text-gray-700 mb-3 sm:mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {["PrEP", "PeP"].map((tag) => (
          <div
            key={tag}
            className="font-semibold inline-flex items-center px-3 sm:px-4 py-1 rounded-[4px] gap-1 border border-[#F5F3FF] bg-[#F5F3FF]"
          >
            <p className="font-inter font-normal text-xs sm:text-sm md:text-base leading-normal text-[#6A31CE]">
              {tag}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}