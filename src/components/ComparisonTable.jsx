import React from "react";
import Button from "./common/Button";
import FSTILogo from "../assets/F_STI.png";
import cancel from "../assets/cancel.png";
import done from "../assets/done.png";
import Icon1 from "../assets/table-icons/icon1.png";
import Icon2 from "../assets/table-icons/icon2.png";
import Icon3 from "../assets/table-icons/icon3.png";
import Icon4 from "../assets/table-icons/icon4.png";
import Icon5 from "../assets/table-icons/icon5.png";
import Icon6 from "../assets/table-icons/icon6.png";

const features = [
  {
    feature: "Accessibility",
    description: (
      <>
        <strong>F* STI is in all 50 states.</strong> The availability and ease
        of access for users to obtain services or products, including
        geographical reach and inclusivity for diverse demographics.
      </>
    ),
    icon: Icon1,
  },
  {
    feature: "Privacy",
    description: (
      <>
        <strong>Confidential & Discreet—Your Privacy Matters.</strong> We ensure
        confidentiality and prevent unauthorized access to the patient's
        personal information.
      </>
    ),
    icon: Icon2,
  },
  {
    feature: "Cost",
    description: (
      <>
        <strong>99% of our patients pay as low as $0 with insurance.</strong> We
        accept most commercial insurances. For uninsured patients, we can assist
        with enrollment in the patient assistance program that can significantly
        lower the payments.
      </>
    ),
    icon: Icon3,
  },
  {
    feature: "Convenient",
    description: (
      <>
        <strong>No video or in-person visits needed.</strong> Our patients
        prefer convenience and minimal appointments. With ease, you can obtain a
        prescription entirely online.
      </>
    ),
    icon: Icon4,
  },
  {
    feature: "Medication Delivery",
    description: (
      <>
        <strong>Medication delivered at no cost for insured patients.</strong>{" "}
        We deliver your medications in discreet, unmarked packaging for your
        privacy.
      </>
    ),
    icon: Icon5,
  },
  {
    feature: "STI Experts",
    description: (
      <>
        <strong>One-stop shop for everything STI-related.</strong> From
        education and testing to treatment and medication delivery, we provide
        comprehensive care every step of the way.
      </>
    ),
    icon: Icon6,
  },
];

export default function ComparisonTable() {
  return (
    <section className="px-5 py-8 lg:px-[64px] mt-30 md:mt-[152px] mx-auto text-center">
      {/* Section Heading */}
      <div className="mb-4">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
          <img src={FSTILogo} alt="F*STI" className="h-8 sm:h-10" />
          <span className="font-manrope font-semibold text-[30px] sm:text-[32px] lg:text-[36px] leading-[32px] sm:leading-[38px] md:leading-[46px] tracking-[-0.03em]">
            vs. Others: What Makes Us Different
          </span>
        </h3>
        <p className="font-inter text-[16px] leading-[24px] sm:leading-[26px] md:leading-[28px] tracking-[-0.03em] font-normal text-gray-600 mx-auto max-w-2xl text-center">
          Compare the features and benefits of F* STI against other providers,
          showcasing our commitment to fast, reliable, and user-friendly
          services.
        </p>
      </div>

      {/* CTA Button */}
      <div className="text-center mx-auto inline-block mb-[54px]">
        <Button>Get Started</Button>
      </div>

      {/* Table Container for responsiveness */}
      <div className="overflow-x-auto max-w-[1090px] mx-auto">
        <div className="w-auto lg:min-w-[768px] border border-gray-300 rounded-xl overflow-hidden shadow-sm">
          {/* Header Row */}
          <div className="flex bg-gray-100 font-inter font-medium text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] tracking-[-0.04em]">
            <div className="basis-1/2 md:flex-[2] p-4 flex items-center justify-start md:justify-center">
              Features
            </div>
            <div className="basis-1/4 md:flex-1 p-4 flex items-center justify-center">
              F* STI
            </div>
            <div className="basis-1/4 md:flex-1 p-4 flex items-center justify-center">
              Others
            </div>
          </div>

          {/* Data Rows */}
          {features.map((item, index) => (
            <div
              key={index}
              className="flex border-t border-gray-300 items-center"
            >
              {/* Feature Column */}
              <div className="basis-1/2 md:flex-[2] p-4 text-left bg-white flex items-start">
                <div className="flex items-center md:items-start gap-4 w-full">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt={item.feature}
                      className="w-8 h-8 md:w-10 md:h-10 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[14px] md:text-[20px] leading-[28px] md:leading-[28px] font-semibold text-gray-900">
                      {item.feature}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1 hidden md:block">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* F*STI Column */}
              <div className="basis-1/4 md:flex-1 p-4 bg-white flex items-center justify-center lg:min-h-[130px]">
                <img
                  src={done}
                  alt="Available in F* STI"
                  className="w-6 h-6 object-contain"
                />
              </div>

              {/* Others Column */}
              <div className="basis-1/4 md:flex-1 p-4 bg-white flex items-center justify-center lg:min-h-[130px]">
                <img
                  src={cancel}
                  alt="Not available in others"
                  className="w-6 h-6 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
