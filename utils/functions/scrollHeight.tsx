import { useState, useEffect } from "react";

function ScrollPositionY(): number {
  const [scrollHeight, setScrollHeight] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollHeight(window.scrollY); // Update scroll height on scroll event
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty array ensures the effect runs only once when the component mounts

  return scrollHeight; // Return the updated scroll position
}

export default ScrollPositionY;
