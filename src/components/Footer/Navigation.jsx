import React from "react";
import FooterNavigation from "./FooterNavigation";

export default function Navigation({ footerLinks }) {
  return (
    <div className="mb-8 md:mb-0">
      <ul className="space-y-3">
        <FooterNavigation items={footerLinks} />
      </ul>
    </div>
  );
}
