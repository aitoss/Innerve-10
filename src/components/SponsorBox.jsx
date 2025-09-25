import React from 'react';

const SponsorBox = ({ image}) => {
  return (
    <div>
        <div className="flex justify-center">
            <p  alt="Piggy" className="h-[3rem] w-[3rem]"></p>
        </div>
      
      <div className="relative md:w-[23rem] w-[20rem] h-[6.25rem] border-8 border-[#734F1F] transform -skew-x-12 flex items-center justify-center">
        <div className="flex items-center justify-center bg-white border-4 border-[#FFC102] transform -skew-x-10 h-full w-full">
          <img className="h-[3rem] w-[10rem] transform skew-x-12" src={image} alt="Sponsor Logo" />
        </div>
      </div>
    </div>
  );
};

// ksxnwkjxbnq
export default SponsorBox;
