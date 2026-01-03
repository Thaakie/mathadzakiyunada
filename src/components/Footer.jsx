import React, { useEffect, useRef } from 'react';

const Footer = () => {
  const yearRef = useRef(null);

  useEffect(() => {
    if (yearRef.current) {
      yearRef.current.textContent = new Date().getFullYear();
    }
  }, []);

  return (
    <footer className="footer py-8 border-t border-[rgba(0,0,0,0.05)]">
      <div className="max-w-[1100px] mx-auto px-8 footer-inner text-center">
        <span>© <span ref={yearRef} id="year"></span> M Atha Dzaki Yunada</span>
      </div>
    </footer>
  );
};

export default Footer;