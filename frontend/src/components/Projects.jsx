import { useEffect, useRef, useState } from "react";
import { FaProjectDiagram } from "react-icons/fa";

const projects = [
  {
    title: "Schedule",
    tech: [
      "MERN",
      "React",
      "Tailwind",
      "REST APIs",
      "Google APIs",
      "JavaScript",
    ],
    description:
      "A smart scheduling application that allows users to plan, manage, and track events efficiently. Integrated Google APIs for calendar synchronization and reminders, with a scalable backend built using MERN architecture.",
  },
  {
    title: "Pokedex Lite",
    tech: ["MERN", "React", "Tailwind", "REST APIs", "JavaScript"],
    description:
      "A lightweight Pokédex web app that fetches Pokémon data from public REST APIs. Features include real-time search, detailed Pokémon stats, and responsive UI optimized for all devices.",
  },
  {
    title: "Booking Management System",
    tech: [
      "MERN",
      "MongoDB",
      "PHP",
      "REST APIs",
      "NoSQL",
      "React",
      "Tailwind",
      "JavaScript",
    ],
    description:
      "A full-stack booking management system designed to handle reservations, availability tracking, and user management. Focused on secure API handling, efficient database operations, and smooth frontend-backend communication.",
  },
  {
    title: "MediSafe",
    tech: [
      "MERN",
      "PostgreSQL",
      "PHP",
      "REST APIs",
      "React",
      "Tailwind",
      "JavaScript",
    ],
    description:
      "A healthcare-focused application for managing medical records and patient data securely. Implemented role-based access, optimized database queries, and built a clean, accessible user interface.",
  },
  {
    title: "AI Chatbots",
    tech: [
      "AI APIs",
      "Node.js",
      "React",
      "REST APIs",
      "JavaScript",
      "Prompt Engineering",
    ],
    description:
      "Developed intelligent AI-powered chatbots for automated customer support and information retrieval. Focused on natural language understanding, API integrations, and scalable backend logic.",
  },
];

function Projects() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // 🔽🔼 Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="
        min-h-screen px-6 py-24
        bg-slate-50 dark:bg-[#020617]
        transition-colors duration-500
      "
    >
      <div
        className={`
          max-w-6xl mx-auto
          transition-all duration-700 ease-in-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
        `}
      >
        {/* SECTION TITLE */}
        <h2 className="text-center mb-16">
          <span
            className="
              inline-flex items-center gap-3
              text-[clamp(2.1rem,5vw,2.8rem)]
              font-extrabold
              text-slate-900 dark:text-white
            "
          >
            <FaProjectDiagram className="text-cyan-500" />
            Projects
          </span>
        </h2>

        {/* PROJECT GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group
                bg-white dark:bg-slate-900
                rounded-2xl p-6
                shadow-md hover:shadow-xl
                border border-slate-200/60 dark:border-slate-700
                transition-all duration-300
                hover:-translate-y-2
              "
            >
              {/* TITLE */}
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="
                      text-xs font-medium
                      px-3 py-1 rounded-full
                      bg-cyan-50 text-cyan-700
                      dark:bg-slate-800 dark:text-cyan-400
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
