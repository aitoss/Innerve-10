import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import UpperLogo from "../assets/upper-logo.svg";
import MidLogo from "../assets/mid-logo.svg";
import BottomLogo from "../assets/bottom-logo.svg";

gsap.registerPlugin(ScrollTrigger);

const LogoAnimation = () => {
  useGSAP(() => {
    gsap.from("#upper", {
      x:-100,
      y: -600,
      rotation: 120,
      scrollTrigger: {
        trigger: "#upper",
        // markers: true,
        start: "bottom, 70%",
        end: "100%, top",
        scrub: true,
      },
      ease:"power1.inOut"
    });
    gsap.from("#mid", {
      x:200,
      y: -600,
      rotation: 120,
      scrollTrigger: {
        trigger: "#upper",
        // markers: true,
        start: "70%, 70%",
        end: "100%, top",
        scrub: true,
      },
      ease:"power1.inOut"
    });
    gsap.from("#bottom", {
      x:-300,
      y: -700,
      rotation: 120,
      scrollTrigger: {
        trigger: "#upper",
        // markers: true,
        start: "70%, 70%",
        end: "100%, top",
        scrub: true,
      },
      ease:"power1.inOut"
    });
    
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <img
        id="upper"
        src={UpperLogo}
        alt="UpperLogo"
        className=" ml-16 -mb-10"
      />
      <img id="mid" src={MidLogo} alt="MidLogo" className="z-10" />
      <img
        id="bottom"
        src={BottomLogo}
        alt="BottomLogo"
        className="ml-[63px] -mt-24"
      />
    </div>
  );
};

export default LogoAnimation;
