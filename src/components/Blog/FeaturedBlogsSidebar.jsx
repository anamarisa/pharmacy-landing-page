import React from "react";
import { Link } from "react-router-dom";

const FeaturedBlogsSidebar = ({ blogs = [], currentSlug }) => {
  return (
    <aside className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:pl-8">
      <h3 className="text-lg font-bold mb-4 leading-[24px] tracking-[-0.02em]">
        FEATURED BLOG
      </h3>
      <div className="grid grid-cols-1 gap-4">
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start gap-4 hover:bg-gray-50 p-2 rounded-lg transition-colors"
          >
            <Link
              to={`/blog/${blog.slug}`}
              className="block w-full sm:w-[160px] lg:w-full xl:w-[160px] flex-shrink-0"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </Link>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm leading-[18px] text-gray-500 mb-1 sm:mb-[6px]">
                {blog.date}
              </p>
              <Link
                to={`/blog/post/${blog.slug}`}
                className="hover:text-blue-600 transition-colors"
              >
                <h4 className="text-base sm:text-lg leading-5 sm:leading-6 font-semibold line-clamp-2">
                  {blog.title}
                </h4>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default FeaturedBlogsSidebar;