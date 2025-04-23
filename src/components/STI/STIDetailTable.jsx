import React from "react";

export default function STIDetailTable({ detail, className }) {
  const rows = [
    { label: "Symptoms", value: detail.symptoms },
    { label: "Medications", value: detail.medication },
    { label: "Treatment", value: detail.treatment },
    { label: "Side Effects", value: detail.sideEffects },
  ];

  return (
    <div className={`font-inter ${className}`}>
      <div className="w-full border border-gray-200 rounded-lg sm:rounded-xl overflow-hidden">
        <div className="hidden sm:flex items-center bg-white-neutral font-semibold text-sm px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
          <div className="w-1/3 sm:w-1/4">Category</div>
          <div className="w-2/3 sm:w-3/4">Details</div>
        </div>
        {rows.map((row, index) => (
          <div
            key={row.label}
            className={`flex flex-col sm:flex-row sm:items-center bg-white px-4 sm:px-6 py-3 text-sm ${
              index !== rows.length - 1 ? "border-b border-gray-200" : ""
            }`}
          >
            <div className="w-full sm:w-1/4 font-semibold mb-1 sm:mb-0 text-sm sm:text-base">
              {row.label}
            </div>
            <div className="w-full sm:w-3/4 text-gray-700 text-sm sm:text-base">
              {row.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}