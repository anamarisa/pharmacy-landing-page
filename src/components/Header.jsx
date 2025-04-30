import React, { useState } from "react";
import logo from "../assets/icons/header/logo.svg";
import menu from "../assets/icons/header/menu.svg";
import cartIcon from "../assets/icons/header/cart.svg";
import HorizontalNavigation from "./HorizontalNavigation";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "PrEP", href: "/" },
    { label: "Blogs", href: "/blog" },
    { label: "Medications", href: "#" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full shadow-lg h-[72px] px-4 md:px-[64px] py-[20px] flex justify-between items-center bg-ruby z-100">
      {/* Logo + Tagline */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Logo"
          className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] object-contain"
        />
        <Link
          to="/"
          className="text-sm md:text-lg font-semibold text-white leading-[32px] tracking-[-0.02em]"
        >
          Designed by doctors
        </Link>
      </div>

      <div className="flex items-center justify-end gap-6">
        {/* Navigation (Mobile only, Modal style) */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-50 bg-white bg-opacity-30 backdrop-blur-sm"
            onClick={toggleMenu}
          >
            <div
              className="absolute inset-0 bg-white flex flex-col items-center justify-center p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-ruby hover:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <HorizontalNavigation
                items={navItems}
                className="flex flex-col items-center gap-8 w-full"
                itemClassName="text-xl font-medium w-full text-center py-2"
                mobileMode={true}
              />
            </div>
          </div>
        )}

        {/* Horizontal Navigation (Desktop only) */}
        <HorizontalNavigation
          items={navItems}
          className="hidden md:flex"
          itemClassName="text-white hover:text-light-red"
        />

        {/* Cart + Login */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="w-[34px] h-[34px] cursor-pointer items-center justify-center hidden md:flex"
          >
            <img
              src={cartIcon}
              alt="Cart"
              className="w-10 h-10 object-contain"
            />
          </button>

          <button className="hidden md:inline border cursor-pointer border-white text-white px-4 py-1 rounded font-medium text-sm md:text-[16px] leading-[24px] tracking-[-0.02em] hover:opacity-80 transition">
            Login
          </button>

          {/* Menu Icon */}
          <button onClick={toggleMenu} className="md:hidden">
            <img
              src={menu}
              alt="Menu"
              className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] object-contain"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
