export const virus = {
    hiv: {
      symptoms: {
        urgentRecommendation: {
          message: "If someone thinks they have fever cough etc, certain symptoms that basically only in HIV positive patients, out of 10 symptoms I have 5, then we want to put text in red that says we highly recommend that you visit an ER as soon as possible.",
          severity: "high"
        },
        stages: [
          {
            stage: "Acute Stage",
            description: "Fever, chills, swollen lymph nodes, rash, sore throat, muscle aches, and fatigue."
          },
          {
            stage: "Chronic Stage",
            description: "Often asymptomatic, but may include persistent swelling of lymph nodes and mild infections."
          },
          {
            stage: "Advanced Stage (AIDS)",
            description: "Rapid weight loss, prolonged fever, night sweats, chronic diarrhea, recurring infections, and extreme fatigue."
          }
        ]
      },
      medications: {
        list: [
          {
            name: "NRTIs",
            description: "These drugs block HIV from copying its genetic material, preventing the virus from multiplying. Common NRTIs include Tenofovir and Emtricitabine."
          },
          {
            name: "NNRTIs",
            description: "NNRTIs stop HIV from replicating by binding directly to the virus's reverse transcriptase enzyme. Examples include Efavirenz and Rilpivirine."
          },
          {
            name: "Protease Inhibitors (PIs)",
            description: "These medications prevent HIV from maturing by blocking protease. Common PIs are Darunavir and Atazanavir."
          },
          {
            name: "Integrase Inhibitors (INSTIs)",
            description: "This class stops HIV from integrating its genetic material into DNA, preventing infection spread. Examples are Dolutegravir and Raltegravir."
          }
        ],
        treatment: {
          title: "Treatment",
          description: "HIV isn't curable, but ART can make viral levels undetectable, preventing sexual transmission (U=U). Early treatment and daily adherence support a healthy immune system and prevent complications."
        }
      },
      sideEffects: {
        whatToExpect: {
          title: "What To Expect",
          description: "HIV medications may cause side effects like nausea and fatigue. Regular checkups help monitor long-term concerns."
        },
        commonSideEffects: [
          {
            title: "Gastrointestinal Issues",
            description: "Nausea, vomiting, and diarrhea are common, especially when starting a new treatment regimen. These can be temporary as the body adjusts to the medications."
          },
          {
            title: "Headaches and Dizziness",
            description: "Some people experience headaches or dizziness, particularly when beginning ART. These side effects tend to lessen as the body becomes accustomed to the treatment."
          },
          {
            title: "Fatigue",
            description: "Feeling tired or low energy is a common effect, particularly in the early stages of treatment. It's important to rest and stay hydrated to help manage this."
          },
          {
            title: "Insomnia",
            description: "Difficulty falling or staying asleep may occur, especially during the initial phase of treatment. Establishing a relaxing bedtime routine can help improve sleep quality."
          },
          {
            title: "Rash",
            description: "Skin rash or irritation can develop as a side effect of certain medications. It is advisable to consult a healthcare provider if a rash persists or becomes severe."
          },
          {
            title: "Mood Changes",
            description: "Changes in mood, such as mood swings or increased anxiety, might be experienced while undergoing treatment. Engaging in stress-relieving activities can help alleviate these symptoms."
          }
        ]
      }
    },
    gonorrhea: {
      symptoms: {
        urgentRecommendation: {
          message: "If someone is experiencing symptoms like burning during urination, unusual discharge, or pelvic pain, and especially if multiple symptoms are present, we highly recommend that you visit an ER as soon as possible.",
          severity: "high"
        },
        stages: [
          {
            stage: "Acute Stage",
            description: "Burning sensation during urination, increased vaginal or penile discharge (which may be yellow or green), painful intercourse, and lower abdominal pain."
          },
          {
            stage: "Chronic Stage",
            description: "Often asymptomatic, but may involve pelvic inflammatory disease (PID) in women or epididymitis in men, both of which can lead to infertility if untreated."
          },
          {
            stage: "Advanced Stage",
            description: "Systemic infection symptoms may include fever, joint pain, skin sores, and swelling. If left untreated, Gonorrhea can spread to blood or joints causing disseminated gonococcal infection (DGI)."
          }
        ]
      },
      medications: {
        list: [
          {
            name: "Cephalosporins",
            description: "These antibiotics, such as Ceftriaxone, are the first-line treatment and work by stopping the bacteria from building its cell wall."
          },
          {
            name: "Macrolides",
            description: "Drugs like Azithromycin may be used in combination therapy to combat resistant strains of Gonorrhea."
          },
          {
            name: "Fluoroquinolones (limited use)",
            description: "Once commonly used, drugs like Ciprofloxacin are now only prescribed in specific cases due to resistance concerns."
          },
          {
            name: "Alternative Therapies",
            description: "In cases of allergy or resistance, alternative antibiotics such as Gentamicin with Azithromycin or dual therapy may be recommended."
          }
        ],
        treatment: {
          title: "Treatment",
          description: "Gonorrhea is curable with proper antibiotic treatment. It is essential to complete the full course and notify partners to prevent reinfection. Follow-up testing ensures the infection is cleared."
        }
      },
      sideEffects: {
        whatToExpect: {
          title: "What To Expect",
          description: "Antibiotics for Gonorrhea may cause side effects. Regular follow-ups help monitor reactions and effectiveness."
        },
        commonSideEffects: [
          {
            title: "Nausea",
            description: "A common side effect that usually resolves after completing the antibiotic course."
          },
          {
            title: "Diarrhea",
            description: "May occur as a result of changes in gut flora. Staying hydrated helps manage this."
          },
          {
            title: "Abdominal Pain",
            description: "Can occur during or after treatment, particularly in individuals with PID."
          },
          {
            title: "Vaginal or Penile Irritation",
            description: "A reaction to medication or the infection itself. Should be reported if persistent."
          },
          {
            title: "Skin Rash",
            description: "May signal a mild allergic reaction. Seek care if severe."
          },
          {
            title: "Headache",
            description: "Some antibiotics can cause temporary headaches that subside over time."
          }
        ]
      }
    },
    chlamydia: {
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
    },
    trichomoniasis: {
        symptoms: {
            urgentRecommendation: {
              message:
                "If you experience symptoms such as frothy vaginal discharge, genital redness, itching, or painful urination — especially more than one symptom — we highly recommend that you visit an ER as soon as possible.",
              severity: "high",
            },
            stages: [
              {
                stage: "Early Stage",
                description:
                  "Most people show no symptoms initially. When symptoms occur, they often include itching or irritation inside the penis, vaginal discharge, or discomfort during urination."
              },
              {
                stage: "Progressive Stage",
                description:
                  "Symptoms may become more pronounced with frothy, yellow-green vaginal discharge, strong vaginal odor, genital redness, and lower abdominal pain."
              },
              {
                stage: "Advanced Stage",
                description:
                  "If untreated, trichomoniasis can increase susceptibility to other STIs, cause complications in pregnancy, and lead to persistent urogenital discomfort."
              }
            ]
          },
        
          medications: {
            list: [
              {
                name: "Metronidazole",
                description:
                  "A single-dose antibiotic that is highly effective in treating trichomoniasis by targeting the parasite causing the infection."
              },
              {
                name: "Tinidazole",
                description:
                  "An alternative antibiotic that may be used if metronidazole is not suitable. Taken as a single dose to eradicate the infection."
              },
              {
                name: "Re-treatment",
                description:
                  "Sometimes a second course of treatment is needed, especially if reinfection occurs or symptoms persist after initial therapy."
              }
            ],
            treatment: {
              title: "Treatment",
              description:
                "Trichomoniasis is curable with antibiotics. It's essential for both partners to be treated at the same time to prevent reinfection and abstain from sexual activity until symptoms fully resolve."
            }
          },
        
          sideEffects: {
            whatToExpect: {
              title: "What To Expect",
              description:
                "Medications for trichomoniasis are generally well tolerated, though some mild side effects may occur during treatment."
            },
            commonSideEffects: [
              {
                title: "Metallic Taste",
                description:
                  "A temporary metallic taste in the mouth is a known side effect of metronidazole or tinidazole. It usually fades after treatment."
              },
              {
                title: "Nausea",
                description:
                  "Feeling nauseated is common with antibiotic use and can be reduced by taking the medication with food."
              },
              {
                title: "Dizziness",
                description:
                  "Some people may feel light-headed or dizzy while taking trichomoniasis medications. Avoiding alcohol and resting may help."
              },
              {
                title: "Dark Urine",
                description:
                  "Metronidazole may cause urine to appear darker than usual, which is harmless and temporary."
              },
              {
                title: "Fatigue",
                description:
                  "Tiredness or feeling weak may occur while the body fights off infection. Getting rest is important."
              },
              {
                title: "Headache",
                description:
                  "Mild headaches can occur during treatment and usually subside without intervention."
              }
            ]
          }
    },
    syphilis: {
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
    },
    herpes: {
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
    },
    hepatitisB: {
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
    },
    genitalWarts: {
        symptoms: {
            urgentRecommendation: {
              message:
                "If you notice rapidly growing or painful genital warts, bleeding, or discomfort during urination or intercourse — especially if multiple symptoms are present — we highly recommend that you visit an ER as soon as possible.",
              severity: "high"
            },
            stages: [
              {
                stage: "Initial Stage",
                description:
                  "Small, flesh-colored or gray swellings in the genital area. These may be raised or flat and can appear singly or in clusters. Often painless but may itch or feel uncomfortable."
              },
              {
                stage: "Developed Stage",
                description:
                  "Warts may grow larger and cluster, resembling a cauliflower shape. Discomfort, itching, and increased number of warts may occur, especially in moist areas."
              },
              {
                stage: "Persistent Stage",
                description:
                  "Warts that do not go away may recur frequently and cause irritation. If untreated, they can lead to complications such as spreading to other areas or obstructing the urinary tract."
              }
            ]
          },
        
          medications: {
            list: [
              {
                name: "Topical Treatments",
                description:
                  "Prescription creams such as Imiquimod or Podofilox can help boost immune response or destroy wart tissue over time."
              },
              {
                name: "Cryotherapy",
                description:
                  "Freezing off the warts using liquid nitrogen. This is a common outpatient procedure and may require multiple sessions."
              },
              {
                name: "Surgical Removal",
                description:
                  "In cases of large or stubborn warts, a doctor may recommend excision, laser therapy, or electrocautery to remove them."
              }
            ],
            treatment: {
              title: "Treatment",
              description:
                "Genital warts can be treated but not cured, as the virus (HPV) may remain in the body. Treatments focus on removing visible warts and managing symptoms. Vaccination can prevent the types of HPV most commonly linked to genital warts."
            }
          },
        
          sideEffects: {
            whatToExpect: {
              title: "What To Expect",
              description:
                "Treatments for genital warts may cause some mild to moderate side effects depending on the method used."
            },
            commonSideEffects: [
              {
                title: "Skin Irritation",
                description:
                  "Redness, burning, or peeling of the skin is common with topical treatments. These effects usually fade after treatment stops."
              },
              {
                title: "Swelling",
                description:
                  "Mild swelling around the treated area may occur, especially after cryotherapy or surgical removal."
              },
              {
                title: "Pain or Discomfort",
                description:
                  "Temporary pain or tenderness is common following procedures like freezing or excision."
              },
              {
                title: "Scarring",
                description:
                  "In rare cases, treatments such as surgery may lead to minor scarring of the skin."
              },
              {
                title: "Blistering",
                description:
                  "Cryotherapy may cause blistering at the treatment site, which usually heals on its own within a few days."
              },
              {
                title: "Changes in Skin Color",
                description:
                  "Some treatments may cause lighter or darker skin patches in the treated area, particularly in people with darker skin tones."
              }
            ]
          }
    },
    ureaplasma: {
        symptoms: {
            urgentRecommendation: {
              message:
                "If you're experiencing pain during urination, unusual genital discharge, or pelvic pain — especially if multiple symptoms occur — we highly recommend that you visit an ER as soon as possible.",
              severity: "high",
            },
            stages: [
              {
                stage: "Initial Stage",
                description:
                  "Often asymptomatic, but may include mild discomfort during urination, watery discharge, or genital irritation. Symptoms can appear days to weeks after exposure."
              },
              {
                stage: "Developing Stage",
                description:
                  "Discomfort may increase, with persistent burning during urination, urethritis, or cervicitis. In women, symptoms may mimic other STIs."
              },
              {
                stage: "Advanced Stage",
                description:
                  "If left untreated, it may lead to complications such as infertility, pelvic inflammatory disease (PID), or adverse pregnancy outcomes."
              }
            ]
          },
        
          medications: {
            list: [
              {
                name: "Azithromycin",
                description:
                  "A common first-line antibiotic used to treat ureaplasma infections, often prescribed as a single-dose or short course."
              },
              {
                name: "Doxycycline",
                description:
                  "Another effective antibiotic that works over a longer course. It inhibits bacterial growth by interfering with protein production."
              },
              {
                name: "Follow-Up Testing",
                description:
                  "Post-treatment testing is often recommended to confirm eradication, especially if symptoms persist or return."
              }
            ],
            treatment: {
              title: "Treatment",
              description:
                "Ureaplasma is treatable with antibiotics. It’s important that both sexual partners receive treatment to prevent reinfection and reduce the risk of complications."
            }
          },
        
          sideEffects: {
            whatToExpect: {
              title: "What To Expect",
              description:
                "Medications used to treat ureaplasma are generally well tolerated. However, some individuals may experience mild side effects."
            },
            commonSideEffects: [
              {
                title: "Gastrointestinal Discomfort",
                description:
                  "Antibiotics like doxycycline may cause upset stomach, nausea, or diarrhea. Taking them with food can help."
              },
              {
                title: "Photosensitivity",
                description:
                  "Doxycycline may cause increased sensitivity to sunlight, resulting in a higher risk of sunburn."
              },
              {
                title: "Metallic Taste",
                description:
                  "A temporary metallic or bitter taste in the mouth may occur with certain antibiotics."
              },
              {
                title: "Fatigue",
                description:
                  "Mild fatigue can accompany infection or medication, but should improve with rest and hydration."
              },
              {
                title: "Vaginal Yeast Infections",
                description:
                  "Women taking antibiotics may experience yeast infections. Probiotics or antifungal medication may be recommended."
              },
              {
                title: "Mild Headaches",
                description:
                  "Some individuals report experiencing headaches during antibiotic treatment, which usually subside on their own."
              }
            ]
          }
    },
    mycoplasma: {
        symptoms: {
            urgentRecommendation: {
              message:
                "If you're experiencing persistent pelvic pain, abnormal genital discharge, or pain during urination — especially with additional symptoms — we highly recommend that you visit an ER as soon as possible.",
              severity: "high",
            },
            stages: [
              {
                stage: "Initial Stage",
                description:
                  "May be asymptomatic or present with mild symptoms such as slight burning during urination, mild discharge, or pelvic discomfort."
              },
              {
                stage: "Developing Stage",
                description:
                  "Symptoms may progress to more noticeable discomfort during urination, increased genital discharge, and pelvic or lower abdominal pain."
              },
              {
                stage: "Advanced Stage",
                description:
                  "If untreated, mycoplasma infection can cause complications such as infertility, chronic pelvic pain, or pelvic inflammatory disease (PID)."
              }
            ]
          },
        
          medications: {
            list: [
              {
                name: "Doxycycline",
                description:
                  "A common antibiotic used to treat mycoplasma infections, usually prescribed over a course of several days to eliminate the bacteria."
              },
              {
                name: "Azithromycin",
                description:
                  "An alternative antibiotic for mycoplasma, especially in cases where doxycycline isn't suitable. Taken as a single-dose or short course."
              },
              {
                name: "Follow-Up Testing",
                description:
                  "Post-treatment testing may be recommended to ensure the infection has been fully eradicated."
              }
            ],
            treatment: {
              title: "Treatment",
              description:
                "Mycoplasma infections are treatable with antibiotics. It's important for both sexual partners to be treated simultaneously to avoid reinfection."
            }
          },
        
          sideEffects: {
            whatToExpect: {
              title: "What To Expect",
              description:
                "Medications for treating mycoplasma are typically well tolerated, but some mild side effects may occur."
            },
            commonSideEffects: [
              {
                title: "Gastrointestinal Issues",
                description:
                  "Common side effects include nausea, vomiting, or diarrhea, especially with doxycycline. Taking the medication with food can help."
              },
              {
                title: "Fatigue",
                description:
                  "Mild fatigue may occur while the body fights off infection, but it should improve with rest and hydration."
              },
              {
                title: "Headaches",
                description:
                  "Some people experience mild headaches while on antibiotic treatment, but they typically resolve on their own."
              },
              {
                title: "Vaginal Yeast Infections",
                description:
                  "Women may be at risk for yeast infections during antibiotic treatment. Probiotics or antifungal medication can help alleviate symptoms."
              },
              {
                title: "Photosensitivity",
                description:
                  "Doxycycline may cause increased sensitivity to sunlight, so using sunscreen or avoiding excessive sun exposure is recommended."
              },
              {
                title: "Dizziness",
                description:
                  "Some individuals may feel light-headed or dizzy during treatment. Staying hydrated and avoiding sudden movements can help."
              }
            ]
          },
    }
  };