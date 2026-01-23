import React, { useState } from "react";

// Projects data
const projects = [
  { id: 1, title: "Fetch Pokemon", description: "Web app for fetching API Pokemon.", image: "/assets/fetchpoke.png", tags: ["ReactJS", "Tailwind CSS"], link: "https://reactpokemonapi.vercel.app/" },
  { id: 2, title: "UMKM Landing Page", description: "UMKM Website Profile (Our College Project).", image: "/assets/UMKMLP.png", tags: ["HTML", "CSS"], link: "https://umkm-web-three.vercel.app/" },
  { id: 3, title: "Recap-Chat Website", description: "Website for learning PHP and Framework Laravel.", image: "/assets/rechatwebsite.png", tags: ["PHP", "Laravel"], link: "#" },
  { id: 4, title: "Letter Website", description: "Website for sending letter to someone you mattered ;D.", image: "/assets/PESAN.png", tags: ["PHP", "Laravel"], link: "#" },
  { id: 5, title: "To-Do App", description: "Todo list", image: "/assets/todoo.png", tags: ["React Native", "Next.js"], link: "#" },
  { id: 6, title: "Quiz App", description: "QUIZ APP with REACT", image: "/assets/QUIZ1.png", tags: ["ReactJS"], link: "https://react-quiz-iota-nine.vercel.app/" },
];

// Project Card Component
const ProjectCard = ({ project, index }) => (
  <article
    className="project-card group bg-white rounded-2xl overflow-hidden 
      shadow-sm border border-gray-100/50
      transition-all duration-500 ease-out
      hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-3 hover:border-transparent"
    style={{ transitionDelay: `${index * 80}ms` }}
  >
    <div className="card-image relative overflow-hidden">
      <img src={project.image} alt={`Preview ${project.title}`} loading="lazy" className="w-full h-56 object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
    </div>
    <div className="card-content p-6 flex flex-col flex-grow">
      <h3 className="card-title text-xl font-bold mb-2 text-[#2b2b2b] transition-colors duration-300 group-hover:text-[#c9b59c]">{project.title}</h3>
      <p className="card-desc text-[#2b2b2b]/70 mb-5 flex-grow leading-relaxed">{project.description}</p>
      <div className="card-tags flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span key={i} className="bg-[#f9f8f6] px-3 py-1.5 rounded-lg text-xs font-semibold text-[#666] transition-all duration-300 hover:bg-[#c9b59c] hover:text-white cursor-default">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </article>
);

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

      <div className="max-w-[1100px] mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="section-header text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2b2b2b]">My Works</h2>
          <p className="section-subtitle text-lg text-[#2b2b2b]/60 max-w-xl mx-auto">Some web development projects and design experiments I have worked on.</p>
        </div>

        {/* Projects Grid */}
        <div className="works-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
