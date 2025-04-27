import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import "./index.css";

import { cards } from "./data/blogData";
import PrepPage from "./components/PrEPPage";
import Blog from "./components/Blog/BlogPost";
import Post from "./components/Blog/Post";
import LandingPage from "./components/LandingPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop /> {/* now inside BrowserRouter */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/post/:slug" element={<Post cards={cards} />} />
        <Route path="/sti-awareness/:categoryName" element={<PrepPage />} />
      </Routes>
    </>
  );
}
