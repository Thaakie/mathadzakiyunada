import { gsap } from "gsap";

export const initTechStackHoverAnimations = (elements = []) => {
  const cards = elements.filter(Boolean);

  if (!cards.length) {
    return () => {};
  }

  const cleanups = cards.map((card) => {
    const icon = card.querySelector("[data-tech-icon]");
    const glow = card.querySelector("[data-tech-glow]");
    const color = card.dataset.techColor || "#c9b59c";

    gsap.set(card, {
      y: 0,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
      borderColor: "rgba(0, 0, 0, 0.04)",
    });

    if (glow) {
      gsap.set(glow, { opacity: 0, scale: 0.96 });
    }

    if (icon) {
      gsap.set(icon, { scale: 1, rotate: 0, transformOrigin: "50% 50%" });
    }

    const handleEnter = () => {
      gsap.to(card, {
        y: -10,
        boxShadow: "0 24px 48px rgba(0, 0, 0, 0.08)",
        borderColor: `${color}22`,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });

      if (icon) {
        gsap.to(icon, {
          scale: 1.12,
          rotate: -4,
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });
      }

      if (glow) {
        gsap.to(glow, {
          opacity: 1,
          scale: 1,
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    };

    const handleLeave = () => {
      gsap.to(card, {
        y: 0,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
        borderColor: "rgba(0, 0, 0, 0.04)",
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });

      if (icon) {
        gsap.to(icon, {
          scale: 1,
          rotate: 0,
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto",
        });
      }

      if (glow) {
        gsap.to(glow, {
          opacity: 0,
          scale: 0.96,
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    };

    card.addEventListener("mouseenter", handleEnter);
    card.addEventListener("mouseleave", handleLeave);

    return () => {
      card.removeEventListener("mouseenter", handleEnter);
      card.removeEventListener("mouseleave", handleLeave);
      gsap.killTweensOf(card);
      if (icon) gsap.killTweensOf(icon);
      if (glow) gsap.killTweensOf(glow);
    };
  });

  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
};
