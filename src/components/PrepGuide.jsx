import React from "react";
import consultIcon from "../assets/icons/prep/plus.svg";
import prescribedIcon from "../assets/icons/prep/pill.svg";
import routineIcon from "../assets/icons/prep/stickman.svg";
import safeHabitsIcon from "../assets/icons/prep/calendar.svg";
import storeIcon from "../assets/icons/prep/check.svg";
import hospitalIcon from "../assets/icons/prep/hospital.svg";
import SectionHeader from "./common/SectionHeader";

export default function PrepGuide() {
  const stepIcons = [
    { icon: hospitalIcon, alt: "Hospital" },
    { icon: prescribedIcon, alt: "Prescription" },
    { icon: safeHabitsIcon, alt: "Safe habits" },
    { icon: routineIcon, alt: "Daily routine" },
    { icon: consultIcon, alt: "Consultation" },
    { icon: storeIcon, alt: "Store safely" },
  ];

  const steps = [
    [
      "Consult a Healthcare Professional",
      "Speak with a healthcare provider to see if PrEP is right for you. They will evaluate your health and provide a prescription if needed.",
    ],
    [
      "Take as Prescribed",
      "Follow your doctor’s instructions carefully. Usually, PrEP is taken as one pill daily, at the same time each day, to maintain its effectiveness.",
    ],
    [
      "Build a Routine",
      "Take PrEP daily at the same time. Use reminders or a pill organizer. If you miss a dose, take it as soon as possible.",
    ],
    [
      "Practice Safe Habits",
      "It’s most effective when combined with other protective measures like using condoms and undergoing regular STI screenings.",
    ],
    [
      "Attend Regular Follow-Ups",
      "Schedule follow-up visits with your doctor every three months to monitor your health. These visits may include tests and check-ups.",
    ],
    [
      "Store Safely",
      "Keep PrEP in a cool, dry place, away from direct sunlight or moisture. Always store it out of reach of children for safety.",
    ],
  ];

  return (
    <section className="px-5 lg:px-[64px] mt-[152px] mx-auto text-center ">
      <SectionHeader
        title="Your Simple Guide to Staying Protected"
        subtitle={
          <>
            PrEP is a powerful tool against HIV. Follow these six{" "}
            <br className="hidden lg:block md:block" /> steps for better health.
          </>
        }
      />

      <div className="w-full grid md:grid-cols-3 gap-4 mt-8">
        {steps.map(([title, desc], i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-2xl transform transition-all duration-500 ease-in-out hover:scale-[1.02] hover:bg-gradient-to-b from-[#7C3AED] to-[#2E1065] hover:text-white cursor-pointer group hover:shadow-lg"
          >
            <div className="flex justify-center mb-4">
              <img
                src={stepIcons[i].icon}
                alt={`${title} icon`}
                className="w-[40px] h-[50px] lg:h-[48px] lg:w-[58px] object-contain transition duration-[250ms] ease-out group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <h4 className="font-inter font-semibold text-neutral text-[20px] lg:text-[24px] leading-[28px] lg:leading-[32px] tracking-[-0.02em] mb-2 group-hover:text-white transition-colors duration-[250ms] ease-out">
              {title}
            </h4>
            <p className="font-inter font-normal text-gray-500 text-[15px] leading-[20px] lg:text-[16px] lg:leading-[24px] tracking-[-0.02em] group-hover:text-white transition-colors duration-[250ms] ease-out">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
