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
    description: "F* STI is in all 50 states. The availability and ease of access for users to obtain services or products, including geographical reach and inclusivity for diverse demographics.",
    icon: Icon1
  },
  {
    feature: "Privacy",
    description: "Confidential & Discreet—Your Privacy Matters. We ensure confidentiality and prevent unauthorized access to the patient's personal information.",
    icon: Icon2
  },
  {
    feature: "Cost",
    description: "99% of our patients pay as low as $0 with insurance. We accept most commercial insurances. For uninsured patients, we can assist with enrollment in the patient assistance program that can significantly lower the payments.",
    icon: Icon3
  },
  {
    feature: "Convenient",
    description: "No video or in-person visits needed. Our patients prefer convenience and minimal appointments. With ease, you can obtain a prescription entirely online.",
    icon: Icon4
  },
  {
    feature: "Medication Delivery",
    description: "Medication delivered at no cost for insured patients. We deliver your medications in discreet, unmarked packaging for your privacy.",
    icon: Icon5
  },
  {
    feature: "STI Experts",
    description: "One-stop shop for everything STI-related. From education and testing to treatment and medication delivery, we provide comprehensive care every step of the way.",
    icon: Icon6
  },
];

export default function ComparisonTable() {
  return (
    <section className="px-4 pt-12 mb-40 text-center mx-auto max-w-[1100px]">
      {/* Section Heading */}
      <div className="mb-4">
        <h3 className="text-3xl md:text-4xl font-bold mb-3 flex items-center justify-center gap-2">
          <img src={FSTILogo} alt="F*STI" className="h-8" />
          <span className="font-manrope font-semibold text-[36px] leading-[46px] tracking-[-0.03em]">
            vs. Others: What Makes Us Different
          </span>
        </h3>
        <p className="font-inter text-[18px] leading-[28px] tracking-[-0.03em] font-normal text-gray-600 max-w-2xl mx-auto">
          Compare the features and benefits of F* STI against other providers,
          showcasing our commitment to fast, reliable, and user-friendly
          services.
        </p>
      </div>

      {/* CTA Button */}
      <div className="text-center mx-auto inline-block mb-10">
        <Button>Get Started</Button>
      </div>

      {/* Comparison Table */}
      <div className="border border-gray-300 rounded-xl overflow-hidden shadow-sm">
        {/* Header Row */}
        <div className="flex bg-gray-100 font-inter font-medium text-[24px] leading-[32px] tracking-[-0.04em]">
          <div className="w-[623px] p-4 flex items-center justify-center">
            Features
          </div>
          <div className="w-[209.5px] p-4 flex items-center justify-center">
            F* STI
          </div>
          <div className="w-[209.5px] p-4 flex items-center justify-center">
            Others
          </div>
        </div>

        {/* Data Rows */}
        {features.map((item, index) => (
          <div key={index} className="flex border-t border-gray-300">
            {/* Feature Column */}
            <div className="w-[623px] p-4 text-left bg-white flex items-start pl-6">
              <div className="flex items-start gap-4 w-full">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={item.feature}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{item.feature}</h4>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </div>
              </div>
            </div>

            {/* F*STI Column */}
            <div className="w-[209.5px] p-4 bg-white flex items-center justify-center">
              <div className="w-6 h-6 flex items-center justify-center">
                <img src={done} alt="Available in F* STI" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Others Column */}
            <div className="w-[209.5px] p-4 bg-white flex items-center justify-center">
              <div className="w-6 h-6 flex items-center justify-center">
                <img src={cancel} alt="Not available in others" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}