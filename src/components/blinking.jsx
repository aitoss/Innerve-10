import React from "react";

const BlinkingDot = () => {
  return (
    <>
      {/* Define animation styles inline */}
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          @keyframes growBlur {
            0% {
              transform: scale(1);
              opacity: 1;
              filter: blur(0px);
            }
            50% {
              transform: scale(2);
              opacity: 0.4;
              filter: blur(5px);
            }
            100% {
              transform: scale(1);
              opacity: 1;
              filter: blur(0px);
            }
          }
        `}
      </style>
      <div className="flex items-center relative">
        {/* Inner static circle */}
        <span
          className="w-4 h-4 bg-[#3AFFA3] rounded-full absolute z-10"
        //   style={{ animation: "blink 2.5s infinite" }}
        ></span>
        {/* Outer animated circle */}
        <span
          className="w-4 h-4 bg-[#3AFFA3] rounded-full absolute "
          style={{
            animation: "growBlur 2.5s infinite",
            opacity: 1,
          }}
        ></span>
        {/* Text next to the dot */}
        <span className="text-[16px] md:text-[18px]  ml-8"></span>
      </div>
    </>
  );
};

export default BlinkingDot;
