import { useEffect, useState } from "react";

function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setWidth((scrollTop / height) * 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[200] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

export default ScrollProgress;
