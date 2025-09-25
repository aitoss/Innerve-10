import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import btn from "../assets/btn.svg";
import warning_video from "../assets/warning.webm";
import Warning from "../assets/warning-graphic.svg"

const Button = ({ BtnIcon, Label }) => {
  useGSAP(() => {
    gsap.to("#warning-video", {
      y: -20,
      repeat: -1,
      yoyo: true,
      ease: "power1",
    });
  }, []);

  return (
    <button
      className="flex items-center justify-center gap-[10px] px-8 py-4 text-white relative"
      style={{
        backgroundImage: `url(${btn})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      {BtnIcon && <img src={BtnIcon} alt="icon" className="h-[2rem] w-[2rem]" />}
      {Label && <span className="md:text-[32px] font-angrybirds">{Label}</span>}
      {/* <video
        id="warning-video"
        className="absolute top-[-180%] md:top-[-210%] left-[-45%]"
        src={warning_video}
        autoPlay
        loop
        muted
      /> */}
    </button>
  );
};

export default Button;
