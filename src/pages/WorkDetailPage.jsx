import React from "react";
import { motion } from "framer-motion";
import { Link, Navigate, useParams } from "react-router-dom";
import { getProjectBySlug } from "../data/projects";
import { fadeUp, softScale, staggerParent, viewport } from "../utils/motion";

const detailMeta = [
  { key: "category", label: "Category" },
  { key: "role", label: "Role" },
  { key: "year", label: "Year" },
  { key: "status", label: "Status" },
];

const WorkDetailPage = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/works" replace />;
  }

  const hasImage = Boolean(project.image);

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[1100px] mx-auto px-4 md:px-8">
        <motion.div initial="hidden" animate="visible" variants={staggerParent(0.12, 0.04)}>
          <motion.div variants={fadeUp}>
            <Link
              to="/works"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#7a6855] no-underline mb-8 hover:text-[#2b2b2b] transition-colors duration-300"
            >
              <span aria-hidden="true">&larr;</span>
              Back to works
            </Link>
          </motion.div>

          <div className="space-y-8 md:space-y-10">
            <motion.div variants={softScale} className="overflow-hidden rounded-[10px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              {hasImage ? (
                <img
                  src={project.image}
                  alt={`Preview ${project.title}`}
                  className="w-full h-full object-cover min-h-[280px] md:min-h-[420px] max-h-[640px]"
                />
              ) : (
                <div className="min-h-[280px] md:min-h-[420px] bg-gradient-to-br from-[#f7f1ea] via-white to-[#e7ddd1] flex items-center justify-center p-8 text-center">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-[#9d896f] mb-3">
                      Upcoming Project
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold text-[#2b2b2b]">
                      {project.title}
                    </h1>
                  </div>
                </div>
              )}
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white/80 backdrop-blur-sm rounded-[10px] border-[3px] border-[#2b2b2b] shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-6 md:p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#9d896f] mb-3">
                {project.category}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-[#2b2b2b] mb-4">
                {project.title}
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-[#2b2b2b]/75 mb-8">
                {project.description}
              </p>

              <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8" initial="hidden" whileInView="visible" viewport={viewport} variants={staggerParent(0.08, 0.04)}>
                {detailMeta.map(({ key, label }) => (
                  <motion.div key={key} variants={fadeUp} className="rounded-[10px] border-2 border-[#2b2b2b]/18 bg-[#f9f8f6] px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#8d7a66] mb-2">
                      {label}
                    </p>
                    <p className="text-sm font-semibold text-[#2b2b2b]">
                      {project[key]}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="mb-8">
                <h2 className="text-lg font-bold text-[#2b2b2b] mb-4">
                  Highlights
                </h2>
                <motion.ul className="space-y-3 pl-5 text-[#2b2b2b]/75" initial="hidden" whileInView="visible" viewport={viewport} variants={staggerParent(0.08, 0.04)}>
                  {project.highlights.map((item) => (
                    <motion.li key={item} variants={fadeUp}>{item}</motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div variants={fadeUp} className="mb-8">
                <h2 className="text-lg font-bold text-[#2b2b2b] mb-4">
                  Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.slug}-detail-${tag}`}
                      className="inline-flex items-center rounded-full bg-[#efe9e3] px-3 py-2 text-sm font-semibold text-[#5e5144]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                {project.liveUrl ? (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-[10px] bg-[#2b2b2b] px-5 py-3 text-sm font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-1 hover:bg-[#1d1d1d]"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Visit live project
                  </motion.a>
                ) : (
                  <span className="inline-flex items-center justify-center rounded-[10px] bg-[#d9d1c8] px-5 py-3 text-sm font-semibold text-[#5e5144]">
                    Live link not available yet
                  </span>
                )}

                {project.sourceUrl && (
                  <motion.a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-[10px] border border-[#2b2b2b]/15 px-5 py-3 text-sm font-semibold text-[#2b2b2b] no-underline transition-all duration-300 hover:-translate-y-1 hover:border-[#c9b59c] hover:text-[#8b745b]"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View source
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkDetailPage;








