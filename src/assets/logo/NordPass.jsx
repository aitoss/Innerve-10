import React from 'react'
import NordPass1 from "../nordpass-icon.png"

const NordPass = () => {
  return (
    <div className='text-black flex items-center justify-center gap-[10px]'>
         <img src={NordPass1} alt="SailyImg" className=' sm:w-[10vw] w-[25vw] xl:w-[2vw] object-cover md:w-[5vw]' />
         <p className='text-[25px] font-bold '>
            NordPass
         </p>
    </div>
  )
}

export default NordPass
