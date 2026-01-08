import { useEffect, useState } from "react";

export default function useScrollSpy(sectionIds, offset = 100) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handler = () => {
      let current = "";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const top = section.offsetTop - offset;
        if (window.scrollY >= top) {
          current = id;
        }
      });

      setActiveId(current);
    };

    window.addEventListener("scroll", handler);
    handler();

    return () => window.removeEventListener("scroll", handler);
  }, [sectionIds, offset]);

  return activeId;
}
