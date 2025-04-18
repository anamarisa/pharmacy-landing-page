import React from "react";

export default function RiskItem({ title }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <div className="mt-2 space-y-2">
          <button className="text-sm text-primary hover:underline">See More</button>
          <button className="text-sm text-primary hover:underline block">See More</button>
          <button className="text-sm text-primary hover:underline block">See More</button>
        </div>
      </div>
    );
  }