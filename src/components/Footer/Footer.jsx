import React from "react";
import FooterNavigation from "./FooterNavigation";
import FooterSimpleLinks from "./FooterSimpleLinks";

export default function Footer() {
  const footerLinks = [
    { label: "Privacy", href: "#" },
    { label: "Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
  ];

  const simpleLinks = [
    { label: "PrEP", href: "/" },
    { label: "Blogs", href: "/blog" },
    { label: "Medications", href: "#" },
    { label: "Login", href: "#" },
    { label: "Cart", href: "#" },
  ];

  return (
    <footer className="text-white px-5 py-16 lg:px-[64px] mt-[80px] md:mt-[152px] bg-gradient-to-r from-gray-900 to-gray-900/90">
      <div className="flex flex-col md:flex-row justify-between text-center md:text-left">
        {/* Brand Section */}
        <div className="font-inter mb-8 md:mb-0">
          <h4 className="font-semibold text-[40px] leading-[28px] tracking-[-0.02em] mb-2">
            F*STI
          </h4>
        </div>

        {/* Navigation Section */}
        <FooterSimpleLinks items={simpleLinks} />
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-white font-light text-[16px] leading-[24px] tracking-[-0.02em] mb-4 md:mb-0">
          ©2025 F*STI. All Rights Reserved.
        </p>
        <FooterNavigation items={footerLinks} />
      </div>
    </footer>
  );
}
