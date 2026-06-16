import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { fadeUp, staggerParent, viewport } from "../utils/motion";

const Works = ({ sectionId = "works", title = "My Works", subtitle = "Some web development projects and design experiments I have worked on.", showPagination = true, showViewAll = false, animateImmediately = false }) => {
  const currentProjects = useMemo(() => {
    if (showViewAll) {
      // Limit to 6 projects on homepage preview
      return projects.slice(0, 6);
    }
    return projects;
  }, [showViewAll]);

  const featuredProject = useMemo(() => currentProjects.find((project) => project.featured) ?? currentProjects[0], [currentProjects]);

  return (
    <section id={sectionId} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-[#c9b59c]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-[#c9b59c]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1100px] mx-auto px-4 md:px-8 relative z-10">
        <motion.div className="section-header text-center mb-14" variants={staggerParent(0.12)} initial="hidden" {...(animateImmediately ? { animate: "visible" } : { whileInView: "visible", viewport })}>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4 text-[#2b2b2b]">
            {title}
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle text-lg text-[#2b2b2b]/60 max-w-2xl mx-auto">
            {subtitle}
          </motion.p>
        </motion.div>

        {featuredProject && (
          <motion.div className="mb-10 md:mb-12" variants={fadeUp} initial="hidden" {...(animateImmediately ? { animate: "visible" } : { whileInView: "visible", viewport })}>
            <Link
              to={`/works/${featuredProject.slug}`}
              className="group block overflow-hidden rounded-[28px] border border-[#2b2b2b]/10 bg-[#f7f1ea] no-underline text-inherit shadow-[0_24px_80px_rgba(43,43,43,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[#2b2b2b]/20"
            >
              <div className="grid gap-6 p-5 md:grid-cols-[1.1fr_0.9fr] md:items-center md:p-7">
                <div className="relative overflow-hidden rounded-[22px] border border-black/5 bg-white/70 aspect-[16/10]">
                  {featuredProject.image ? (
                    <img src={featuredProject.image} alt={`Preview ${featuredProject.title}`} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#f2e6d8] via-[#fbfaf7] to-[#e8d8c4] px-6 text-center">
                      <div>
                        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#8b7a66]">Featured Work</p>
                        <h3 className="text-xl font-bold text-[#2b2b2b]">{featuredProject.title}</h3>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-center">
                  <span className="mb-3 inline-flex w-fit items-center rounded-full border border-[#7a6855]/15 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-[#7a6855]">Project Highlight</span>

                  <h3 className="mb-3 text-2xl font-bold leading-tight text-[#2b2b2b] md:text-3xl">{featuredProject.title}</h3>

                  <p className="mb-5 text-sm leading-7 text-[#2b2b2b]/65 md:text-[15px]">{featuredProject.description}</p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {featuredProject.tags.slice(0, 4).map((tag) => (
                      <span key={`featured-${featuredProject.slug}-${tag}`} className="rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2b2b2b]/60">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mb-6 space-y-2 text-sm text-[#2b2b2b]/70">
                    {featuredProject.highlights?.slice(0, 2).map((item) => (
                      <p key={`${featuredProject.slug}-${item}`} className="flex items-start gap-2">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#c9b59c]" />
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#2b2b2b] transition-transform duration-300 group-hover:translate-x-1">
                    View featured project
                    <span aria-hidden="true">-{">"}</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        <motion.div
          className="works-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={staggerParent(0.1, 0.06)}
          initial="hidden"
          {...(animateImmediately ? { animate: "visible" } : { whileInView: "visible", viewport })}
        >
          {currentProjects.map((project, index) => (
            <motion.div key={project.id} variants={fadeUp} custom={index}>
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {showViewAll && (
          <motion.div className="mt-10 flex justify-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
            <Link to="/works" className="inline-flex items-center gap-2 rounded-[10px] bg-[#2b2b2b] px-6 py-3 text-sm font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-1 hover:bg-[#1d1d1d]">
              View all works
              <span aria-hidden="true">-{">"}</span>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Works;
