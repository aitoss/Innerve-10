import React from 'react';
import { motion } from 'framer-motion';
import Nine from "../assets/Nine.png";

const Loader = () => {
  return (
    <div className="h-screen w-full fixed top-0 left-0 z-[1000] bg-white flex items-center justify-center">
      <motion.div
        className="relative flex items-center justify-center"
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Image Animation */}
        <motion.img
          src={Nine}
          alt="Loader Icon"
          className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]"
          animate={{
            scale: [1, 0.9, 1],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Number Animation */}
        <motion.span
          className="absolute text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[15rem] text-[#D80026] font-bold"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="font-angrybirds text-[5rem] sm:text-[8rem] md:text-[12rem]">
            9
          </div>
        </motion.span>
      </motion.div>
    </div>
  );
};

export default Loader;
