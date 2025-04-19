import React from "react";

export default function STIDetailTable({ detail }) {
  const rows = [
    { label: "Symptoms", value: detail.symptoms },
    { label: "Medications", value: detail.medication },
    { label: "Treatment", value: detail.treatment },
    { label: "Side Effects", value: detail.sideEffects },
  ];

  return (
    <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0 font-inter">
      <div className="w-full border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex items-center text-[16px] bg-white-neutral font-semibold text-sm px-6 py-4 border-b border-gray-200">
          <div className="w-1/4">Category</div>
          <div className="w-2/3">Details</div>
        </div>
        {rows.map((row, index) => (
          <div
            key={row.label}
            className={`flex bg-white items-center text-[16px] px-6 py-3 text-sm ${
              index !== rows.length - 1 ? "border-b border-gray-200" : ""
            }`}
          >
            <div className="w-1/4 font-semibold">{row.label}</div>
            <div className="w-2/3 text-gray-700">{row.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
