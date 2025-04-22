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
      stage: "Acute Stage",
      description:
        "Fever, chills, swollen lymph nodes, rash, sore throat, muscle aches, and fatigue.",
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
      <section className="grid grid-cols-1 md:grid-cols-2 w-full">
        {/* PrEP Section */}
        <div className="relative aspect-[3/2] md:aspect-auto md:h-[400px]">
          <img src={bgPrep} alt="PrEP" className="w-full h-full object-cover" />
          {/* Overlay transparan */}
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-[40px] md:text-[48px] font-bold tracking-tight drop-shadow-lg">
              PrEP
            </h2>
          </div>
        </div>

        {/* PEP Section */}
        <div className="bg-gradient-to-r from-gray-400 via-gray-200 to-white flex items-center justify-center h-[300px] md:h-[400px]">
          <h2 className="text-gray-800 text-[40px] md:text-[48px] font-bold tracking-tight">
            PEP
          </h2>
        </div>
      </section>

      {/* Content */}
      <main className=" max-w-[1024px] mx-auto py-10 px-4 sm:px-6">
        {/* SYMPTOMS */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Content */}
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-dark-violet uppercase mb-2">
              SYMPTOMS
            </h3>
            <h3 className="font-manrope font-bold text-[28px] md:text-[36px] leading-[36px] md:leading-[46px] tracking-[-0.02em] mb-2">
              Recognizing Signs <br />
              Symptoms To Look Out For
            </h3>
            <p className="font-inter text-[18px] font-light leading-[28px] tracking-[-0.02em] text-neutral/950 md:text-lg max-w-[502px]">
              If someone thinks they have fever cough etc, certain symptoms that
              basically only in HIV positive patients, out of 10 symptoms I have
              5, then we want to put text in red that says we highly recommend
              that you visit an ER as soon as possible.
            </p>
          </div>

          {/* Right Content */}
          <div className="flex-1 space-y-2">
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
        <section className="py-10">
          <h3 className="text-sm font-bold text-dark-violet uppercase mb-2">
            Medications
          </h3>
          <h3 className="font-manrope font-bold text-[28px] md:text-[36px] leading-[36px] md:leading-[46px] tracking-[-0.02em] mb-2">
            Controlling The Virus
          </h3>
          <p className="font-inter text-[18px] font-light leading-[28px] tracking-[-0.02em] text-neutral/950 md:text-lg max-w-[700px] mb-6">
            From preventative care to restorative dentistry, our team is
            dedicated to providing the best possible dental care for you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* medication cards */}
            <div className="lg:col-span-2 flex flex-col divide-y divide-gray-200">
              <div className="py-1">
                <MedicationCard
                  iconSrc={nrtisIcon}
                  name="NRTIs"
                  description="These drugs block HIV from copying its genetic material, preventing the virus from multiplying. Common NRTIs include Tenofovir and Emtricitabine."
                />
              </div>
              <div className="py-1">
                <MedicationCard
                  iconSrc={nnrtisIcon}
                  name="NNRTIs"
                  description="NNRTIs stop HIV from replicating by binding directly to the virus’s reverse transcriptase enzyme. Examples include Efavirenz and Rilpivirine."
                />
              </div>
              <div className="py-1">
                <MedicationCard
                  iconSrc={pisIcon}
                  name="Protease Inhibitors (PIs)"
                  description="These medications prevent HIV from maturing by blocking protease. Common PIs are Darunavir and Atazanavir."
                />
              </div>
              <div className="py-1">
                <MedicationCard
                  iconSrc={instisIcon}
                  name="Integrase Inhibitors (INSTIs)"
                  description="This class stops HIV from integrating its genetic material into DNA, preventing infection spread. Examples are Dolutegravir and Raltegravir."
                />
              </div>
            </div>

            {/* Right side: info panel */}
            <div className="border border-gray-200 p-4 rounded-lg flex flex-col overflow-hidden">
              <h4 className="font-inter text-[24px] font-semibold text-black mb-2">
                Treatment
              </h4>
              <p className="font-inter text-[16px] font-light leading-[24px] text-gray-700">
                HIV isn't curable, but ART can make viral levels undetectable,
                preventing sexual transmission (U=U). Early treatment and daily
                adherence support a healthy immune system and prevent
                complications.
              </p>
              <a
                href="#"
                className="text-dark-violet text-[16px] font-semibold mt-3 inline-block underline underline-offset-5"
              >
                Start Now
              </a>
              <img
                src={hivAnimation}
                alt=""
                className="w-[200px] mx-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* SIDE EFFECTS */}
        <section className="py-10">
          <h3 className="text-sm font-bold text-[#7B61FF] uppercase mb-2">
            Side Effects
          </h3>
          <h2 className="font-manrope font-bold text-[28px] md:text-[36px] leading-[36px] md:leading-[46px] tracking-[-0.02em] mb-2">
            What To Expect
          </h2>
          <p className="font-inter text-[18px] font-light leading-[28px] tracking-[-0.02em] text-neutral/950 md:text-lg max-w-2xl mb-8">
            HIV medications may cause side effects like nausea and fatigue.{" "}
            <br />
            Regular checkups help monitor long-term concerns.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              description="Feeling tired or low energy is a common effect, particularly in the early stages of treatment. It’s important to rest and stay hydrated to help manage this."
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
  <div className="flex items-start gap-4 p-2 bg-white">
    <img src={prepIcon} alt="prep icon" className="w-10 h-10 mt-[2px]" />
    <div>
      <h4 className="font-inter text-[20px] leading-[24px] tracking-[-0.02em] text-black">
        {stage}
      </h4>
      <p className="font-inter text-[16px] font-light leading-[24px] tracking-[-0.02em] text-gray-600">
        {description}
      </p>
    </div>
  </div>
);

const MedicationCard = ({ iconSrc, name, description }) => {
  return (
    <div className="flex items-start gap-4 py-4">
      <img src={iconSrc} alt={name} className="w-18 h-18 object-contain mt-1" />
      <div>
        <h4 className="font-manrope font-semibold text-[20px] leading-[24px] tracking-[-0.02em] text-neutral-900 mb-[4px]">
          {name}
        </h4>
        <p className="font-inter text-[16px] font-light leading-[24px] tracking-[-0.02em] text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
};

const SideEffectCard = ({ title, description }) => (
  <div>
    <img src={prepIcon} alt="prep icon" className="w-10 h-10 mb-2" />
    <h4 className="font-inter font-medium text-[20px] leading-[24px] tracking-[-0.02em] text-black mb-1">
      {title}
    </h4>
    <p className="font-inter text-[16px] font-light leading-[24px] text-neutral/950">
      {description}
    </p>
  </div>
);
