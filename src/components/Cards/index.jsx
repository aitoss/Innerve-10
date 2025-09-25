import React from "react";
import CardWrapper from "./CardWrapper";
import radialfirst from "../../assets/radialtrianglefirst.svg";
import radialsecond from "../../assets/radialtrianglesecond.svg";
import radialthird from "../../assets/radialtrianglethird.svg";
import leftside from "../../assets/leftsidecut.svg";
import rightside from "../../assets/rightsidecut.svg";

import egg3 from "../../assets/Egg3-basket.svg";

import TopCloud from "../../assets/TopCloud.svg";
import BottomCloud from "../../assets/BottomCloud.svg";
import background_texture from "../../assets/prizes_bg.png";

const Cards = () => {
  const cardProps = {
    cardProps: {
      secondPrize: {
        prize: "Second Prize",
        prizeLabel: "SECOND",
        amount: "75K",
        description:
          "Innerve Goodies and Merch. Fundings and Internship opportunities from our sponsors",
        images: { radial: radialsecond, leftside, rightside, egg: egg3 },
      },
      firstPrize: {
        prize: "First Prize",
        prizeLabel: "FIRST",
        amount: "125K",
        description:
          "Innerve Goodies and Merch. Fundings and Internship opportunities from our sponsors",
        images: { radial: radialfirst, leftside, rightside, egg: egg3 },
      },
      thirdPrize: {
        prize: "Third Prize",
        prizeLabel: "THIRD",
        amount: "50K",
        description:
          "Innerve Goodies and Merch. Fundings and Internship opportunities from our sponsors",
        images: { radial: radialthird, leftside, rightside, egg: egg3 },
      },
    },
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center",}}>
        <div>
          <img src={TopCloud} className="w-screen" alt="Top Cloud" />
        </div>

      <div className="w-screen px-2 bg-white flex justify-center items-center">
        <div
          className="md:w-[97%] w-[100%]"
          style={{
            borderRadius: "30px",
            position: "relative", // Enables layering
            backgroundColor: "rgba(16, 159, 161, 0.9)", // Semi-transparent background color
            boxSizing: "border-box",
            paddingBottom: "60px",
            overflow: "hidden",
          }}
          >
          {/* Background image with transparency */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${background_texture})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              opacity: 0.2, // Adjust the transparency of the image
              zIndex: 1, // Place it behind content
            }}
          ></div>

          {/* Content */}
          <div style={{ position: "relative", zIndex: 2 }}> {/* Brings content above the background */}
            <p className="font-angrybirds text-white text-6xl pt-10">
              PRIZE POOL OF Rs. 12,00,000+
            </p>
            <div className="flex justify-center gap-20 pt-14 items-center flex-wrap pb-[60px]" style={{ userSelect: "none" }}>
             
                <CardWrapper {...cardProps.cardProps.firstPrize}style={{ maxWidth: "300px", userSelect: "none" }} />
             
             
                <CardWrapper {...cardProps.cardProps.secondPrize} style={{ maxWidth: "300px", userSelect: "none" }} />
             
             
                <CardWrapper {...cardProps.cardProps.thirdPrize} style={{ maxWidth: "300px", userSelect: "none" }}/>
             
            </div>
          </div>
        </div>
      </div>
        <div>
          <img src={BottomCloud} className="w-screen" alt="Bottom Cloud" />
        </div>
      </div>
    </>
  );
};

export default Cards;
