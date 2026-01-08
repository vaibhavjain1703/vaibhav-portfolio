export function enhanceText(text) {
    let improved = text.trim();
  
    // Capitalize first letter
    improved = improved.charAt(0).toUpperCase() + improved.slice(1);
  
    // Common corrections
    const fixes = {
      "devloper": "developer",
      "cant": "can't",
      "dont": "don't",
      "im": "I'm",
      "backend dev": "backend developer",
      "frontend dev": "frontend developer",
      "mern": "MERN",
      "api": "API",
      "js": "JavaScript",
    };
  
    Object.keys(fixes).forEach((key) => {
      const regex = new RegExp(`\\b${key}\\b`, "gi");
      improved = improved.replace(regex, fixes[key]);
    });
  
    // Sentence ending
    if (!/[.!?]$/.test(improved)) {
      improved += ".";
    }
  
    return improved;
  }
  