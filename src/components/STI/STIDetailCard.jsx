import React from "react";
import STIDetailHeader from "./STIDetailHeader";
import STIDetailLeft from "./STIDetailLeft";
import STIDetailTable from "./STIDetailTable";

export default function STIDetailCard({ selected, categoryDetails }) {
  if (!selected || !categoryDetails[selected]) return null;

  const detail = categoryDetails[selected];

  return (
    <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 bg-white-neutral rounded-lg sm:rounded-xl shadow-sm transition-shadow px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 lg:py-8 flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
      <STIDetailHeader />

      <div className="flex flex-col lg:flex-row justify-between gap-4 sm:gap-5 md:gap-6">
        <STIDetailLeft
          title={selected}
          description={detail.description}
          className="w-full lg:w-[48%]"
        />
        <STIDetailTable
          detail={detail}
          className="w-full lg:w-[48%] mt-4 lg:mt-0"
        />
      </div>
    </div>
  );
}
