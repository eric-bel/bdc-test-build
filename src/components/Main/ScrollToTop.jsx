import React, { useEffect, useState } from "react";
import { BsArrowUpSquareFill } from "react-icons/bs";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bg-pink bottom-3 right-3 cursor-pointer z-40">
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed p-2 rounded-lg bottom-3 right-3 desc:bottom-5 desc:right-5 cursor-pointer"
        >
          <BsArrowUpSquareFill className="text-cyan-800 text-[40px] mob:text-[30px] hover:text-cyan-600" />
        </div>
      )}
    </div>
  );
}
