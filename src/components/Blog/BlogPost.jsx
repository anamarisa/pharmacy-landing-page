import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header";
import SectionHeader from "../common/SectionHeader";
import Card from "./Card";
import { cards } from "../../data/blogData";

const Blog = () => {
  return (
    <>
      <Header />
      <div className="mt-20">
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
      <div className="px-[10px] md:px-[40px] lg:px-[119.5px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
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
