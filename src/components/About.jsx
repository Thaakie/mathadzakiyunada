import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-[1100px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
        {/* Main Content */}
        <div className="about-content">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2b2b2b]">
            About me
          </h2>
          <p className="text-lg text-[#2b2b2b]/80 leading-relaxed mb-8">
Im an Undergraduate student and focus on front-end web development while also working with back-end basics. I care about visual detail and user interaction, aiming to create functional and enjoyable web experiences.
          </p>

          {/* Personal Info Grid */}
          <div className="personal-info-grid grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
            <InfoItem 
              icon={<UserIcon />}
              text="M Atha Dzaki Yunada"
            />
            <InfoItem 
              icon={<CalendarIcon />}
              text="August 2006"
            />
            <InfoItem 
              icon={<LocationIcon />}
              text="Bandar Lampung"
            />
            <InfoItem 
              icon={<EmailIcon />}
              text="atha468@gmail.com"
              href="mailto:atha468@gmail.com"
            />
          </div>
        </div>

        {/* Role Cards */}
        <div className="about-cards flex flex-col gap-4">
          <RoleCard title="Front-End Web Developer" emoji="" delay={0} />
          <RoleCard title="Basic Back-End Web Developer" emoji="" delay={100} />
   
        </div>
      </div>
    </section>
  );
};

// Info Item Component
const InfoItem = ({ icon, text, href }) => (
  <div className="info-item flex items-center gap-4 group cursor-default">
    <div className="info-icon text-[#c9b59c] transition-transform duration-300 group-hover:scale-110">
      {icon}
    </div>
    {href ? (
      <a 
        href={href} 
        className="text-[#2b2b2b] no-underline transition-colors duration-300 hover:text-[#c9b59c]"
      >
        {text}
      </a>
    ) : (
      <span className="text-[#2b2b2b]">{text}</span>
    )}
  </div>
);

// Role Card Component
const RoleCard = ({ title, emoji, delay }) => (
  <div 
    className="card group bg-white p-6 rounded-xl shadow-sm border border-gray-100
      font-semibold text-center transition-all duration-500 ease-out
      hover:-translate-y-2 hover:shadow-xl hover:shadow-black/5 hover:border-transparent
      cursor-default"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <span className="inline-block transition-transform duration-300 group-hover:scale-125 mr-2">
      {emoji}
    </span>
    {title}
  </div>
);

// Icon Components
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