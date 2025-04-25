import React from "react";

export default function SectionHeader({ title, subtitle, layout = "center" }) {
  if (layout === "side-by-side") {
    return (
      <div className="hidden md:flex justify-between items-center mb-8">
        <h3 className="font-manrope text-[36px] leading-[1.2] tracking-[-0.03em] font-semibold">
          {title}
        </h3>
        <p className="font-inter text-base lg:text-[18px] leading-relaxed font-normal tracking-[-0.03em] text-gray-600 max-w-md">
          {subtitle}
        </p>
      </div>
    );
  }

  if (layout === "custom") {
    return (
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
        <div className="text-center lg:text-left basis-[60%]">
          <h3 className="font-manrope font-semibold text-[30px] sm:text-[32px] lg:text-[36px] leading-[38px] lg:leading-[46px] tracking-[-0.03em] text-gray-900">
            {title}
          </h3>
        </div>
        <div className="font-inter text-[18px] sm:text-[18px] md:text-[18px] leading-[24px] sm:leading-[26px] md:leading-[28px] tracking-[-0.03em] font-normal text-gray-600 text-center lg:text-left basis-[40%]">
          {subtitle}
        </div>
      </div>
    );
  }

  // default center layout
  return (
    <div className="text-center mb-8">
      <h3 className="font-manrope mb-4 text-[30px] sm:text-[32px] lg:text-[36px] leading-[32px] lg:leading-[46px] tracking-[-0.03em] font-semibold">
        {title}
      </h3>
      <p className="font-inter text-[18px] sm:text-[18px] md:text-[18px] leading-[24px] sm:leading-[26px] md:leading-[28px] tracking-[-0.03em] font-normal text-gray-600">
        {subtitle}
      </p>
    </div>
  );
}
