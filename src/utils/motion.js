export const viewport = {
  once: true,
  amount: 0.2,
};

export const smoothEase = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 36, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: smoothEase,
    },
  },
};

export const softScale = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: smoothEase,
    },
  },
};

export const staggerParent = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const pageTransition = {
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: smoothEase,
    },
  },
  exit: {
    opacity: 0,
    y: -14,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 1, 1],
    },
  },
};
