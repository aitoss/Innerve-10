import React from "react";
import "./Tracks.css";

import HeartImg from "../assets/heart.svg"; 
import BlockchainImg from "../assets/Blockchain.svg"; 
import LogiImg from "../assets/LOGISTICS.svg";
import FinImg from "../assets/fintech.svg"; 
import edtech2Img from "../assets/edtech2.svg"; 
import ARVRImg from "../assets/ARVR.svg"; 
import DefImg from "../assets/defence.svg"; 
import GamingImg from "../assets/Gaming.svg"; 
import CyberSecImg from "../assets/CyberSec.svg"; 
import RaysImg1 from "../assets/rays.svg"; 
import RaysImg2 from "../assets/rays2.svg"; 
import RaysImg3 from "../assets/rays3.svg"; 
import Piggy from "../assets/piggy.svg";
import PlantImg from "../assets/Plant.png"

const innerCardColors = [
  "#FA86B4", "#549EDE", "#903CD2", "#903CD2", "#FA86B4", 
  "#549EDE", "#903CD2", "#FA86B4", "#549EDE"
];

const raysImages = [
  RaysImg1, RaysImg2, RaysImg3, RaysImg3, RaysImg1, 
  RaysImg2, RaysImg3, RaysImg1, RaysImg2
];

const outerImages = [
  ARVRImg,edtech2Img, HeartImg, GamingImg, FinImg, 
  CyberSecImg, BlockchainImg, LogiImg, PlantImg
];

const labels = [
  "AR/VR", "EduTech", "Healthcare", "GameDev", "FinTech", 
  "CyberSec", "Blockchain", "Logistics", "EcoTech"
];

const Card = ({ innerColor, raysImage, outerImage }) => {
  return (
    <div className="outer-card">
      <img src={outerImage} alt="Outer Card" className="outer-image" /> 
      <div className="inner-card" style={{ backgroundColor: innerColor }}>
        <img src={raysImage} alt="Rays" className="inner-image" />
      </div>
    </div>
  );
};

const Tracks = () => {
  return (
    <div className="tracks-container">
      <div className="relative font-angrybirds text-white text-[80px] md:text-[128px] leading-[100%] mb-[6rem]">
            TRACKS
            <img
            src={Piggy}
            alt="Piggy"
            className="absolute w-6 md:w-10 top-[-18%] left-[59.5%] rotate-[-6.39deg]"
          />
          </div>
      <div className="cards-wrapper">
        {innerCardColors.map((innerColor, index) => (
          <div className="card-container" key={index}>
            <Card 
              innerColor={innerColor} 
              raysImage={raysImages[index]} 
              outerImage={outerImages[index]} 
            />
            <div className="card-label-container">
              <h2 className="card-label">{labels[index]}</h2> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
