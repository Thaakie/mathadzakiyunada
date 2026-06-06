import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { fadeUp, staggerParent, viewport } from "../utils/motion";

const Works = ({
  sectionId = "works",
  title = "My Works",
  subtitle = "Some web development projects and design experiments I have worked on.",
  showPagination = true,
  showViewAll = false,
  animateImmediately = false,
}) => {
  const currentProjects = useMemo(() => {
    if (showViewAll) {
      // Limit to 6 projects on homepage preview
      return projects.slice(0, 6);
    }
    return projects;
  }, [showViewAll]);

  return (
    <section id={sectionId} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-[#c9b59c]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-[#c9b59c]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1100px] mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="section-header text-center mb-14"
          variants={staggerParent(0.12)}
          initial="hidden"
          {...(animateImmediately ? { animate: "visible" } : { whileInView: "visible", viewport })}
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4 text-[#2b2b2b]">
            {title}
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle text-lg text-[#2b2b2b]/60 max-w-2xl mx-auto">
            {subtitle}
          </motion.p>
        </motion.div>

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
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/works"
              className="inline-flex items-center gap-2 rounded-[10px] bg-[#2b2b2b] px-6 py-3 text-sm font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-1 hover:bg-[#1d1d1d]"
            >
              View all works
              <span aria-hidden="true">-></span>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Works;

