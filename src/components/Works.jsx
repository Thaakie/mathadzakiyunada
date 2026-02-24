import React, { useState } from "react";
import Swal from "sweetalert2";

// Projects data
const projects = [
  { id: 1, title: "Fetch Pokemon", description: "Web app for fetching API Pokemon.", image: "/assets/fetchpoke.png", tags: ["ReactJS", "Tailwind CSS"], link: "https://reactpokemonapi.vercel.app/" },

  { id: 2, title: "UMKM Landing Page", description: "UMKM Website Profile (Our College Project).", image: "/assets/UMKMLP.png", tags: ["HTML", "CSS"], link: "https://umkm-web-three.vercel.app/" },

  { id: 3, title: "Quiz App", description: "QUIZ APP with REACT", image: "/assets/QUIZ1.png", tags: ["ReactJS", "CSS"], link: "https://react-quiz-iota-nine.vercel.app/" },

  { id: 4, title: "Recap-Chat Website", description: "Website for learning PHP and Framework Laravel.", image: "/assets/rechatwebsite.png", tags: ["PHP", "Laravel"], link: "#" },

  { id: 5, title: "Letter Website", description: "Website for sending letter to someone you mattered ;D.", image: "/assets/PESAN.png", tags: ["PHP", "Laravel"], link: "#" },

  { id: 6, title: "To-Do App", description: "Todo list", image: "/assets/todoo.png", tags: ["React Native", "Next.js"], link: "#" },

  { id: 7, title: "Catterry", description: "A place for cat to be housed", image: "/assets/Catterry.jpeg", tags: ["HTML", "CSS", "JavaScript"], link: "https://cattery-p-dicoding.vercel.app/" },

  { id: 8, title: "Coming Soon", description: "Coming Soon", image: "", tags: ["None"], link: "#" },

  { id: 9, title: "Coming Soon", description: "Coming Soon", image: "", tags: ["None"], link: "#" },

  { id: 10, title: "Coming Soon", description: "Coming Soon", image: "", tags: ["None"], link: "#" },

  { id: 11, title: "Coming Soon", description: "Coming Soon", image: "", tags: ["None"], link: "#" },

  { id: 12, title: "Coming Soon", description: "Coming Soon", image: "", tags: ["None"], link: "#" },
];

// Project Card Component
const ProjectCard = ({ project, index }) => {
  // Cek apakah link tersedia atau hanya "#"
  const isLinkAvailable = project.link && project.link !== "#";

  return (
    <a
      href={isLinkAvailable ? project.link : undefined} // Hanya beri href jika link valid
      target={isLinkAvailable ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className={`block w-full h-full ${!isLinkAvailable ? "cursor-default" : "cursor-pointer"}`}
      onClick={(e) => !isLinkAvailable && e.preventDefault()} // Cegah klik jika "#"
    >
      <article
        className="project-card group bg-white rounded-2xl overflow-hidden 
          shadow-sm border border-gray-100/50
          transition-all duration-500 ease-out h-full flex flex-col
          hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-3 hover:border-transparent"
        style={{ transitionDelay: `${index * 80}ms` }}
      >
        {/* --- BAGIAN GAMBAR & OVERLAY --- */}
        <div className="card-image relative overflow-hidden h-40 sm:h-48 md:h-56">
          {/* Gambar Utama */}
          <img src={project.image} alt={`Preview ${project.title}`} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />

          {/* Overlay Hover (Hanya muncul jika ada link) */}
          {isLinkAvailable && (
            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center backdrop-blur-[2px]">
              <div className="bg-white/20 p-3 rounded-full transform scale-0 transition-transform duration-300 ease-out group-hover:scale-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </div>
            </div>
          )}

          {/* Badge Coming Soon (Jika link "#") */}
          {!isLinkAvailable && (
            <div className="absolute inset-0 bg-gray-900/60 flex items-center justify-center">
              <span className="text-white font-bold uppercase tracking-wider text-xs border border-white/50 px-3 py-1.5 rounded bg-black/20 backdrop-blur-sm">No direct link</span>
            </div>
          )}
        </div>

        {/* --- KONTEN KARTU --- */}
        <div className="card-content p-4 md:p-6 flex flex-col flex-grow">
          <h3 className="card-title text-lg md:text-xl font-bold mb-2 text-[#2b2b2b] transition-colors duration-300 group-hover:text-[#c9b59c]">{project.title}</h3>
          <p className="card-desc text-sm md:text-base text-[#2b2b2b]/70 mb-5 flex-grow leading-relaxed">{project.description}</p>
          <div className="card-tags flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag, i) => (
              <span key={i} className="bg-[#f9f8f6] px-3 py-1.5 rounded-lg text-xs font-semibold text-[#666]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </a>
  );
};

const Works = () => {
  const [currentWorkPage, setCurrentWorkPage] = useState(0);
  const projectsPerPage = 6;
  const startIndex = currentWorkPage * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);
  const maxPage = Math.floor((projects.length - 1) / projectsPerPage);

  return (
    <section id="works" className="py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-[#c9b59c]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-[#c9b59c]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1100px] mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="section-header text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2b2b2b]">My Works</h2>
          <p className="section-subtitle text-lg text-[#2b2b2b]/60 max-w-xl mx-auto">Some web development projects and design experiments I have worked on.</p>
        </div>

        {/* Projects Grid */}
        <div className="works-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {currentProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-between mt-8">
          {/* Previous Button */}
          <button onClick={() => setCurrentWorkPage((prev) => Math.max(prev - 1, 0))} disabled={currentWorkPage === 0} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50">
            <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
            </svg>
          </button>

          {/* Next Button */}
          <button onClick={() => setCurrentWorkPage((prev) => Math.min(prev + 1, maxPage))} disabled={currentWorkPage === maxPage} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50">
            <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Works;
