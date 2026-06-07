import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import ExperienceCert from "../components/ExperienceCert";
import TechStack from "../components/TechStack";
import Works from "../components/Works";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <ExperienceCert showViewAll limit={1} />
      <TechStack />
      <Works showViewAll />
      <Contact />
    </>
  );
};

export default HomePage;
