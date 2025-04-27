import React from "react";
import { Link } from "react-router-dom";

export default function STIDetailHeader({ selected }) {
  return (
    <div className="font-manrope flex justify-between items-start xs:items-center gap-3 sm:gap-4">
      <h4 className="text-violet font-semibold text-2xl sm:text-3xl md:text-[30px] leading-[1.2] tracking-tight">
        F* PrEP
      </h4>
      <Link
        to={`/sti-awareness/${selected.toLowerCase()}`}
        className="text-violet font-semibold border border-violet hover:bg-violet hover:text-white px-4 sm:px-[18px] py-1.5 sm:py-[6px] rounded-lg text-sm sm:text-base leading-normal transition-colors"
      >
        See More
      </Link>
    </div>
  );
}
