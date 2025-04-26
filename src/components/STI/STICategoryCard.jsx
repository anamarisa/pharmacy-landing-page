// components/STICategoryCard.jsx
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

export default function STICategoryCard({
  category,
  isActive,
  isHovered,
  onClick,
  onMouseEnter,
  onMouseLeave,
  lottieAnimations,
  animationStyles,
}) {
  const animationStyle = animationStyles[category.name];

  return (
    <div
      key={category.name}
      className={`
        relative w-[236px] h-[236px] rounded-xl 
        flex flex-col justify-between cursor-pointer 
        transition-colors duration-200
        ${
          isActive && animationStyle?.bgGradient
            ? animationStyle.bgGradient + " text-white"
            : "bg-[#f3f4f7]"
        }
      `}
      onClick={() => onClick(category.name)}
      onMouseEnter={() => onMouseEnter(category.name)}
      onMouseLeave={() => onMouseLeave(null)}
    >
      {/* Card Header */}
      <div className="flex justify-between items-start p-6">
        <h4
          className={`text-lg font-manrope font-semibold leading-[32px] tracking-[-0.02em] capitalize ${
            isActive ? "text-white" : "text-gray-800"
          }`}
        >
          {category.name}
        </h4>
      </div>

      {/* Image / Animation */}
      <div
        className={`flex-1 flex items-center justify-center px-4 relative ${
          isActive ? "overflow-visible" : "overflow-hidden"
        }`}
      >
        {isActive && lottieAnimations[category.name] ? (
          <Player
            autoplay
            loop
            src={lottieAnimations[category.name]}
            style={{
              position: "absolute",
              top: "10%",
              left: "50%",
              transform: animationStyle?.transform,
              width: animationStyle?.size?.width || "190px",
              height: animationStyle?.size?.height || "190px",
            }}
          />
        ) : (
          <img
            src={category.image}
            alt={category.name}
            style={{
              width: animationStyle?.imageSize?.width || "100px",
              height: animationStyle?.imageSize?.height || "100px",
              position: "absolute",
              top: animationStyle?.imageTop || "0%",
              left: animationStyle?.imageLeft || "25%",
              objectFit: "contain",
            }}
            loading="lazy"
          />
        )}
      </div>

      {/* See More */}
      {!isActive && (
        <div className="flex justify-end p-6">
          <span className="text-[16px] leading-[1.25] font-inter tracking-[-0.02em] font-medium text-neutral">
            See more
          </span>
        </div>
      )}
    </div>
  );
}
