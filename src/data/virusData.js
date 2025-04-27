import nrtisIcon from "../assets/icons/nrtis.svg";
import nnrtisIcon from "../assets/icons/nnrtis.svg";
import pisIcon from "../assets/icons/pis.svg";
import instisIcon from "../assets/icons/instis.svg";

export const virusData = {
    hiv: {
        id: "hiv",
        name: "HIV",
        symptoms: [
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
        ],
        medications: [
            {
                iconSrc: nrtisIcon,
                name: "NRTIs",
                description: "These drugs block HIV from copying its genetic material, preventing the virus from multiplying. Common NRTIs include Tenofovir and Emtricitabine."
            },
            {
                iconSrc: nnrtisIcon,
                name: "NNRTIs",
                description: "NNRTIs stop HIV from replicating by binding directly to the virus's reverse transcriptase enzyme. Examples include Efavirenz and Rilpivirine."
            },
            {
                iconSrc: pisIcon,
                name: "Protease Inhibitors (PIs)",
                description: "These medications prevent HIV from maturing by blocking protease. Common PIs are Darunavir and Atazanavir."
            },
            {
                iconSrc: instisIcon,
                name: "Integrase Inhibitors (INSTIs)",
                description: "This class stops HIV from integrating its genetic material into DNA, preventing infection spread. Examples are Dolutegravir and Raltegravir."
            }
        ],
        sideEffects: [
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
                description: "Feeling tired or low energy is a common effect, particularly in the early stages of treatment. It’s important to rest and stay hydrated to help manage this."
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
        ],
        sideEffectsSummary: "HIV medications may cause temporary nausea, fatigue, and sleep disturbances when starting treatment. Most side effects improve within weeks. Regular blood tests monitor for long-term kidney, liver, and bone health.",
        medicationSummary: "Modern ART combines 3 drugs from 2 classes (typically INSTI + NRTI backbone). Achieves undetectable viral load in 90% by 24 weeks. Lifelong treatment required but allows near-normal life expectancy when adherent.",
        recommendation: "Start ART immediately after diagnosis regardless of CD4 count. Take medications at same time daily. Report severe rash, abdominal pain, or yellow eyes immediately. U=U - undetectable means untransmittable.",
        treatmentSummary: "HIV isn't curable, but ART can make viral levels undetectable, preventing sexual transmission (U=U). Early treatment and daily adherence support a healthy immune system and prevent complications."
    },

    gonorhea: {
        id: "gonorhea",
        name: "Gonorhea",
        symptoms: [
            {
                stage: "Early Stage",
                description: "Many cases are asymptomatic. When present, symptoms include painful urination, increased genital discharge (white, yellow, or green), and in men, testicular pain or swelling."
            },
            {
                stage: "Complications (Women)",
                description: "Pelvic inflammatory disease (PID) causing abdominal pain, fever, internal abscesses, chronic pelvic pain, infertility, and ectopic pregnancy."
            },
            {
                stage: "Complications (Men)",
                description: "Epididymitis (inflammation of the tube attached to the testicle), possible infertility if untreated."
            },
            {
                stage: "Disseminated Gonococcal Infection (DGI)",
                description: "Severe complication where infection spreads to joints and skin, causing fever, arthritis, and skin lesions. Rare but serious."
            }
        ],
        medications: [
            {
                iconSrc: "antibiotics",
                name: "Ceftriaxone",
                description: "500mg intramuscular injection. Only remaining highly effective treatment due to resistance. Cephalosporin antibiotic that inhibits cell wall synthesis."
            },
            {
                iconSrc: "antibiotics",
                name: "Azithromycin",
                description: "1g oral dose (now used cautiously due to resistance). Macrolide antibiotic that inhibits protein synthesis."
            },
            {
                iconSrc: "antibiotics",
                name: "Gentamicin + Azithromycin",
                description: "Alternative regimen (240mg IM gentamicin + 2g oral azithromycin) for penicillin/cephalosporin allergies."
            }
        ],
        sideEffects: [
            {
                title: "Gastrointestinal Distress",
                description: "Doxycycline commonly causes nausea (30% of patients) and vomiting (10%). Taking with food reduces severity."
            },
            {
                title: "Candida Overgrowth",
                description: "Antibiotics disrupt normal flora, leading to 15-20% risk of vaginal yeast infections in women."
            },
            {
                title: "QT Prolongation (Azithromycin)",
                description: "Rare but serious heart rhythm disturbance. Risk increases with pre-existing heart conditions."
            },
            {
                title: "Injection Site Reactions",
                description: "Ceftriaxone causes pain (60% of patients), induration (15%). Warm compresses can help."
            },
            {
                title: "Photosensitivity",
                description: "Doxycycline causes severe sunburn reactions in 20% of users. Requires SPF 30+ sunscreen."
            }
        ],
        sideEffectsSummary: "Gonorrhea treatments are generally well-tolerated but may cause GI upset or injection site reactions. Serious allergic reactions are rare but require immediate attention.",
        medicationSummary: "Gonorrhea requires dual therapy (ceftriaxone 500mg IM + azithromycin 1g PO) due to emerging resistance. Complete all prescribed doses even if symptoms improve to prevent resistance. Retesting in 3 months is crucial.",
        recommendation: "Seek immediate treatment if you experience painful urination or unusual discharge. Notify all sexual partners from the past 60 days. Abstain from sex until 7 days after completing antibiotics.",
        treatmentSummary: "Gonorrhea can be completely cured with appropriate antibiotics. Dual therapy ensures effectiveness against resistant strains and prevents complications like infertility."
    },

    chlamydia: {
        id: "chlamydia",
        name: "Chlamydia",
        symptoms: [
            {
                stage: "Early Stage",
                description: "Often asymptomatic (70% of women, 50% of men). May include painful urination, abnormal genital discharge, and testicular pain in men."
            },
            {
                stage: "Complications (Women)",
                description: "Pelvic inflammatory disease (PID), infertility, ectopic pregnancy. May cause bleeding between periods or after sex."
            },
            {
                stage: "Complications (Men)",
                description: "Epididymitis (testicular pain/swelling), reactive arthritis, and rarely infertility."
            }
        ],
        medications: [
            {
                iconSrc: "antibiotics",
                name: "Azithromycin",
                description: "1g single oral dose. Preferred for adherence. Macrolide antibiotic that accumulates in tissues."
            },
            {
                iconSrc: "antibiotics",
                name: "Doxycycline",
                description: "100mg twice daily for 7 days. More effective for rectal infections. Contraindicated in pregnancy."
            }
        ],
        sideEffects: [
            {
                title: "GI Upset",
                description: "Doxycycline causes nausea in 30% of users, vomiting in 8%. Azithromycin may lead to diarrhea (12%)."
            },
            {
                title: "Vaginal Candidiasis",
                description: "20-25% of women develop yeast infections post-treatment. Probiotics can help restore balance."
            },
            {
                title: "Esophageal Irritation",
                description: "Doxycycline pills may stick and cause ulcers if not taken with sufficient water."
            },
            {
                title: "Headache",
                description: "Azithromycin causes mild-moderate headaches in 10-15% of patients."
            }
        ],
        sideEffectsSummary: "Chlamydia antibiotics can cause mild stomach upset or sun sensitivity. These effects are usually temporary and can be managed with simple measures.",
        medicationSummary: "First-line treatments are azithromycin 1g single dose (85-95% effective) or doxycycline 100mg twice daily for 7 days (95-98% effective). Rectal infections respond better to doxycycline.",
        recommendation: "All sexual partners from the past 60 days must be treated. Women should schedule a test-of-cure 3-4 weeks post-treatment if symptoms persist. Annual screening advised for under 25.",
        treatmentSummary: "Chlamydia is completely curable with antibiotics. Single-dose azithromycin or week-long doxycycline are highly effective. Early treatment prevents complications."
    },

    trichomoniasis: {
        id: "trichomoniasis",
        name: "Trichomoniasis",
        symptoms: [
            {
                stage: "Women",
                description: "Frothy yellow-green discharge, vaginal itching, painful urination, discomfort during sex. Symptoms often worsen during menstruation."
            },
            {
                stage: "Men",
                description: "Usually asymptomatic but may experience urethral itching, irritation after urination/ejaculation, or mild discharge."
            }
        ],
        medications: [
            {
                iconSrc: "antiparasitic",
                name: "Metronidazole",
                description: "Single 2g oral dose or 500mg twice daily for 7 days. Avoid alcohol during and 48hrs after treatment."
            },
            {
                iconSrc: "antiparasitic",
                name: "Tinidazole",
                description: "Single 2g dose alternative with fewer GI side effects. Also requires alcohol avoidance."
            }
        ],
        sideEffects: [
            {
                title: "Disulfiram-like Reaction",
                description: "Metronidazole causes severe vomiting if mixed with alcohol. Avoid all alcohol for 72 hours."
            },
            {
                title: "Metallic Taste",
                description: "Reported by 90% of patients taking metronidazole, often making food taste unpleasant."
            },
            {
                title: "Neurologic Effects",
                description: "High doses may cause peripheral neuropathy. Stop medication if numbness/tingling appears."
            },
            {
                title: "Dark Urine",
                description: "Harmless side effect caused by metronidazole metabolites. Lasts 24-48 hours."
            }
        ],
        sideEffectsSummary: "Antiparasitic treatments may cause metallic taste or GI discomfort. Avoiding alcohol during treatment prevents severe reactions.",
        medicationSummary: "Metronidazole 2g single dose (cure rate 90-95%) or tinidazole 2g single dose (98% cure rate) disrupt parasite DNA. Tinidazole has better tissue penetration.",
        recommendation: "Both partners must be treated simultaneously even if asymptomatic. Avoid sexual contact until both complete treatment. Retest at 3 months.",
        treatmentSummary: "Trichomoniasis is easily cured with antiparasitic medications. Both partners must be treated to prevent reinfection."
    },

    syphilis: {
        id: "syphilis",
        name: "Syphilis",
        symptoms: [
            {
                stage: "Primary",
                description: "Painless chancre at infection site (genitals, anus, mouth) appearing 3-90 days post-exposure."
            },
            {
                stage: "Secondary",
                description: "Rash (often on palms/soles), fever, swollen lymph nodes, patchy hair loss, mucous membrane lesions."
            },
            {
                stage: "Latent/Tertiary",
                description: "Years later: organ damage (heart, brain, nerves), paralysis, dementia, blindness. Fatal if untreated."
            }
        ],
        medications: [
            {
                iconSrc: "antibiotics",
                name: "Benzathine Penicillin G",
                description: "2.4 million units IM for early syphilis. 3 weekly doses for late syphilis. Only effective for neurosyphilis."
            },
            {
                iconSrc: "antibiotics",
                name: "Doxycycline",
                description: "100mg twice daily for 14-28 days for penicillin-allergic patients. Less effective than penicillin."
            }
        ],
        sideEffects: [
            {
                title: "Jarisch-Herxheimer Reaction",
                description: "Occurs in 45% of primary cases - fever, chills, headache from cytokine release."
            },
            {
                title: "Anaphylaxis",
                description: "Penicillin allergy occurs in 1-10% of patients. Have epinephrine available."
            },
            {
                title: "Procaine Reaction",
                description: "Fear of impending death if procaine penicillin accidentally injected intravenously."
            },
            {
                title: "GI Distress (Doxycycline)",
                description: "Occurs in 30% of patients taking doxycycline for late syphilis."
            }
        ],
        sideEffectsSummary: "Penicillin injections may cause temporary soreness. Some patients experience flu-like symptoms as bacteria die during treatment.",
        medicationSummary: "Benzathine penicillin G remains 95% effective for early syphilis. It maintains treponemicidal levels for 3 weeks. Doxycycline is second-line for penicillin-allergic patients.",
        recommendation: "All sexual partners from the past 90 days need evaluation. Repeat RPR titers at 6, 12, and 24 months. HIV testing is mandatory.",
        treatmentSummary: "Penicillin remains the gold standard for syphilis treatment, with near 100% efficacy in early stages. Late-stage requires longer treatment."
    },

    herpes: {
        id: "herpes",
        name: "Genital Herpes",
        symptoms: [
            {
                stage: "First Outbreak",
                description: "Painful blisters/ulcers on genitals/anus, flu-like symptoms, swollen lymph nodes. Lasts 2-4 weeks."
            },
            {
                stage: "Recurrent Outbreaks",
                description: "Milder sores, tingling/itching before lesions appear. Triggers include stress, illness, or sun exposure."
            },
            {
                stage: "Asymptomatic Shedding",
                description: "Virus can spread even without visible sores. 70% transmissions occur during this phase."
            }
        ],
        medications: [
            {
                iconSrc: "antivirals",
                name: "Valacyclovir",
                description: "1g twice daily for outbreaks, 500mg daily for suppression. Better absorption than acyclovir."
            },
            {
                iconSrc: "antivirals",
                name: "Acyclovir",
                description: "400mg 3x daily for outbreaks, 400mg 2x daily for suppression. Affordable generic option."
            }
        ],
        sideEffects: [
            {
                title: "Renal Toxicity",
                description: "High-dose IV acyclovir may cause crystalline nephropathy. Maintain hydration."
            },
            {
                title: "CNS Effects",
                description: "3% report dizziness or confusion with valacyclovir, especially in elderly."
            },
            {
                title: "Hematologic Changes",
                description: "Chronic use may cause mild neutropenia (5% of patients)."
            },
            {
                title: "GI Intolerance",
                description: "Nausea occurs in 15% of acyclovir users, usually mild."
            }
        ],
        sideEffectsSummary: "Herpes antivirals are generally well-tolerated, with headaches being most common. Staying hydrated helps minimize potential kidney strain.",
        medicationSummary: "Valacyclovir offers 70-80% reduction in outbreaks. It converts to acyclovir with 3-5x greater bioavailability. Start therapy within 72 hours of prodrome.",
        recommendation: "Daily suppression reduces transmission risk by 48%. Use condoms and avoid sex during outbreaks. Inform obstetric providers if pregnant.",
        treatmentSummary: "While incurable, daily antivirals suppress outbreaks and reduce transmission risk by 50%. Early treatment shortens healing time."
    },

    "hepatitis-b": {
        id: "hepatitis-b",
        name: "Hepatitis B",
        symptoms: [
            {
                stage: "Acute Infection",
                description: "Fatigue, nausea, abdominal pain, jaundice (yellow skin/eyes), dark urine. 30-50% of adults show symptoms."
            },
            {
                stage: "Chronic Infection",
                description: "Long-term liver damage (cirrhosis, liver cancer). Often no symptoms until advanced disease."
            }
        ],
        medications: [
            {
                iconSrc: "antivirals",
                name: "Tenofovir",
                description: "First-line oral antiviral. Suppresses viral replication with high efficacy and low resistance risk."
            },
            {
                iconSrc: "antivirals",
                name: "Entecavir",
                description: "Potent antiviral for chronic HBV. Rare resistance when used as first-line therapy."
            },
            {
                iconSrc: "immunotherapy",
                name: "Peginterferon",
                description: "Injectable treatment for 48 weeks. Can achieve functional cure but has significant side effects."
            }
        ],
        sideEffects: [
            {
                title: "Renal Impairment",
                description: "Tenofovir DF causes 8-12% decline in eGFR over 5 years. Switch to TAF if eGFR drops below 60."
            },
            {
                title: "Bone Density Loss",
                description: "Tenofovir DF associated with 2-4% bone mineral density reduction in first year."
            },
            {
                title: "Lactic Acidosis",
                description: "Rare but fatal complication (0.1% risk) with nucleoside analogs."
            },
            {
                title: "Depression (Peginterferon)",
                description: "Occurs in 30% of patients, requiring antidepressant therapy in 15%."
            }
        ],
        sideEffectsSummary: "HBV antivirals may affect kidney function with long-term use. Interferon treatment can cause more significant side effects requiring monitoring.",
        medicationSummary: "First-line oral antivirals suppress viral load in 80% after 5 years. Peginterferon offers finite course with 5-10% chance of functional cure.",
        recommendation: "Household/sexual contacts need testing. Vaccinate all susceptible individuals. Avoid alcohol. Monitor LFTs and viral load every 6 months.",
        treatmentSummary: "Chronic hepatitis B requires lifelong antiviral therapy to suppress viral replication and prevent liver damage. Newer drugs have high efficacy."
    },

    genitalWarts: {
        id: "genital-warts",
        name: "Genital Warts (HPV)",
        symptoms: [
            {
                stage: "Visible Warts",
                description: "Flesh-colored, cauliflower-like growths on genitals/anus. May itch but usually painless."
            },
            {
                stage: "Subclinical Infection",
                description: "No visible warts but virus present. Detected via Pap smear or HPV DNA test."
            }
        ],
        medications: [
            {
                iconSrc: "topical",
                name: "Imiquimod Cream",
                description: "Immune-response modifier applied 3x/week. Stimulates local immune system to clear warts."
            },
            {
                iconSrc: "topical",
                name: "Podophyllotoxin",
                description: "Self-applied solution that destroys wart tissue. Used for small external warts."
            },
            {
                iconSrc: "procedure",
                name: "Cryotherapy",
                description: "Freezing warts with liquid nitrogen. Office procedure requiring multiple sessions."
            }
        ],
        sideEffects: [
            {
                title: "Local Skin Reactions",
                description: "Imiquimod causes erythema (67%), erosion (30%). Usually indicates immune response."
            },
            {
                title: "Flu-like Symptoms",
                description: "20% report fever and fatigue with imiquimod due to cytokine release."
            },
            {
                title: "Pain (Cryotherapy)",
                description: "85% experience moderate pain during procedure. Blistering occurs in 30%."
            },
            {
                title: "Pigment Changes",
                description: "Hypopigmentation (15%) or hyperpigmentation (10%) may persist for months."
            }
        ],
        sideEffectsSummary: "Wart treatments may cause skin irritation or temporary discomfort. These local reactions typically resolve as treatment progresses.",
        medicationSummary: "Patient-applied therapies have 35-50% clearance rates. Cryotherapy has 60-80% initial clearance but 20-30% recurrence. Combination approaches often needed.",
        recommendation: "Sexual partners should be examined but treatment isn't required unless warts present. Women need routine cervical cancer screening.",
        treatmentSummary: "HPV warts can be removed through various methods, but the virus may remain dormant. The immune system typically clears HPV within 2 years."
    },

    ureaplasma: {
        id: "ureaplasma",
        name: "Ureaplasma",
        symptoms: [
            {
                stage: "Men",
                description: "Urethral discharge, burning urination. Linked to nongonococcal urethritis (NGU) and prostatitis."
            },
            {
                stage: "Women",
                description: "May cause cervicitis, pelvic pain, and contribute to infertility. Often asymptomatic."
            },
            {
                stage: "Pregnancy Risks",
                description: "Associated with preterm birth, low birth weight, and neonatal respiratory infections."
            }
        ],
        medications: [
            {
                iconSrc: "antibiotics",
                name: "Doxycycline",
                description: "100mg twice daily for 7-14 days. First-line treatment but increasing resistance reported."
            },
            {
                iconSrc: "antibiotics",
                name: "Azithromycin",
                description: "1g single dose or 500mg daily for 3-5 days. Alternative for doxycycline-resistant cases."
            },
            {
                iconSrc: "antibiotics",
                name: "Moxifloxacin",
                description: "400mg daily for 7-10 days for resistant cases. Avoid in pregnancy and under age 18."
            }
        ],
        sideEffects: [
            {
                title: "QT Prolongation",
                description: "Moxifloxacin increases QT interval. Avoid in patients with baseline QTc >450ms."
            },
            {
                title: "Tendon Rupture",
                description: "Fluoroquinolones cause tendonitis/rupture in 0.1% of patients, especially over 60."
            },
            {
                title: "Photosensitivity",
                description: "Doxycycline causes severe sun reactions in 20% of users. SPF 50+ essential."
            },
            {
                title: "Pseudomembranous Colitis",
                description: "All antibiotics may cause C. difficile infection (1-2% risk)."
            }
        ],
        sideEffectsSummary: "Ureaplasma antibiotics can cause sun sensitivity or digestive issues. More serious side effects like heart rhythm changes are rare but important.",
        medicationSummary: "Doxycycline (50-60% efficacy) is first-line. Azithromycin (60-70% efficacy) is alternative. Moxifloxacin (75-85% efficacy) is reserved for resistant cases.",
        recommendation: "Treatment only for symptomatic patients or prior to procedures. Partners should be treated if symptomatic. Report treatment failures for resistance testing.",
        treatmentSummary: "Ureaplasma treatment is recommended when symptomatic. Doxycycline is first-line, with azithromycin alternatives. Antibiotic resistance is growing."
    },

    mycoplasma: {
        id: "mycoplasma",
        name: "Mycoplasma Genitalium",
        symptoms: [
            {
                stage: "Men",
                description: "Watery urethral discharge, dysuria. Leading cause of persistent/recurrent NGU."
            },
            {
                stage: "Women",
                description: "Cervicitis, abnormal bleeding, pelvic inflammatory disease (PID). Often misdiagnosed."
            }
        ],
        medications: [
            {
                iconSrc: "antibiotics",
                name: "Doxycycline + Azithromycin",
                description: "Dual therapy: 7 days doxycycline followed by 2.5g azithromycin (500mg day 1, then 250mg daily)."
            },
            {
                iconSrc: "antibiotics",
                name: "Moxifloxacin",
                description: "400mg daily for 7-14 days for macrolide-resistant cases. Second-line therapy."
            }
        ],
        sideEffects: [
            {
                title: "Tendon Damage",
                description: "Moxifloxacin causes tendon pain in 5% of users, with rupture risk increasing after age 60."
            },
            {
                title: "Central Nervous System",
                description: "15% report insomnia, nightmares, or dizziness with fluoroquinolones."
            },
            {
                title: "Hypersensitivity",
                description: "Azithromycin causes rash in 3% of users. Severe allergic reactions possible."
            },
            {
                title: "GI Disturbances",
                description: "Doxycycline causes nausea (25%), vomiting (10%), and esophagitis."
            }
        ],
        sideEffectsSummary: "Mycoplasma treatments may cause GI upset. Fluoroquinolones carry small risk of tendon issues and should be used with caution.",
        medicationSummary: "Dual therapy achieves 85-90% cure. Moxifloxacin is second-line (90-95% cure). Resistance to macrolides exceeds 50% in some regions.",
        recommendation: "Screen for M. genitalium in persistent urethritis/cervicitis. Treat all partners concurrently. Return for test-of-cure 3-4 weeks post-treatment.",
        treatmentSummary: "Mycoplasma genitalium requires tailored antibiotic therapy due to high resistance rates. Dual therapy is first-line, with moxifloxacin reserved."
    }
};