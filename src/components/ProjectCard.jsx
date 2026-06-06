import React from "react";
import { Link } from "react-router-dom";
import { scrollPageToTop } from "../utils/scroll";

const ProjectCard = ({ project, index = 0 }) => {
  const hasImage = Boolean(project.image);
  const hasExternalLink = Boolean(project.liveUrl);

  return (
    <Link
      to={`/works/${project.slug}`}
      className="block w-full h-full no-underline text-inherit"
      aria-label={`View details for ${project.title}`}
      onClick={() => scrollPageToTop("smooth")}
    >
      <article
        className="project-card group bg-white rounded-[10px] overflow-hidden shadow-sm border border-[#2b2b2b]/12 transition-all duration-500 ease-out h-full flex flex-col hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-3 hover:border-[#2b2b2b]/30"
        style={{ transitionDelay: `${index * 80}ms` }}
      >
        <div className="card-image relative overflow-hidden h-40 sm:h-48 md:h-56">
          {hasImage ? (
            <img
              src={project.image}
              alt={`Preview ${project.title}`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#f5efe9] via-white to-[#e7ddd1] flex items-center justify-center text-center px-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#8b7a66] mb-2">
                  Upcoming
                </p>
                <h3 className="text-xl font-bold text-[#2b2b2b]">
                  {project.title}
                </h3>
              </div>
            </div>
          )}

          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6f5b46] backdrop-blur-sm">
              {project.status}
            </span>
          </div>

          <div className="absolute inset-0 bg-black/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center backdrop-blur-[2px]">
            <div className="bg-white/20 px-4 py-2 rounded-full transform translate-y-3 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              <span className="text-sm font-semibold text-white">
                View details
              </span>
            </div>
          </div>
        </div>

        <div className="card-content p-4 md:p-6 flex flex-col flex-grow">
          <div className="flex items-center justify-between gap-4 mb-2">
            <h3 className="card-title text-lg md:text-xl font-bold text-[#2b2b2b] transition-colors duration-300 group-hover:text-[#c9b59c]">
              {project.title}
            </h3>
            {hasExternalLink && (
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9d896f]">
                Live
              </span>
            )}
          </div>

          <p className="card-desc text-sm md:text-base text-[#2b2b2b]/70 mb-5 flex-grow leading-relaxed">
            {project.summary}
          </p>

          <div className="card-tags flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag) => (
              <span
                key={`${project.slug}-${tag}`}
                className="bg-[#f9f8f6] px-3 py-1.5 rounded-lg text-xs font-semibold text-[#666]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;


