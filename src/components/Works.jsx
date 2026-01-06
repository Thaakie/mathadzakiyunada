import React from "react";

// Projects data - easily customizable
const projects = [
  {
    id: 1,
    title: "Fetch Pokemon",
    description: "Web app for fetching API Pokemon.",
    image: "/assets/fetchpoke.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://reactpokemonapi.vercel.app/",
  },
  {
    id: 2,
    title: "Personal Landing Page",
    description: "Landing page for audio.",
    image: "/assets/landingaudiopage.png",
    tags: ["HTML", "CSS"],
    link: "https://ld-page-audio.vercel.app/",
  },
  {
    id: 3,
    title: "Recap-Chat Website",
    description: "Website for learning PHP and Framework Laravel.",
    image: "/assets/rechatwebsite.png",
    tags: ["PHP", "Laravel"],
    link: "#",
  },
  {
    id: 3,
    title: "Letter Website",
    description: "Website for sending letter to someone you mattered ;D.",
    image: "/assets/PESAN.png",
    tags: ["PHP", "Laravel"],
    link: "#",
  },
  {
    id: 3,
    title: "On Progress..",
    description: "Future Project",
    image: "/assets/backgroundgrey.jpg",
    tags: ["...", "..."],
    link: "#",
  },
  {
    id: 3,
    title: "On Progress..",
    description: "Future Project",
    image: "/assets/backgroundgrey.jpg",
    tags: ["...", "..."],
    link: "#",
  },
];

// Project Card Component
const ProjectCard = ({ project, index }) => {
  return (
    <article
      className="project-card group bg-white rounded-2xl overflow-hidden 
        shadow-sm border border-gray-100/50
        transition-all duration-500 ease-out
        hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-3 hover:border-transparent"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Image Container */}
      <div className="card-image relative overflow-hidden">
        <img src={project.image} alt={`Preview ${project.title}`} loading="lazy" className="w-full h-56 object-cover transition-transform duration-700 ease-out group-hover:scale-110" />

        {/* Overlay */}
        <div
          className="card-overlay absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
          flex items-center justify-center 
          opacity-0 transition-opacity duration-400 group-hover:opacity-100"
        >
          <a
            href={project.link}
            className="btn-icon bg-white text-[#2b2b2b] w-14 h-14 rounded-full 
              flex items-center justify-center 
              transform translate-y-6 scale-90 opacity-0
              transition-all duration-400 ease-out
              group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100
              hover:bg-[#c9b59c] hover:text-white hover:scale-110
              shadow-lg"
            aria-label={`Lihat project ${project.title}`}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="card-content p-6 flex flex-col flex-grow">
        <h3
          className="card-title text-xl font-bold mb-2 text-[#2b2b2b] 
          transition-colors duration-300 group-hover:text-[#c9b59c]"
        >
          {project.title}
        </h3>
        <p className="card-desc text-[#2b2b2b]/70 mb-5 flex-grow leading-relaxed">{project.description}</p>

        {/* Tags */}
        <div className="card-tags flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-[#f9f8f6] px-3 py-1.5 rounded-lg text-xs font-semibold text-[#666]
                transition-all duration-300 hover:bg-[#c9b59c] hover:text-white cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

const Works = () => {
  return (
    <section id="works" className="py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-[#c9b59c]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-[#c9b59c]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1100px] mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="section-header text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2b2b2b]">My Works</h2>
          <p className="section-subtitle text-lg text-[#2b2b2b]/60 max-w-xl mx-auto">Some web development projects and design experiments I have worked on.</p>
        </div>

        {/* Projects Grid */}
        <div className="works-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
