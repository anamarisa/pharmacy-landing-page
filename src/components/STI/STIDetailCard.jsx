import React from "react";
import STIDetailHeader from "./STIDetailHeader";
import STIDetailLeft from "./STIDetailLeft";
import STIDetailTable from "./STIDetailTable";

export default function STIDetailCard({ selected, categoryDetails }) {
  if (!selected || !categoryDetails[selected]) return null;

  const detail = categoryDetails[selected];

  return (
    <div className="mt-6 sm:mt-10 bg-white-neutral rounded-xl shadow-sm px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 flex flex-col gap-4 sm:gap-6">
      <STIDetailHeader />

      <div className="flex flex-col lg:flex-row justify-between gap-4 sm:gap-6">
        <STIDetailLeft title={selected} description={detail.description} />
        <STIDetailTable detail={detail} />
      </div>
    </div>
  );
}