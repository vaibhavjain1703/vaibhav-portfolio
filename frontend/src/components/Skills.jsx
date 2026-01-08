import { useEffect, useRef, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
  FaGitAlt,
  FaServer,
  FaTools,
  FaUsers,
} from "react-icons/fa";

function Skills() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // 🔽🔼 Scroll in / out animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skillGroups = [
    {
      title: "Frontend",
      icon: <FaReact />,
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Next.js",
        "jQuery",
        "AJAX",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },
    {
      title: "Backend",
      icon: <FaServer />,
      skills: [
        "Node.js",
        "Express.js",
        "PHP",
        "REST API Development",
      ],
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      skills: ["MySQL", "MongoDB", "SQL"],
    },
    {
      title: "Tools",
      icon: <FaTools />,
      skills: ["Git", "GitHub", "VS Code", "Postman"],
    },
    {
      title: "Concepts",
      icon: <FaJsSquare />,
      skills: [
        "Full Stack Development",
        "OOP",
        "UI/UX Fundamentals",
      ],
    },
    {
      title: "Soft Skills",
      icon: <FaUsers />,
      skills: [
        "Problem Solving",
        "Communication",
        "Team Collaboration",
        "Adaptability",
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="
        min-h-screen flex items-center justify-center px-6
        bg-slate-50 dark:bg-[#020617]
        transition-colors duration-500
        overflow-hidden
      "
    >
      <div
        className={`
          w-full max-w-6xl
          transform transition-all duration-700 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
        `}
      >
        {/* HEADING */}
        <h2 className="text-center text-[clamp(2rem,5vw,2.6rem)] font-extrabold mb-12">
          <span className="text-slate-800 dark:text-slate-100">
            Technical
          </span>{" "}
          <span className="text-cyan-600 dark:text-cyan-400">
            Skills
          </span>
        </h2>

        {/* SKILLS GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="
                p-6 rounded-2xl
                bg-white dark:bg-slate-900
                border border-slate-200 dark:border-slate-800
                shadow-sm
                hover:shadow-lg hover:-translate-y-1
                transition-all duration-300
              "
            >
              {/* TITLE */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl text-cyan-600 dark:text-cyan-400">
                  {group.icon}
                </span>
                <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-100">
                  {group.title}
                </h3>
              </div>

              {/* SKILL TAGS */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-3 py-1.5 rounded-full text-sm
                      bg-slate-100 dark:bg-slate-800
                      text-slate-700 dark:text-slate-300
                      border border-slate-200 dark:border-slate-700
                    "
                  >
                    {skill}
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

export default Skills;

