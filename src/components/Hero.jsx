import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center relative pt-8">
      <div className="max-w-[1100px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        {/* Hero Text */}
        <div className="hero-text order-2 md:order-1 text-center md:text-left">
          <h1 className="title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hola, I am
            <br />
            <span className="bg-gradient-to-r from-[#2b2b2b] via-[#4a4a4a] to-[#c9b59c] bg-clip-text text-transparent">M Atha Dzaki Yunada</span>
          </h1>
          <p className="subtitle text-lg md:text-xl text-[#2b2b2b]/70 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">Junior Web Developer — Designing user-friendly and elegant digital interfaces.</p>
          <div className="hero-buttons flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              className="inline-flex items-center gap-2 bg-[#2b2b2b] text-white px-7 py-3.5 rounded-xl 
                font-medium transition-all duration-300 ease-out
                hover:bg-[#1a1a1a] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20
                no-underline group"
              href="#works"
            >
              See my works
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              className="inline-flex items-center gap-2 bg-transparent text-[#2b2b2b] px-7 py-3.5 rounded-xl 
                font-medium border-2 border-[#2b2b2b]/20 transition-all duration-300 ease-out
                hover:border-[#c9b59c] hover:text-[#c9b59c] hover:-translate-y-1
                no-underline"
              href="#contact"
            >
              Contact me
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-media order-1 md:order-2">
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#c9b59c]/30 to-transparent rounded-3xl blur-2xl" />
            <img
              src="/assets/1.jpg"
              alt="Foto profil"
              className="hero-photo relative w-full max-w-[320px] mx-auto rounded-2xl
                shadow-[20px_20px_0px_rgba(201,181,156,0.3)]
                transition-all duration-500 ease-in-out
                hover:shadow-[25px_25px_0px_rgba(201,181,156,0.4)] hover:-translate-x-1 hover:-translate-y-1"
            />
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="arrow flex justify-center items-center scroll-down absolute left-10 -translate-x-1/2 
          p-3  rounded-full bg-white/50 backdrop-blur-sm border border-white/30
          transition-all duration-300 hover:bg-white/80 hover:scale-110
          focus:outline-none focus:ring-2 focus:ring-[#c9b59c]"
        aria-label="Scroll ke bawah"
      >
        <span className="flex justify-center items-center animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#2b2b2b]">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>
    </section>
  );
};

export default Hero;
