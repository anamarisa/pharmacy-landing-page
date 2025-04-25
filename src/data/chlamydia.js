export const chlamydiaInfo = {
    symptoms: {
      urgentRecommendation: {
        message:
          "If you are experiencing symptoms such as unusual genital discharge, burning sensation during urination, and lower abdominal pain, especially if multiple symptoms are present, we highly recommend that you visit an ER as soon as possible.",
        severity: "high",
      },
      stages: [
        {
          stage: "Early Stage",
          description:
            "Often asymptomatic, but can include burning sensation during urination, abnormal genital discharge, and discomfort during intercourse."
        },
        {
          stage: "Progressive Stage",
          description:
            "Pelvic pain, testicular pain in men, rectal pain or discharge, and spotting between periods in women."
        },
        {
          stage: "Advanced Stage",
          description:
            "If left untreated, may lead to pelvic inflammatory disease (PID), infertility, and increased risk of ectopic pregnancy."
        }
      ]
    },
  
    medications: {
      list: [
        {
          name: "Azithromycin",
          description:
            "A commonly prescribed antibiotic that is taken as a single dose to treat Chlamydia by stopping the growth of bacteria."
        },
        {
          name: "Doxycycline",
          description:
            "Another effective antibiotic taken over the course of seven days, used to kill the bacteria causing Chlamydia."
        },
        {
          name: "Erythromycin",
          description:
            "Used especially for pregnant individuals or those allergic to other antibiotics, taken in multiple doses per day."
        },
        {
          name: "Levofloxacin",
          description:
            "Prescribed in some cases as an alternative treatment; effective in treating bacterial infections including Chlamydia."
        }
      ],
      treatment: {
        title: "Treatment",
        description:
          "Chlamydia is curable with a full course of prescribed antibiotics. It’s important to abstain from sexual activity until treatment is completed and symptoms have fully resolved to avoid reinfection."
      }
    },
  
    sideEffects: {
      whatToExpect: {
        title: "What To Expect",
        description:
          "Antibiotic treatment for Chlamydia may cause mild side effects. These are generally manageable and resolve once the treatment is complete."
      },
      commonSideEffects: [
        {
          title: "Nausea",
          description:
            "Some people experience nausea, especially when taking antibiotics like doxycycline. Taking medication with food may help reduce this."
        },
        {
          title: "Diarrhea",
          description:
            "Mild diarrhea is a possible side effect of antibiotics and usually subsides once treatment ends."
        },
        {
          title: "Abdominal Pain",
          description:
            "Discomfort or cramping in the stomach area can occur during treatment. Staying hydrated may ease symptoms."
        },
        {
          title: "Photosensitivity",
          description:
            "Increased sensitivity to sunlight, particularly with doxycycline. Wearing sunscreen and avoiding long sun exposure is recommended."
        },
        {
          title: "Headache",
          description:
            "Some individuals may experience mild to moderate headaches while on antibiotics. Rest and hydration can help."
        },
        {
          title: "Vaginal Yeast Infection",
          description:
            "Women may experience a yeast infection during or after antibiotic use due to changes in natural bacterial balance."
        }
      ]
    }
  };
  