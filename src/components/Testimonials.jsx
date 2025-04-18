import Slider from "react-slick";
import QuoteIcon from "../assets/quote.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const testimonialsRow1 = [
    `F*** HIV, I don’t have to go to CVS anymore, F* STI delivers to my doorstep discreetly.`,
    `I referred my partner and he loved it, they don’t judge and offer support for any condition.`,
    `F* STI’s program gave us the right guidance and support to overcome gonorrhea.`,
  ];

  const testimonialsRow2 = [
    `I had Gonorrhea and Trica, and they helped me with both within a few days.`,
    `Thanks to F*STI, we were able to clear gonorrhea and move forward confidently.`,
    `My insurance covered everything for me, and when my partner applied it covered it for him too.`,
  ];

  const settingsLeft = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const settingsRight = {
    ...settingsLeft,
    rtl: true,
  };

  const Card = ({ text }) => (
    <div className="px-2 h-full">
      <div className="h-full min-h-[220px] flex flex-col justify-between bg-gradient-to-b from-[#7C3AED] to-[#2E1065] text-white p-6 rounded-xl shadow-md">
        <div>
          <img src={QuoteIcon} alt="quote" className="w-8 h-6 mb-2 mt-2" />
          <p className="font-inter text-[18px] leading-[28px] tracking-[-0.02em]">
            {text}
          </p>
        </div>
        <p className="mt-6 font-inter text-[18px] leading-[28px] tracking-[-0.02em]">
          F* STI Patient
        </p>
      </div>
    </div>
  );

  return (
    <div className="my-40">
      <div className="flex justify-between items-center text-left mx-auto w-5/6">
        <div>
          <h3 className="font-manrope font-semibold text-[32px] md:text-[36px] leading-[46px] tracking-[-0.03em] text-gray-900">
            Life-Changing Stories from Our Users
            <span>
              <br />
              Who Took Control of Their Health
            </span>
          </h3>
        </div>

        <div className="text-gray-500 font-inter text-[18px] leading-[28px] tracking-[-0.02em]">
          Read experiences from those transformed by{" "}
          <span>
            <br />
            Prep. See how it empowers them to protect their health.
          </span>
        </div>
      </div>

      <div className="py-12 bg-white w-full mx-auto">
        {/* Row 1 - slide to left */}
        <div className="mb-8">
          <Slider {...settingsLeft}>
            {testimonialsRow1.map((text, i) => (
              <Card key={i} text={text} />
            ))}
          </Slider>
        </div>

        {/* Row 2 - slide to right */}
        <div>
          <Slider {...settingsRight}>
            {testimonialsRow2.map((text, i) => (
              <Card key={i} text={text} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
