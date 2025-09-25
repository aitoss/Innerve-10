import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import Navigate from "../assets/link.svg";
import Sidebar from "./Sidebar"; // Import Sidebar component

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle sidebar visibility

  const handleBrochureClick = () => {
    window.open("https://drive.google.com/file/d/1QfAPDxhfOkAoZRe2Rwb6sa8gNhvMrnEk/view?usp=drive_link", "_blank");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <header className="w-full">
      <nav className="flex justify-between items-center py-4 px-8 lg:py-8 lg:px-[120px]">
        <a>
          <img src={Logo} alt="logo" />
        </a>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2 cursor-pointer px-4 group "  onClick={handleBrochureClick}>
            <span className="h-[20px] w-1 bg-[#3AFFA3] z-1"></span>
            <span
              className="h-4 w-1 bg-[#3AFFA3] absolute z-1 -translate-x-1/2"
              style={{
                animation: "growBlur 1400ms infinite",
                opacity: 1,
              }}
            ></span>
            <p>Brochure</p>
            <img src={Navigate} alt="brochure" className="group-hover:rotate-[45deg] transition duration-500"/>
          </div>
          <button 
            className="flex items-center gap-[10px] border border-[rgba(255,255,255,0.5)] pl-6 pr-4 py-[10px] rounded group"
            onClick={toggleSidebar}
          >
            <p>Menu</p>
            <img src={Navigate} alt="menu" className="group-hover:rotate-[45deg] transition duration-500"/>
          </button>
        </div>
      </nav>

      {isSidebarOpen && <Sidebar closeSidebar={toggleSidebar} />}
    </header>
  );
};

export default Navbar;
