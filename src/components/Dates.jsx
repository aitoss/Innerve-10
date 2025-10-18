import React from "react";
import Piggy from "../assets/piggy.svg"
import KingPiggy from "../assets/kingpiggy.svg"

const Dates = () => {
  return (
    <div className="relative flex justify-center pt-8 items-center gap-[32px] md:gap-[60px] font-angrybirds">
      <div className="relative">
        <p className="text-[80px] md:text-[128px]">30</p>
        <p className="text-[20px] md:text-5xl">JAN 2026</p>
        <img src={Piggy} alt="piggy" className="absolute w-8 md:w-11 top-[4%] left-[50%] rotate-[-7deg]"/>
      </div>
      <div className="text-[80px] md:text-[128px]">-</div>
      <div className="relative">
        <p className="text-[80px] md:text-[128px]">31</p>
        <p className="text-[20px] md:text-5xl">JAN 2026</p>
        <img src={KingPiggy} alt="kingpiggy" className="absolute w-5 md:w-9 top-[39%] left-[68%]"/>
      </div>
    </div>
  );
};

export default Dates;
