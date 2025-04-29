import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useParams } from "react-router-dom";
import { virusData } from "../../src/data/virusData";
import Header from "../components/Header";
import Footer from "./Footer";

import prepIcon from "../assets/icons/prep-icon.svg";
import bgPrep from "../assets/images/bg-images/bg-prep.webp";

export default function PrepPage() {
  const { categoryName } = useParams();

  const normalizedCategoryName = categoryName
    .toLowerCase()
    .replace(/\s+/g, "-");

  // Find the virus data by matching the normalized name
  const detail = Object.values(virusData).find(
    (virus) => virus.id === normalizedCategoryName
  );

  if (!detail) {
    return <p className="text-center mt-10">Category not found.</p>;
  }

  const { symptoms, medications, sideEffects, medicationSummary } = detail;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[400px]">
        <img src={bgPrep} alt="PrEP" className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="flex items-center justify-center absolute inset-0">
          <h2 className="text-white text-4xl sm:text-5xl font-bold tracking-tight drop-shadow-lg">
            {detail.name}
          </h2>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-[1024px] mx-auto py-8 md:py-10 px-4 sm:px-6 lg:px-8">
        {/* SYMPTOMS */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-10">
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-dark-violet uppercase mb-2">
              SYMPTOMS
            </h3>
            <h3 className="font-manrope font-bold text-2xl sm:text-3xl md:text-4xl leading-[1.2] tracking-tight mb-3 md:mb-4">
              Recognizing Signs <br className="hidden sm:block" />
              Symptoms To Look Out For
            </h3>
            {/* RECOMMENDATION TEXT */}
            <p className="font-inter text-base md:text-lg font-light leading-relaxed text-neutral/950 max-w-[502px]">
              {detail.recommendation}
            </p>
          </div>

          {/* Right Content */}
          <div className="flex-1 space-y-3 md:space-y-4">
            {symptoms.map((item, idx) => (
              <SymptomCard
                key={idx}
                stage={item.stage}
                description={item.description}
              />
            ))}
          </div>
        </div>

        {/* MEDICATION */}
        <section className="py-8 md:py-10">
          <h3 className="text-sm font-bold text-dark-violet uppercase mb-2">
            Medications
          </h3>
          <h3 className="font-manrope font-bold text-2xl sm:text-3xl md:text-4xl leading-[1.2] tracking-tight mb-3 md:mb-4">
            Controlling The Virus
          </h3>
          <p className="font-inter text-base md:text-lg font-light leading-relaxed text-neutral/950 max-w-3xl mb-6">
            {medicationSummary}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 flex flex-col divide-y divide-gray-200">
              {medications.map((medication) => (
                <div key={medication.name} className="py-3 md:py-4">
                  <MedicationCard
                    iconSrc={medication.iconSrc}
                    name={medication.name}
                    description={medication.description}
                  />
                </div>
              ))}
            </div>

            {/* Right side: info panel */}
            <div className="border border-gray-200 p-4 md:p-6 rounded-lg flex flex-col overflow-hidden">
              <h4 className="font-inter text-xl md:text-2xl font-semibold text-black mb-3">
                Treatment
              </h4>
              <p className="font-inter text-base font-light leading-relaxed text-gray-700">
                {detail.treatmentSummary}
              </p>
              <a
                href="#"
                className="text-dark-violet text-base font-semibold mt-4 inline-block underline underline-offset-5"
              >
                Start Now
              </a>
              <div
                className={`${detail.bgGradient} mt-4 rounded-lg flex items-center justify-center`}
              >
                <Player
                  autoplay
                  loop
                  src={detail.virusIcon}
                  style={{
                    width: "190px",
                    height: "190px",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SIDE EFFECTS */}
        <section className="py-8 md:py-10">
          <h3 className="text-sm font-bold text-[#7B61FF] uppercase mb-2">
            Side Effects
          </h3>
          <h2 className="font-manrope font-bold text-2xl sm:text-3xl md:text-4xl leading-[1.2] tracking-tight mb-3 md:mb-4">
            What To Expect
          </h2>
          <p className="max-w-2xl font-inter text-base md:text-lg font-light leading-relaxed text-neutral/950 mb-6 md:mb-8">
            {detail.sideEffectsSummary}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {sideEffects.map((item, idx) => (
              <SideEffectCard
                key={idx}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Component
const SymptomCard = ({ stage, description }) => (
  <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <img
      src={prepIcon}
      alt="prep icon"
      className="w-8 h-8 md:w-10 md:h-10 mt-1"
    />
    <div>
      <h4 className="font-inter text-lg md:text-xl leading-snug tracking-tight text-black">
        {stage}
      </h4>
      <p className="font-inter text-sm md:text-base font-light leading-relaxed text-gray-600 mt-1">
        {description}
      </p>
    </div>
  </div>
);

const MedicationCard = ({ iconSrc, name, description }) => {
  return (
    <div className="flex items-start gap-3 md:gap-4 py-3 md:py-4">
      <img
        src={iconSrc}
        alt={name}
        className="w-12 h-12 md:w-16 md:h-16 object-contain mt-1"
      />
      <div>
        <h4 className="font-manrope font-semibold text-lg md:text-xl leading-snug tracking-tight text-neutral-900 mb-1">
          {name}
        </h4>
        <p className="font-inter text-sm md:text-base font-light leading-relaxed text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
};

const SideEffectCard = ({ title, description }) => (
  <div className="p-4 md:p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <img
      src={prepIcon}
      alt="prep icon"
      className="w-8 h-8 md:w-10 md:h-10 mb-3"
    />
    <h4 className="font-inter font-medium text-lg md:text-xl leading-snug tracking-tight text-black mb-2">
      {title}
    </h4>
    <p className="font-inter text-sm md:text-base font-light leading-relaxed text-neutral/950">
      {description}
    </p>
  </div>
);
