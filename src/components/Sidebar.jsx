import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import BackgroundImage from "../assets/background.png";
import CrossIcon from "../assets/closeButton.svg";
import Lenis from "@studio-freight/lenis"; // Import Lenis

const Sidebar = ({ closeSidebar }) => {
  const backgroundRef = useRef(null);
  const itemsRef = useRef([]);
  const lenis = useRef(null); // Store the Lenis instance

  useEffect(() => {
    // Create Lenis instance for smooth scrolling
    lenis.current = new Lenis({
      lerp: 0.1, // Linear easing for smooth scrolling
      smoothWheel: true, // Enable smooth wheel scrolling
    });

    // Scroll animations on sidebar open
    gsap.fromTo(
      backgroundRef.current,
      { y: "-100vh", opacity: 0 },
      { y: "0", opacity: 1, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(
      itemsRef.current,
      { y: "50%", opacity: 0 },
      { y: "0", opacity: 1, duration: 0.5, ease: "power1.inOut", delay: 0.5, stagger: 0.2 }
    );

    // Update Lenis on each scroll frame
    const animate = () => {
      lenis.current.update();
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      lenis.current.destroy();
    };
  }, []);

  const handleCloseSidebar = (event, targetId) => {
    event.preventDefault();

    gsap.to(backgroundRef.current, {
      y: "-100vh",
      opacity: 0,
      duration: 1.0,
      ease: "power3.in",
    });

    gsap.to(itemsRef.current, {
      y: "50%",
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
      stagger: 0.2,
      delay: 0.2,
    });

    setTimeout(() => {
      closeSidebar();
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }, 820);
  };

  return (
    <div
      ref={backgroundRef}
      className="fixed top-0 right-0 overflow-hidden h-screen w-screen flex justify-center items-center bg-cover bg-center z-50"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <button
        className="absolute top-[3rem] right-[2rem] md:top-[2rem] md:right-[10rem] z-20"
        onClick={(e) => handleCloseSidebar(e, "")}
      >
        <img
          src={CrossIcon}
          alt="close"
          className="w-6 h-6 sm:w-12 sm:h-12 hover:opacity-50"
          style={{ backgroundColor: "transparent" }}
        />
      </button>

      <div className="font-angrybirds text-center space-y-16 z-10">
        {[
          { text: "PRIZES", id: "cards-section" },
          { text: "TRACKS", id: "tracks-section" },
          { text: "TIMELINE", id: "timeline-section" },
          { text: "SPONSORS", id: "sponsors-section" },
          { text: "TESTIMONIALS", id: "testimonials-section" },
        ].map((item, index) => (
          <a
            key={item.text}
            href={`#${item.id}`}
            onClick={(event) => handleCloseSidebar(event, item.id)}
            className="text-white text-3xl sm:text-4xl md:text-5xl font-bold block no-underline"
            ref={(el) => (itemsRef.current[index] = el)}
          >
            {item.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
