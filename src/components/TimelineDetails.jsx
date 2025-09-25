import React from 'react';
import White from '../assets/White_Dot.svg';
import Black from '../assets/Dot.svg';

// testing from linux
// Use destructuring to extract title, date, and description from props
// eslint-disable-next-line react/prop-types
const TimelineDetails = ({ title, date, description }) => {
  return (
    <div className="text-black  flex gap-6 md:gap-[44px] flex-row md:w[100%] w-[100%] ">
      {/* Dots */}
      <div className=" flex flex-col gap-[1rem] justify-center items-center h-full">
        <img src={Black} className="w-[40px] h-[40px]" alt="Black Dot" />
        <img src={White} className="w-[12px] h-[12px]" alt="White Dot" />
        <img src={White} className="w-[12px] h-[12px]" alt="White Dot" />
        <img src={White} className="w-[12px] h-[12px]" alt="White Dot" />
        <img src={White} className="w-[12px] h-[12px]" alt="White Dot" />
      </div>

      {/* Details */}
      <div className="w-[80%] ">
        <div className="flex flex-row justify-between items-center">
          <p className="font-angrybirds text-left text-base md:text-[20px]">{title}</p>
          <p className="font-tthoves text-right text-[14px] text-gray-500">{date}</p>
        </div>
        <div className="font-tthoves text-left text-sm md:text-base pt-[1rem]">{description}</div>
      </div>
    </div>
  );
};

export default TimelineDetails;
