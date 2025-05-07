import React, { useRef } from "react";
import ComparisonTable from "./ComparisonTable";
import Footer from "./Footer/Footer";
import Header from "./Header";
import HeroesSection from "./HeroesSection";
import HeroSection from "./HeroSection";
import MediaLogosSection from "./MediaLogosSection";
import PrepGuide from "./PrepGuide";
import PrivacyAccordion from "./PrivacyAccordion";
import STIAwareness from "./STI/STIAwareness";
import SubscriptionSection from "./SubscriptionSection";
import Testimonials from "./Testimonials";
import GetTestedSection from "./GetTested";

export default function LandingPage() {
  const comparisonRef = useRef(null);
  const privacyRef = useRef(null);

  return (
    <>
      <Header />
      <HeroSection
        scrollToComparison={() =>
          comparisonRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToPrivacy={() =>
          privacyRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <STIAwareness />
      <PrepGuide />
      <div ref={privacyRef}>
        <PrivacyAccordion />
      </div>
      <MediaLogosSection />
      <GetTestedSection />
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
