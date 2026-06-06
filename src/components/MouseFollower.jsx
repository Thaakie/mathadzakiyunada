import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseFollower() {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isProjectHovered, setIsProjectHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [hoverColor, setHoverColor] = useState("");
  const [isDarkBg, setIsDarkBg] = useState(false);

  // Mouse coordinates (start offscreen)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring configuration for the outer ring
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const followerX = useSpring(mouseX, springConfig);
  const followerY = useSpring(mouseY, springConfig);

  const isColorLight = (hex) => {
    if (!hex) return false;
    if (hex.toLowerCase() === "#f7df1e") return true;
    return false;
  };

  useEffect(() => {
    // Check if touch device or small screen
    const checkDevice = () => {
      const mobileQuery = window.matchMedia("(pointer: coarse)");
      setIsMobile(mobileQuery.matches || window.innerWidth < 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    if (isMobile) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Detect hover state on interactive items
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      // Detect dark background section (About & Footer)
      const isDarkSection = !!(target.closest("#about") || target.closest("footer"));
      setIsDarkBg(isDarkSection);

      // Detect Project Card hover
      const isProjectCard = target.closest(".project-card");
      setIsProjectHovered(!!isProjectCard);

      // Detect Tech Stack hover
      const hoverInfoEl = target.closest("[data-hover-info]");
      const hoverTextValue = hoverInfoEl ? hoverInfoEl.getAttribute("data-hover-info") : "";
      setHoverText(hoverTextValue);

      const colorValue = hoverInfoEl ? hoverInfoEl.getAttribute("data-tech-color") : "";
      setHoverColor(colorValue);

      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".info-item") ||
        target.closest(".contact-social-links a") ||
        target.classList.contains("clickable") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovered(!!isInteractive && !hoverTextValue && !isProjectCard);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile, mouseX, mouseY, isVisible]);

  if (isMobile || !isVisible) return null;

  // Render to document.body to prevent parent container transform/perspective scaling issues
  return createPortal(
    <>
      {/* Outer follow circle with attached Tooltip Pill */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border pointer-events-none z-[99999] will-change-transform flex items-center justify-center overflow-visible"
        style={{
          x: followerX,
          y: followerY,
        }}
        animate={{
          scale: isProjectHovered ? 2.3 : (isHovered ? 1.8 : 1),
          backgroundColor: isProjectHovered 
            ? "#2b2b2b" 
            : (isHovered 
                ? (isDarkBg ? "rgba(247, 242, 236, 0.15)" : "rgba(201, 181, 156, 0.25)") 
                : "rgba(201, 181, 156, 0)"),
          borderColor: isProjectHovered 
            ? "#2b2b2b" 
            : (hoverText 
                ? (hoverColor || "#c9b59c") 
                : (isHovered 
                    ? (isDarkBg ? "#ffffff" : "#2b2b2b") 
                    : (isDarkBg ? "#ffffff" : "#c9b59c"))),
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        {/* Attached Tooltip Pill (Tech Stack Hover) */}
        {hoverText && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 28 }}
            animate={{ opacity: 1, scale: 1, x: 28 }}
            className="absolute left-0 pointer-events-none px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase select-none whitespace-nowrap"
            style={{
              backgroundColor: hoverColor || "#2b2b2b",
              color: isColorLight(hoverColor) ? "#2b2b2b" : "#ffffff",
              boxShadow: `0 8px 20px ${(hoverColor || "#2b2b2b") + "40"}`,
            }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            {hoverText}
          </motion.div>
        )}

        {/* Circular spinning SEE MORE text + Arrow (Project Card Hover) */}
        {isProjectHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none w-full h-full"
          >
            {/* Spinning Text SVG */}
            <motion.svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
              <path
                id="seeMorePath"
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                fill="none"
              />
              <text fill="#c9b59c" className="text-[8.5px] font-extrabold tracking-[0.11em] select-none">
                <textPath href="#seeMorePath">
                  SEE MORE • SEE MORE • SEE MORE •
                </textPath>
              </text>
            </motion.svg>

            {/* Central Arrow */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
              <path
                d="M44 56 L56 44 M56 44 H47 M56 44 V53"
                stroke="#c9b59c"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </motion.div>
        )}
      </motion.div>
      
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full pointer-events-none z-[100000] will-change-transform"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: (isHovered || isProjectHovered) ? 0 : 1,
          backgroundColor: isDarkBg ? "#c9b59c" : "#2b2b2b",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      />
    </>,
    document.body
  );
}
