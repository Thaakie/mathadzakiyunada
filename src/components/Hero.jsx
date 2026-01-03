import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center relative pt-8">
      <div className="max-w-[1100px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div className="hero-text">
          <h1 className="title text-4xl md:text-5xl font-bold mb-4">Hola, saya <br />M Atha Dzaki Yunada</h1>
          <p className="subtitle text-lg text-[#2b2b2b] leading-relaxed mb-6">Junior Designer / Web Developer — Membuat pengalaman digital yang sederhana dan elegan.</p>
          <div className="hero-buttons">
            <a className="inline-block bg-[#2b2b2b] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-[#1a1a1a] no-underline" href="#works">Lihat Karya</a>
          </div>
        </div>
        <div className="hero-media">
          <img src="/assets/1.jpg" alt="Foto profil" className="hero-photo w-full max-w-[300px] mx-auto md:mx-0 rounded-lg" />
        </div>
      </div>

      <button id="scroll-down" className="scroll-down absolute bottom-8 left-1/2 transform -translate-x-1/2" aria-label="Scroll ke bawah">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#2b2b2b]">
          <path d="M12 5v14M19 12l-7 7-7-7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </section>
  );
};

export default Hero;