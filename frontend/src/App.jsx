import { useEffect, useState } from "react";

// Layout & UI
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";

// Sections
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import ContactFooter from "./components/ContactFooter";

// 🤖 Global Chatbot
import Chatbot from "./components/Chatbot";

function App() {
  // 🌙 Dark mode state (persisted)
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // 🌙 Apply theme globally
  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="
        min-h-screen w-full
        bg-gradient-to-br
        from-slate-50 via-white to-cyan-50
        dark:from-[#020617] dark:via-slate-900 dark:to-slate-800
        text-slate-900 dark:text-slate-100
        transition-colors duration-500
      "
    >
      {/* 🔝 Scroll Progress Indicator */}
      <ScrollProgress />

      {/* 🔝 Fixed Navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* 🔽 Main Content (offset for navbar) */}
      <main className="pt-[80px] scroll-smooth">
        {/* 🦸 Hero */}
        <Hero />

        {/* ℹ️ About */}
        <About />

        {/* 🛠 Skills */}
        <Skills />

        {/* 💼 Experience */}
        <Experience />

        {/* 🎓 Education */}
        <Education />

        {/* 📁 Projects */}
        <Projects />

        {/* 📬 Contact + Footer */}
        <ContactFooter />
      </main>

      {/* 🤖 Floating Global Chatbot (Always Visible) */}
      <Chatbot />
    </div>
  );
}

export default App;














