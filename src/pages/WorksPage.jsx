import React from "react";
import Works from "../components/Works";

const WorksPage = () => {
  return (
    <Works
      sectionId="works-page"
      title="All Works"
      subtitle="A growing collection of projects, experiments, and learning builds. Each card opens a dedicated detail page so this portfolio can expand cleanly over time."
      showPagination={false}
      showViewAll={false}
    />
  );
};

export default WorksPage;
