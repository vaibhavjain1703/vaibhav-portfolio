import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function ContactFooter() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // 🔽🔼 Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="
        px-6 py-28
        bg-white dark:bg-[#020617]
        transition-colors duration-500
      "
    >
      <div
        className={`
          max-w-4xl mx-auto text-center
          transition-all duration-700 ease-in-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
        `}
      >
        {/* HEADING */}
        <h2 className="text-[clamp(2.2rem,5vw,2.8rem)] font-extrabold mb-6">
          <span className="bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent">
            Let’s Connect
          </span>
        </h2>

        {/* SUBTEXT */}
        <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-10">
          I’m open to internships, full-time opportunities, collaborations, and
          exciting projects. Feel free to reach out — I’d love to connect.
        </p>

        {/* CONTACT ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          {/* EMAIL */}
          <a
            href="mailto:rvaibhavjain1703@gmail.com"
            className="
              px-8 py-4 rounded-xl font-semibold text-white
              bg-cyan-600 hover:bg-cyan-700
              transition
            "
          >
            Send Email
          </a>

          {/* PHONE */}
          <a
            href="tel:+916364317871"
            className="
              px-8 py-4 rounded-xl font-semibold
              border border-cyan-600 text-cyan-600
              hover:bg-cyan-600 hover:text-white
              transition
              inline-flex items-center justify-center gap-2
            "
          >
            <FaPhoneAlt />
            +91 63643 17871
          </a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-8 text-2xl text-slate-600 dark:text-slate-400 mb-16">
          <a
            href="https://github.com/vaibhavjain1703"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-500 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/vaibhav-jain-7b0919259"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:rvaibhavjain1703@gmail.com"
            className="hover:text-orange-500 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* FOOTER INFO */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            R Vaibhav Jain
          </h3>

          <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
            Full Stack Developer · React · Backend · AI
          </p>

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} R Vaibhav Jain. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactFooter;
