export const herpesInfo = {
  symptoms: {
    urgentRecommendation: {
      message:
        "If you notice painful sores or blisters in the genital or oral area, accompanied by fever, body aches, or swollen glands — especially if these are new or recurring — we highly recommend that you visit an ER as soon as possible.",
      severity: "high",
    },
    stages: [
      {
        stage: "Initial Outbreak",
        description:
          "The first outbreak is usually the most severe, featuring painful blisters, ulcers, fever, swollen lymph nodes, and general discomfort."
      },
      {
        stage: "Latent Stage",
        description:
          "After the initial outbreak, the virus becomes dormant in nerve cells. No symptoms may be present, but the virus remains in the body."
      },
      {
        stage: "Recurrent Outbreaks",
        description:
          "Some people experience periodic flare-ups with less severe symptoms, including tingling, itching, or sores in the genital or oral area."
      }
    ]
  },

  medications: {
    list: [
      {
        name: "Acyclovir",
        description:
          "An antiviral medication that helps reduce the severity and frequency of outbreaks by limiting the virus's ability to replicate."
      },
      {
        name: "Valacyclovir",
        description:
          "A prodrug of acyclovir, used for both initial and recurrent outbreaks. It helps shorten healing time and alleviate symptoms."
      },
      {
        name: "Famciclovir",
        description:
          "Another antiviral option that reduces pain and healing time during an outbreak. Often prescribed for recurrent cases."
      }
    ],
    treatment: {
      title: "Treatment",
      description:
        "While there is no cure for herpes, antiviral medications can manage symptoms and reduce the frequency of outbreaks. Daily suppressive therapy may be recommended for those with frequent recurrences."
    }
  },

  sideEffects: {
    whatToExpect: {
      title: "What To Expect",
      description:
        "Herpes treatments are generally safe and well-tolerated, but mild side effects may occur, especially when starting medication."
    },
    commonSideEffects: [
      {
        title: "Nausea",
        description:
          "A common side effect of antiviral medications, usually mild and temporary. Taking medication with food may help."
      },
      {
        title: "Headache",
        description:
          "Headaches can occur during treatment, often subsiding as the body adjusts to the medication."
      },
      {
        title: "Fatigue",
        description:
          "Feeling tired or weak may happen during outbreaks or while adjusting to new medications."
      },
      {
        title: "Abdominal Pain",
        description:
          "Some users may experience mild stomach pain, which can often be alleviated with food intake."
      },
      {
        title: "Rash",
        description:
          "Skin irritation or rashes may occur. It's advisable to consult a healthcare provider if these persist."
      },
      {
        title: "Dizziness",
        description:
          "Light-headedness may be experienced, especially with the initial doses. Resting can help reduce the sensation."
      }
    ]
  }
};
