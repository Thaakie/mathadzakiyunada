import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.site-header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="site-header sticky top-0 backdrop-blur-[8px] bg-[rgba(249,248,246,0.85)] border-b border-[rgba(0,0,0,0.04)] transition-all duration-300">
      <nav className="max-w-[1100px] mx-auto flex items-center justify-between py-4 px-8">
        <div className="font-bold text-lg text-[#2b2b2b]">M Atha Dzaki Yunada</div>
        <ul className="hidden md:flex gap-6 list-none m-0 p-0">
          <li><a href="#about" className="text-[#2b2b2b] opacity-70 font-medium transition-opacity duration-200 hover:opacity-100 hover:font-semibold no-underline" onClick={closeMenu}>Tentang</a></li>
          <li><a href="#works" className="text-[#2b2b2b] opacity-70 font-medium transition-opacity duration-200 hover:opacity-100 hover:font-semibold no-underline" onClick={closeMenu}>Karya</a></li>
          <li><a href="#contact" className="text-[#2b2b2b] opacity-70 font-medium transition-opacity duration-200 hover:opacity-100 hover:font-semibold no-underline" onClick={closeMenu}>Kontak</a></li>
        </ul>
        <button className="md:hidden bg-none border-none cursor-pointer" aria-label="Menu" onClick={toggleMenu}>
          <span className={`block w-5 h-[2px] bg-[#2b2b2b] mx-0 my-[3px] transition duration-300 ${isActive ? 'rotate-45 translate-y-[6px]' : ''}`}></span>
          <span className={`block w-5 h-[2px] bg-[#2b2b2b] mx-0 my-[3px] transition duration-300 ${isActive ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-[2px] bg-[#2b2b2b] mx-0 my-[3px] transition duration-300 ${isActive ? '-rotate-45 -translate-y-[6px]' : ''}`}></span>
        </button>
      </nav>
      {isActive && (
        <div className="md:hidden fixed top-0 right-0 h-screen w-3/4 bg-white shadow-[-5px_0_15px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center transform translate-x-0 transition-transform duration-300">
          <a href="#about" className="text-[#2b2b2b] opacity-70 font-medium transition-opacity duration-200 hover:opacity-100 hover:font-semibold no-underline py-4" onClick={closeMenu}>Tentang</a>
          <a href="#works" className="text-[#2b2b2b] opacity-70 font-medium transition-opacity duration-200 hover:opacity-100 hover:font-semibold no-underline py-4" onClick={closeMenu}>Karya</a>
          <a href="#contact" className="text-[#2b2b2b] opacity-70 font-medium transition-opacity duration-200 hover:opacity-100 hover:font-semibold no-underline py-4" onClick={closeMenu}>Kontak</a>
        </div>
      )}
    </header>
  );
};

export default Header;