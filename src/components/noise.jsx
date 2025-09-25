import React from 'react';

const Noise = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-[3023023023020] opacity-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnsSvgjs="http://svgjs.dev/svgjs"
        width="100%"
        height="100%"
        className="w-full h-full"
      >
        <defs>
          <filter
            id="nnnoise-filter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="linearRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.2"
              numOctaves="4"
              seed="15"
              stitchTiles="stitch"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="turbulence"
            ></feTurbulence>
            <feSpecularLighting
              surfaceScale="40"
              specularConstant="3"
              specularExponent="20"
              lightingColor="#7957A8"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="turbulence"
              result="specularLighting"
            >
              <feDistantLight azimuth="3" elevation="200"></feDistantLight>
            </feSpecularLighting>
          </filter>
        </defs>
        <rect width="100%" height="100%" fill="transparent"></rect>
        <rect
          width="100%"
          height="100%"
          fill="#7957a8"
          filter="url(#nnnoise-filter)"
        ></rect>
      </svg>
    </div>
  );
};

export default Noise;
