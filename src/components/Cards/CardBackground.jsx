import React from "react";

const CardBackground = ({ images }) => {
  const { radial, leftside, rightside,prize } = images;
  return (
    <>
      <img
        src={radial}
        alt="radial"
        className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 origin-center h-[1260px] w-[1260px] z-[0]"
        draggable="false"
        style={{ pointerEvents: 'none' }}
      />
      <img
        src={leftside}
        alt="leftside"
        className="absolute top-16 left-0 w-[120px] h-[60px] origin-center z-8"
      />
      <img
        src={rightside}
        alt="rightside"
        className="absolute bottom-20 -right-0 w-[60px] h-[60px] origin-center z-8"
      /> 
    </>
  );
};

export default CardBackground;
