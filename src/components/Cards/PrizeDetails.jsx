import React from "react";

const PrizeDetails = ({ amount, description }) => {
  return (
    <div className="absolute z-[3] top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4 self-stretch">
        <p className="text-white font-angrybirds text-[100px] font-normal text-center">
          {amount}
        </p>
      </div>
      <p className="text-white font-tthoves text-[18px] font-normal text-center w-[300px]">
        {description}
      </p>
    </div>
  );
};

export default PrizeDetails;
