export const hepatitisBInfo = {
    symptoms: {
      urgentRecommendation: {
        message:
          "If you experience severe abdominal pain, yellowing of the skin or eyes (jaundice), dark urine, or extreme fatigue — especially more than one symptom — we highly recommend that you visit an ER as soon as possible.",
        severity: "high",
      },
      stages: [
        {
          stage: "Acute Stage",
          description:
            "Fever, fatigue, loss of appetite, nausea, vomiting, abdominal pain, dark urine, and jaundice. Symptoms can appear within 1 to 4 months after exposure."
        },
        {
          stage: "Chronic Stage",
          description:
            "Often asymptomatic for years. Some individuals may experience ongoing fatigue, joint pain, and mild liver discomfort."
        },
        {
          stage: "Advanced Stage",
          description:
            "If untreated, chronic Hepatitis B can lead to cirrhosis, liver failure, or liver cancer. Symptoms include severe jaundice, fluid buildup in the abdomen, confusion, and easy bruising or bleeding."
        }
      ]
    },
  
    medications: {
      list: [
        {
          name: "Antiviral Medications",
          description:
            "Drugs like Tenofovir and Entecavir help reduce the virus's ability to replicate and prevent liver damage in chronic cases."
        },
        {
          name: "Interferon Injections",
          description:
            "Used primarily for younger patients, this treatment boosts the immune system to fight the virus."
        },
        {
          name: "Liver Health Monitoring",
          description:
            "Regular monitoring and blood tests help manage disease progression and identify complications early."
        }
      ],
      treatment: {
        title: "Treatment",
        description:
          "While acute Hepatitis B often resolves on its own, chronic cases require long-term treatment to prevent serious liver complications. Vaccination is available and highly effective for prevention."
      }
    },
  
    sideEffects: {
      whatToExpect: {
        title: "What To Expect",
        description:
          "Treatments for Hepatitis B are generally safe but may cause some side effects, especially in long-term use. Regular medical follow-up is crucial."
      },
      commonSideEffects: [
        {
          title: "Fatigue",
          description:
            "Common during antiviral therapy and may also result from liver inflammation itself. Rest and hydration are important."
        },
        {
          title: "Nausea",
          description:
            "A common reaction to medications or liver dysfunction. Eating smaller meals may help."
        },
        {
          title: "Headache",
          description:
            "Some medications may cause mild to moderate headaches that usually resolve with time."
        },
        {
          title: "Hair Thinning",
          description:
            "In some patients, hair thinning can occur as a side effect of long-term antiviral medication."
        },
        {
          title: "Mood Changes",
          description:
            "Interferon therapy can lead to mood swings, depression, or irritability. Monitoring mental health is important."
        },
        {
          title: "Loss of Appetite",
          description:
            "Hepatitis B and its treatments can suppress appetite, making balanced nutrition a challenge."
        }
      ]
    }
  };