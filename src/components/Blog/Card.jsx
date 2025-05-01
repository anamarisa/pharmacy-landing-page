import React from "react";
import { Link } from "react-router-dom";

const Card = ({ slug, image, date, title, subtitle }) => {
  return (
    <div className="font-inter overflow-hidden">
      <Link to={`/blog/post/${slug}`}>
        <img
          src={image}
          alt="Card Image"
          className="w-full h-70 object-cover rounded-2xl"
        />
        <p className="text-sm text-gray-500 mt-3 mb-[6px]">{date}</p>
        <h3 className="text-2xl leading-[32px] tracking-[-0.02em] font-semibold my-[6px]">
          {title}
        </h3>
        <p className="text-base leading-[24px] tracking-[-0.02em] font-normal text-gray-600">
          {subtitle}
        </p>
      </Link>
    </div>
  );
};

export default Card;
