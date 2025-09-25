import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import animationData from "./../assets/lottie-redbot-v7.json";

const animationSegments = {
  scrollingEyes: { start: 0, end: 150 },
  helloThumbsUp: { start: 151, end: 250 },
  bored: { start: 251, end: 300 },
  laughing: { start: 301, end: 350 },
  dizziness: { start: 351, end: 450 },
  screaming: { start: 451, end: 490 },
  thinking: { start: 491, end: 560 },
  shocked: { start: 561, end: 650 },
  sleeping: { start: 651, end: 890 },
  furiousFace: { start: 891, end: 960 },
  ohSit: { start: 961, end: 1010 },
  lookingAround: { start: 1011, end: 1070 },
  runComeBack: { start: 1175, end: 1241 },
  entryScene: { start: 1220, end: 1241 },
  angryBird: { start: 0, end: 100 },
};

const segmentMessages = {
  scrollingEyes: "Looking around curiously!",
  helloThumbsUp: "Welcome to Innerve.tech!",
  bored: "Not interested in Tracks",
  laughing: "How funny !!",
  dizziness: "This is too much to handle!",
  screaming: "Yipeeeee , I did something !!",
  thinking: "Deep in thought...",
  shocked: "Such a big Pool Prize!",
  sleeping: "Taking a quick nap...",
  furiousFace: "You made me angry now you see ",
  ohSit: "Contacting Team Innerve Soon!",
  lookingAround: "Looking around sneakily!",
  runComeBack: "Packing my Bags just wait",
  angryBird: "Feeling like an angry bird!",
};

const ControlledLottie = () => {
  const containerRef = useRef(null);
  const [lottieInstance, setLottieInstance] = useState(null);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentSegment, setCurrentSegment] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isPlayingDefault, setIsPlayingDefault] = useState(false);
  const [hasPlayedEntryScene, setHasPlayedEntryScene] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const animationTimer = useRef(null);

  const loopCounts = useRef({
    helloThumbsUp: 0,
    shocked: 0,
    sleeping: 0,
    runComeBack: 0,
    laughing: 0,
    screaming: 0,
    ohSit: 0,
    bored: 0,
    scrollingEyes: 0,
    dizziness: 0,
    furiousFace: 0,
    thinking: 0,
    lookingAround: 0,
    angryBird: 0,
  });

  const playDefaultAnimation = () => {
    if (lottieInstance && !isAnimating && !isPlayingDefault) {
      const segment = animationSegments.scrollingEyes;
      setIsPlayingDefault(true);

      const playDefaultSegment = () => {
        lottieInstance.playSegments([segment.start, segment.end], true);
      };

      playDefaultSegment();
      lottieInstance.addEventListener("complete", playDefaultSegment);

      return () => {
        lottieInstance.removeEventListener("complete", playDefaultSegment);
      };
    }
  };

  const playEntryScene = () => {
    if (lottieInstance) {
      setIsAnimating(true);
      const segment = animationSegments.entryScene;

      lottieInstance.playSegments([segment.start, segment.end], true);

      // After entry scene completes, mark it as played and start default animation
      lottieInstance.addEventListener(
        "complete",
        () => {
          setHasPlayedEntryScene(true);
          setIsAnimating(false);
          playDefaultAnimation();
        },
        { once: true }
      ); // Use once: true to ensure this only runs once
    }
  };

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData,
      });

      anim.addEventListener("complete", () => {
        if (!isPlayingDefault && hasPlayedEntryScene) {
          setIsAnimating(false);
          playDefaultAnimation();
        }
      });

      setLottieInstance(anim);

      return () => {
        if (animationTimer.current) {
          clearTimeout(animationTimer.current);
        }
        anim.removeEventListener("complete");
        anim.destroy();
      };
    }
  }, []);

  useEffect(() => {
    if (lottieInstance && !hasPlayedEntryScene) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        playEntryScene();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [lottieInstance, hasPlayedEntryScene]);

  useEffect(() => {
    if (
      lottieInstance &&
      !isAnimating &&
      !isPlayingDefault &&
      hasPlayedEntryScene
    ) {
      const cleanup = playDefaultAnimation();
      return () => {
        if (cleanup) cleanup();
      };
    }
  }, [lottieInstance, isAnimating, isPlayingDefault, hasPlayedEntryScene]);

  useEffect(() => {
    if (!lottieInstance) return;

    const handleScroll = () => {
      if (isAnimating) return;

      const scrollPosition = window.scrollY;
      let selectedSegment = "";

      if (isMobile) {
        if (scrollPosition >= 0 && scrollPosition < 300) {
          selectedSegment = "helloThumbsUp";
        } else if (scrollPosition >= 300 && scrollPosition < 2400) {
          selectedSegment = "shocked";
        } else if (scrollPosition >= 2400 && scrollPosition < 4800) {
          selectedSegment = "sleeping";
        } else if (scrollPosition >= 4800 && scrollPosition < 8400) {
          selectedSegment = "runComeBack";
        } else if (scrollPosition >= 8400 && scrollPosition < 12000) {
          selectedSegment = "scrollingEyes";
        } else if (scrollPosition >= 12000 && scrollPosition < 14400) {
          selectedSegment = "screaming";
        } else {
          selectedSegment = "ohSit";
        }
      } else {
        if (scrollPosition < 200) {
          selectedSegment = "helloThumbsUp";
        } else if (scrollPosition >= 200 && scrollPosition < 700) {
          selectedSegment = "helloThumbsUp";
        } else if (scrollPosition >= 700 && scrollPosition < 1800) {
          selectedSegment = "shocked";
        } else if (scrollPosition >= 1800 && scrollPosition < 3400) {
          selectedSegment = "sleeping";
        } else if (scrollPosition >= 3400 && scrollPosition < 5800) {
          selectedSegment = "runComeBack";
        } else if (scrollPosition >= 5800 && scrollPosition < 7300) {
          selectedSegment = "scrollingEyes";
        } else if (scrollPosition >= 7400 && scrollPosition < 8400) {
          selectedSegment = "screaming";
        } else if (scrollPosition >= 8400 && scrollPosition < 10400) {
          selectedSegment = "ohSit";
        }
      }

      if (selectedSegment && selectedSegment !== currentSegment) {
        if (isPlayingDefault) {
          lottieInstance.removeEventListener("complete", playDefaultAnimation);
          setIsPlayingDefault(false);
        }

        const segment = animationSegments[selectedSegment];
        setIsAnimating(true);
        setCurrentSegment(selectedSegment);

        loopCounts.current[selectedSegment] = 0;

        const playAnimation = () => {
          if (loopCounts.current[selectedSegment] < 1) {
            lottieInstance.playSegments([segment.start, segment.end], true);
            loopCounts.current[selectedSegment] += 1;
            lottieInstance.addEventListener("complete", playAnimation);
          } else {
            lottieInstance.removeEventListener("complete", playAnimation);
            setIsAnimating(false);
          }
        };

        playAnimation();

        setCurrentMessage(segmentMessages[selectedSegment]);
      }
    };

    let scrollTimeout;
    const debouncedHandleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 50);
    };

    window.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lottieInstance, isAnimating, currentSegment, isMobile, isPlayingDefault]);

  return (
    <div
      className={`fixed -bottom-4 left-0 pointer-events-none w-[30rem] z-10 flex items-center ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div
        ref={containerRef}
        className="w-[200px] h-[200px] -ml-[20px] md:w-[300px] md:h-[300px]"
      ></div>

      {currentMessage && !isPlayingDefault && hasPlayedEntryScene && (
        <div className="absolute font-tthoves bottom-1/4 left-[8rem] md:left-[13rem] text-center text-white border-2 border-white/20 shadow-[inset_2px_4px_16px_0px_rgba(255,255,255,0.15)] bg-black/70 p-2 rounded-full rounded-tl-none md:p-2 backdrop-blur-[12px] max-w-xs">
          {currentMessage}
        </div>
      )}
    </div>
  );
};

export default ControlledLottie;
