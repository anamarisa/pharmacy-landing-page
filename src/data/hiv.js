export const hivInfo = {
    symptoms: {
      urgentRecommendation: {
        message:
          "If someone thinks they have fever cough etc, certain symptoms that basically only in HIV positive patients, out of 10 symptoms I have 5, then we want to put text in red that says we highly recommend that you visit an ER as soon as possible.",
        severity: "high",
      },
      stages: [
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
            "Rapid weight loss, prolonged fever, night sweats, chronic diarrhea, recurring infections, and extreme fatigue."
        }
      ]
    },
  
    medications: {
      list: [
        {
          name: "NRTIs",
          description:
            "These drugs block HIV from copying its genetic material, preventing the virus from multiplying. Common NRTIs include Tenofovir and Emtricitabine."
        },
        {
          name: "NNRTIs",
          description:
            "NNRTIs stop HIV from replicating by binding directly to the virus's reverse transcriptase enzyme. Examples include Efavirenz and Rilpivirine."
        },
        {
          name: "Protease Inhibitors (PIs)",
          description:
            "These medications prevent HIV from maturing by blocking protease. Common PIs are Darunavir and Atazanavir."
        },
        {
          name: "Integrase Inhibitors (INSTIs)",
          description:
            "This class stops HIV from integrating its genetic material into DNA, preventing infection spread. Examples are Dolutegravir and Raltegravir."
        }
      ],
      treatment: {
        title: "Treatment",
        description:
          "HIV isn't curable, but ART can make viral levels undetectable, preventing sexual transmission (U=U). Early treatment and daily adherence support a healthy immune system and prevent complications."
      }
    },
  
    sideEffects: {
      whatToExpect: {
        title: "What To Expect",
        description:
          "HIV medications may cause side effects like nausea and fatigue. Regular checkups help monitor long-term concerns."
      },
      commonSideEffects: [
        {
          title: "Gastrointestinal Issues",
          description:
            "Nausea, vomiting, and diarrhea are common, especially when starting a new treatment regimen. These can be temporary as the body adjusts to the medications."
        },
        {
          title: "Headaches and Dizziness",
          description:
            "Some people experience headaches or dizziness, particularly when beginning ART. These side effects tend to lessen as the body becomes accustomed to the treatment."
        },
        {
          title: "Fatigue",
          description:
            "Feeling tired or low energy is a common effect, particularly in the early stages of treatment. It's important to rest and stay hydrated to help manage this."
        },
        {
          title: "Insomnia",
          description:
            "Difficulty falling or staying asleep may occur, especially during the initial phase of treatment. Establishing a relaxing bedtime routine can help improve sleep quality."
        },
        {
          title: "Rash",
          description:
            "Skin rash or irritation can develop as a side effect of certain medications. It is advisable to consult a healthcare provider if a rash persists or becomes severe."
        },
        {
          title: "Mood Changes",
          description:
            "Changes in mood, such as mood swings or increased anxiety, might be experienced while undergoing treatment. Engaging in stress-relieving activities can help alleviate these symptoms."
        }
      ]
    }
  };
  