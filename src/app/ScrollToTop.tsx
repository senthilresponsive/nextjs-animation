"use client";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 left-5 rounded-full  bg-gradient-to-r from-pink-500 to-purple-500 p-3 text-white hover:bg-neutral-700 shadow-lg transition-all duration-300 ease-in-out 
             hover:scale-110 hover:shadow-xl hover:brightness-110"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    )
  );
}


             