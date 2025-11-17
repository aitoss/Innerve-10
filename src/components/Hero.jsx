import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import FlipCountdown from "./FlipCountdown";
import Button from "./Button";
// import Devfolio from "../assets/devfolio_1.svg";
import Unstop from "../assets/unstop.png";

import Tnt from "../assets/bubble-tnt.svg";
import Dates from "./Dates";
import Stars from "./Stars";
// import Floating from "./Floating";
import Heading from "./Heading";
import Portal from "./Portal";
import Grids from "../assets/all_grids.svg";
import BubblePiggy from "../assets/bubble-piggy.svg";
import Floating from "../components/Floating";
import Red from "../assets/red.svg";
import Blue from "../assets/blue.svg";
import Yellow from "../assets/yellow.svg";
import White from "../assets/white.svg";
import "../index.css";
// import CountdownExample from "./FlipClockCountdown";
import video from "../assets/Nine.webm";
import gsap from "gsap";
import Devfolio from "../assets/DEVFOLIO_1.png"
import DevfolioButton from "./ui/DevfolioButton";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }

    const disableScroll = () => {
      document.body.style.overflow = "hidden"
    }
    disableScroll();

    const enableScroll = () => {
      document.body.style.overflow = "auto"
    }

    setTimeout(() => {
      gsap.to("#loader", {
        y: "-100%",
        duration: 0.4,
        onComplete: enableScroll(),
      })
    }, 4000);
  }, []);

  const handleEnd = () => {
    alert("Innerve 9 is now LIVE!!");
  };

  // React.useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://apply.devfolio.co/v2/sdk.js';
  //   script.async = true;
  //   script.defer = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);

  // const handleRedirect=()=>{
  //   window.location.assign="https://Innerve.openinapp.link/Register"
  // };

  return (
    <section
      id="hero"
      className="relative w-screen min-h-screen flex flex-col justify-center items-center gap-[100px]"
      style={{
        backgroundImage: ` url(${Grids})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <Navbar />
      <div className="w-full flex flex-col gap-24 justify-center items-center relative">
        <Heading />
        <div
          className="relative group  cursor-not-allowed"
          style={{ marginBottom: "5px" }}
        >

          <DevfolioButton />
          
          <div
            className="relative mt-10 px-8 py-4 bg-gradient-to-r font-angrybirds bg-[#2e0661] rounded-lg text-white font-bold text-lg text-center shadow-lg transform transition duration-300 hover:scale-105"
            style={{
              minWidth: "300px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(10px)"
            }}
          >
            <span className="relative z-10"> Registration Begins Soon! </span>
          </div>
        </div>
        <FlipCountdown targetDate="2026-01-29T00:10:00" onEnd={handleEnd} />
      </div>
      <Dates />
      <Stars />
      <div className="-z-10 absolute left-[0%] bottom-[-26%] w-screen">
        <Floating imgSrc={BubblePiggy} />
      </div>
      <div className="hidden lg:flex absolute -left-14 top-[45%]">
        <img src={Tnt} alt="tnt" />
      </div>
      <div className="hidden lg:flex absolute top-56 left-20">
        <Portal birdImage={Red} />
      </div>
      <div className=" hidden lg:flex absolute  right-[20px] top-[25%]">
        <Portal birdImage={Blue} />
      </div>

      <div className="hidden lg:flex absolute top-[70%] right-[10%]">
        <Portal birdImage={Yellow} />
      </div>

      <div className="hidden lg:flex absolute top-[80%] left-[10%]">
        <Portal birdImage={White} />
      </div>

    </section>
  );
};

export default Hero;
