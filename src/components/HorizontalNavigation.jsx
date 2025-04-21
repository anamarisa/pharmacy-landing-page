import React from "react";
import { Link } from "react-router-dom";

export default function HorizontalNavigation({ items, className = "" }) {
  return (
    <nav className={`flex items-center gap-6 ${className}`}>
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.href}
          className="font-medium cursor-pointer text-white text-sm md:text-[16px] leading-[24px] tracking-[-0.02em] transition whitespace-nowrap"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
