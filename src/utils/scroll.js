export const scrollPageToTop = (behavior = "smooth") => {
  const runScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior });
  };

  requestAnimationFrame(() => {
    runScroll();

    // A second frame keeps the motion reliable when React Router swaps content.
    requestAnimationFrame(runScroll);
  });
};
