import { useEffect, useRef, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
  FaDownload,
  FaMoon,
  FaSun,
} from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  const navItems = [
    { id: "about", name: "About", icon: <FaUser /> },
    { id: "experience", name: "Experience", icon: <FaBriefcase /> },
    { id: "education", name: "Education", icon: <FaGraduationCap /> },
    { id: "skills", name: "Skills", icon: <FaTools /> },
    { id: "projects", name: "Projects", icon: <FaProjectDiagram /> },
    { id: "contact", name: "Contact", icon: <FaEnvelope /> },
  ];

  // 🔵 Scroll Spy + Hide / Show Navbar
  useEffect(() => {
    const onScroll = () => {
      const currentScroll = window.scrollY;

      // Hide / Show navbar
      if (currentScroll > lastScrollY.current && currentScroll > 120) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScrollY.current = currentScroll;

      // Active section
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        const top = section.offsetTop - 140;
        const bottom = top + section.offsetHeight;

        if (currentScroll >= top && currentScroll < bottom) {
          setActive(item.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🔵 Smooth Scroll
  const handleScroll = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-[100]
        backdrop-blur-md
        bg-slate-800/90 dark:bg-slate-950/90
        border-b border-white/10
        px-6 py-4
        flex items-center justify-between
        transition-all duration-300
        ${showNav ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      {/* LOGO */}
      <h1 className="text-xl font-bold text-cyan-400 whitespace-nowrap">
        R Vaibhav Jain
      </h1>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className="relative flex flex-col items-center text-sm font-medium transition"
          >
            <span
              className={
                active === item.id
                  ? "text-cyan-400"
                  : "text-slate-300 hover:text-white"
              }
            >
              {item.icon} {item.name}
            </span>

            {/* ACTIVE DOT */}
            {active === item.id && (
              <span className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-cyan-400" />
            )}
          </button>
        ))}

        {/* THEME TOGGLE */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition"
          aria-label="Toggle theme"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* RESUME */}
        <a
          href="/vaibhavresume.pdf"
          download
          className="
            px-5 py-2 bg-cyan-600 rounded-lg
            hover:bg-cyan-700 transition
            flex items-center gap-2 text-white
          "
        >
          <FaDownload />
          Resume
        </a>
      </div>

      {/* HAMBURGER */}
      <button
        className="md:hidden text-2xl text-white z-[110]"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            absolute top-[72px] right-6
            w-64 bg-slate-800 dark:bg-slate-900
            rounded-xl shadow-2xl
            p-4 flex flex-col gap-4
            z-[120]
          "
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`
                flex items-center gap-3 px-3 py-2 rounded-lg transition
                ${
                  active === item.id
                    ? "bg-cyan-600 text-white"
                    : "text-slate-300 hover:bg-slate-700"
                }
              `}
            >
              {item.icon}
              {item.name}
            </button>
          ))}

          {/* MOBILE THEME TOGGLE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center justify-center gap-2 py-2 bg-slate-700 rounded-lg"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
            Toggle Theme
          </button>

          {/* MOBILE RESUME */}
          <a
            href="/vaibhavresume.pdf"
            download
            className="py-2 bg-cyan-600 rounded-lg text-center text-white"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;









  
  
  