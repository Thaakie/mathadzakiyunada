import React from "react";
import { Link } from "react-router-dom";
import Works from "../components/Works";

const WorksPage = () => {
  return (
    <section className="py-8 md:py-10">
      <div className="max-w-[1100px] mx-auto px-4 md:px-8">
        <Link
          to="/#works"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#7a6855] no-underline mb-4 hover:text-[#2b2b2b] transition-colors duration-300"
        >
          <span aria-hidden="true">&larr;</span>
          Back to home works
        </Link>
      </div>

      <Works
        sectionId="works-page"
        title="All Works"
        subtitle="A growing collection of projects, experiments, and learning builds. Each card opens a dedicated detail page so this portfolio can expand cleanly over time."
        showPagination={false}
        showViewAll={false}
      />
    </section>
  );
};

export default WorksPage;
