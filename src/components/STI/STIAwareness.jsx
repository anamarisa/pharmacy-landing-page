import React, { useRef, useState } from "react";
import { categoryDetails, categories } from "../../data/categoryDetails";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import STIDetailCard from "./STIDetailCard";
import SectionHeader from "../common/SectionHeader";
import STICard from "./STICard";

export default function STIAwareness() {
  const [selected, setSelected] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [flippedCards, setFlippedCards] = useState({});
  const detailRef = useRef(null);

  const handleHover = (categoryName, isHovering) => {
    setHovered(isHovering ? categoryName : null);
  };

  const handleFlip = (categoryName) => {
    setFlippedCards((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  const handleSeeMore = (categoryName, e) => {
    e.stopPropagation();
    setFlippedCards((prev) => ({ ...prev, [categoryName]: false }));

    if (selected === categoryName) {
      setSelected(null);
      setFadeIn(false);
    } else {
      setFadeIn(false);
      setTimeout(() => {
        setSelected(categoryName);
        setFadeIn(true);
        setTimeout(() => {
          detailRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }, 50);
    }
  };

  // Slider settings for mobile
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.2,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="px-5 py-20 lg:px-[64px] mt-[152px]">
      {/* Desktop Header */}
      <SectionHeader
        layout="side-by-side"
        title={
          <>
            Understanding the Risks,
            <br />
            Taking the Right Steps
          </>
        }
        subtitle={
          <>
            Educate yourself about common STIs to
            <br />
            stay safe and make informed decisions.
          </>
        }
      />

      {/* Mobile Header */}
      <div className="md:hidden mb-4">
        <SectionHeader
          layout="center"
          title={
            <>
              Understanding the Risks,
              <br />
              Taking the Right Steps
            </>
          }
          subtitle={
            <>
              Educate yourself about common STIs to
              <br />
              stay safe and make informed decisions.
            </>
          }
        />
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden">
        <Slider {...sliderSettings} className="mb-12">
          {categories.map((category) => (
            <div key={category.name} className="px-2 h-full">
              <STICard
                key={category.name}
                category={category}
                isFlipped={!!flippedCards[category.name]}
                isHovered={hovered === category.name}
                onFlip={handleFlip}
                onHover={handleHover}
                onSeeMore={handleSeeMore}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
        {categories.map((category) => (
          <STICard
            key={category.name}
            category={category}
            isFlipped={!!flippedCards[category.name]}
            isHovered={hovered === category.name}
            onFlip={handleFlip}
            onHover={handleHover}
            onSeeMore={handleSeeMore}
          />
        ))}
      </div>

      {/* Detail Card */}
      {selected && (
        <div
          ref={detailRef}
          className={`transition-opacity duration-300 mt-6 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <STIDetailCard
            selected={selected}
            categoryDetails={categoryDetails}
          />
        </div>
      )}
    </section>
  );
}
