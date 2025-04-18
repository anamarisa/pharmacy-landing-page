export default function STIAwareness() {
  return (
    <section className="px-14 py-6">
      <div className="flex justify-between items-center mb-8">
        <h3 className="font-manrope text-[36px] leading-[46px] tracking-[-0.03em] text-xl font-semibold">
          Understanding the Risks,{" "}
          <span>
            <br />
            Taking the Right Steps
          </span>
        </h3>
        <p className="font-inter text-[18px] leading-[28px] font-normal tracking-[-0.03em] text-gray-600">
          Educate yourself about common STIs to{" "}
          <span>
            <br />
            stay safe and make informed decisions.
          </span>
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
        {[
          "HIV",
          "Gonorrhea",
          "Chlamydia",
          "Trichomoniasis",
          "Syphilis",
          "Herpes",
          "Hepatitis B",
          "Genital Warts",
          "Ureaplasma",
          "Mycoplasma",
        ].map((name) => (
          <div
            key={name}
            className="bg-gray-100 p-4 text-center rounded shadow"
          >
            <div className="h-16 bg-gray-300 rounded mb-2" />
            <p className="font-medium">{name}</p>
            <a href="#" className="text-sm text-purple-600 underline">
              See More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
