import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Works from "../components/Works";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Works showViewAll />
      <Contact />
    </>
  );
};

export default HomePage;
