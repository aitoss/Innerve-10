import React from "react";
import PrizeLabel from "./PrizeLabel";
import PrizeDetails from "./PrizeDetails";
import CardBackground from "./CardBackground";
import Eggs from "./Eggs";

import { div } from "three/webgpu";

const CardWrapper = ({ prize, prizeLabel, description, amount, images }) => {
  return (
    <>
      <div className="">
        <div className="relative">
          <PrizeLabel text={prizeLabel}/>
          <div
            className={`relative w-[20rem] h-[30rem] md:w-[27.5rem] md:h-[33.81rem] ${
              prize === "First Prize"
                ? "bg-[#E14863]"
                : prize === "Third Prize"
                ? "bg-[#F7B748]"
                : "bg-[#5b5b5b]"
            } rounded-lg overflow-hidden shadow-[-8.542px_8.542px_0px_0px_rgba(0,0,0,0.15)] gap`}
          >
            <p className="absolute top-8 text-white text-center font-angrybirds text-[22px] font-normal z-[3] pl-4">
              {prize}
            </p>
            <PrizeDetails amount={amount} description={description} />
            <CardBackground images={images} />
            </div>
          <Eggs images={images} />
        </div>
      </div>

      
    </>
  );
};

export default CardWrapper;
