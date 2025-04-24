import React from "react";
import washingtonTimes from "../assets/logo/washington.png";
import forbes from "../assets/logo/forbes.png";
import success from "../assets/logo/success.png";
import usaToday from "../assets/logo/usa.png";

export default function MediaLogosSection() {
  const mediaLogos = [
    { src: washingtonTimes, alt: "The Washington Times" },
    { src: forbes, alt: "Forbes" },
    { src: success, alt: "Success" },
    { src: usaToday, alt: "USA TODAY" },
  ];

  return (
    <section className="bg-light-orange px-5 py-8 lg:p-[64px] mt-20 lg:mt-[152px]">
      <div className="flex flex-wrap justify-center items-center gap-x-[50px] gap-y-[24px]">
        {mediaLogos.map((media, index) => (
          <div
            key={index}
            className="w-[160px] h-[80px] flex items-center justify-center"
          >
            <img
              src={media.src}
              alt={media.alt}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
