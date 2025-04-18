import React from "react";
import logo from "../assets/logo.png";
import cartIcon from "../assets/cart.png";
import HorizontalNavigation from "./HorizontalNavigation";

export default function Header() {
  const navItems = [
    { label: "PrEP", href: "#" },
    { label: "Education", href: "#" },
    { label: "Medications", href: "#" },
  ];

  return (
    <header className="w-full shadow-lg h-[72px] px-4 md:px-[64px] py-[20px] flex justify-between items-center bg-gradient-to-r from-[#1B15B0] via-[#0490DA] to-[#CDE300] z-100">
      {/* Logo + Tagline */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Logo"
          className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] object-contain"
        />
        <h1 className="text-sm md:text-lg font-semibold text-white leading-[32px] tracking-[-0.02em]">
          Designed by doctors
        </h1>
      </div>

      <div className="flex items-center justify-end gap-6">
        {/* Navigation */}
        <HorizontalNavigation
          items={navItems}
          className="hidden md:flex"
        />

        {/* Cart + Login */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="w-[34px] h-[34px] cursor-pointer flex items-center justify-center"
            onClick={() => alert("Cart clicked")}
          >
            <img
              src={cartIcon}
              alt="Cart"
              className="w-10 h-10 object-contain"
            />
          </button>

          <button className="border cursor-pointer border-white text-white px-4 py-1 rounded font-medium text-sm md:text-[16px] leading-[24px] tracking-[-0.02em] hover:opacity-80 transition">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
