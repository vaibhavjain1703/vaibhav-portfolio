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
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        {/* ===== TITLE (VISIBLE & CONSISTENT) ===== */}
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

          {/* ================= WoRisGo ================= */}
          <div className="relative">
            <span className="absolute -left-[18px] top-8 w-9 h-9 rounded-full bg-cyan-500 text-white flex items-center justify-center">
              <FaBriefcase size={16} />
            </span>

            <div className="
              grid grid-cols-[80px_1fr]
              gap-8
              bg-white dark:bg-slate-900
              rounded-2xl p-8
              border border-slate-200 dark:border-slate-800
              shadow-md hover:shadow-xl
              transition
            ">
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
                <h3 className="text-2xl font-semibold text-white">
                  Backend Developer (Intern) — WoRisGo
                </h3>

                <p className="text-sm text-slate-400">
                  July 2025 – September 2025
                </p>

                <p className="text-slate-300 leading-relaxed">
                  Backend Developer at WoRisGo with experience in building scalable APIs
                  and backend services using MongoDB, PHP, and the MERN stack.
                </p>

                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  <li>Designed secure and scalable REST APIs</li>
                  <li>MongoDB data modeling & optimization</li>
                  <li>Backend–frontend service integration</li>
                  <li>Clean architecture practices</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ================= TCTG ================= */}
          <div className="relative">
            <span className="absolute -left-[18px] top-8 w-9 h-9 rounded-full bg-indigo-500 text-white flex items-center justify-center">
              <FaBriefcase size={16} />
            </span>

            <div className="
              grid grid-cols-[80px_1fr]
              gap-8
              bg-white dark:bg-slate-900
              rounded-2xl p-8
              border border-slate-200 dark:border-slate-800
              shadow-md hover:shadow-xl
              transition
            ">
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
                <h3 className="text-2xl font-semibold text-white">
                  Frontend Developer (Intern) — TCTG Pvt Ltd
                </h3>

                <p className="text-sm text-slate-400">
                  Vadodara, Gujarat | May 2024 – July 2024
                </p>

                <p className="text-slate-300 leading-relaxed">
                  Frontend Developer Intern focused on building responsive,
                  user-friendly interfaces using modern frontend technologies.
                </p>

                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  <li>HTML, CSS, JavaScript & React UI components</li>
                  <li>AJAX & JSON integration</li>
                  <li>UI debugging & optimization</li>
                  <li>Backend collaboration</li>
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






