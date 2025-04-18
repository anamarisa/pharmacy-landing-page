import HorizontalNavigation from "./HorizontalNavigation";
import Navigation from "./NavItem";

export default function Footer() {
  return (
    <footer className="bg-black text-white p-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Brand Section */}
          <div className="font-inter mb-8 md:mb-0">
            <h4 className="font-semibold text-[40px] leading-[28px] tracking-[-0.02em] mb-2">
              F* STI
            </h4>
            <p className="text-gray-400 font-normal text-[16px] leading-[24px] tracking-[-0.02em]">
              F Health Worries.
            </p>
          </div>

          {/* Navigation Section */}
          <Navigation />
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 font-normal text-[16px] leading-[24px] tracking-[-0.02em] mb-4 md:mb-0">
            ©2025 F* STI. All Rights Reserved.
          </p>
          <HorizontalNavigation />
        </div>
      </div>
    </footer>
  );
}
