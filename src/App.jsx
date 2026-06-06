import React, { useEffect, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { initAnimations } from "./animations";
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";
import WorkDetailPage from "./pages/WorkDetailPage";
import { scrollPageToTop } from "./utils/scroll";

const ScrollToHash = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");

      requestAnimationFrame(() => {
        const target = document.getElementById(elementId);

        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });

      return;
    }

    scrollPageToTop("smooth");
  }, [location.pathname, location.hash]);

  return null;
};

function App() {
  const location = useLocation();

  useEffect(() => {
    const cleanup = initAnimations();
    return cleanup;
  }, [location.pathname]);

  return (
    <div className="App min-h-screen bg-gradient-to-b from-[#f9f8f6] to-[#efe9e3] text-[#2b2b2b] scroll-smooth">
      <ScrollToHash />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/works/:slug" element={<WorkDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
