import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="w-full max-w-[1440px] h-[72px] px-[64px] py-[20px] flex justify-between items-center bg-gradient-to-r from-[#1B15B0] via-[#0490DA] to-[#CDE300] shadow-[0_7px_5.8px_rgba(0,0,0,0.13)]">
      {/* Logo + Tagline */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="w-[40px] h-[40px] object-contain" />
        <h1 className="text-lg font-semibold text-white leading-[32px] tracking-[-0.02em]">
          Designed by doctors
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-6 font-medium text-[16px]">
        <a
          href="#"
          className="text-white hover:underline leading-[24px] tracking-[-0.02em]"
        >
          PrEP
        </a>
        <a
          href="#"
          className="text-white hover:underline leading-[24px] tracking-[-0.02em]"
        >
          Education
        </a>
        <a
          href="#"
          className="text-white hover:underline leading-[24px] tracking-[-0.02em]"
        >
          Medications
        </a>
        <a
          href="#"
          className="text-white hover:underline leading-[24px] tracking-[-0.02em]"
        >
          Cart
        </a>
        <button className="border border-white text-white px-4 py-1 rounded font-medium hover:bg-white hover:bg-opacity-20 transition-colors">
          Login
        </button>
      </nav>
    </header>
  );
}
