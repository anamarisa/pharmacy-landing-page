import React from "react";
import { Link } from "react-router-dom";

export default function FooterNavigation({ items, className = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Link
            to={item.href || "#"}
            className="text-white font-normal text-[16px] leading-[24px] tracking-[-0.02em] transition whitespace-nowrap"
          >
            {item.label}
          </Link>
          {index < items.length - 1 && (
            <span className="text-white mx-2">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
