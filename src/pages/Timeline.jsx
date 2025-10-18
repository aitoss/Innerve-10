import React from "react";
import Cloud from "../assets/Upper-Clouds.svg";
import Piggy from "../assets/piggy.svg";
import TimelineDetails from "../components/TimelineDetails";
import Logo from "../assets/logo (1).svg";
import Black from "../assets/Dot.svg";
// import LogoAnimation from "../components/LogoAnimation";
import White_Leaves from "../assets/White_Leaves_1.svg";
import Floating from "../components/Floating";
// import Grids from "../assets/all_grids.svg";
import BubblePiggy from "../assets/bubble-piggy.svg";

const timelineData = [
  {
    title: "Registration Starts",
    date: "15 NOV 2025",
    description:
      "Secure your spot starting November 15, 2025, at 12:00 AM IST. Join us for an exciting 24-hour hackathon by registering early!",
  },
  {
    title: "Registration Ends",
    date: "31 DEC 2025",
    description:
      "Last date to register for the hackathon!. Don't miss out on this opportunity—finalize your participation before it's too late!",
  },
  // {
  //   title: "Pre-Innerve Games",
  //   date: "20 JAN 2026",
  //   description:
  //     "Embark on an exciting Pre-Innerve game designed exclusively for first-year students!",
  // },
  {
    title: "Offline Pitching Round",
    date: "16 JAN, 2026 6:00 PM",
    description:
      "Engage in a warm welcome, thorough orientation, and the distribution of essential welcome kits as we kick off the hackathon experience.",
  },
  {
    title: "Innerve 10 Date",
    date: "30 JAN 2026 10:00 AM",
    description:
      "Get ready to code, innovate, and collaborate! The Hackathon journey begins—ideas soar, projects flourish, and success celebrated.",
  },
  // {
  //   title: "Mentorship Session",
  //   date: "31 JAN 2026 05:00 PM",
  //   description:
  //     "Get personalized guidance from experienced mentors in a dedicated session.",
  // },
  // {
  //   title: "Midnight Jam and Energizer",
  //   date: "31 JAN 2026 12:00 AM",
  //   description:
  //     "Fuel your creativity with our Midnight Jam—a lively session featuring energizing activities and music.",
  // },
  // {
  //   title: "Coding hours end",
  //   date: "31 JAN 2026 10:00 AM",
  //   description:
  //     "Wrap up your coding journey, take a breather, and gear up for the project submission phase.",
  // },
  // {
  //   title: "Judging Round",
  //   date: "31 JAN 2026 12:00 PM",
  //   description:
  //     "Step into the spotlight as you present your projects in the judging round. Showcase your innovation.",
  // },
  // {
  //   title: "Final Presentation",
  //   date: "31 JAN 2026 5:00 PM",
  //   description:
  //     "Bring your project to life, highlight key features, demonstrate functionality, and showcase the impact of your innovation on the real-world problem you tackled.",
  // },
];

const Timeline = () => {
  return (
    <>
    <section>

      {/* Cloud Image - Top */}
      <div className="relative top-[10px] w-full">
        <div  className="-z-10 absolute left-[0%] bottom-[-26%] w-screen">
        <Floating imgSrc={BubblePiggy}/>

        </div>
        <img
          src={Cloud}
          alt="Cloud Background"
          className="w-full object-cover"
          />
      </div>

      {/* White Section */}
      <div className="bg-white py-36 flex flex-col gap-[108px]">
        <div className=" relative flex flex-col items-center justify-center gap-5">
          <div className="relative font-angrybirds text-black text-[80px] md:text-[128px] leading-[100%]">
            TIMELINE
            <img
            src={Piggy}
            alt="Piggy"
            className="absolute w-6 md:w-10 top-[-20%] left-[90%] rotate-[-6.39deg]"
            />
          </div>
          <p className="font-angrybirds text-black text-[20px] md:text-[32px] leading-[100%] uppercase">
            HERE&apos;S YOUR GUIDE TO INNERVE 10
          </p>
          
        </div>

        {/* timeline main*/}
        <div className=" flex flex-col items-center justify-center gap-24 md:gap-64">
          {/* timeline data and innerve logo formation */}
          <div className="w-[100%] flex justify-center items-center gap-auto">
            {/* left div */}
            <div className="hidden md:flex h-[10rem] w-[48%]  justify-center items-center relative">
              <div></div>
            <img src={Logo} alt="Logo"  className="md:h-[32.5rem] md:w-[15]"/>
              {/* <LogoAnimation /> */}
            </div>

            {/* Right Division// timeline data */}
            <div className="flex px-4 flex-col justify-center items-center gap-[18px] w-[90%] md:w-[52%]">
            <div className="flex flex-col items-start justify-start gap-[18px]">
                {timelineData.map((event, index) => (
                  <TimelineDetails
                    key={index}
                    title={event.title}
                    date={event.date}
                    description={event.description}
                    />
                  ))}
              </div>
              <div className="text-black flex gap-6 md:gap-[44px] flex-row w-[100%]">
                {/* Dots */}
                <img
                  src={Black}
                  className="w-[40px] h-[40px]"
                  alt="Black Dot"
                  />

                {/* Details */}
                <div className="w-[80%]">
                  <div className="flex flex-row justify-between items-center">
                    <p className="font-angrybirds text-base md:text-[20px]">
                    Result Declaration
                    </p>
                    <p className="font-tthoves text-[14px] text-gray-500">
                    31 JAN 2026 7:00 PM
                    </p>
                  </div>
                  <div className="font-tthoves text-left text-sm md:text-base pt-[1rem]">
                  The moment you&apos;ve been waiting for is here! Discover the
                    hackathon winners and celebrate the outstanding
                    achievements of participants.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Logo Section - Separate from the main white section */}
          {/* <div className=" bg-white w-[50%] md:w-[240px] z-10">
            <img src={Logo} alt="Logo" />
            </div> */}
        </div>
      </div>

      {/* Cloud Image - Bottom */}
      <div className="relative min-h-8 md:h-[10rem] md:w-[120vw] h-[4rem]  w-[110vw] sm:h-16 lg:h-[13rem] xl:h-[18rem] lg:w-[110vw]  rotate-180 z-1"
      style={{
        backgroundImage: ` url(${White_Leaves})`,
        backgroundSize: "110%",
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
      }}
      >
      {/* <img
        src={White_Leaves}
        alt="Cloud Background"
        className="w-full object-cover transform"
        style={{
          backgroundSize: "100vw",
          
          }}
          /> */}

{/* <div className="h-[1.5rem] lg:h-[5rem] xl:h-[10rem] md:h-[4rem] sm:h-[3rem]  rotate-180 z-1"
        style={{
          backgroundImage: `url(${BottomCloud})`,
          backgroundSize: "110%",
          backgroundRepeat: "no-repeat",
        }}
        >
    
    </div> */}
    
    </div>
    <div className="absolute -mt-48 -z-10">
      <Floating imgSrc={BubblePiggy} />
     </div >
    </section>

          </>
  );
};

export default Timeline;
