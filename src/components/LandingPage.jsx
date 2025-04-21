import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import ComparisonTable from "./ComparisonTable";
import Footer from "./Footer";
import Header from "./Header";
import HeroesSection from "./HeroesSection";
import HeroSection from "./HeroSection";
import MediaLogosSection from "./MediaLogosSection";
import PrepGuide from "./PrepGuide";
import PrivacyAccordion from "./PrivacyAccordion";
import STIAwareness from "./STI/STIAwareness";
import SubscriptionSection from "./SubscriptionSection";
import Testimonials from "./Testimonials";

export default function LandingPage() {
  const comparisonRef = useRef(null);

  return (
    <>
      <Header />
      <HeroSection
        scrollToComparison={() =>
          comparisonRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <STIAwareness />
      <PrepGuide />
      <PrivacyAccordion />
      <MediaLogosSection />
      <div ref={comparisonRef}>
        <ComparisonTable />
      </div>
      <HeroesSection />
      <Testimonials />
      <SubscriptionSection />
      <Footer />
    </>
  );
}
