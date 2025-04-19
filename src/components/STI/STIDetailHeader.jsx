import React from "react";

export default function STIDetailHeader() {
  return (
    <div className="font-manrope flex justify-between items-center">
      <h4 className="text-violet font-semibold text-[30px] leading-[36px] tracking-[-0.03em]">
        F* PrEP
      </h4>
      <button className="text-violet font-semibold border border-violet px-[18px] py-[6px] rounded-md text-[16px] leading-[24px] tracking-[-0.02em] hover:bg-purple-50">
        See More
      </button>
    </div>
  );
}
