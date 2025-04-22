import React from "react";
import Header from "../components/Header";
import Footer from "./Footer";

import prepIcon from "../assets/icons/prep-icon.png";
import nrtisIcon from "../assets/icons/nrtis.png";
import nnrtisIcon from "../assets/icons/nnrtis.png";
import pisIcon from "../assets/icons/pis.png";
import instisIcon from "../assets/icons/instis.png";
import bgPrep from "../assets/images/bg-images/bg-prep.png";
import hivAnimation from "../assets/images/hiv-animation.gif";

export default function PrepPage() {
  const symptoms = [
    {
      stage: "Acute Stage",
      description:
        "Fever, chills, swollen lymph nodes, rash, sore throat, muscle aches, and fatigue.",
    },
    {
      stage: "Chronic Stage",
      description:
        "Often asymptomatic, but may include persistent swelling of lymph nodes and mild infections.",
    },
    {
      stage: "Advanced Stage (AIDS)",
      description:
        "Rapid weight loss, prolonged fever, night sweats, chronic diarrhea, recurring infections, and extreme fatigue.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 w-full">
        {/* PrEP Section */}
        <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[400px]">
          <img 
            src={bgPrep} 
            alt="PrEP" 
            className="w-full h-full object-cover" 
          />
          {/* Overlay transparan */}
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-4xl sm:text-5xl font-bold tracking-tight drop-shadow-lg">
              PrEP
            </h2>
          </div>
        </div>

        {/* PEP Section */}
        <div className="bg-gradient-to-r from-gray-400 via-gray-200 to-white flex items-center justify-center h-[300px] lg:h-[400px]">
          <h2 className="text-gray-800 text-4xl sm:text-5xl font-bold tracking-tight">
            PEP
          </h2>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-[1024px] mx-auto py-8 md:py-10 px-4 sm:px-6 lg:px-8">
        {/* SYMPTOMS */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-10">
          {/* Left Content */}
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-dark-violet uppercase mb-2">
              SYMPTOMS
            </h3>
            <h3 className="font-manrope font-bold text-2xl sm:text-3xl md:text-4xl leading-[1.2] tracking-tight mb-3 md:mb-4">
              Recognizing Signs <br className="hidden sm:block" />
              Symptoms To Look Out For
            </h3>
            <p className="font-inter text-base md:text-lg font-light leading-relaxed text-neutral/950 max-w-[502px]">
              If someone thinks they have fever cough etc, certain symptoms that
              basically only in HIV positive patients, out of 10 symptoms I have
              5, then we want to put text in red that says we highly recommend
              that you visit an ER as soon as possible.
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
            From preventative care to restorative dentistry, our team is
            dedicated to providing the best possible dental care for you.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* medication cards */}
            <div className="lg:col-span-2 flex flex-col divide-y divide-gray-200">
              <div className="py-3 md:py-4">
                <MedicationCard
                  iconSrc={nrtisIcon}
                  name="NRTIs"
                  description="These drugs block HIV from copying its genetic material, preventing the virus from multiplying. Common NRTIs include Tenofovir and Emtricitabine."
                />
              </div>
              <div className="py-3 md:py-4">
                <MedicationCard
                  iconSrc={nnrtisIcon}
                  name="NNRTIs"
                  description="NNRTIs stop HIV from replicating by binding directly to the virus's reverse transcriptase enzyme. Examples include Efavirenz and Rilpivirine."
                />
              </div>
              <div className="py-3 md:py-4">
                <MedicationCard
                  iconSrc={pisIcon}
                  name="Protease Inhibitors (PIs)"
                  description="These medications prevent HIV from maturing by blocking protease. Common PIs are Darunavir and Atazanavir."
                />
              </div>
              <div className="py-3 md:py-4">
                <MedicationCard
                  iconSrc={instisIcon}
                  name="Integrase Inhibitors (INSTIs)"
                  description="This class stops HIV from integrating its genetic material into DNA, preventing infection spread. Examples are Dolutegravir and Raltegravir."
                />
              </div>
            </div>

            {/* Right side: info panel */}
            <div className="border border-gray-200 p-4 md:p-6 rounded-lg flex flex-col overflow-hidden">
              <h4 className="font-inter text-xl md:text-2xl font-semibold text-black mb-3">
                Treatment
              </h4>
              <p className="font-inter text-base font-light leading-relaxed text-gray-700">
                HIV isn't curable, but ART can make viral levels undetectable,
                preventing sexual transmission (U=U). Early treatment and daily
                adherence support a healthy immune system and prevent
                complications.
              </p>
              <a
                href="#"
                className="text-dark-violet text-base font-semibold mt-4 inline-block underline underline-offset-5"
              >
                Start Now
              </a>
              <img
                src={hivAnimation}
                alt=""
                className="w-[180px] md:w-[200px] mx-auto mt-4 object-cover"
              />
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
          <p className="font-inter text-base md:text-lg font-light leading-relaxed text-neutral/950 max-w-2xl mb-6 md:mb-8">
            HIV medications may cause side effects like nausea and fatigue.{" "}
            <br className="hidden md:block" />
            Regular checkups help monitor long-term concerns.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <SideEffectCard
              title="Gastrointestinal Issues"
              description="Nausea, vomiting, and diarrhea are common, especially when starting a new treatment regimen. These can be temporary as the body adjusts to the medications."
            />
            <SideEffectCard
              title="Headaches and Dizziness"
              description="Some people experience headaches or dizziness, particularly when beginning ART. These side effects tend to lessen as the body becomes accustomed to the treatment."
            />
            <SideEffectCard
              title="Fatigue"
              description="Feeling tired or low energy is a common effect, particularly in the early stages of treatment. It's important to rest and stay hydrated to help manage this."
            />
            <SideEffectCard
              title="Insomnia"
              description="Difficulty falling or staying asleep may occur, especially during the initial phase of treatment. Establishing a relaxing bedtime routine can help improve sleep quality."
            />
            <SideEffectCard
              title="Rash"
              description="Skin rash or irritation can develop as a side effect of certain medications. It is advisable to consult a healthcare provider if a rash persists or becomes severe."
            />
            <SideEffectCard
              title="Mood Changes"
              description="Changes in mood, such as mood swings or increased anxiety, might be experienced while undergoing treatment. Engaging in stress-relieving activities can help alleviate these symptoms."
            />
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
    <img src={prepIcon} alt="prep icon" className="w-8 h-8 md:w-10 md:h-10 mt-1" />
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
      <img src={iconSrc} alt={name} className="w-12 h-12 md:w-16 md:h-16 object-contain mt-1" />
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
    <img src={prepIcon} alt="prep icon" className="w-8 h-8 md:w-10 md:h-10 mb-3" />
    <h4 className="font-inter font-medium text-lg md:text-xl leading-snug tracking-tight text-black mb-2">
      {title}
    </h4>
    <p className="font-inter text-sm md:text-base font-light leading-relaxed text-neutral/950">
      {description}
    </p>
  </div>
);