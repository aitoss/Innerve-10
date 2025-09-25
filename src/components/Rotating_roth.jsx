import React from "react";
import Roth from "../assets/Roth_ring.svg";

const RotatingRoth = () => {
  const rotationStyles = {
    animation: "rotate 5s linear infinite",
  };

  return (
    <div
      className="flex justify-center items-center relative  
      xl:-ml-[10rem] xl:-mb-[20rem] 
      lg:ml-[-13rem] lg:mb-[-15rem]
      md:ml-[-10rem] md:mb-[-10rem]
      z-1"
    >
      <style>
        {`
          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <img
        src={Roth}
        alt=""
        className="h-[20rem] w-[20rem]
          md:w-[30rem] md:h-[30rem] 
          lg:w-[45rem] lg:h-[45rem]
          xl:w-[50rem] xl:h-[50rem]"
        style={rotationStyles} // Add inline style for animation
      />
    </div>
  );
};

export default RotatingRoth;
