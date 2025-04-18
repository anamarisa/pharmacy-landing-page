import Slider from "react-slick";
import Button from "./common/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useEffect } from "react";
import image from "../assets/images/slider-images/image.png";

export default function HeroSection() {
  const keywordSliderRef = useRef(null);
  const subtitleSliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (keywordSliderRef.current && subtitleSliderRef.current) {
        keywordSliderRef.current.slickNext();
        subtitleSliderRef.current.slickNext();
      }
    }, 4000); // 3000 autoplaySpeed + 1000 transition speed

    return () => clearInterval(interval);
  }, []);

  const textSliderSettings = {
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    cssEase: "ease-in-out",
  };

  const imageSliderSettings = {
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 3000,
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    cssEase: "linear",
  };

  const imageSliderSettingsReversed = {
    ...imageSliderSettings,
    rtl: true,
  };

  const textContent = [
    {
      keyword: "HIV",
      subtitle: "Fight STIs, take control now.",
    },
    {
      keyword: "STI",
      subtitle: "Fight HIV, protect lives everywhere.",
    },
  ];

  const column1 = [
    "https://images.unsplash.com/photo-1741851374655-3911c1b0e95a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDh8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1741664256890-a41addb4d7ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1744762561513-4388d8326a74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1744638628542-12578d73179b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1741462166411-b94730c55171?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1741974865142-2c5b965bab06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4NXx8fGVufDB8fHx8fA%3D%3D",
  ];

  const column2 = [
    "https://images.unsplash.com/photo-1732165783074-b0f7c123982b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDB8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1744835450002-a4da9a6cc552?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1744167602287-77dc1cabd4e6?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1744877478622-a78c7a3336f6?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1744361448609-c5d3417f00ce?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1744723852488-ebb3e2541cca?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <section className="bg-white text-black px-14 flex justify-between gap-6 items-center max-w-[1440px] mx-auto mb-20">
      {/* Left Side Content */}
      <div>
        <div className="inline-flex items-center rounded-[4px] p-[4px_12px] gap-1 border border-[#F5F3FF] bg-[#F5F3FF] mb-4">
          <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.02em] text-[#6A31CE]">
            F HEALTH WORRIES, SAY HELLO TO GOOD HEALTH
          </p>
        </div>

        {/* F* [Sliding Word] */}
        <div className="flex items-center h-[87px] overflow-hidden">
          <h2 className="font-manrope font-semibold text-dark-violet text-[64px] leading-[87px] mr-2">
            F*
          </h2>
          <Slider
            ref={keywordSliderRef}
            {...{ ...textSliderSettings, autoplay: false }}
            className="w-[120px]"
          >
            {textContent.map((item, index) => (
              <div key={index}>
                <h2 className="font-manrope font-semibold text-dark-violet text-[64px] leading-[87px]">
                  {item.keyword}
                </h2>
              </div>
            ))}
          </Slider>
        </div>

        <h3 className="font-manrope font-semibold text-[48px] leading-[100px] tracking-[-0.04em]">
          Empower Your Health Journey
        </h3>
        {/* Subtitle slider */}
        <div className="h-[32px] overflow-hidden mb-4">
          <Slider
            ref={subtitleSliderRef}
            {...{ ...textSliderSettings, autoplay: false }}
            className="w-[500px]"
          >
            {textContent.map((item, index) => (
              <div key={index}>
                <p className="font-inter text-[20px] leading-[28px] max-w-[500px] text-black/70 tracking-[-0.03em] font-normal">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </Slider>
        </div>

        {/* Static Subtitle */}
        <p className="font-inter font-normal text-[12px] leading-[16px] tracking-[-0.02em] text-[#0A0A0A] opacity-30 mb-10">
          99% of Patients Pay $0* For The Medication.*
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <Button>Get Started</Button>
          <Button variant="secondary">Why F*STI</Button>
        </div>
      </div>

      {/* Dual Column Vertical Sliders */}
      <div className="grid grid-cols-2 gap-4 h-[532px] relative">
  {/* Column 1 */}
  <div className="w-[320px] h-full overflow-hidden">
    <Slider {...imageSliderSettings}>
      {column1.map((src, index) => (
        <div key={index} className="p-1">
          <div className="relative w-[320px] h-[300px]">
            <div className="absolute inset-0 overflow-hidden rounded-2xl border-2 border-red-400 border-r-[2px]">
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>

  {/* Column 2 */}
  <div className="w-[320px] h-full overflow-hidden">
    <Slider {...imageSliderSettingsReversed}>
      {column2.map((src, index) => (
        <div key={index} className="p-1">
          <div className="relative w-[320px] h-[300px]">
            <div className="absolute inset-0 overflow-hidden rounded-2xl border-2 border-cyan-200 border-r-[2px]">
              <img
                src={src}
                alt={`Slide Reverse ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>

  {/* Gradient Overlay */}
  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
</div>

    </section>
  );
}
