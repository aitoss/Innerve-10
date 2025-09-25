import React from 'react'

const Eggs = ({images}) => {
    const  { egg} = images;
  return (
    
    <div>
      <img
        src={egg}
        alt="Eggs"
        className="absolute top-[82%] left-[55%] h-[150px] w-[150px] z-[5] "
      />
    </div>
  )
}

export default Eggs
