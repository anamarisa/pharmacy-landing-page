import React from "react";

export default function STIDetailLeft({ title, description }) {
  return (
    <div className="font-manrope md:w-1/2 md:pr-6">
      <h2 className="text-black font-bold text-[36px] leading-[46px] tracking-[-0.03em] mb-2">
        {title}
      </h2>
      <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.02em] text-gray-700 mb-4">
        {description}
      </p>
      <div className="flex gap-2">
        {["PrEP", "PeP"].map((tag) => (
          <div
            key={tag}
            className="font-semibold inline-flex items-center px-6 rounded-[4px] p-[4px_12px] gap-1 border border-[#F5F3FF] bg-[#F5F3FF] mb-2"
          >
            <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.02em] text-[#6A31CE]">
              {tag}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
