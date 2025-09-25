import React from "react";
import Piggy from "../assets/piggy.svg"
import KingPiggy from "../assets/kingpiggy.svg"

const Dates = () => {
  return (
    <div className="relative flex justify-center pt-8 items-center gap-[32px] md:gap-[60px] font-angrybirds">
      <div className="relative">
        <p className="text-[80px] md:text-[128px]">08</p>
        <p className="text-[20px] md:text-5xl">FEB 2026</p>
        <img src={Piggy} alt="piggy" className="absolute w-8 md:w-11 top-[0%] left-[60%] rotate-[-7deg]"/>
      </div>
      <div className="text-[80px] md:text-[128px]">-</div>
      <div className="relative">
        <p className="text-[80px] md:text-[128px]">09</p>
        <p className="text-[20px] md:text-5xl">FEB 2026</p>
        <img src={KingPiggy} alt="kingpiggy" className="absolute w-5 md:w-9 top-[41%] left-[62%]"/>
      </div>
    </div>
  );
};

export default Dates;
