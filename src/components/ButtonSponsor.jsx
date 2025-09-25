import React from 'react';
import Warning from "../assets/warning-graphic.svg";
import btn from "../assets/btn.svg";
import label from "../assets/label.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ButtonSponsor = ({ BtnIcon, Label }) => {
  useGSAP(() => {
    gsap.to("#warning", {
      y: -20,
      repeat: -1,
      yoyo: true,
      ease: "power1"
    });
  }, []);

  return (
    <button
      className="flex items-center justify-center gap-[10px] px-16 py-8 text-white relative md:h-[5rem] md:w-[20rem] sm:h-[1rem] sm:w-[400px] sm:text-[100px] h-[1rem] w-[10rem]  "
      style={{
        backgroundImage: `url(${label})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      {BtnIcon && <img src={label} alt="icon" className="w-full" />}
      {Label && (
        <div className="absolute inset-0 flex items-center justify-center w-full font-angrybirds text-[1rem] md:text-[32px] px-4 ">
          {Label}
        </div>
      )}
      <img 
        src={Warning} 
        id="warning" 
        alt="warning" 
        className="absolute  h-[30px] xl:h-[3rem] xl:w-[3rem] top-[5%] left-[-8%] md:left-[-3%] "
      />
    </button>
  );
};

export default ButtonSponsor;