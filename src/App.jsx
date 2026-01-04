import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initAnimations } from './animations';

function App() {
  useEffect(() => {
    const cleanup = initAnimations();
    return cleanup;
  }, []);

  return (
    <div className="App min-h-screen bg-gradient-to-b from-[#f9f8f6] to-[#efe9e3] text-[#2b2b2b] scroll-smooth">
      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
