import React from "react";
import { Link } from "react-router-dom";

export default function STIDetailHeader() {
  return (
    <div className="font-manrope flex flex-col xs:flex-row justify-between items-start xs:items-center gap-3 sm:gap-4">
      <h4 className="text-violet font-semibold text-2xl sm:text-3xl md:text-[30px] leading-[1.2] tracking-tight">
        F* PrEP
      </h4>
      <Link
        to="/prep-page"
        className="text-violet font-semibold border border-violet px-4 sm:px-[18px] py-1.5 sm:py-[6px] rounded-md text-sm sm:text-base leading-normal hover:bg-purple-50 transition-colors"
      >
        See More
      </Link>
    </div>
  );
}
