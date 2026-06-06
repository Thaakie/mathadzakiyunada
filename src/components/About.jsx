import React from "react";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, fadeUp, staggerParent, viewport } from "../utils/motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-black/10 bg-[#1f1c18] py-20 md:py-24 text-[#f7f2ec]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 left-1/3 h-48 w-48 rounded-full bg-[#c9b59c]/12 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            className="about-content"
            variants={staggerParent(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.p
              variants={fadeUp}
              className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#c9b59c]"
            >
              About Me
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mb-6 text-3xl font-bold text-white md:text-4xl"
            >
              Turning ideas into meaningful digital experiences through web development, AI, and continuous learning.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mb-8 max-w-2xl text-lg leading-relaxed text-white/74"
            >
              I'm an Informatics undergraduate passionate about building full-stack web applications, with interests in AI integration, cloud technologies, and modern web development. I enjoy turning complex problems into practical digital solutions that are scalable, intuitive, and impactful.
            </motion.p>

            <motion.div
              variants={staggerParent(0.1, 0.08)}
              className="personal-info-grid grid grid-cols-1 gap-6 border-t border-white/12 pt-6 sm:grid-cols-2"
            >
              <InfoItem icon={<UserIcon />} text="M Atha Dzaki Yunada" />
              <InfoItem icon={<CalendarIcon />} text="Student of University Teknokrat Indonesia" />
              <InfoItem icon={<LocationIcon />} text="Bandar Lampung" />
              <InfoItem icon={<EmailIcon />} text="atha468@gmail.com" href="mailto:atha468@gmail.com" />
            </motion.div>
          </motion.div>

          <motion.div
            className="about-cards flex h-full flex-col items-center justify-center gap-4"
            variants={staggerParent(0.14, 0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="w-full max-w-screen">
              <div className="pt-5">
                <RoleCard title="Full-Stack Development" />
              </div>
              <div className="pt-5">
                <RoleCard title="AI Integration" />
              </div>
              <div className="pt-5">
                <RoleCard title="Cloud & Deployment" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({ icon, text, href }) => (
  <motion.div
    variants={fadeInLeft}
    className="info-item group flex cursor-default items-center gap-4 rounded-[10px] border border-white/10 bg-white/4 px-4 py-4 backdrop-blur-sm"
  >
    <div className="info-icon text-[#c9b59c] transition-transform duration-300 group-hover:scale-110">
      {icon}
    </div>
    {href ? (
      <a
        href={href}
        className="text-[#f7f2ec] no-underline transition-colors duration-300 hover:text-[#c9b59c]"
      >
        {text}
      </a>
    ) : (
      <span className="text-[#f7f2ec]">{text}</span>
    )}
  </motion.div>
);

const RoleCard = ({ title, emoji }) => {
  return (
    <motion.div
      variants={fadeInRight}
      className="card group cursor-default rounded-[10px] border border-[#2b2b2b]/12 bg-[#f7f2ec] p-6 text-center font-semibold text-[#2b2b2b] shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#2b2b2b]/30 hover:shadow-xl hover:shadow-black/10"
      whileHover={{ y: -8 }}
    >
      <span className="mr-2 inline-block transition-transform duration-300 group-hover:scale-125">
        {emoji}
      </span>
      {title}
    </motion.div>
  );
};

const UserIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const LocationIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const EmailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default About;
