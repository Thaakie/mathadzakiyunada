import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, staggerParent, viewport } from "../utils/motion";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "Works", to: "/works" },
  { label: "About", to: { pathname: "/", hash: "#about" } },
  { label: "Contact", to: { pathname: "/", hash: "#contact" } },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Thaakie",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/m-atha-dzaki-yunada-35052131a/",
  },
  {
    label: "Email",
    href: "mailto:atha468@gmail.com",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-black/5 bg-[#1f1c18] text-[#f7f2ec]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/4 h-56 w-56 rounded-full bg-[#c9b59c]/12 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-8 py-14 md:py-16"
        variants={staggerParent(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <motion.div variants={fadeUp}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#c9b59c]">
              Portfolio
            </p>
            <h2 className="mb-4 text-2xl md:text-3xl font-bold text-white">
              M Atha Dzaki Yunada
            </h2>
            <p className="max-w-md text-sm md:text-base leading-relaxed text-white/70">
              Web developer exploring full-stack development, AI integration, and cloud technologies to build impactful digital products.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#c9b59c]">
              Navigate
            </p>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="w-fit text-sm text-white/72 no-underline transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#c9b59c]">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-fit text-sm text-white/72 no-underline transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="flex flex-col gap-3 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between"
        >
          <p>© {year} M Atha Dzaki Yunada.</p>
          <p>Available for internships, collaborations, and creative builds.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
