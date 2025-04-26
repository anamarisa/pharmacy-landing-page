import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";

import PrepPage from "./components/PrEPPage";
import LandingPage from "./components/LandingPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/sti-awareness/:categoryName" element={<PrepPage />} />
    </Routes>
  );
}
