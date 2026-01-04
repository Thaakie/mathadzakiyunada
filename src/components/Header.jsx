import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`site-header sticky top-0 z-50 transition-all duration-500 ease-out
        ${isScrolled 
          ? 'py-2 backdrop-blur-2xl bg-white/70 shadow-lg shadow-black/5 border-b border-white/20' 
          : 'py-0 backdrop-blur-xl bg-white/50 border-b border-transparent'
        }`}
      style={{
        WebkitBackdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'blur(16px) saturate(150%)',
        backdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'blur(16px) saturate(150%)',
      }}
    >
      <nav className="max-w-[1100px] mx-auto flex items-center justify-between py-4 px-8">
        {/* Brand Logo */}
        <a 
          href="#hero" 
          className="font-bold text-lg text-[#2b2b2b] hover:text-[#c9b59c] transition-colors duration-300 no-underline"
        >
          M Atha Dzaki Yunada
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {['About', 'Skills', 'Works', 'Contact'].map((item, index) => {
            const href = ['#about', '#techstack', '#works', '#contact'][index];
            return (
              <li key={item}>
                <a 
                  href={href} 
                  className="nav-link relative text-[#2b2b2b] opacity-70 font-medium 
                    transition-all duration-300 hover:opacity-100 no-underline
                    after:content-[''] after:absolute after:bottom-[-4px] after:left-0 
                    after:w-0 after:h-[2px] after:bg-[#c9b59c] after:transition-all after:duration-300
                    hover:after:w-full"
                  onClick={closeMenu}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden bg-transparent border-none cursor-pointer p-2 z-[200] relative" 
          aria-label="Menu" 
          onClick={toggleMenu}
        >
          <span 
            className={`block w-6 h-[2px] bg-[#2b2b2b] transition-all duration-300 ease-out
              ${isActive ? 'rotate-45 translate-y-[8px]' : ''}`}
          />
          <span 
            className={`block w-6 h-[2px] bg-[#2b2b2b] my-[6px] transition-all duration-300 ease-out
              ${isActive ? 'opacity-0 translate-x-2' : ''}`}
          />
          <span 
            className={`block w-6 h-[2px] bg-[#2b2b2b] transition-all duration-300 ease-out
              ${isActive ? '-rotate-45 -translate-y-[8px]' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 z-[150]
          ${isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMenu}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`md:hidden fixed top-0 right-0 h-screen w-4/5 max-w-[300px] 
          bg-white/95 backdrop-blur-xl shadow-2xl 
          flex flex-col items-center justify-center gap-8
          transition-transform duration-500 ease-out z-[160]
          ${isActive ? 'translate-x-0' : 'translate-x-full'}`}
        style={{
          WebkitBackdropFilter: 'blur(20px)',
          backdropFilter: 'blur(20px)',
        }}
      >
        {['Tentang', 'Skills', 'Karya', 'Kontak'].map((item, index) => {
          const href = ['#about', '#techstack', '#works', '#contact'][index];
          return (
            <a 
              key={item}
              href={href} 
              className="text-[#2b2b2b] text-xl font-medium transition-all duration-300 
                hover:text-[#c9b59c] hover:translate-x-2 no-underline"
              onClick={closeMenu}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item}
            </a>
          );
        })}
      </div>
    </header>
  );
};

export default Header;