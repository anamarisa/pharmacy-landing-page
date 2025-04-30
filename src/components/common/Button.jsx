import React from "react";
import clsx from "clsx";

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseStyles =
    "cursor-pointer h-[36px] text-[14px] md:text-[16px] font-semibold rounded-[6px] px-2 py-5 md:px-3 md:py-6 gap-[8px] flex items-center justify-center transition-all duration-300";

  const variants = {
    primary:
      "cursor-pointer w-[180px] bg-gradient-to-b from-ruby to-[#64202B] text-white shadow-md hover:opacity-90",
    secondary: "w-[112px] bg-[#F5F3FF] text-ruby bg-light-red",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
