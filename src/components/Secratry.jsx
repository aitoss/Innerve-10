import React from 'react';
import Image from "../assets/female_sec.png"; // Correctly import the image

const Secratry = ({ Name, contactNumber, ImageSrc }) => {
  return (
    <div className="relative flex flex-col items-center">
      {/* First box */}
      <div
        className="w-[172.5px] h-[64.5px] rounded-[9.75px] border-[#6C6769] border-[3px] relative"
        style={{ backgroundColor: 'rgba(108, 103, 105, 0.5)' }} // Transparent background
      >
        <div className="flex flex-col items-center justify-center pt-[7px] pl-[20px]">
          <p className='text-[13.5px] font-angrybirds'>{Name}</p>
          <p className='text-[15.5px] font-angrybirds'>{contactNumber}</p>
        </div>

        {/* Second box - Circular */}
        <div
          className="absolute z-[10] -top-[35px] left-[50%] transform -translate-x-[8rem] translate-y-[1.75rem] rounded-full border-[#6C6769] border-[6px] w-[76.25px] h-[76.5px] flex items-center justify-center"
          style={{ backgroundColor: 'rgba(108, 103, 105, 0.5)' }} // Transparent background
        >
          {/* Inner Circle */}
          <div
            className="bg-[#AEA9AA] w-full h-full rounded-full"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: '#AEA9AA',
              backgroundImage: `url(${ImageSrc})`, // Correctly reference the imported image
              backgroundSize: 'conatin', // Ensure the image covers the entire div
              backgroundPosition: 'center', // Center the image
              backgroundRepeat: 'no-repeat', // Prevent the image from repeating
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Secratry;
