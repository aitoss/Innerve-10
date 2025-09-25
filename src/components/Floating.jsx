import "../index.css";
import React from "react";

const Floating = ({ imgSrc }) => {
  return (
    <div>
      <img
        id="floating-piggy"
        src={imgSrc}
        alt="Bubble Piggy"
        className="w-[80px] md:w-[270px]"
      />
    </div>
  );
};


export default Floating;
