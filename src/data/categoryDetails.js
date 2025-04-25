// src/data/categoryDetails.js
import HIV from "../assets/images/category-images/hiv.svg";
import Gonorhea from "../assets/images/category-images/gonorhea.svg";
import Chlamydia from "../assets/images/category-images/chlamydia.svg";
import Trichomoniasis from "../assets/images/category-images/trichomoniasis.svg";
import Syphilis from "../assets/images/category-images/syphilis.svg";
import Herpes from "../assets/images/category-images/herpes.svg";
import HepatitisB from "../assets/images/category-images/hepatitis.svg";
import GenitalWarts from "../assets/images/category-images/genital.svg";
// import GenitalLottie from "../assets/images/category-images/GENITAL.lottie";
import Ureaplasma from "../assets/images/category-images/ureaplasma.svg";
import Mycoplasma from "../assets/images/category-images/mycoplasma.svg";

export const categoryDetails = {
  HIV: {
    image: HIV,
    description: "HIV is a virus that weakens the immune system...",
    symptoms: "Early symptoms may include...",
    medication: "Antiretroviral therapy (ART)...",
    treatment: "Daily ART is required...",
    sideEffects: "Common side effects include...",
  },
  Gonorhea: {
    image: Gonorhea,
    description: "Gonorrhea is a bacterial infection...",
    symptoms: "Painful urination, discharge...",
    medication: "Antibiotics such as penicillin...",
    treatment: "Treatments include antibiotics...",
    sideEffects: "Common side effects of gonorrhea meds...",
  },
  Chlamydia: {
    image: Chlamydia,
    description: "Chlamydia is a common STI...",
    symptoms: "Often asymptomatic...",
    medication: "Azithromycin or Doxycycline...",
    treatment: "Antibiotic treatment is effective...",
    sideEffects: "Mild nausea or diarrhea...",
  },
  Trichomoniasis: {
    image: Trichomoniasis,
    description: "Trichomoniasis is a sexually transmitted infection...",
    symptoms: "Painful urination, discharge...",
    medication: "Antibiotics such as doxycycline...",
    treatment: "Treatments include antibiotics...",
    sideEffects: "Common side effects of trichomoniasis meds...",
  },
  Syphilis: {
    image: Syphilis,
    description: "Syphilis is caused by Treponema pallidum...",
    symptoms: "Sores, rash, and neurological issues...",
    medication: "Penicillin is the standard...",
    treatment: "One-time or multi-dose injection...",
    sideEffects: "Allergic reactions in rare cases...",
  },
  Herpes: {
    image: Herpes,
    description: "Herpes is a viral infection...",
    symptoms: "Blisters and sores...",
    medication: "Acyclovir or Valacyclovir...",
    treatment: "Antivirals reduce outbreaks...",
    sideEffects: "Headache, nausea...",
  },
  "Hepatitis B": {
    image: HepatitisB,
    description: "Hepatitis B affects the liver...",
    symptoms: "Jaundice, fatigue...",
    medication: "Antiviral drugs...",
    treatment: "Regular monitoring...",
    sideEffects: "Dizziness, upset stomach...",
  },
  "Genital Warts": {
    image: GenitalWarts,
    description: "Caused by HPV...",
    symptoms: "Small bumps on genitals...",
    medication: "Topical treatments...",
    treatment: "Cryotherapy or laser...",
    sideEffects: "Skin irritation...",
  },
  Ureaplasma: {
    image: Ureaplasma,
    description: "Caused by a bacteria-like organism...",
    symptoms: "Burning while urinating...",
    medication: "Antibiotics such as doxycycline...",
    treatment: "Usually oral medication...",
    sideEffects: "Upset stomach, rash...",
  },
  Mycoplasma: {
    image: Mycoplasma,
    description: "Caused by a bacteria-like organism...",
    symptoms: "Burning while urinating...",
    medication: "Antibiotics such as doxycycline...",
    treatment: "Usually oral medication...",
    sideEffects: "Upset stomach, rash...",
  },
};

export const categories = Object.entries(categoryDetails).map(([name, data]) => ({
  name,
  image: data.image,
}));
