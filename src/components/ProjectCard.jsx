import React from "react";
import { Link } from "react-router-dom";
import { scrollPageToTop } from "../utils/scroll";

const ProjectCard = ({ project, index = 0 }) => {
  const hasImage = Boolean(project.image);

  const getStatusIndicator = (status) => {
    switch (status?.toLowerCase()) {
      case "live":
        return <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />;
      case "prototype":
        return <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />;
      case "private demo":
        return <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />;
      default:
        return <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-gray-400" />;
    }
  };

  return (
    <Link
      to={`/works/${project.slug}`}
      className="block w-full h-full no-underline text-inherit"
      aria-label={`View details for ${project.title}`}
      onClick={() => scrollPageToTop("smooth")}
    >
      <article
        className="project-card group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[#2b2b2b]/10 bg-white p-4 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#2b2b2b]/25 hover:shadow-xl hover:shadow-black/5"
        style={{ transitionDelay: `${index * 80}ms` }}
      >
        {/* Floating Card Image Wrapper */}
        <div className="card-image relative w-full aspect-[4/3] overflow-hidden rounded-[18px] border border-black/5 bg-[#fbfaf7]">
          {hasImage ? (
            <img
              src={project.image}
              alt={`Preview ${project.title}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#f5efe9] via-white to-[#e7ddd1] px-6 text-center">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#8b7a66]">
                  Upcoming
                </p>
                <h3 className="text-base font-bold text-[#2b2b2b]">
                  {project.title}
                </h3>
              </div>
            </div>
          )}
        </div>

        {/* Card Content Wrapper */}
        <div className="flex flex-grow flex-row items-stretch mt-4 gap-4">
          {/* Left Column: Year Divider */}
          <div className="flex flex-col items-center justify-center pr-4 border-r border-[#2b2b2b]/10 shrink-0 text-center min-w-[55px]">
            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#2b2b2b]/40 mb-1">
              Year
            </span>
            <span className="text-base font-extrabold text-[#2b2b2b] leading-tight">
              {project.year === "Next Release" ? "Soon" : project.year}
            </span>
          </div>

          {/* Right Column: Title, Description, Tags */}
          <div className="flex-grow min-w-0 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5 text-[9px] font-bold uppercase tracking-wider text-[#2b2b2b]/50">
                <span>{project.category}</span>
                <span>•</span>
                <span className="inline-flex items-center">
                  {getStatusIndicator(project.status)}
                  {project.status}
                </span>
              </div>

              <h3 className="card-title text-base font-bold text-[#2b2b2b] transition-colors duration-300 group-hover:text-[#c9b59c] leading-snug mb-1 line-clamp-1">
                {project.title}
              </h3>

              <p className="card-desc text-xs leading-relaxed text-[#2b2b2b]/60 line-clamp-2 mb-3">
                {project.summary}
              </p>
            </div>

            <div className="card-tags flex flex-wrap gap-1 mt-auto">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={`${project.slug}-${tag}`}
                  className="rounded-full bg-[#2b2b2b]/5 px-2.5 py-0.5 text-[9px] font-bold tracking-wide text-[#2b2b2b]/50 uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
