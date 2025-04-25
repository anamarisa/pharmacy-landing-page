export const syphilisInfo = {
    symptoms: {
      urgentRecommendation: {
        message:
          "If you experience multiple symptoms such as painless sores, rash on the palms or soles, fever, or swollen lymph nodes, we highly recommend that you visit an ER as soon as possible.",
        severity: "high",
      },
      stages: [
        {
          stage: "Primary Stage",
          description:
            "Characterized by one or more painless sores (chancres) at the site of infection, typically appearing 3 weeks after exposure. These sores heal on their own but the infection remains."
        },
        {
          stage: "Secondary Stage",
          description:
            "Includes skin rashes, especially on the palms of the hands and soles of the feet, mucous membrane lesions, fever, swollen lymph nodes, sore throat, and fatigue."
        },
        {
          stage: "Latent and Tertiary Stages",
          description:
            "The latent stage may show no symptoms, but the infection is still present. In the tertiary stage, serious complications can develop, affecting the heart, brain, and other organs."
        }
      ]
    },
  
    medications: {
      list: [
        {
          name: "Benzathine Penicillin G",
          description:
            "The most common and effective treatment for all stages of syphilis. A single intramuscular injection is often sufficient for early-stage syphilis."
        },
        {
          name: "Doxycycline",
          description:
            "An alternative for people allergic to penicillin. Usually taken orally over a 14-day course for early syphilis or longer for later stages."
        },
        {
          name: "Ceftriaxone",
          description:
            "May be used in certain cases of neurosyphilis or when penicillin isn't suitable. Administered via injection under medical supervision."
        }
      ],
      treatment: {
        title: "Treatment",
        description:
          "Syphilis is curable with the right antibiotics. Early detection and treatment are crucial to avoid serious complications. Follow-up blood tests are necessary to ensure the infection is fully cleared."
      }
    },
  
    sideEffects: {
      whatToExpect: {
        title: "What To Expect",
        description:
          "While treatment is effective, it may lead to temporary side effects, especially when the body reacts to dying bacteria."
      },
      commonSideEffects: [
        {
          title: "Jarisch-Herxheimer Reaction",
          description:
            "A flu-like reaction including fever, chills, headache, and muscle aches that can occur within 24 hours after starting treatment."
        },
        {
          title: "Injection Site Pain",
          description:
            "Mild soreness, redness, or swelling at the site of the penicillin injection."
        },
        {
          title: "Nausea",
          description:
            "Some people may experience nausea, especially with oral antibiotics like doxycycline."
        },
        {
          title: "Diarrhea",
          description:
            "Antibiotics can disrupt normal gut flora, sometimes leading to loose stools or diarrhea."
        },
        {
          title: "Dizziness",
          description:
            "Occasional dizziness may occur, particularly during early stages of treatment or if dehydrated."
        },
        {
          title: "Fatigue",
          description:
            "Temporary tiredness or weakness can be experienced as the body responds to treatment."
        }
      ]
    }
  };
  