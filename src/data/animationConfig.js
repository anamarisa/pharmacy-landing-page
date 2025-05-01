// src/data/animationConfig.js
import hivAnimation from "../animations/hiv.json";
import gonorheaAnimation from "../animations/gonorhea.json";
import chlamydiaAnimation from "../animations/chlamydia.json";
import syphilisAnimation from "../animations/syphilis.json";
import genitalAnimation from "../animations/genital.json";
import herpesAnimation from "../animations/herpes.json";
import hpvAnimation from "../animations/hpv.json";
import trichomonasAnimation from "../animations/trichomonas.json";
import mycoplasmaAnimation from "../animations/mycoplasma.json";
import ureaplasmaAnimation from "../animations/ureaplasma.json";

export const lottieAnimations = {
  HIV: hivAnimation,
  Gonorhea: gonorheaAnimation,
  Chlamydia: chlamydiaAnimation,
  Syphilis: syphilisAnimation,
  Herpes: genitalAnimation,
  "Hepatitis B": herpesAnimation,
  "Genital Warts": hpvAnimation,
  Trichomoniasis: trichomonasAnimation,
  Mycoplasma: mycoplasmaAnimation,
  Ureaplasma: ureaplasmaAnimation,
};

export const animationStyles = {
  HIV: {
    bgGradient: "bg-gradient-to-br from-[#334155] to-[#475569]",
    size: { width: "220px", height: "220px" },
  },
  Gonorhea: {
    bgGradient: "bg-gradient-to-br from-[#065F46] to-[#059669]",
    size: { width: "160px", height: "160px" },
  },
  Chlamydia: {
    bgGradient: "bg-gradient-to-br from-[#292524] to-[#57534E]",
    size: { width: "180px", height: "180px" },
  },
  Trichomoniasis: {
    bgGradient: "bg-gradient-to-br from-[#EA580C] to-[#FB923C]",
    size: { width: "240px", height: "240px" },
  },
  Syphilis: {
    bgGradient: "bg-gradient-to-br from-[#2563EB] to-[#3B82F6]",
    size: { width: "120px", height: "100px" },
  },
  Herpes: {
    bgGradient: "bg-gradient-to-br from-[#7C3AED] to-[#5B21B6]",
    size: { width: "280px", height: "280px" },
  },
  "Hepatitis B": {
    bgGradient: "bg-gradient-to-br from-[#422006] to-[#7F3E0C]",
    size: { width: "200px", height: "200px" },
  },
  "Genital Warts": {
    bgGradient: "bg-gradient-to-br from-[#1A2E05] to-[#4D7C0F]",
    size: { width: "280px", height: "280px" },
  },
  Ureaplasma: {
    bgGradient: "bg-gradient-to-br from-[#BE123C] to-[#E11D48]",
    size: { width: "190px", height: "190px" },
  },
  Mycoplasma: {
    bgGradient: "bg-gradient-to-br from-[#DC2626] to-[#6D0909]",
    size: { width: "280px", height: "280px" },
  },
};
