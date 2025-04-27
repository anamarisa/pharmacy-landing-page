import React from "react";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { cards } from "./data/blogData";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";

const LandingPage = lazy(() => import("./components/LandingPage"));
const Blog = lazy(() => import("./components/Blog/BlogPost"));
const Post = lazy(() => import("./components/Blog/Post"));
const PrepPage = lazy(() => import("./components/PrEPPage"));

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/post/:slug" element={<Post cards={cards} />} />
          <Route path="/sti-awareness/:categoryName" element={<PrepPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
