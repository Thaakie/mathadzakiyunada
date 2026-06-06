import React, { useLayoutEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";
import WorkDetailPage from "./pages/WorkDetailPage";
import MouseFollower from "./components/MouseFollower";
import { pageTransition } from "./utils/motion";
import { scrollPageToTop } from "./utils/scroll";


const scrollToHashTarget = (hash, attempts = 0) => {
  const elementId = hash.replace("#", "");
  const target = document.getElementById(elementId);

  if (target) {
    const headerOffset = 110;
    const elementTop = target.getBoundingClientRect().top + window.scrollY;
    const nextTop = Math.max(elementTop - headerOffset, 0);

    window.scrollTo({
      top: nextTop,
      left: 0,
      behavior: "smooth",
    });
    return;
  }

  if (attempts < 24) {
    requestAnimationFrame(() => {
      scrollToHashTarget(hash, attempts + 1);
    });
  }
};

const ScrollToHash = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => {
        scrollToHashTarget(location.hash);
      });
      return;
    }

    scrollPageToTop("smooth");
  }, [location.pathname, location.hash]);

  return null;
};

const withPageTransition = (element, routeKey) => (
  <motion.div
    key={routeKey}
    variants={pageTransition}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {element}
  </motion.div>
);

function App() {
  const location = useLocation();

  return (
    <div className="App min-h-screen bg-gradient-to-b from-[#f9f8f6] to-[#efe9e3] text-[#2b2b2b] scroll-smooth">
      <MouseFollower />
      <ScrollToHash />
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={withPageTransition(<HomePage />, "home")} />
            <Route path="/works" element={withPageTransition(<WorksPage />, "works")} />
            <Route path="/works/:slug" element={withPageTransition(<WorkDetailPage />, location.pathname)} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
