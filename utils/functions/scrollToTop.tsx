"use client";
import { useEffect, useState } from "react";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // The button should only be visible if scrolled down more than 200px
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisibility);
    // Initialize visibility on mount
    toggleVisibility();
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    // Adjusting the scroll position to account for a fixed navbar height (e.g., 70px)
    const navbarHeight = document.querySelector("nav")?.clientHeight || 0; // Adjust this if you have a different navbar
    window.scrollTo({
      top: -navbarHeight, // Scroll slightly above the top
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={scrollToTop}
      className={`p-3 rounded-full shadow shadow-dark bg-gray-100 dark:bg-dark text-dark dark:text-gray-100 dark:border hover:scale-110 trasform dark:shadow dark:shadow-gray-100 transition-all ease-in duration-75 ${
        visible ? "opacity-100" : "opacity-0"
      } `}
    >
      <ChevronDoubleUpIcon className="w-6 h-6 font-bold" />
    </button>
  );
}
