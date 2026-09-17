import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

function Hero() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // 🔽🔼 Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      {/* 🌊 BACKGROUND BLOBS */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-8rem] right-[-6rem] w-96 h-96 bg-indigo-400/20 dark:bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />

      {/* CARD */}
      <div
        className={`
          relative z-10
          w-full max-w-6xl
          rounded-3xl
          px-6 py-10 md:px-12 md:py-14
          flex flex-col md:flex-row
          items-center gap-10 md:gap-16
          bg-white/70 dark:bg-slate-900/70
          backdrop-blur-xl
          shadow-xl
          transform transition-all duration-700 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
        `}
      >
        {/* LEFT : IMAGE */}
        <div className="flex-shrink-0">
          <img
            src="/image/vaibhavportfolio.png"
            alt="R Vaibhav Jain"
            className="
              w-[220px] sm:w-[260px] md:w-[280px]
              h-auto object-contain
              drop-shadow-2xl
              transition-transform duration-300
              hover:scale-105
            "
          />
        </div>

        {/* RIGHT : CONTENT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
          
          {/* NAME */}
          <h1 className="text-[clamp(2.1rem,5vw,3.2rem)] font-extrabold">
            <span
              className="
                bg-gradient-to-r
                from-cyan-500 to-indigo-500
                dark:from-cyan-400 dark:to-indigo-400
                bg-clip-text text-transparent
              "
            >
              R Vaibhav Jain
            </span>
          </h1>

          {/* ROLE */}
          <p className="text-[clamp(1rem,3.5vw,1.25rem)] text-slate-600 dark:text-slate-300 max-w-xl">
            Full Stack Developer 
          </p>

          {/* ✅ ABOUT ME (NEW) */}
          <p className="max-w-xl text-slate-500 dark:text-slate-400 leading-relaxed">
            I’m a passionate Full Stack Developer who enjoys building clean,
            scalable web applications and intelligent chat experiences.
            I love turning ideas into real-world products using modern technologies.
          </p>

          {/* 🔢 QUICK STATS */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
            {[
              { label: "Projects", value: "5+" },
              { label: "Experience", value: "3 Internships" },
              { label: "Skills", value: "7+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="
                  px-6 py-4 rounded-2xl
                  bg-white/60 dark:bg-slate-800/60
                  backdrop-blur-md
                  shadow-md
                  flex flex-col items-center
                  transition-transform hover:-translate-y-1
                "
              >
                <span className="text-xl font-bold text-cyan-600 dark:text-cyan-400">
                  {stat.value}
                </span>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* ✅ BUTTONS (FIXED) */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <a
              href="#projects"
              className="
                px-7 py-3 rounded-xl font-semibold text-white
                bg-gradient-to-r from-cyan-500 to-indigo-500
                hover:opacity-90 transition
              "
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="
                px-7 py-3 rounded-xl font-semibold
                border border-cyan-500 text-cyan-600
                dark:text-cyan-400 dark:border-cyan-400
                hover:bg-cyan-500 hover:text-white
                transition
              "
            >
              Contact Me
            </a>

            <a
              href="/vaibhavresume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-7 py-3 rounded-xl
                bg-slate-800 dark:bg-slate-700
                text-white
                hover:bg-slate-700 dark:hover:bg-slate-600
                transition
              "
            >
              Resume
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 mt-4 text-xl text-slate-600 dark:text-slate-400">
            <a
              href="https://github.com/vaibhavjain1703"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/vaibhav-jain-7b0919259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:rvaibhavjain1703@gmail.com"
              className="hover:text-orange-500 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;






  
  
  
  
  