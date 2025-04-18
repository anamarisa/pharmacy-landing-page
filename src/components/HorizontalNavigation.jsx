import React from "react";

export default function HorizontalNavigation({ items, className = "" }) {
  return (
    <nav className={`flex items-center gap-6 ${className}`}>
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href || "#"}
          className="font-medium text-white text-sm md:text-[16px] leading-[24px] tracking-[-0.02em] transition whitespace-nowrap"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
