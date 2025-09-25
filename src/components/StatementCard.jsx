import React from 'react';
import texture from "../assets/statement_texture.svg";
import Joshps from "../assets/logo/Joshps";

const StatementCard = () => {
  return (
    <div
      className="w-[20rem] md:w-full max-w-[40rem] h-auto p-[1rem] bg-red-50 rounded-xl"
      style={{
        background: `linear-gradient(to bottom, rgba(225, 72, 99, 0.7), rgba(216, 0, 38, 0.7)), url(${texture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className='flex flex-col justify-between p-4 gap-[20px]'>
        <div className="bg-white flex rounded-xl p-[1rem] items-center w-[10rem] mx-auto">
          <Joshps />
        </div>

        <div className='flex items-center text-left font-tthoves text-[20px]'>
          Create an AI-powered app that analyzes live phone calls for scams, alerts users in real-time, and adapts to new scam patterns. Focus on privacy, security, and ease of use.
        </div>

        <a
          href="https://drive.google.com/drive/folders/14YfJYuevx8ajQKmoF7UdfEva3UaAMw2S?dmr=1&ec=wgc-drive-hero-goto"
          download="AI_Scam_Prevention_Whitepaper.pdf"
          className='text-left text-[20px] font-bold hover:underline'
        >
          Learn more
        </a>
      </div>
    </div>
  );
}

export default StatementCard;
