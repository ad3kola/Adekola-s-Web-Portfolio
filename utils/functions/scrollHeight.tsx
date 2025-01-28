import { useState, useEffect } from "react";

function useScrollPercent(): number {
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentHeight = window.scrollY;
      const percent = ((currentHeight / totalHeight) * 100).toFixed(0);

      setScrollPercent(Number(percent)); // Update the scroll percentage state
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty array ensures the effect runs only once when the component mounts

  return scrollPercent; // Return the scroll percentage
}

export default useScrollPercent;
