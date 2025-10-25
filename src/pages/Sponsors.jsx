import React, { memo } from "react";
import NordVpn from "../assets/NordVpn.svg?react";
import UpperLeaves from "../assets/Orange_Leaves_1.png";
import LowerLeaves from "../assets/Orange_Leaves_bottom.png";
import Wolfram from "../assets/logo/Wolfram";
import Nordpass from "../assets/nordpass horizontal (1).png";
import Saily from "../assets/saily-logo-black (2).png";
import Incogni from "../assets/incogni black (3).png";
import SponsorTab from "../components/SponsorTab";
import Texture2 from "../assets/texture.png";
import Devfolio from "../assets/logo/Devfolio";
import EthIndia from "../assets/logo/EthIndia";
import Polygon from "../assets/logo/Polygon";
import Joshps from "../assets/logo/Joshps";
import Xyz from "../assets/logo/Xyz";
import Nord from "../assets/NordVPN_Logo_RGB_Primary_Black.png";
import IIC from "../assets/logo/IIC";
import Budhhani from "../assets/logo/Budhhani";
import ACM from "../assets/logo/ACM";
import MicroGroupme from "../assets/microgrp.png";
import Udchalo from "../assets/udchalo.png";
import udchaloo from "../assets/udchalo.jpeg"
import Icici from "../assets/icici.svg";
import ScrollingSponsors from "../components/ScrollingSponsors";
import Microsoft from "../assets/Microsoft.png"
import Bob from "../assets/bob.png"
import Maxprotein from "../assets/maxprotein-DxumR6gx.png"
const MemoizedSponsorTab = memo(SponsorTab);

const Sponsors = () => {
  const titleSponsorImages = [
    <div className="flex justify-center items-center">
      <Wolfram />
    </div>,
    <div className="flex justify-center items-center">
      <img src={Nordpass} alt="Nordpass" className="w-60 h-15" />
    </div>,
    <div className="flex justify-center items-center">
      <img src={Saily} alt="Saily" className="w-40 h-20" />
    </div>,
    <div className="flex justify-center items-center">
      <img src={Incogni} alt="Incogni" className="w-36 h-auto" />
    </div>,
    <div className="flex justify-center items-center">
      <img src={Nord} alt="NordVpn" className="w-80 h-15" />
    </div>,

    <div>
      <IIC />
    </div>,
    <div>
      <ACM />
    </div>,

  ];

  const platinumSponsorImages = [
    <div className="flex justify-center items-center">
      <Joshps />
    </div>
  ]

  const creditImages = [
    <div className="flex justify-center items-center">
      <Xyz />
    </div>
  ]

  const FoodSponsor = [
    <div className="flex justify-center items-center">
      <Budhhani />
    </div>
  ]

  const TotalSponsers = [
    <Joshps />,
    <div className="flex justify-center items-center">
      <img src={Microsoft} alt="MicroGroupme" className="w-56" />
    </div>,
    <div className="flex justify-center items-center">
      <img src={Udchalo} alt="Udchalo" className="w-52" />
    </div>,
    <div className="flex justify-center items-center">
      <img src={Icici} alt="Icici" className="w-80 h-15" />
    </div>,
    <div className="flex justify-center items-center">
      <img src={Bob} alt="Bob" className="w-56 " />
    </div>,
    <div className="flex justify-center items-center">
      <img src={Nord} alt="NordVpn" className="w-80 h-15" />
    </div>,
    <EthIndia />,
    <Devfolio />,
    // <Polygon />,
    <div className="flex justify-center items-center">
      <Wolfram />
    </div>,
    // <div className="flex justify-center items-center">
    //   <img src={Nordpass} alt="Nordpass" className="w-60 h-15" />
    // </div>,
    <div className="flex justify-center items-center">
      <img src={Saily} alt="Saily" className="w-40 h-20" />
    </div>,
    <div className="flex justify-center items-center">
      <img src={Incogni} alt="Incogni" className="w-36 h-auto" />
    </div>,

    <div className="flex justify-center items-center">
      <img src={Maxprotein} alt="Maxprotein" className="w-32" />
    </div>,





    // <div>
    //   <IIC />
    // </div>,
    // <div>
    //   <ACM />
    // </div>,
    // <Xyz />,
    // <Budhhani />
  ]

  const platformSponsor = [<EthIndia />, <Devfolio />, <Polygon />];

  return (
    <section className="relative w-full flex flex-col justify-center items-center">
      {/* Upper Leaves */}
      <div className="w-[120vw] -mb-10 md:-mb-32 xl:-mb-48">
        <img
          src={UpperLeaves}
          alt="leaves"
          className="w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Sponsor Section */}
      <div className="flex flex-col justify-center items-center relative py-24 bg-[#FE7702] w-full">
        {/* Texture Background */}
        <div
          className="absolute flex w-full h-full top-0 left-0 mix-blend-soft-light"
          style={{
            backgroundImage: `url(${Texture2})`,
            backgroundRepeat: "repeat-y",
            backgroundSize: "100%",
          }}
        ></div>

        {/* Heading */}
        <div className="flex flex-col md:flex-row gap-4">
          <p className="capitalize text-[32px] md:text-7xl font-angrybirds text-[#FFFF5C] leading-none">
            OUR-PREVIOUS
          </p>
          <p className="capitalize text-[80px] md:text-[128px] font-angrybirds text-[#FFFF5C] leading-none">
            SPONSORS
          </p>
        </div>

        {/* Sponsors Tab */}
        <div className="flex flex-wrap gap-4 justify-center items-center w-full px-8 md:px-16 lg:px-24 mx-auto">
          <MemoizedSponsorTab
            // heading="Platinum Sponsor"
            images={TotalSponsers}
            piggyNumber={1}
          />
        </div>
        {/* <div className="flex justify-center flex-col items-center px-6 mt-24">
          <MemoizedSponsorTab
            // heading="Platform Sponsor"
            images={platformSponsor}
            piggyNumber={1}
          />
          <div className="flex flex-wrap gap-6 justify-center items-center w-full px-8 md:px-16 lg:px-24 mx-auto">
            <MemoizedSponsorTab
              // heading="Goodwill Sponsor"
              images={titleSponsorImages}
              piggyNumber={1}
            />
          </div>
          <div className="flex flex-wrap gap-6 justify-center items-center w-full px-8 md:px-16 lg:px-24 mx-auto">
            <MemoizedSponsorTab
              // heading="Credits Sponsor"
              images={creditImages}
              piggyNumber={1}
            />
          </div>
          <div className="flex flex-wrap gap-6 justify-center items-center w-full px-8 md:px-16 lg:px-24 mx-auto">
            <MemoizedSponsorTab
              // heading="Credits Sponsor"
              images={FoodSponsor}
              piggyNumber={1}
            />
          </div>
        </div> */}

      </div>

      {/* Lower Leaves */}
      {/* <div className="w-[120vw] -mt-2 md:-mt-32 xl:-mt-48">
        <img
          src={LowerLeaves}
          alt="leaves"
          className="w-full object-cover"
          loading="lazy"
        />
      </div> */}
    </section>
  );
};

export default Sponsors;
