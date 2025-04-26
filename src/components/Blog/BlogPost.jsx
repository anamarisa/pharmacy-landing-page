import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import SectionHeader from "../SectionHeader";
import Card from "./Card";
import { cards } from "../../data/blogData";

const Blog = () => {
  return (
    <>
      <Header />
      <div className="mt-[60px]">
        <SectionHeader
          title="Understanding the Impact of Viruses on Health"
          subtitle={
            <>
              Viruses play a significant role in global health challenges.{" "}
              <br />
              Learn how they affect the body and what measures can help prevent
              infections.
            </>
          }
        />
      </div>

      {/* Responsive grid layout */}
      <div className="mx-[10px] md:mx-[40px] lg:mx-[119.5px] mt-13 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <Card
            key={index}
            slug={card.slug}
            date={card.date}
            image={card.image}
            title={card.title}
            subtitle={card.subtitle}
          />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Blog;
