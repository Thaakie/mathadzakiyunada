import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Animation configuration - easily customizable
const config = {
  duration: {
    fast: 0.4,
    normal: 0.6,
    slow: 0.8,
  },
  ease: {
    smooth: "power2.out",
    elastic: "elastic.out(1, 0.5)",
    bounce: "back.out(1.7)",
  },
  stagger: 0.1,
};

export const initAnimations = () => {
  let ctx = gsap.context(() => {
    // =====================
    // 1. HERO ANIMATIONS
    // =====================
    const heroTl = gsap.timeline({
      defaults: { ease: config.ease.smooth },
    });

    // Set initial states
    gsap.set([".title", ".subtitle", ".hero-buttons", ".hero-photo"], {
      opacity: 0,
    });
    gsap.set(".title", { y: 40 });
    gsap.set(".subtitle", { y: 30 });
    gsap.set(".hero-buttons", { y: 20, scale: 0.95 });
    gsap.set(".hero-photo", { x: 40, scale: 0.95 });

    // Animate hero elements
    heroTl
      .to(".title", {
        y: 0,
        opacity: 1,
        duration: config.duration.slow,
      })
      .to(
        ".subtitle",
        {
          y: 0,
          opacity: 1,
          duration: config.duration.normal,
        },
        "-=0.5"
      )
      .to(
        ".hero-buttons",
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: config.duration.fast,
        },
        "-=0.4"
      )
      .to(
        ".hero-photo",
        {
          x: 0,
          scale: 1,
          opacity: 1,
          duration: config.duration.slow,
        },
        "-=0.6"
      );

    // =====================
    // 2. SCROLL ANIMATIONS
    // =====================
    const createScrollAnimation = (selector, options = {}) => {
      const elements = document.querySelectorAll(selector);
      if (!elements.length) return;

      elements.forEach((el, index) => {
        gsap.set(el, { opacity: 0, y: 50 });

        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          duration: options.duration || config.duration.normal,
          delay: options.stagger ? index * config.stagger : options.delay || 0,
          ease: config.ease.smooth,
        });
      });
    };

    // Apply scroll animations to sections
    createScrollAnimation(".section-header");
    createScrollAnimation(".about-content");
    createScrollAnimation(".about-cards .card", { stagger: true });
    createScrollAnimation(".contact-form");

    // =====================
    // 3. TECH STACK ANIMATIONS
    // =====================
    const techCards = document.querySelectorAll(".tech-card");
    if (techCards.length) {
      gsap.set(techCards, { opacity: 0, y: 60, scale: 0.95 });

      ScrollTrigger.batch(techCards, {
        start: "top 85%",
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.08,
            duration: config.duration.normal,
            ease: config.ease.smooth,
          });
        },
        onLeaveBack: (batch) => {
          gsap.to(batch, {
            opacity: 0,
            y: 40,
            scale: 0.95,
            stagger: 0.05,
            duration: config.duration.fast,
          });
        },
      });

      // Animate progress bars when in view
      const progressBars = document.querySelectorAll(".progress-bar-fill");
      progressBars.forEach((bar) => {
        const width = bar.style.width;
        gsap.set(bar, { width: "0%" });

        ScrollTrigger.create({
          trigger: bar,
          start: "top 90%",
          onEnter: () => {
            gsap.to(bar, {
              width: width,
              duration: 1,
              ease: "power2.out",
            });
          },
          onLeaveBack: () => {
            gsap.to(bar, {
              width: "0%",
              duration: 0.5,
            });
          },
        });
      });
    }

    // =====================
    // 4. PROJECT CARDS ANIMATION
    // =====================
    const projectCards = document.querySelectorAll(".project-card");
    if (projectCards.length) {
      gsap.set(projectCards, { opacity: 0, y: 60 });

      ScrollTrigger.batch(projectCards, {
        start: "top 88%",
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: config.duration.slow,
            ease: config.ease.smooth,
          });
        },
        onLeaveBack: (batch) => {
          gsap.to(batch, {
            opacity: 0,
            y: 50,
            stagger: 0.05,
            duration: config.duration.fast,
          });
        },
      });
    }

    // =====================
    // 5. PERSONAL INFO ANIMATION
    // =====================
    const infoItems = document.querySelectorAll(".info-item");
    if (infoItems.length) {
      gsap.set(infoItems, { opacity: 0, x: -20 });

      ScrollTrigger.batch(infoItems, {
        start: "top 90%",
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            x: 0,
            stagger: 0.1,
            duration: config.duration.normal,
            ease: config.ease.smooth,
          });
        },
      });
    }

    // Refresh ScrollTrigger after all animations created
    ScrollTrigger.refresh();
  });

  return () => ctx.revert();
};
