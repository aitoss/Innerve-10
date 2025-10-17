import React, { useState } from "react";
import discord1 from "../assets/discord.svg";
import github from "../assets/github.svg";
import meta from "../assets/meta.svg";
import X_1 from "../assets/X_1.svg";
import Instagram from "../assets/insta.png";
import linkedIn from "../assets/linkedIn.svg";
import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import BlinkingDot from "../components/blinking.jsx";
import Sphere from "../components/sphere.jsx";
import contactCtaImage from "../assets/contact-cta.png";
import menuBtnImage from "../assets/menu-btn.png";
import mapFrameImage from "../assets/card.png";
import RotatingRoth from "../components/Rotating_roth.jsx";
import instagram from "../assets/instagram.png";

// Contact Number component with tooltip
const ContactNumber = ({ name, number }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(number);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000); // Hide tooltip after 2 seconds
    } catch (err) {
      console.error("Failed to copy number:", err);
    }
  };

  return (
    <div className="relative w-full max-w-xs flex flex-col items-center">
      <p className="text-center text-gray-500 font-semibold mb-1">{name}</p>
      <div
        className="num flex items-center justify-center relative cursor-pointer"
        onClick={copyToClipboard}
      >
        <img
          src={contactCtaImage}
          alt="Contact CTA"
          className="w-44 h-auto object-cover"
        />
        <a href={`tel:${number}`} className="absolute text-xs xl:text-sm">
          {number}
        </a>

        {showTooltip && (
          <div className="absolute w-[10rem] -top-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-md text-sm opacity-100 transition-all duration-300 ease-in-out z-50">
            <span className="block text-center">
              Number copied to clipboard!
            </span>
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-gray-800"></div>
          </div>
        )}
      </div>
    </div>
  );
};

const Footer1 = () => {
  return (
    <>
      <div className="w-[100%] h-[58rem] md:h-[25rem] lg:h-[35rem] xl:h-[35rem] overflow-hidden">
        <div className="flex md:flex-row justify-between mb-[1.5rem] flex-col">
          <div className="">
            <RotatingRoth />
          </div>

          <div className="xl:w-1/4 flex flex-col items-center justify-center mt-8">
            <h3 className="text-xl font-semibold mb-3 text-center">
              CONTACT US
            </h3>
            <div className="space-y-6 w-full flex flex-col items-center">
              <ContactNumber name="Mohit Sharma" number="+91 9012301175" />
              <ContactNumber name="Jyoti Mishra" number="+91 9569795669" />
            </div>
          </div>

          <div className="xl:w-1/4 flex flex-col items-center justify-center mt-4">
            <h3 className="text-xl font-semibold mb-2">Venue</h3>
            <div className="relative w-[280px] h-[200px] mt-2 flex items-center justify-center">
              <img
                src={mapFrameImage}
                alt="Map Frame"
                className="absolute w-full h-full object-contain"
              />
              <iframe
                title="Venue Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.2698970162255!2d73.87251157543034!3d18.606926382503463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c710e77af169%3A0x585dffe6ae2cf0f0!2s20%2C%20St%20Dnyaneshwar%20Rd%2C%20Runwal%20Park%2C%20Vijay%20Nagar%2C%20Dighi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411015!5e0!3m2!1sen!2sin!4v1732267644510!5m2!1sen!2sin"
                width="180"
                height="180"
                className="absolute top-[10px] left-[48px] right-[10px] bottom-[10px] border-none rounded-xl"
                allowFullScreen=""
                loading="fast"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-[#9CA3AF] pt-[10px] w-full min-h-14 flex flex-col md:flex-row md:items-center md:justify-center">
          <div className="w-[95%] flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center gap-[10px]"></div>

            <div className="text-[#9CA3AF] text-[15px] md:text-[18px] text-center">
              Made with ❤ by Open Source Software Club
            </div>

            <div className="flex gap-[15px]">
              <a
                href="https://github.com/aitoss"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://discord.gg/gKMr2RsN2Z"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord />
              </a>

              <a
                href="https://www.instagram.com/innerve.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/innerve_tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/open-source-software-club/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer1;
