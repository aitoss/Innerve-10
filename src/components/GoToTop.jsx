import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 10;
    const winScroll = window.scrollY || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className="flex justify-center items-center absolute">
      {isVisible && (
        <div
          className="top-btn w-[2.5rem] h-[2.5rem] text-xl font-[400] text-[#212121] fixed bottom-16 right-4 z-[9999] shadow-lg flex justify-center items-center cursor-pointer rounded-full p-3 m-3 bg-[rgba(255,255,255,0.7)] backdrop-blur-md hover:bg-[rgba(255,255,255,0.9)] transition-all duration-500"
          onClick={goToBtn}
        >
          <FaArrowUp />
        </div>
      )}
    </div>
  );
};

export default GoToTop;
