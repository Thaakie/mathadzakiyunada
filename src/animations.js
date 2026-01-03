import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initAnimations = () => {
  // Tahun Copyright Otomatis sudah dihandle di Footer

  // --- GSAP ANIMATION ---
  let ctx = gsap.context(() => {
    // 1. Hero Animation (Load Awal)
    // Menggunakan .from() agar elemen muncul dari transparan (Anti-Blank)
    const tl = gsap.timeline();
    tl.from(".title", { y: 30, opacity: 0, duration: 1, ease: "power3.out" })
      .from(".subtitle", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
      .from(".hero-buttons", { scale: 0.9, opacity: 0, duration: 0.5 }, "-=0.4")
      .from(".hero-photo", { x: 30, opacity: 0, duration: 1 }, "-=0.8");

    // 2. Scroll Animation (Fade In Up)
    const animateUp = (target, delay = 0) => {
      // Use toArray to handle multiple elements simpler if needed, but querySelector check is fine
      if (document.querySelector(target)) {
        gsap.set(target, { opacity: 0, y: 40 });
        gsap.to(target, {
          scrollTrigger: {
            trigger: target,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: delay,
          ease: "power3.out",
        });
      }
    };

    animateUp(".section-header");
    animateUp(".about-content");
    animateUp(".about-cards", 0.2);
    animateUp(".contact-form");

    // 3. Project Cards Stagger (Muncul berurutan)
    if (document.querySelector(".project-card")) {
      gsap.set(".project-card", { opacity: 0, y: 50 });
      ScrollTrigger.batch(".project-card", {
        start: "top 90%",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
          }),
        onLeaveBack: (batch) =>
          gsap.to(batch, {
            opacity: 0,
            y: 50,
          }),
      });
    }

    // Navbar Glass Effect saat Scroll sudah dihandle di Header

    // Refresh ScrollTrigger setelah semua animasi dibuat
    ScrollTrigger.refresh();
  });

  return () => ctx.revert();
};