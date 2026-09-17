import { useEffect, useRef, useState } from "react";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => setShow(e.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-screen px-4 pt-32 pb-24 bg-slate-50 dark:bg-[#020617]"
    >
      <div
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16"
        }`}
      >
        {/* ===== TITLE ===== */}
        <h2 className="text-center mb-24 relative z-20">
          <span
            className="
              text-[clamp(2.6rem,5vw,3.2rem)]
              font-extrabold tracking-tight
              bg-gradient-to-r from-cyan-400 to-indigo-500
              bg-clip-text text-transparent
              relative
              after:absolute after:-bottom-4 after:left-1/2
              after:-translate-x-1/2
              after:w-28 after:h-[3px]
              after:rounded-full
              after:bg-gradient-to-r after:from-cyan-400 after:to-indigo-500
            "
          >
            Experience
          </span>
        </h2>

        {/* ===== TIMELINE ===== */}
        <div className="relative border-l-2 border-cyan-500/30 pl-12 space-y-28">

          {/* ================= webMatrix INC ================= */}
          <div className="relative">
            <span className="absolute -left-[18px] top-8 w-9 h-9 rounded-full bg-cyan-500 text-white flex items-center justify-center">
              <FaBriefcase size={16} />
            </span>

            <div
              className="
                grid grid-cols-[80px_1fr]
                gap-8
                bg-white dark:bg-slate-900
                rounded-2xl p-8
                border border-slate-200 dark:border-slate-800
                shadow-md hover:shadow-xl
                transition
              "
            >
              {/* LOGO */}
              <div className="w-[80px] h-[80px] bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                <img
                  src="/logos/webmatrixcorp.jpg"
                  alt="webMatrix INC"
                  className="max-w-[60px] max-h-[60px] object-contain"
                />
              </div>

              {/* CONTENT */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  Software Engineer Intern — WebMatrix INC
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Chicago, Illinois, United States | Jun 2026 – September 2026
                </p>

                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Software Engineer Intern working on the SeniorCarePro.ai
                  healthcare platform, with a primary focus on developing and
                  improving the interview module to provide a more realistic,
                  reliable, and secure interview experience.
                </p>

                <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
                  <li>
                    Redesigned core interview-module workflows on
                    SeniorCarePro.ai, delivering a more realistic and reliable
                    interview experience validated across 14 structured test
                    interviews.
                  </li>

                  <li>
                    Implemented a two-step application verification system to
                    strengthen candidate authentication and interview integrity.
                  </li>

                  <li>
                    Developed real-time malpractice detection and escalation,
                    triggering an integrity flag after a second occurrence and
                    automatically ending the interview after a third.
                  </li>

                  <li>
                    Built an AI-powered interview analysis and reporting system
                    that sequentially logged malpractice events against a
                    synchronized video timeline.
                  </li>

                  <li>
                    Developed AI-based secondary-device detection, identifying
                    unauthorized devices such as mobile phones and recording
                    details such as device color in review reports.
                  </li>

                  <li>
                    Managed CI/CD pipelines and environment configuration using
                    YAML and GitHub Actions.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ================= WoRisGo ================= */}
          <div className="relative">
            <span className="absolute -left-[18px] top-8 w-9 h-9 rounded-full bg-cyan-500 text-white flex items-center justify-center">
              <FaBriefcase size={16} />
            </span>

            <div
              className="
                grid grid-cols-[80px_1fr]
                gap-8
                bg-white dark:bg-slate-900
                rounded-2xl p-8
                border border-slate-200 dark:border-slate-800
                shadow-md hover:shadow-xl
                transition
              "
            >
              {/* LOGO */}
              <div className="w-[80px] h-[80px] bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                <img
                  src="/logos/WorRisGo.jpg"
                  alt="WoRisGo"
                  className="max-w-[48px] max-h-[48px] object-contain"
                />
              </div>

              {/* CONTENT */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  Backend Developer (Intern) — WoRisGo
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400">
                  July 2025 – September 2025
                </p>

                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Backend Developer at WoRisGo with experience in building
                  scalable APIs and backend services using MongoDB, PHP, and
                  the MERN stack.
                </p>

                <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                  <li>
                    Enabled reliable support for booking and analytics workflows
                    across multiple frontend services by architecting RESTful
                    backend APIs in Node.js and PHP
                  </li>

                  <li>
                    Cut query execution time by approximately 30%, verified
                    through direct before/after benchmarking, by optimizing
                    MySQL database schemas and indexing strategy
                  </li>

                  <li>
                    Eliminated contract-breaking integration issues between
                    frontend and backend teams by defining, documenting, and
                    validating REST API contracts (GET/POST) using Postman, in
                    close collaboration with frontend engineers
                  </li>

                  <li>
                    Delivered a fully functioning internal Booking Management
                    System into production use by owning schema design, CRUD
                    operations, and core business logic end-to-end.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ================= TCTG ================= */}
          <div className="relative">
            <span className="absolute -left-[18px] top-8 w-9 h-9 rounded-full bg-indigo-500 text-white flex items-center justify-center">
              <FaBriefcase size={16} />
            </span>

            <div
              className="
                grid grid-cols-[80px_1fr]
                gap-8
                bg-white dark:bg-slate-900
                rounded-2xl p-8
                border border-slate-200 dark:border-slate-800
                shadow-md hover:shadow-xl
                transition
              "
            >
              {/* LOGO */}
              <div className="w-[80px] h-[80px] bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                <img
                  src="/logos/Tctg.png"
                  alt="TCTG"
                  className="max-w-[40px] max-h-[40px] object-contain"
                />
              </div>

              {/* CONTENT */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  Frontend Developer (Intern) — TCTG Pvt Ltd
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Vadodara, Gujarat | May 2024 – July 2024
                </p>

                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Frontend Developer Intern focused on building responsive,
                  user-friendly interfaces using modern frontend technologies.
                </p>

                <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                  <li>
                    Delivered a consistent user experience across device
                    breakpoints by building and maintaining responsive frontend
                    modules in React.js, HTML, CSS, and JavaScript
                  </li>

                  <li>
                    Removed the need for full-page reloads on content updates by
                    integrating dynamic backend functionality via PHP and AJAX
                  </li>

                  <li>
                    Enabled secure, end-to-end login and checkout flows by
                    implementing authentication and connecting frontend
                    components to backend APIs
                  </li>

                  <li>
                    Improved page responsiveness across devices by auditing and
                    optimizing frontend performance
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;






