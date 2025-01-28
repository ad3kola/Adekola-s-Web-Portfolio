"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`p-3 rounded-full shadow-lg bg-gray-100 text-dark dark:border dark:bg-neutral-900 dark:shadow dark:shadow-gold dark:text-gold hover:scale-110 transform transition-all ease-in duration-75 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <ChevronDoubleUpIcon className="w-6 h-6 font-bold" />
    </button>
  );
}
