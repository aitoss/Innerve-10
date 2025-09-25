import React from 'react'
import Texture1 from "../../assets/texture.svg";
import Texture2 from "../../assets/texture.png";
const Texture = () => {
  return (
    <div className='w-[100%] h-[100%]'>
      <img src={Texture2} alt="Texture" className='w-[200vw] object-cover md:scale-[0.8]' />
    </div>
  )
}

export default Texture
