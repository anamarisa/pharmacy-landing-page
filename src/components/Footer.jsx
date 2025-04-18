import React from "react";
import FooterNavigation from "./FooterNavigation"; // Import the new component
import Navigation from "./NavItem";

export default function Footer() {
  const footerLinks = [
    { label: "Privacy", href: "#" },
    { label: "Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
  ];

  return (
    <footer className="text-white p-16 bg-gradient-to-r from-gray-900 to-gray-900/90">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Brand Section */}
          <div className="font-inter mb-8 md:mb-0">
            <h4 className="font-semibold text-[40px] leading-[28px] tracking-[-0.02em] mb-2">
              F* STI
            </h4>
            <p className="text-white font-light text-[16px] leading-[24px] tracking-[-0.02em]">
              F Health Worries.
            </p>
          </div>

          {/* Navigation Section */}
          <Navigation />
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white font-light text-[16px] leading-[24px] tracking-[-0.02em] mb-4 md:mb-0">
            ©2025 F* STI. All Rights Reserved.
          </p>
          <FooterNavigation items={footerLinks} />
        </div>
      </div>
    </footer>
  );
}
