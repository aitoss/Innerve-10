import React from "react";
import Port from "../assets/portal.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Portal = ({ birdImage }) => {
  useGSAP(() => {
    gsap.from("#bird", {
      y: 35,
      repeat: -1,
      yoyo: true,
      rotate: 6,
      ease: "power1",
      duration: 3,
    });
  }, []);

  return (
    <div className="relative overflow-hidden">
      <img src={Port} alt="port" />
      <img
        id="bird"
        src={birdImage} 
        alt="bird"
        className="absolute top-6 left-[50%] -translate-x-1/2"
      />
    </div>
  );
};

export default Portal;