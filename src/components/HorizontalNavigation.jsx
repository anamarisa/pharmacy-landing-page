import React from "react";

const HorizontalNavItem = ({ children }) => {
  return (
    <a
      href="#"
      className="text-gray-500 hover:text-white text-sm transition whitespace-nowrap"
    >
      {children}
    </a>
  );
};

export default function HorizontalNavigation() {
  return (
    <div className="flex space-x-4">
      <HorizontalNavItem>Privacy</HorizontalNavItem>
      <HorizontalNavItem>Policy</HorizontalNavItem>
      <HorizontalNavItem>Terms & Conditions</HorizontalNavItem>
    </div>
  );
}
