import React from "react";
import { Link } from "react-router-dom";
import ExperienceCert from "../components/ExperienceCert";

const ExperiencePage = () => {
  return (
    <section className="py-8 md:py-10">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8">
        <Link
          to="/#experience"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#7a6855] no-underline mb-4 hover:text-[#2b2b2b] transition-colors duration-300"
        >
          <span aria-hidden="true">&larr;</span>
          Back to home
        </Link>
      </div>

      <ExperienceCert
        sectionId="experience-page"
        title="All Certifications"
        subtitle="A collection of my learning journey and certified achievements."
        showViewAll={false}
        showExperience={false}
      />
    </section>
  );
};

export default ExperiencePage;
