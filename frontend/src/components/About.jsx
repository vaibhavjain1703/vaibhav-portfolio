import { useEffect, useRef, useState } from "react";

function About() {
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

  return (
    <section
      id="about"
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
          w-full max-w-4xl flex flex-col gap-6 text-center
          transform transition-all duration-700 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}
        `}
      >
        {/* HEADING */}
        <h2 className="text-[clamp(2rem,5vw,2.6rem)] font-extrabold">
          <span className="text-slate-800 dark:text-slate-100">
            About
          </span>{" "}
          <span className="text-cyan-600 dark:text-cyan-400">
            Me
          </span>
        </h2>

        {/* PARAGRAPH 1 */}
        <p className="text-[clamp(1rem,3.5vw,1.15rem)] text-slate-600 dark:text-slate-300 leading-relaxed">
          I’m{" "}
          <span className="font-semibold text-slate-800 dark:text-slate-100">
            R Vaibhav Jain
          </span>
          , a Full Stack Developer passionate about building scalable,
          responsive web applications using modern technologies like React
          and Node.js.
        </p>

        {/* PARAGRAPH 2 */}
        <p className="text-[clamp(1rem,3.5vw,1.15rem)] text-slate-600 dark:text-slate-300 leading-relaxed">
          I enjoy working across the stack — from thoughtful UI/UX design to
          clean backend APIs — with a strong focus on performance,
          maintainability, and user experience.
        </p>

        {/* SKILL TAGS (SUBTLE & PROFESSIONAL) */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {[
            "Full Stack Development",
            "React & Tailwind",
            "Node.js & APIs",
            "AI Chatbots",
          ].map((skill) => (
            <span
              key={skill}
              className="
                px-4 py-2 rounded-full text-sm font-medium
                bg-white dark:bg-slate-800
                text-slate-700 dark:text-slate-300
                border border-slate-200 dark:border-slate-700
                transition-colors
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;





  