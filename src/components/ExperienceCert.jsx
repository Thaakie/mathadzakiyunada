import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "../data/credentials";
import { fadeUp, staggerParent, viewport } from "../utils/motion";

const BriefcaseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ZoomInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const CapstoneSlider = ({ images, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative group/slider mt-4 aspect-[16/10] w-full overflow-hidden rounded-lg border border-[#2b2b2b]/10 bg-[#efe9e3]/20 shadow-inner">
      {/* Slide Images */}
      <div 
        className="w-full h-full cursor-zoom-in"
        onClick={() => onImageClick(images[currentIndex])}
      >
        <img 
          src={images[currentIndex]} 
          alt={`Screenshot ${currentIndex + 1}`}
          className="w-full h-full object-cover select-none"
        />
        {/* Zoom icon hint on hover */}
        <div className="absolute inset-0 bg-black/25 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <span className="text-white bg-black/40 p-2.5 rounded-full backdrop-blur-sm shadow-md border border-white/10">
            <ZoomInIcon />
          </span>
        </div>
      </div>

      {/* Page Count Indicator */}
      {images.length > 1 && (
        <div className="absolute top-3 right-3 bg-black/60 text-white backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider z-10 border border-white/10 select-none">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-black/50 text-white backdrop-blur-sm border border-white/10 opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-black/75 hover:scale-105 active:scale-95 focus:outline-none z-10 cursor-pointer"
            aria-label="Previous screenshot"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-black/50 text-white backdrop-blur-sm border border-white/10 opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-black/75 hover:scale-105 active:scale-95 focus:outline-none z-10 cursor-pointer"
            aria-label="Next screenshot"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-3 inset-x-0 flex justify-center gap-1.5 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${idx === currentIndex ? "w-5 bg-white shadow-sm" : "w-1.5 bg-white/50 hover:bg-white/80"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ExperienceCert = ({
  sectionId = "experience",
  title = "Experience",
  subtitle = "My professional journey and apprenticeship experience.",
  showViewAll = true,
}) => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section id={sectionId} className="py-20 relative overflow-hidden border-b border-[#2b2b2b]/10 bg-[#fbfaf8]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#c9b59c]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#c9b59c]/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="section-header text-center mb-16"
          variants={staggerParent(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4 text-[#2b2b2b]">
            {title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-[#2b2b2b]/60 max-w-xl mx-auto">
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Experience Section */}
        <div className="mb-6">
          <motion.div
            variants={staggerParent(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Vertical Timeline Track Container */}
            <div className="relative border-l border-[#c9b59c]/30 pl-6 md:pl-8 ml-3 md:ml-6 flex flex-col gap-10 mx-auto">
              {experiences.map((exp) => {
                const isCurrent = exp.period.toLowerCase().includes("present");
                
                return (
                  <motion.div
                    key={exp.id}
                    variants={fadeUp}
                    className="relative group rounded-xl border border-[#2b2b2b]/10 bg-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#c9b59c]/40"
                  >
                    {/* Timeline Dot with pulsing ring for present job */}
                    <div className="absolute -left-[31px] md:-left-[41px] top-8 flex items-center justify-center z-10">
                      <div className="relative flex h-5 w-5 md:h-6 md:w-6 items-center justify-center rounded-full bg-[#fbfaf8] border-2 border-[#c9b59c]">
                        {isCurrent && (
                          <span className="absolute inline-flex h-full w-full rounded-full bg-[#c9b59c]/40 animate-ping opacity-75" />
                        )}
                        <div className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-[#c9b59c]" />
                      </div>
                    </div>

                    <div className="flex gap-5 items-start sm:flex-nowrap flex-wrap">
                      {/* Logo/Icon */}
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white border border-[#2b2b2b]/10 text-[#2b2b2b] shadow-sm transition-transform duration-300 group-hover:scale-105 overflow-hidden p-1.5">
                        {exp.logo ? (
                          <img src={exp.logo} alt={exp.company} className="h-full w-full object-contain" />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-gradient-to-tr from-[#c9b59c] to-[#efe9e3] rounded-xl text-[#2b2b2b]">
                            <BriefcaseIcon />
                          </div>
                        )}
                      </div>

                      {/* Meta */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 justify-between">
                          <h4 className="font-bold text-xl text-[#2b2b2b] tracking-tight m-0">
                            {exp.role}
                          </h4>
                          <span className="text-[10px] font-bold tracking-wider uppercase bg-[#c9b59c]/15 text-[#7a6855] px-2.5 py-1 rounded-full">
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-base text-[#2b2b2b]/80 font-medium mt-1">
                          {exp.company}
                        </p>
                        <p className="text-xs text-[#2b2b2b]/50 flex items-center gap-1.5 mt-2 font-medium">
                          <CalendarIcon />
                          {exp.period} &middot; {exp.duration}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm md:text-base leading-relaxed text-[#2b2b2b]/70 mt-6 m-0">
                      {exp.description}
                    </p>

                    {/* Nested Capstone Project Section */}
                    {exp.capstone && (
                      <div className="mt-6 rounded-xl border-l-4 border-l-[#c9b59c] border-y border-r border-[#2b2b2b]/8 bg-[#c9b59c]/3 p-5 md:p-6 transition-all duration-300 hover:bg-[#c9b59c]/6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-[9px] font-bold tracking-wider uppercase bg-[#c9b59c] text-white px-2 py-0.5 rounded-md">
                            CAPSTONE PROJECT
                          </span>
                        </div>
                        <h5 className="font-bold text-base text-[#2b2b2b] m-0">
                          {exp.capstone.title}
                        </h5>
                        <p className="text-sm text-[#2b2b2b]/68 mt-2 leading-relaxed m-0">
                          {exp.capstone.description}
                        </p>

                        {/* Slideable Thumbnail Gallery */}
                        {exp.capstone.images && exp.capstone.images.length > 0 && (
                          <CapstoneSlider
                            images={exp.capstone.images}
                            onImageClick={(imgUrl) => setActiveItem({
                              image: imgUrl,
                              title: exp.capstone.title,
                              subtitle: "Capstone Project Screenshot"
                            })}
                          />
                        )}

                        {exp.capstone.tags && (
                          <div className="flex flex-wrap gap-1.5 mt-4">
                            {exp.capstone.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] font-semibold bg-white text-[#2b2b2b]/60 border border-[#2b2b2b]/8 px-2 py-0.5 rounded-md shadow-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Skills/Tags */}
                    <div className="mt-6 border-t border-[#2b2b2b]/5 pt-5">
                      <p className="text-xs font-bold text-[#2b2b2b]/40 uppercase tracking-wider mb-3">
                        Skills
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs font-semibold text-[#2b2b2b]/80 border border-[#2b2b2b]/10 px-3.5 py-1.5 rounded-full bg-white/50 backdrop-blur-sm transition-all duration-300 hover:border-[#c9b59c] hover:bg-[#c9b59c]/6 hover:scale-[1.03]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* View on LinkedIn Button */}
        {showViewAll && (
          <motion.div
            className="mt-14 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="https://www.linkedin.com/in/m-atha-dzaki-yunada-35052131a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[10px] bg-[#2b2b2b] px-6 py-3 text-sm font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-1 hover:bg-[#1d1d1d] shadow-sm hover:shadow"
            >
              View all on LinkedIn
              <ExternalLinkIcon />
            </a>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal (For Capstone screenshots) */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md cursor-zoom-out"
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-xl bg-[#2b2b2b] p-3 shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-10 p-2 text-white bg-black/40 hover:bg-black/70 rounded-full backdrop-blur-sm border border-white/10 transition-colors duration-300 cursor-pointer"
                onClick={() => setActiveItem(null)}
                aria-label="Close lightbox"
              >
                <CloseIcon />
              </button>

              {activeItem.image && (
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-auto h-auto max-w-full max-h-[75vh] object-contain rounded-lg shadow-inner"
                />
              )}

              {/* Title overlay in Modal */}
              {activeItem.image && (
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent p-6 pt-16 text-white rounded-b-lg pointer-events-none">
                  <h3 className="font-bold text-lg m-0">{activeItem.title}</h3>
                  {activeItem.subtitle && (
                    <p className="text-sm text-white/70 m-0 mt-1">
                      {activeItem.subtitle}
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExperienceCert;
