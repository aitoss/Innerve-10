import React from "react";

const PrizeLabel = ({ text }) => {
  return (
    <div className="flex justify-center items-center absolute  right-[12.457px] top-[-21px] rounded-[6.833px] bg-[#DF1A20] shadow-[-8.542px_8.542px_0px_0px_rgba(0,0,0,0.15)] z-[3]">

      <div className="text-white text-[16px] font-bold pt-2 px-3 flex items-center justify-center font-angrybirds">{text}</div>

    </div>
  );
};

export default PrizeLabel;
