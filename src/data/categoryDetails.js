// src/data/categoryDetails.js

// Importing image assets related to each STI category
import HIV from "../assets/images/category-images/hiv.svg";
import Gonorhea from "../assets/images/category-images/gonorhea.svg";
import Chlamydia from "../assets/images/category-images/chlamydia.svg";
import Trichomoniasis from "../assets/images/category-images/trichomoniasis.svg";
import Syphilis from "../assets/images/category-images/syphilis.svg";
import Herpes from "../assets/images/category-images/herpes.svg";
import HepatitisB from "../assets/images/category-images/hepatitis.svg";
import GenitalWarts from "../assets/images/category-images/genital.svg";
// import GenitalLottie from "../assets/images/category-images/GENITAL.lottie"; // (commented out, possibly for animation or other purposes)
import Ureaplasma from "../assets/images/category-images/ureaplasma.svg";
import Mycoplasma from "../assets/images/category-images/mycoplasma.svg";

// Exporting category details with each category's image, description, symptoms, medication, treatment, and side effects
export const categoryDetails = {
  HIV: {
    image: HIV, // Image of HIV
    description: "HIV is a virus that weakens the immune system, making it harder for the body to fight infections and diseases.",
    symptoms: "Early symptoms may include fever, sore throat, and fatigue. Later symptoms may develop into opportunistic infections.",
    medication: "Antiretroviral therapy (ART) is the standard treatment to control HIV.",
    treatment: "Daily ART is required for life to manage the virus and prevent progression to AIDS.",
    sideEffects: "Common side effects include nausea, diarrhea, fatigue, and headaches.",
  },
  Gonorhea: {
    image: Gonorhea, // Image of Gonorrhea
    description: "Gonorrhea is a bacterial infection that affects both men and women, often causing discharge and painful urination.",
    symptoms: "Painful urination, discharge, and abdominal pain.",
    medication: "Antibiotics such as penicillin or cephalosporins are used to treat gonorrhea.",
    treatment: "Treatments include antibiotics; however, the bacteria are becoming resistant to some treatments.",
    sideEffects: "Common side effects of gonorrhea medications include nausea and stomach upset.",
  },
  Chlamydia: {
    image: Chlamydia, // Image of Chlamydia
    description: "Chlamydia is a common sexually transmitted infection that is often asymptomatic but can cause serious reproductive health problems if left untreated.",
    symptoms: "Often asymptomatic, but when present, symptoms may include abnormal discharge and painful urination.",
    medication: "Azithromycin or Doxycycline are commonly prescribed antibiotics for treatment.",
    treatment: "Antibiotic treatment is effective in curing Chlamydia.",
    sideEffects: "Mild nausea, diarrhea, or stomach upset may occur as side effects of the antibiotics.",
  },
  Trichomoniasis: {
    image: Trichomoniasis, // Image of Trichomoniasis
    description: "Trichomoniasis is a sexually transmitted infection caused by a parasite, often resulting in irritation and discharge.",
    symptoms: "Painful urination, itching, and unusual discharge.",
    medication: "Antibiotics such as metronidazole or tinidazole are used to treat Trichomoniasis.",
    treatment: "Treatments typically include a single dose of antibiotics.",
    sideEffects: "Common side effects of the medications include nausea, dizziness, and stomach upset.",
  },
  Syphilis: {
    image: Syphilis, // Image of Syphilis
    description: "Syphilis is a sexually transmitted infection caused by the bacterium Treponema pallidum, often resulting in sores, rashes, and severe complications if left untreated.",
    symptoms: "Sores, rash, fever, and, in later stages, neurological or cardiovascular issues.",
    medication: "Penicillin is the standard medication for treating Syphilis.",
    treatment: "Syphilis is treated with a one-time or multiple doses of penicillin, depending on the stage of the infection.",
    sideEffects: "Rare allergic reactions may occur, but they are generally mild and manageable.",
  },
  Herpes: {
    image: Herpes, // Image of Herpes
    description: "Herpes is a viral infection caused by the herpes simplex virus (HSV), often leading to painful blisters and sores.",
    symptoms: "Blisters, sores, and itching in the genital area or around the mouth.",
    medication: "Acyclovir, Valacyclovir, and Famciclovir are used to reduce the severity of outbreaks.",
    treatment: "Antivirals can reduce outbreaks, though the virus remains in the body for life.",
    sideEffects: "Possible side effects include headaches, nausea, and dizziness.",
  },
  "Hepatitis B": {
    image: HepatitisB, // Image of Hepatitis B
    description: "Hepatitis B is a viral infection that attacks the liver and can cause both acute and chronic liver disease.",
    symptoms: "Symptoms may include jaundice, fatigue, abdominal pain, and nausea.",
    medication: "Antiviral drugs, including Tenofovir and Entecavir, are used to manage chronic Hepatitis B.",
    treatment: "Regular monitoring and antiviral treatment are important for managing Hepatitis B.",
    sideEffects: "Dizziness, upset stomach, and fatigue may occur as side effects of the medications.",
  },
  "Genital Warts": {
    image: GenitalWarts, // Image of Genital Warts
    description: "Genital warts are caused by the human papillomavirus (HPV) and appear as small bumps or growths in the genital area.",
    symptoms: "Small, flesh-colored or gray warts in the genital, anal, or mouth area.",
    medication: "Topical treatments, such as imiquimod or podophyllotoxin, can help remove warts.",
    treatment: "Cryotherapy or laser treatment are common ways to remove warts.",
    sideEffects: "Skin irritation, redness, or blistering may occur as side effects of the treatment.",
  },
  Ureaplasma: {
    image: Ureaplasma, // Image of Ureaplasma
    description: "Ureaplasma is caused by a bacteria-like organism that can lead to urinary tract infections and other reproductive health problems.",
    symptoms: "Burning while urinating, pelvic pain, and discharge.",
    medication: "Doxycycline is often used to treat Ureaplasma infections.",
    treatment: "Ureaplasma is typically treated with oral antibiotics.",
    sideEffects: "Upset stomach, rash, or lightheadedness may occur as side effects.",
  },
  Mycoplasma: {
    image: Mycoplasma, // Image of Mycoplasma
    description: "Mycoplasma is a type of bacteria-like organism that can cause infections in the respiratory and genital systems.",
    symptoms: "Burning sensation while urinating, pelvic discomfort, and discharge.",
    medication: "Doxycycline is commonly used to treat Mycoplasma infections.",
    treatment: "Mycoplasma infections are usually treated with antibiotics taken orally.",
    sideEffects: "Possible side effects include upset stomach, rash, and dizziness.",
  },
};

// Exporting a simplified list of category names and images for use in other parts of the app
export const categories = Object.entries(categoryDetails).map(([name, data]) => ({
  name,
  image: data.image,
}));
