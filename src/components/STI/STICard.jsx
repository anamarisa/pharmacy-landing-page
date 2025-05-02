import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { animationStyles, lottieAnimations } from "../../data/animationConfig";
import { categoryDetails } from "../../data/categoryDetails";

export default function STICard({
  category,
  isFlipped,
  isHovered,
  onFlip,
  onHover,
  onSeeMore,
}) {
  const animationStyle = animationStyles[category.name];

  return (
    <div
      className="relative aspect-square perspective cursor-pointer"
      onClick={() => onFlip(category.name)}
      onMouseEnter={() => onHover(category.name, true)}
      onMouseLeave={() => onHover(category.name, false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d transform ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div
          className={`absolute inset-0 backface-hidden rounded-xl flex flex-col justify-between p-4 overflow-hidden ${
            isHovered ? animationStyle?.bgGradient : "bg-[#f3f4f7]"
          }`}
        >
          <h4
            className={`text-[16px] md:text-lg font-manrope font-semibold leading-[32px] tracking-[-0.02em] ${
              isHovered ? "text-white" : "text-gray-800"
            }`}
          >
            {category.name}
          </h4>

          <div className="flex-1 flex items-center justify-center ">
            {isHovered ? (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3">
                <Player
                  autoplay
                  loop
                  src={lottieAnimations[category.name]}
                  style={{
                    width: animationStyle?.size?.width || "190px",
                    height: animationStyle?.size?.height || "190px",
                  }}
                />
              </div>
            ) : (
              <img
                src={category.image}
                alt={category.name}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                }}
              />
            )}
          </div>

          {!isHovered && (
            <div className="flex justify-end p-2">
              <span className="text-[16px] leading-[24px] font-inter tracking-[-0.02em] font-medium text-neutral">
                See More
              </span>
            </div>
          )}
        </div>

        {/* Back Side */}
        <div className="absolute bg-gradient-to-r from-[#475569] to-[#334155] inset-0 backface-hidden rotate-y-180 rounded-xl flex flex-col justify-between p-4 overflow-hidden">
          <h4 className="text-[16px] p-2 md:text-lg font-manrope font-semibold leading-[32px] tracking-[-0.02em] text-white">
            {category.name}
          </h4>

          {/* Description */}
          <div className="flex-1 flex items-center justify-center">
            <p className="font-inter px-2 line-clamp-3 text-white text-[16px] tracking-[-0.01em] leading-[22px] text-left">
              {categoryDetails[category.name]?.description}
            </p>
          </div>

          <div className="flex justify-end">
            <button
              className="mt-2 font-inter rounded-md text-white p-2 hover:bg-white hover:text-black text-[16px] tracking-[-0.02em] leading-[22px] transition"
              onClick={(e) => {
                e.stopPropagation();
                onSeeMore(category.name, e);
              }}
            >
              Expand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
