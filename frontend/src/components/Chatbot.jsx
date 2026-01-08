import { useState, useEffect, useRef } from "react";
import { FaTimes, FaPaperPlane, FaUserTie, FaGlobe } from "react-icons/fa";

/* ===================== RESUME DATA ===================== */

const resumeData = {
  experience: {
    en: {
      casual: "I’ve worked as a Backend Intern at WoRisGo and a Frontend Intern at TCTG Pvt Ltd.",
      recruiter: "I have internship experience as a Backend Developer at WoRisGo and Frontend Developer at TCTG Pvt Ltd.",
    },
    hi: {
      casual: "मैंने WoRisGo में Backend Intern और TCTG Pvt Ltd में Frontend Intern के रूप में काम किया है।",
      recruiter: "मेरे पास WoRisGo और TCTG Pvt Ltd में internship का अनुभव है।",
    },
    kn: {
      casual: "ನಾನು WoRisGo ಮತ್ತು TCTG Pvt Ltd ನಲ್ಲಿ ಇಂಟರ್ನ್ ಆಗಿ ಕೆಲಸ ಮಾಡಿದ್ದೇನೆ.",
      recruiter: "ನಾನು WoRisGo ಮತ್ತು TCTG Pvt Ltd ನಲ್ಲಿ ಇಂಟರ್ನ್‌ಶಿಪ್ ಅನುಭವ ಹೊಂದಿದ್ದೇನೆ.",
    },
    ta: {
      casual: "WoRisGo மற்றும் TCTG Pvt Ltd நிறுவனங்களில் Intern ஆக வேலை செய்துள்ளேன்.",
      recruiter: "WoRisGo மற்றும் TCTG Pvt Ltd நிறுவனங்களில் தொழில்முறை அனுபவம் உள்ளது.",
    },
    te: {
      casual: "WoRisGo మరియు TCTG Pvt Ltd లో నేను Intern గా పనిచేశాను.",
      recruiter: "WoRisGo మరియు TCTG Pvt Ltd లో నాకు ఇంటర్న్‌షిప్ అనుభవం ఉంది.",
    },
  },

  skills: {
    en: {
      casual: "React, Tailwind, JavaScript, MERN, REST APIs, MongoDB, PostgreSQL, PHP.",
      recruiter: "My skills include React, Tailwind CSS, JavaScript, MERN stack, REST APIs, MongoDB, PostgreSQL, and PHP.",
    },
    hi: {
      casual: "React, Tailwind, JavaScript, MERN stack, MongoDB, PostgreSQL और PHP मेरी skills हैं।",
      recruiter: "मेरी तकनीकी skills में React, Tailwind और MERN stack शामिल हैं।",
    },
    kn: {
      casual: "React, Tailwind, JavaScript, MERN stack, MongoDB ಮತ್ತು PHP ನನ್ನ ಕೌಶಲ್ಯಗಳು.",
      recruiter: "ನನ್ನ ತಾಂತ್ರಿಕ ಕೌಶಲ್ಯಗಳಲ್ಲಿ React, Tailwind ಮತ್ತು MERN stack ಸೇರಿವೆ.",
    },
    ta: {
      casual: "React, Tailwind, JavaScript, MERN stack, MongoDB, PHP எனது திறன்கள்.",
      recruiter: "React, Tailwind மற்றும் MERN stack எனது தொழில்நுட்ப திறன்கள்.",
    },
    te: {
      casual: "React, Tailwind, JavaScript, MERN stack, MongoDB, PHP నా నైపుణ్యాలు.",
      recruiter: "React, Tailwind మరియు MERN stack నా సాంకేతిక నైపుణ్యాలు.",
    },
  },

  education: {
    en: {
      casual: "Currently pursuing B.Tech in Computer Science at Jain University, Bengaluru.",
      recruiter: "I am pursuing B.Tech in Computer Science and Engineering from Jain University, Bengaluru.",
    },
    hi: {
      casual: "मैं Jain University, Bengaluru से B.Tech कर रहा हूँ।",
      recruiter: "मैं Jain University से Computer Science में B.Tech कर रहा हूँ।",
    },
    kn: {
      casual: "ನಾನು Jain University, Bengaluru ನಲ್ಲಿ B.Tech ಓದುತ್ತಿದ್ದೇನೆ.",
      recruiter: "ನಾನು Jain University ನಲ್ಲಿ Computer Science ನಲ್ಲಿ B.Tech ಮಾಡುತ್ತಿದ್ದೇನೆ.",
    },
    ta: {
      casual: "Jain University, Bengaluru இல் B.Tech படித்து வருகிறேன்.",
      recruiter: "Jain University இல் Computer Science B.Tech படித்து வருகிறேன்.",
    },
    te: {
      casual: "Jain University, Bengaluru లో B.Tech చేస్తున్నాను.",
      recruiter: "Jain University లో Computer Science B.Tech చేస్తున్నాను.",
    },
  },

  projects: {
    en: {
      casual: "Schedule, Pokedex Lite, Booking System, MediSafe, AI Chatbots.",
      recruiter: "My projects include Schedule, Pokedex Lite, Booking Management System, MediSafe, and AI Chatbots.",
    },
    hi: {
      casual: "मेरे projects में Schedule, Pokedex Lite और MediSafe शामिल हैं।",
      recruiter: "मेरे projects में कई real-world applications शामिल हैं।",
    },
    kn: {
      casual: "ನನ್ನ projectsಗಳಲ್ಲಿ Schedule ಮತ್ತು MediSafe ಸೇರಿವೆ.",
      recruiter: "ನಾನು ಹಲವಾರು real-world projects ಮೇಲೆ ಕೆಲಸ ಮಾಡಿದ್ದೇನೆ.",
    },
    ta: {
      casual: "Schedule, MediSafe போன்ற projects செய்துள்ளேன்.",
      recruiter: "பல real-world projects உருவாக்கியுள்ளேன்.",
    },
    te: {
      casual: "Schedule, MediSafe వంటి projects చేశాను.",
      recruiter: "నేను అనేక real-world projects చేశాను.",
    },
  },

  contact: {
    en: {
      casual: "Email: rvaibhavjain1703@gmail.com | Phone: +91-6364317871",
      recruiter: "You may contact me at rvaibhavjain1703@gmail.com or +91-6364317871.",
    },
    hi: {
      casual: "Email: rvaibhavjain1703@gmail.com | Phone: +91-6364317871",
      recruiter: "आप मुझसे email या phone द्वारा संपर्क कर सकते हैं।",
    },
    kn: {
      casual: "Email: rvaibhavjain1703@gmail.com | Phone: +91-6364317871",
      recruiter: "ನೀವು ನನಗೆ email ಅಥವಾ phone ಮೂಲಕ ಸಂಪರ್ಕಿಸಬಹುದು.",
    },
    ta: {
      casual: "Email: rvaibhavjain1703@gmail.com | Phone: +91-6364317871",
      recruiter: "நீங்கள் எனக்கு email அல்லது phone மூலம் தொடர்புகொள்ளலாம்.",
    },
    te: {
      casual: "Email: rvaibhavjain1703@gmail.com | Phone: +91-6364317871",
      recruiter: "మీరు నాకు email లేదా phone ద్వారా సంప్రదించవచ్చు.",
    },
  },
};

/* ===================== INTENT ===================== */

const detectIntent = (text) => {
  const t = text.toLowerCase();
  if (t.includes("skill")) return "skills";
  if (t.includes("project")) return "projects";
  if (t.includes("education")) return "education";
  if (t.includes("experience")) return "experience";
  if (t.includes("contact")) return "contact";
  return "unknown";
};

/* ===================== CHATBOT ===================== */

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [recruiterMode, setRecruiterMode] = useState(false);
  const [language, setLanguage] = useState("en");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const closeChat = () => {
    setOpen(false);
    setMessages([]);
    setInput("");
    setTyping(false);
  };

  const reply = (text) => {
    const intent = detectIntent(text);

    if (!resumeData[intent]) {
      return language === "hi"
        ? "skills, projects, experience, education या contact के बारे में पूछ सकते हैं 🙂"
        : "You can ask about skills, projects, experience, education or contact 🙂";
    }

    return recruiterMode
      ? resumeData[intent][language].recruiter
      : resumeData[intent][language].casual;
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userText = input;
    setMessages((m) => [...m, { role: "user", text: userText }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: reply(userText) }]);
      setTyping(false);
    }, 700);
  };

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-[999] w-14 h-14 rounded-full bg-cyan-600 flex items-center justify-center shadow-xl"
      >
        <img src="/image/vaibhavportfolio.png" className="w-9 h-9 rounded-full" />
      </button>

      {open && (
        <div className="fixed bottom-24 right-4 z-[999] w-[92vw] max-w-sm h-[72vh] bg-slate-900 text-white rounded-2xl flex flex-col shadow-2xl">

          {/* HEADER */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <span className="font-semibold">Vaibhav Assistant</span>
            <div className="flex gap-2">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-slate-800 text-sm rounded px-2 py-1"
              >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="kn">Kannada</option>
                <option value="ta">Tamil</option>
                <option value="te">Telugu</option>
              </select>

              <button
                onClick={() => setRecruiterMode(!recruiterMode)}
                className={`p-2 rounded-full ${recruiterMode ? "bg-cyan-600" : "bg-slate-700"}`}
                title="Recruiter Mode"
              >
                <FaUserTie />
              </button>

              <button onClick={closeChat}><FaTimes /></button>
            </div>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 text-sm">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`px-4 py-2 rounded-xl max-w-[75%] ${m.role === "user" ? "bg-cyan-600" : "bg-slate-800"}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {typing && <div className="text-xs animate-pulse text-slate-400">Typing…</div>}
            <div ref={endRef} />
          </div>

          {/* INPUT */}
          <div className="p-3 border-t border-white/10 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask anything…"
              className="flex-1 px-3 py-2 bg-slate-800 rounded-lg outline-none"
            />
            <button onClick={sendMessage} className="px-4 bg-cyan-600 rounded-lg">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;







