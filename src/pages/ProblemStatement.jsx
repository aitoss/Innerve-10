import React from 'react'
import Piggy from "../assets/piggy.svg";
import StatementCard from '../components/StatementCard';


const ProblemStatement = () => {
  return (
    <div className='h-[50vh] md:mb-[10rem] mb-[20rem] '>
              <div className=" relative flex flex-col items-center justify-center gap-5">
          <div className="relative font-angrybirds text-white text-[5rem] md:text-[128px] leading-[100%]">
            sponsor's statements
            <img
            src={Piggy}
            alt="Piggy"
            className="absolute w-6 md:w-10 top-[-4%] left-[90%] rotate-[-6.39deg] md:left-[65%]"
            />
          </div>

        </div>

        <div className=' flex items-center justify-center mt-[4rem]'>
          <StatementCard/>
        </div>
    </div>
  )
}

export default ProblemStatement
