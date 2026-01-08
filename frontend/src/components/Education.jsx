import { useEffect, useRef, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
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
      id="education"
      ref={ref}
      className="min-h-screen px-4 pt-32 pb-24 bg-slate-50 dark:bg-[#020617]"
    >
      <div
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        {/* ===== TITLE (SAME AS EXPERIENCE) ===== */}
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
            Education
          </span>
        </h2>

        {/* ===== TIMELINE ===== */}
        <div className="relative border-l-2 border-cyan-500/30 pl-12 space-y-20">

          {/* ===== BTECH ===== */}
          <div className="relative">
            <span className="absolute -left-[18px] top-10 w-9 h-9 rounded-full bg-cyan-500 text-white flex items-center justify-center">
              <FaGraduationCap size={16} />
            </span>

            <div className="
              bg-white dark:bg-slate-900
              rounded-2xl p-8
              border border-slate-200 dark:border-slate-800
              shadow-md hover:shadow-xl
              transition
            ">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Bachelor of Technology (B.Tech)
              </h3>

              <p className="text-slate-300">
                Computer Science & Engineering
              </p>

              <p className="text-slate-400 mb-2">
                Specialization: Software Engineering
              </p>

              <p className="text-cyan-400 font-medium">
                Jain (Deemed-to-be) University
              </p>

              <p className="text-slate-400">
                Bengaluru, Karnataka
              </p>

              <p className="mt-3 text-sm text-slate-500">
                2022 – 2026 (Expected)
              </p>
            </div>
          </div>

          {/* ===== CLASS XII ===== */}
          <div className="relative">
            <span className="absolute -left-[18px] top-10 w-9 h-9 rounded-full bg-indigo-500 text-white flex items-center justify-center">
              <FaGraduationCap size={16} />
            </span>

            <div className="
              bg-white dark:bg-slate-900
              rounded-2xl p-8
              border border-slate-200 dark:border-slate-800
              shadow-md hover:shadow-xl
              transition
            ">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Class XII (PUC)
              </h3>

              <p className="text-cyan-400 font-medium">
                BKG PU College
              </p>

              <p className="text-slate-400">
                Sandur, Karnataka
              </p>

              <p className="mt-3 text-sm text-slate-500">
                2020 – 2022
              </p>

              <p className="mt-2 font-medium text-slate-300">
                Percentage: <span className="text-cyan-400">89%</span>
              </p>
            </div>
          </div>

          {/* ===== CLASS X ===== */}
          <div className="relative">
            <span className="absolute -left-[18px] top-10 w-9 h-9 rounded-full bg-indigo-500 text-white flex items-center justify-center">
              <FaGraduationCap size={16} />
            </span>

            <div className="
              bg-white dark:bg-slate-900
              rounded-2xl p-8
              border border-slate-200 dark:border-slate-800
              shadow-md hover:shadow-xl
              transition
            ">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Class X (SSLC)
              </h3>

              <p className="text-cyan-400 font-medium">
                Surabhi Vidyaniketan
              </p>

              <p className="text-slate-400">
                Hospet, Karnataka
              </p>

              <p className="mt-3 text-sm text-slate-500">
                2015 – 2020
              </p>

              <p className="mt-2 font-medium text-slate-300">
                Percentage: <span className="text-cyan-400">73%</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;
