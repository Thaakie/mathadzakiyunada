import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="max-w-[1100px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="about-content">
          <h2 className="text-3xl font-bold mb-4">Tentang Saya</h2>
          <p className="text-lg text-[#2b2b2b] leading-relaxed mb-8">Saya bekerja pada Front-end / Back-end Web Development, dengan perhatian khusus pada detail visual dan interaksi pengguna. Berkomitmen menciptakan solusi digital yang fungsional dan menyenangkan.</p>

          <div className="tech-stack-container mb-8">
            <p className="stack-label text-sm font-medium text-[#2b2b2b] mb-4">Teknologi yang dipelajari:</p>
            <div className="tech-stack flex flex-wrap gap-3">
              <span className="stack-badge inline-flex items-center gap-2 bg-[#f9f8f6] px-3 py-2 rounded-lg text-sm font-medium">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l9 2-2 16-7 3-7-3-2-16 9-2z"></path></svg>
                HTML5
              </span>
              <span className="stack-badge inline-flex items-center gap-2 bg-[#f9f8f6] px-3 py-2 rounded-lg text-sm font-medium">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l9 2-2 16-7 3-7-3-2-16 9-2z"></path></svg>
                CSS3
              </span>
              <span className="stack-badge inline-flex items-center gap-2 bg-[#f9f8f6] px-3 py-2 rounded-lg text-sm font-medium">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path></svg>
                JavaScript
              </span>
              <span className="stack-badge inline-flex items-center gap-2 bg-[#f9f8f6] px-3 py-2 rounded-lg text-sm font-medium">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
                ReactJS
              </span>
              <span className="stack-badge inline-flex items-center gap-2 bg-[#f9f8f6] px-3 py-2 rounded-lg text-sm font-medium">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                GitHub
              </span>
            </div>
          </div>

          <div className="personal-info-grid grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="info-item flex items-center gap-3">
              <div className="info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <span>M Atha Dzaki Yunada</span>
            </div>
            <div className="info-item flex items-center gap-3">
              <div className="info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <span>28 Agustus 2006</span>
            </div>
            <div className="info-item flex items-center gap-3">
              <div className="info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <span>Bandar Lampung</span>
            </div>
            <div className="info-item flex items-center gap-3">
              <div className="info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <span><a href="mailto:atha468@gmail.com" className="text-[#2b2b2b] no-underline">atha468@gmail.com</a></span>
            </div>
          </div>
        </div>

        <div className="about-cards flex flex-col gap-4">
          <div className="card bg-white p-6 rounded-xl shadow-sm border">Front-End Dev</div>
          <div className="card bg-white p-6 rounded-xl shadow-sm border">Back-End Dev</div>
          <div className="card bg-white p-6 rounded-xl shadow-sm border">UI / UX Design</div>
        </div>
      </div>
    </section>
  );
};

export default About;