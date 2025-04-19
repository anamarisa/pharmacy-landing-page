import React, { useState } from "react";
import STIDetailCard from "./STIDetailCard";
import { categoryDetails, categories } from "../../data/categoryDetails";

export default function STIAwareness() {
  const [selected, setSelected] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);

  const handleSelect = (category) => {
    if (selected === category) {
      setSelected(null);
      setFadeIn(false);
    } else {
      setFadeIn(false);
      setTimeout(() => {
        setSelected(category);
        setFadeIn(true);
      }, 50); // kasih jeda kecil supaya transition bisa jalan
    }
  };

  return (
    <section className="px-[64px] py-6">
      <div className="flex justify-between items-center mb-8">
        <h3 className="font-manrope text-[36px] leading-[46px] tracking-[-0.03em] text-xl font-semibold">
          Understanding the Risks,{" "}
          <span>
            <br />
            Taking the Right Steps
          </span>
        </h3>
        <p className="font-inter text-[18px] leading-[28px] font-normal tracking-[-0.03em] text-gray-600">
          Educate yourself about common STIs to{" "}
          <span>
            <br />
            stay safe and make informed decisions.
          </span>
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="p-2 text-center cursor-pointer"
            onClick={() => handleSelect(category.name)}
          >
            <div className="aspect-square flex items-center justify-center mb-2">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className={`transition-opacity duration-1000 ease-out ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <STIDetailCard
            selected={selected}
            categoryDetails={categoryDetails}
          />
        </div>
      )}
    </section>
  );
}
