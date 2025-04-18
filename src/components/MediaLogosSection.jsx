import washingtonTimes from "../assets/logo/washington.png";
import forbes from "../assets/logo/forbes.png";
import success from "../assets/logo/success.png";
import usaToday from "../assets/logo/usa.png";

export default function MediaLogosSection() {
  const mediaLogos = [
    { src: washingtonTimes, alt: "The Washington Times" },
    { src: forbes, alt: "Forbes" },
    { src: success, alt: "Success" },
    { src: usaToday, alt: "USA TODAY" },
  ];

  return (
    <section className="bg-orange-400 py-12 my-30 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {mediaLogos.map((media, index) => (
            <div
              key={index}
              className="w-[160px] h-[80px] flex items-center justify-center"
            >
              <img
                src={media.src}
                alt={media.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
