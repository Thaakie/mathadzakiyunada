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
        className="project-card group relative flex h-full flex-col overflow-hidden rounded-[10px] border border-[#2b2b2b]/12 bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-3 hover:border-[#2b2b2b]/30 hover:shadow-2xl hover:shadow-black/10"
        style={{ transitionDelay: `${index * 80}ms` }}
      >
        <div className="card-image relative h-40 overflow-hidden sm:h-48 md:h-56">
          {hasImage ? (
            <img
              src={project.image}
              alt={`Preview ${project.title}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#f5efe9] via-white to-[#e7ddd1] px-6 text-center">
              <div>
                <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#8b7a66]">
                  Upcoming
                </p>
                <h3 className="text-xl font-bold text-[#2b2b2b]">
                  {project.title}
                </h3>
              </div>
            </div>
          )}

          <div className="absolute left-4 top-4">
            <span className="inline-flex items-center rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6f5b46] backdrop-blur-sm">
              {project.status}
            </span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
            <div className="translate-y-3 transform rounded-full bg-white/20 px-4 py-2 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              <span className="text-sm font-semibold text-white">
                View details
              </span>
            </div>
          </div>
        </div>

        <div className="card-content flex flex-grow flex-col p-4 md:p-6">
          <div className="mb-2 flex items-center justify-between gap-4">
            <h3 className="card-title text-lg font-bold text-[#2b2b2b] transition-colors duration-300 group-hover:text-[#c9b59c] md:text-xl">
              {project.title}
            </h3>
            {hasExternalLink && (
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9d896f]">
                Live
              </span>
            )}
          </div>

          <p className="card-desc mb-5 flex-grow text-sm leading-relaxed text-[#2b2b2b]/70 md:text-base">
            {project.summary}
          </p>

          <div className="card-tags mt-auto flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={`${project.slug}-${tag}`}
                className="rounded-lg bg-[#f9f8f6] px-3 py-1.5 text-xs font-semibold text-[#666]"
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
