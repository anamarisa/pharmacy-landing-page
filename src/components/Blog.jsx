import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import SectionHeader from "./SectionHeader";
import frame1 from "../assets/images/blog-images/frame1.svg";
import frame2 from "../assets/images/blog-images/frame2.svg";
import frame3 from "../assets/images/blog-images/frame3.svg";
import frame4 from "../assets/images/blog-images/frame4.svg";
import frame5 from "../assets/images/blog-images/frame5.svg";
import frame6 from "../assets/images/blog-images/frame6.svg";
import frame7 from "../assets/images/blog-images/frame7.svg";
import frame8 from "../assets/images/blog-images/frame8.svg";
import frame9 from "../assets/images/blog-images/frame9.svg";
import { Link } from "react-router-dom";

const cards = [
  {
    image: frame1,
    date: "February 15, 2025",
    title: "Massa neque et tellus sed lectus. Lorem faucibus nisi purus.",
    subtitle:
      "Neque faucibus aliquam risus massa enim faucibus quisque. Eget tellus scelerisque purus congue ut.",
  },
  {
    image: frame2,
    date: "February 10, 2025",
    title: "Magna libero ante eu et duis mi ut amet. Nunc bibendum eget nulla.",
    subtitle:
      "Montes nibh amet rutrum a ipsum rhoncus. Platea erat egestas dictum semper risus justo aliquam.",
  },
  {
    image: frame3,
    date: "February 5, 2025",
    title: "Urna luctus nisi arcu rhoncus.",
    subtitle:
      "In sed sagittis malesuada id id morbi a amet eros convallis. Feugiat fermentum tempus euismod.",
  },
  {
    image: frame4,
    date: "February 1, 2025",
    title: "Urna auctor tellus lacus sit non fames adipiscing eget urna.",
    subtitle:
      "Vitae fermentum nisl mi proin iaculis porttitor vulputate. Tellus auctor amet cras pharetra mollis.",
  },
  {
    image: frame5,
    date: "January 25, 2025",
    title:
      "Pellentesque morbi ornare aliquet enim feugiat. Suspendisse auctor.",
    subtitle:
      "Sit vitae in ultrices sit vitae turpis risus odio. Adipiscing ante volutpat risus auctor tellus.",
  },
  {
    image: frame6,
    date: "January 20, 2025",
    title: "Et convallis aliquam facilisi aliquam tincidunt vel massa nunc.",
    subtitle:
      "Ullamcorper ridiculus est neque enim in id tellus. In nibh id gravida vitae mattis eget. Elementum nunc.",
  },
  {
    image: frame7,
    date: "January 10, 2025",
    title: "Erat mattis eu fermentum lacus non feugiat sodales commodo.",
    subtitle:
      "Nulla a bibendum fames cursus accumsan blandit. Lobortis posuere magna elit mauris ac eget urna.",
  },
  {
    image: frame8,
    date: "January 15, 2025",
    title: "Mollis eu quisque sed",
    subtitle:
      "Dui posuere vulputate sed nisl nisl. Diam tellus mattis faucibus molestie aliquam non dui sagittis.",
  },
  {
    image: frame9,
    date: "January 5, 2025",
    title: "At vel ultrices sodales ante",
    subtitle:
      "Sit magna lectus at volutpat in. Eget sed pulvinar enim felis at pharetra amet adipiscing. Ut.",
  },
];

const Card = ({ image, date, title, subtitle }) => {
  return (
    <div className="font-inter overflow-hidden">
      <Link to="/blog/post/:slug">
        <img
          src={image}
          alt="Card Image"
          className="w-full h-70 object-cover rounded-2xl"
        />
      </Link>
      <p className="text-sm text-gray-500 mt-3 mb-[6px]">{date}</p>
      <h3 className="text-2xl leading-[32px] tracking-[-0.02em] font-semibold my-[6px]">
        {title}
      </h3>
      <p className="text-base leading-[24px] tracking-[-0.02em] font-normal text-gray-600">
        {subtitle}
      </p>
    </div>
  );
};

export default function Blog() {
  return (
    <>
      <Header />
      <div className="mt-[60px]">
        <SectionHeader
          title="Ut iaculis odio arcu auctor. Est"
          subtitle={
            <>
              Dui quam mollis vel tellus integer risus pellentesque fermentum
              gravida. <br /> Fermentum morbi interdum at lobortis feugiat
              volutpat nibh blandit netus.
            </>
          }
        />
      </div>

      <div className="mx-[119.5px] mt-13 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <Card
            key={index}
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
}
