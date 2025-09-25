import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import video from "../assets/Nine.webm";

const Loader = ({onComplete}) => {
  const videoRef = useRef(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
    const timeout = setTimeout(() => {
    gsap.to(loaderRef.current, {
      y: "-100%",
      duration: 0.4,
      ease: "linear",
      onComplete: () => {
        if (loaderRef.current) {
          onComplete();
        }
      },
    });
  }, 4000);

    // Cleanup function
    return () => 
      clearTimeout(timeout); // Stop the timeline if component unmounts
  }, [onComplete]); // Empty dependency array means this runs once on mount

  return (
    <div
      ref={loaderRef}
      style={{
        height: "100%",
        width: "100%",
        // background: "white",
        position: "fixed",
        top: 0,
        zIndex: 999,
        // transition: "all ease 0.4s",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
        <video
          ref={videoRef}
          src={video}
          autoPlay
          loop
          muted
          className="h-[300px] object-cover"
        />
    </div>
  );
};

export default Loader;