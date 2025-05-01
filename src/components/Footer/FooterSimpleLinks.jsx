import React from "react";
import { Link } from "react-router-dom";

export default function FooterSimpleLinks({ items, className = "" }) {
  return (
    <div className={`flex flex-col md:flex-row gap-x-6 gap-y-6 ${className}`}>
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.href || "#"}
          className="text-white font-normal text-[16px] leading-[24px] tracking-[-0.02em] transition whitespace-nowrap"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
