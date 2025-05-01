import React from "react";
import washingtonTimes from "../assets/images/media/washington.svg";
import forbes from "../assets/images/media/forbes.svg";
import success from "../assets/images/media/success.svg";
import usaToday from "../assets/images/media/usa.svg";

export default function MediaLogosSection() {
  const mediaLogos = [
    { src: washingtonTimes, alt: "The Washington Times" },
    { src: forbes, alt: "Forbes" },
    { src: success, alt: "Success" },
    { src: usaToday, alt: "USA TODAY" },
  ];

  return (
    <section className="bg-ruby px-5 py-8 h-max-[164px] mt-[232px]">
      <div className="flex flex-wrap justify-center items-center gap-x-[50px] lg:gap-x-[50px] gap-y-[24px]">
        {mediaLogos.map((media, index) => (
          <div
            key={index}
            className="w-[140px] lg:w-[160px] h-[80px] flex items-center justify-center"
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
