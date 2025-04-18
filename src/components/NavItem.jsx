import React from "react";

const NavItem = ({ children }) => {
  return (
    <li className="w-[93px] h-[24px]">
      <a
        href="#"
        className="text-white hover:text-white transition font-inter font-light text-[16px] leading-[24px] tracking-normal"
      >
        {children}
      </a>
    </li>
  );
};

export default function Navigation() {
  return (
    <div className="mb-8 md:mb-0">
      <h5 className="font-semibold text-[18px] leading-[28px] tracking-[-0.02em] mb-4">
        Navigation
      </h5>
      <ul className="space-y-3">
        <NavItem>PrEP</NavItem>
        <NavItem>Education</NavItem>
        <NavItem>Medications</NavItem>
        <NavItem>Login</NavItem>
        <NavItem>Cart</NavItem>
      </ul>
    </div>
  );
}
