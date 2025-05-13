import React from "react";
import getTested from "../assets/images/get-tested/image.webp";
import Lightbulb from "../assets/images/get-tested/Lightbulb.svg";
import ExclamationMark from "../assets/images/get-tested/ExclamationMark.svg";
import Pill from "../assets/images/get-tested/Pill.svg";
import Bandaids from "../assets/images/get-tested/Bandaids.svg";

export default function GetTestedSection() {
  return (
    <section className="bg-pale-red px-6 py-25 mt-[232px] lg:px-16 flex flex-col lg:flex-row items-center gap-10">
      {/* Left: Image */}
      <div className="w-full lg:w-1/2">
        <img
          src={getTested}
          alt="Happy people at event"
          className="rounded-2xl w-full object-cover"
        />
      </div>

      {/* Right: Text Content */}
      <div className="w-full lg:w-1/2">
        <h2 className="mb-2 font-manrope font-semibold text-4xl leading-11.5 tracking-[-0.03em] text-gray-900">
          Why You Must Get Tested –<br />
          No Shortcuts for Your Health
        </h2>
        <p className="mb-6 font-inter text-lg leading-7 tracking-[-0.03em] text-gray-700">
          Many avoid going to the clinic, but delaying your test could cost more
          than just time — it could cost your health. Here’s why you need to
          take action.
        </p>

        {/* Info Cards */}
        <div className="space-y-4">
          {/* <InfoCard
            icon={<img src={Lightbulb} alt="" className="w-8 h-8" />}
            title="Why Are People Dropping Off?"
            content="Many users stop the process because they don’t want to go in person. But a lab test is mandatory — it’s not optional."
          /> */}
          <InfoCard
            icon={<img src={ExclamationMark} alt="" className="w-8 h-8" />}
            title="Why This Matters"
            content="Delaying testing may seem harmless now, but it can lead to worse health conditions and much higher costs later on."
          />
          <InfoCard
            icon={<img src={Pill} alt="" className="w-8 h-8" />}
            title="If You’re Positive, Then What?"
            content="Treatment will require regular medication — it gets expensive, and unfortunately, there’s no cure or going back."
          />
          <InfoCard
            icon={<img src={Bandaids} alt="" className="w-8 h-8" />}
            title="What You Need to Do"
            content="Visit a clinic and get tested. It’s a simple but powerful step to take control of your health."
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, content }) {
  return (
    <div className="bg-ruby text-white rounded-xl px-6 py-4 shadow-md space-y-1">
      {/* Icon + Title (horizontal) */}
      <div className="flex items-center space-x-2">
        <div>{icon}</div>
        <h3 className="font-inter text-xl leading-7 tracking-[-0.03em] font-medium">
          {title}
        </h3>
      </div>

      {/* Content paragraph */}
      <p className="font-inter text-[16px] leading-6 tracking-[-0.02em] font-light">
        {content}
      </p>
    </div>
  );
}
