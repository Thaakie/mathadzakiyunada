document.addEventListener("DOMContentLoaded", () => {
  // --- UX: Efek Loading Awal (Memunculkan Body) ---
  if (typeof gsap !== "undefined") {
    gsap.to("body", { opacity: 1, duration: 0.8, ease: "power2.out" });
  }

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const scrollBtn = document.getElementById("scroll-down");
  scrollBtn?.addEventListener("click", () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  });

  const header = document.querySelector(".site-header");
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const sections = document.querySelectorAll("main section");
  const navLinksDesktop = document.querySelectorAll(".nav-link");

  // Hamburger Menu Toggle
  navToggle?.addEventListener("click", () => {
    navToggle.classList.toggle("is-active");
    navLinks.classList.toggle("is-open");
    document.body.style.overflow = navLinks.classList.contains("is-open") ? "hidden" : "";
  });

  // Smooth Scroll Navigation
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const targetId = a.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 72;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });

        if (navToggle && navLinks.classList.contains("is-open")) {
          navToggle.classList.remove("is-active");
          navLinks.classList.remove("is-open");
          document.body.style.overflow = "";
        }
      }
    });
  });

  // GSAP Animations
  if (typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    gsap.config({ trialWarn: false });

    // Header Dinamis
    ScrollTrigger.create({
      trigger: "body",
      start: "top -=100",
      end: "bottom top",
      toggleClass: { targets: header, className: "scrolled" },
    });

    // Navigasi Aktif
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 20%",
        end: "bottom 20%",
        onToggle: (self) => {
          const targetLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
          navLinksDesktop.forEach((link) => link.classList.remove("active"));
          if (self.isActive && targetLink) {
            targetLink.classList.add("active");
          }
        },
      });
    });

    // === HERO SECTION ===
    // Teks judul tanpa looping warna
    gsap.from(".title", {
      y: 24,
      opacity: 0,
      duration: 1.0,
      ease: "power3.out",
      delay: 0.4,
    });

    // Subtitle
    gsap.from(".subtitle", {
      y: 18,
      opacity: 0,
      duration: 0.9,
      delay: 0.8,
      ease: "power3.out",
    });

    // Foto profil kiri (fade-in normal)
    gsap.from(".hero-photo", {
      scale: 0.98,
      y: 10,
      opacity: 0,
      duration: 1.1,
      delay: 0.58,
      ease: "power3.out",
    });

    // Foto kanan — animasi masuk dari kanan dengan fade
    gsap.from(".hero-photo-right", {
      x: 50,
      opacity: 0,
      duration: 1.2,
      delay: 0.7,
      ease: "power3.out",
    });

    // === SCROLL SECTION ANIMATIONS ===
    gsap.from(".about-cards .card", {
      y: 18,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-cards",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".about-content h2, .about-content p", {
      y: 18,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-content",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".personal-info-grid .info-item", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.07,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".personal-info-grid",
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    gsap.utils.toArray(".photo-wrap, .video-item").forEach((el) => {
      gsap.from(el, {
        y: 50,
        opacity: 0,
        duration: 1.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    const contactElements = [".contact .section-title", ".contact p", ".contact-social-links", ".contact-form"];

    gsap.from(contactElements, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    // Button Hover Effects
    document.querySelectorAll(".btn").forEach((b) => {
      b.addEventListener("mouseenter", () => gsap.to(b, { scale: 1.03, duration: 0.18 }));
      b.addEventListener("mouseleave", () => gsap.to(b, { scale: 1, duration: 0.18 }));
    });
  }
});
