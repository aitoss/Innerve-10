import React from "react";

import Piggy from "../assets/piggy.svg";

const Heading = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="relative font-supercell text-[80px] md:text-[172px] line leading-[100%]">
        INNERVE 10
        <img
        src={Piggy}
        alt="piggy"
        className="absolute w-3 md:w-10 top-5 md:top-20 left-[91%] rotate-[-7deg]"
      />
      </div>
      <p className="font-angrybirds md:text-[32px]">
        INDIA&apos;S LARGEST STUDENT DRIVEN HACKATHON
      </p>
      
    </div>
  );
};

export default Heading;
