import React from 'react';
import PinkGrid from "../assets/Pink_Grid.svg";
import Spark from "../assets/Spark.svg";

const TestimonialsCard = ({ content, name, collegeName }) => {
  return (
    <div 
      className="w-[95%] md:w-[100%] max-w-[440px] h-auto min-h-[505px] flex items-center justify-center mx-auto px-4 py-6 relative"
      style={{
        borderRadius: '12px',
        background: 'linear-gradient(to bottom, #FF5BB1, #626262)',
        padding: '2px', 
      }}
    >
      <div
        className="flex items-center justify-center w-full h-full"
        style={{
          borderRadius: '10px', 
          backgroundColor: '#14021e',
          backgroundImage: 'linear-gradient(to bottom, rgba(179, 121, 27, 0.2) 40%, rgba(119, 119, 119, 0.3) 100%)',
        }}
      >
        <img
          src={PinkGrid}
          alt="Pink Grid"
          className="absolute inset-0 w-full h-full object-cover rounded-[10px] pointer-events-none"
        />
        
        <div className="flex flex-col gap-6 sm:gap-[32px] relative z-10 w-full p-4 sm:p-[2rem]">
          <div className="w-full">
            <img 
              src={Spark} 
              alt="Spark" 
              className="max-w-[100px] sm:max-w-none"
            />
          </div>
          
          <div className="text-base sm:text-[20px] text-left text-white">
            {content}
          </div>
          <div className='flex flex-col gap-2'>

          <div className="text-xl sm:text-[24px] font-angrybirds text-left text-white">
            {name}
          </div>
          <div className="text-xl sm:text-[18px]  font-angrybirds text-left text-white">
            {collegeName}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;