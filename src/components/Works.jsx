import React from 'react';

const Works = () => {
  return (
    <section id="works" className="py-16">
      <div className="max-w-[1100px] mx-auto px-8">
        <div className="section-header text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Karya Terpilih</h2>
          <p className="section-subtitle text-lg text-[#2b2b2b] opacity-70">Beberapa proyek web development dan eksperimen desain.</p>
        </div>

        <div className="works-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="project-card bg-white rounded-2xl overflow-hidden shadow-sm border transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
            <div className="card-image relative">
              <img src="https://placehold.co/600x400/2b2b2b/FFF?text=Project+1" alt="Preview Proyek 1" loading="lazy" className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105" />
              <div className="card-overlay absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                <a href="#" className="btn-icon bg-white text-[#2b2b2b] w-12 h-12 rounded-full flex items-center justify-center transform translate-y-4 transition-transform duration-300 hover:translate-y-0" aria-label="Lihat Project">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
            <div className="card-content p-6">
              <h3 className="card-title text-xl font-bold mb-2">Fetch Pokemon</h3>
              <p className="card-desc text-[#2b2b2b] opacity-80 mb-4">Web app untuk pembelajaran fetch</p>
              <div className="card-tags flex flex-wrap gap-2">
                <span className="bg-[#f9f8f6] px-3 py-1 rounded-full text-sm">HTML</span>
                <span className="bg-[#f9f8f6] px-3 py-1 rounded-full text-sm">CSS</span>
                <span className="bg-[#f9f8f6] px-3 py-1 rounded-full text-sm">JavaScript</span>
              </div>
            </div>
          </article>

          <article className="project-card bg-white rounded-2xl overflow-hidden shadow-sm border transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
            <div className="card-image relative">
              <img src="https://placehold.co/600x400/c9b59c/2b2b2b?text=Project+2" alt="Preview Proyek 2" loading="lazy" className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105" />
              <div className="card-overlay absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                <a href="#" className="btn-icon bg-white text-[#2b2b2b] w-12 h-12 rounded-full flex items-center justify-center transform translate-y-4 transition-transform duration-300 hover:translate-y-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
            <div className="card-content p-6">
              <h3 className="card-title text-xl font-bold mb-2">Personal Blog Theme</h3>
              <p className="card-desc text-[#2b2b2b] opacity-80 mb-4">Tema blog minimalis dengan fokus pada tipografi, kecepatan akses (SEO), dan dark mode.</p>
              <div className="card-tags flex flex-wrap gap-2">
                <span className="bg-[#f9f8f6] px-3 py-1 rounded-full text-sm">React JS</span>
                <span className="bg-[#f9f8f6] px-3 py-1 rounded-full text-sm">Tailwind</span>
              </div>
            </div>
          </article>

          <article className="project-card bg-white rounded-2xl overflow-hidden shadow-sm border transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
            <div className="card-image relative">
              <img src="https://placehold.co/600x400/d9cfc7/2b2b2b?text=Project+3" alt="Preview Proyek 3" loading="lazy" className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105" />
              <div className="card-overlay absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                <a href="#" className="btn-icon bg-white text-[#2b2b2b] w-12 h-12 rounded-full flex items-center justify-center transform translate-y-4 transition-transform duration-300 hover:translate-y-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
            <div className="card-content p-6">
              <h3 className="card-title text-xl font-bold mb-2">Motion Graphic Typography</h3>
              <p className="card-desc text-[#2b2b2b] opacity-80 mb-4">Eksperimen animasi tipografi kinetik menggunakan After Effects dan implementasi Lottie Files.</p>
              <div className="card-tags flex flex-wrap gap-2">
                <span className="bg-[#f9f8f6] px-3 py-1 rounded-full text-sm">Motion Design</span>
                <span className="bg-[#f9f8f6] px-3 py-1 rounded-full text-sm">After Effects</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Works;