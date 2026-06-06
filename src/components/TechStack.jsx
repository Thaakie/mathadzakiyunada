import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { initTechStackHoverAnimations } from "../animations";
import { fadeUp, staggerParent, viewport } from "../utils/motion";

const techStackCategories = [
  {
    category: "Frontend",
    items: [
      {
        name: "HTML5",
        proficiencyLabel: "Advanced",
        color: "#E34F26",
        description: "Structure & Semantics",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
          </svg>
        ),
      },
      {
        name: "CSS3",
        proficiencyLabel: "Upper-Intermediate",
        color: "#1572B6",
        description: "Modern Styling & Layouts",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
          </svg>
        ),
      },
      {
        name: "JavaScript",
        proficiencyLabel: "Intermediate",
        color: "#F7DF1E",
        description: "Interactive Client Logic",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
          </svg>
        ),
      },
      {
        name: "React",
        proficiencyLabel: "Beginner",
        color: "#61DAFB",
        description: "Component UI Library",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565z" />
          </svg>
        ),
      },
      {
        name: "Tailwind CSS",
        proficiencyLabel: "Intermediate",
        color: "#06B6D4",
        description: "Utility-First Styling",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
          </svg>
        ),
      },
      {
        name: "TanStack Query",
        proficiencyLabel: "Intermediate",
        color: "#FF4154",
        description: "Async State Management",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
            <circle cx="12" cy="5" r="3" />
            <circle cx="5" cy="19" r="3" />
            <circle cx="19" cy="19" r="3" />
            <path d="M5 16l6.5-8m1-2.5l6.5 8" />
            <path d="M12 8v8" strokeDasharray="3 3" />
            <circle cx="12" cy="19" r="1.5" fill="currentColor" />
          </svg>
        ),
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        proficiencyLabel: "Intermediate",
        color: "#339933",
        description: "Server-side JS Runtime",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M12 2L2 7.7v11.6L12 22l10-5.7V7.7L12 2zm-1 16.5l-4-2.3v-4.6l4 2.3v4.6zm0-6.9L7 9.3l4-2.3 4 2.3-4 2.3zm6 4.6l-4 2.3v-4.6l4-2.3v-4.6z" />
          </svg>
        ),
      },
      {
        name: "Express.js",
        proficiencyLabel: "Intermediate",
        color: "#404040",
        description: "Minimalist Web Framework",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
            <path d="M7 8l3 3-3 3" />
            <path d="M12 13h5" />
          </svg>
        ),
      },
      {
        name: "PostgreSQL",
        proficiencyLabel: "Intermediate",
        color: "#4169E1",
        description: "Robust SQL Database",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
          </svg>
        ),
      },
      {
        name: "REST API",
        proficiencyLabel: "Advanced",
        color: "#009688",
        description: "Standardized Web API Design",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
            <line x1="6" y1="6" x2="6" y2="6.01" />
            <line x1="6" y1="18" x2="6" y2="18.01" />
            <path d="M20 10v4" />
            <path d="M4 10v4" />
          </svg>
        ),
      },
      {
        name: "Redis",
        proficiencyLabel: "Intermediate",
        color: "#D82C20",
        description: "In-Memory Key-Value Caching",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5v-3.5l-10 5-10-5V17zm0-5l10 5 10-5v-3.5l-10 5-10-5V12z" />
          </svg>
        ),
      },
    ],
  },
  {
    category: "AI & Cloud",
    items: [
      {
        name: "Google Gemini",
        proficiencyLabel: "Intermediate",
        color: "#387CFF",
        description: "Generative AI Integration",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
          </svg>
        ),
      },
      {
        name: "Microsoft Azure",
        proficiencyLabel: "Beginner",
        color: "#0078D4",
        description: "Enterprise Cloud Services",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M5.4 19L2 13.5L12.5 3L18.6 9.1L22 4.5L12.5 21H5.4z" />
          </svg>
        ),
      },
      {
        name: "Cloud Run",
        proficiencyLabel: "Beginner",
        color: "#4285F4",
        description: "Serverless Container Platform",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17v-4h4v4h-4z" />
          </svg>
        ),
      },
    ],
  },
  {
    category: "Version Control",
    items: [
      {
        name: "GitHub",
        proficiencyLabel: "Intermediate",
        color: "#181717",
        description: "Cloud Repository Platform",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        ),
      },
      {
        name: "Git",
        proficiencyLabel: "Intermediate",
        color: "#F05032",
        description: "Version Control Engine",
        icon: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M23.384 11.41L12.59.616a1.686 1.686 0 0 0-2.384 0l-1.9 1.9 2.9 2.9a1.687 1.687 0 0 1 2.185 2.185l2.99 2.99a1.688 1.688 0 0 1 0 2.384l-2.9 2.9a1.687 1.687 0 0 1-2.285 0l-2.99-2.99a1.687 1.687 0 0 1-2.085-2.085l-2.9-2.9a1.686 1.686 0 0 0-2.384 0L.616 11.41a1.686 1.686 0 0 0 0 2.384l10.795 10.795a1.686 1.686 0 0 0 2.384 0l10.79-10.79a1.686 1.686 0 0 0 0-2.385z" />
          </svg>
        ),
      },
    ],
  },
];

const TechCard = ({ tech, index, registerCard }) => {
  return (
    <motion.div
      ref={(node) => registerCard(node, index)}
      variants={fadeUp}
      data-tech-color={tech.color}
      data-hover-info={tech.description}
      className="tech-card group relative bg-white rounded-[10px] p-6 border border-[#2b2b2b]/12 shadow-sm cursor-default overflow-hidden"
    >
      <div
        data-tech-glow
        className="absolute inset-0 rounded-[10px] pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${tech.color}1f, transparent 65%)`,
        }}
      />

      <div data-tech-icon className="relative z-10 mb-4" style={{ color: tech.color }}>
        {tech.icon}
      </div>

      <div className="relative z-10 flex items-center justify-between gap-4">
        <span className="font-semibold text-[#2b2b2b]">{tech.name}</span>
        <span className="text-sm text-[#2b2b2b]/60">- {tech.proficiencyLabel}</span>
      </div>
    </motion.div>
  );
};

const TechStack = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const cleanup = initTechStackHoverAnimations(cardRefs.current);
    return cleanup;
  }, []);

  const registerCard = (node, index) => {
    cardRefs.current[index] = node;
  };

  let globalIndex = 0;

  return (
    <section id="techstack" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#c9b59c]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#c9b59c]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1100px] mx-auto px-8 relative z-10">
        <motion.div
          className="section-header text-center mb-16"
          variants={staggerParent(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4 text-[#2b2b2b]">
            Tech Stack
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-[#2b2b2b]/60 max-w-xl mx-auto">
            Technologies and tools I have learned and used in web development.
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {techStackCategories.map((categoryGroup) => (
            <div key={categoryGroup.category} className="category-section">
              <motion.h3
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9b59c] mb-6 flex items-center gap-3 border-b border-[#2b2b2b]/8 pb-2"
              >
                {categoryGroup.category}
              </motion.h3>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerParent(0.1, 0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                {categoryGroup.items.map((tech) => {
                  const currentIndex = globalIndex++;
                  return (
                    <TechCard
                      key={tech.name}
                      tech={tech}
                      index={currentIndex}
                      registerCard={registerCard}
                    />
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
