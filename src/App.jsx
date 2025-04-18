import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import STIAwareness from "./components/STIAwareness";
import PrepGuide from "./components/PrepGuide";
import PrivacyAccordion from "./components/PrivacyAccordion";
import ComparisonTable from "./components/ComparisonTable";
import HeroesSection from "./components/HeroesSection";
import Testimonials from "./components/Testimonials";
import SubscriptionSection from "./components/SubscriptionSection";
import Footer from "./components/Footer";
import MediaLogosSection from "./components/MediaLogosSection";
import "./index.css";

export default function LandingPage() {
  return (
    <div className="font-sans text-black">
      <Header />
      <HeroSection />
      <STIAwareness />
      <PrepGuide />
      <PrivacyAccordion />
      <MediaLogosSection />
      <ComparisonTable />
      <HeroesSection />
      <Testimonials />
      <SubscriptionSection />
      <Footer />
    </div>
  );
}
