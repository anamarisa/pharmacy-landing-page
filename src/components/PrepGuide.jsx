import consultIcon from "../assets/icons/plus.png";
import prescribedIcon from "../assets/icons/pill.png";
import routineIcon from "../assets/icons/stickman.png";
import safeHabitsIcon from "../assets/icons/calendar.png";
import followupsIcon from "../assets/icons/check.png";
import storeIcon from "../assets/icons/hospital.png";

export default function PrepGuide() {
  const stepIcons = [
    { icon: consultIcon, alt: "Consultation" },
    { icon: prescribedIcon, alt: "Prescription" },
    { icon: routineIcon, alt: "Daily routine" },
    { icon: safeHabitsIcon, alt: "Safe habits" },
    { icon: followupsIcon, alt: "Medical followup" },
    { icon: storeIcon, alt: "Medication storage" },
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
    <section className="p-6 mx-auto text-center my-30 max-w-7xl">
      <h3 className="font-manrope mb-4 text-[36px] leading-[46px] tracking-[-0.03em] font-semibold">
        Your Simple Guide to Staying Protected
      </h3>
      <p className="font-inter text-[18px] leading-[28px] font-normal tracking-[-0.03em] text-gray-600">
        PrEP is a powerful tool against HIV. Follow these six{" "}
        <span>
          <br /> steps for better health.
        </span>
      </p>

      <div className="w-full grid md:grid-cols-3 gap-4 mt-8">
        {steps.map(([title, desc], i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-2xl transition-all duration-[250ms] ease-out hover:bg-gradient-to-b from-[#7C3AED] to-[#2E1065] hover:text-white cursor-pointer group hover:shadow-xl"
          >
            <div className="flex justify-center mb-4">
              <img
                src={stepIcons[i].icon}
                alt={`${title} icon`}
                className="h-[48px] w-[58px] object-contain transition duration-[250ms] ease-out group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <h4 className="font-inter font-semibold text-neutral text-[24px] leading-[32px] tracking-[-0.02em] mb-2 group-hover:text-white transition-colors duration-[250ms] ease-out">
              {title}
            </h4>
            <p className="font-inter font-normal text-gray-500 text-[16px] leading-[24px] tracking-[-0.02em] group-hover:text-white transition-colors duration-[250ms] ease-out">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
