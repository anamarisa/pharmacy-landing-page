import React from "react";
import { Link } from "react-router-dom";

export default function HorizontalNavigation({
  items,
  className = "",
  itemClassName = "",
  mobileMode = false
}) {
  return (
    <nav className={`${mobileMode ? '' : 'flex items-center gap-6'} ${className}`}>
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.href}
          className={`
            font-medium cursor-pointer transition whitespace-nowrap
            ${mobileMode ? 
              `text-ruby text-xl font-medium w-full text-center py-2 hover:text-black ${itemClassName}` : 
              `text-sm md:text-[16px] leading-[24px] tracking-[-0.02em] ${itemClassName}`
            }
          `}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}