import React from "react";
import Wolfram from "../assets/logo/Wolfram";
import Nordpass from "../assets/nordpass horizontal (1).png";
import Saily from "../assets/saily-logo-black (2).png";
import Incogni from "../assets/incogni black (3).png";
import Nord from "../assets/NordVPN_Logo_RGB_Primary_Black.png";
import IIC from "../assets/logo/IIC";
import ACM from "../assets/logo/ACM";
import Joshps from "../assets/logo/Joshps";
import Xyz from "../assets/logo/Xyz";
import Budhhani from "../assets/logo/Budhhani";
import Devfolio from "../assets/logo/Devfolio";
import EthIndia from "../assets/logo/EthIndia";
import Polygon from "../assets/logo/Polygon";

const ScrollingSponsors = () => {
    const allSponsors = [
        // Components (SVG React components)
        { type: 'component', component: <Wolfram />, key: 'wolfram' },
        { type: 'component', component: <IIC />, key: 'iic' },
        { type: 'component', component: <ACM />, key: 'acm' },
        { type: 'component', component: <Joshps />, key: 'joshps' },
        { type: 'component', component: <Xyz />, key: 'xyz' },
        { type: 'component', component: <Budhhani />, key: 'budhhani' },
        { type: 'component', component: <Devfolio />, key: 'devfolio' },
        { type: 'component', component: <EthIndia />, key: 'ethindia' },
        { type: 'component', component: <Polygon />, key: 'polygon' },

        // Images
        { type: 'image', src: Nordpass, alt: 'Nordpass', key: 'nordpass', className: 'h-8 w-auto' },
        { type: 'image', src: Saily, alt: 'Saily', key: 'saily', className: 'h-8 w-auto' },
        { type: 'image', src: Incogni, alt: 'Incogni', key: 'incogni', className: 'h-8 w-auto' },
        { type: 'image', src: Nord, alt: 'NordVPN', key: 'nord', className: 'h-8 w-auto' },
    ];

    return (
        <div className="w-full bg-transparent py-12 overflow-hidden">
            {/* <div className="text-center mb-8">
                <h2 className="text-gray-500 text-sm font-medium tracking-wider uppercase">
                    TRUSTED BY LEADING TEAMS
                </h2>
            </div> */}

            <div className="relative">
                <div className="flex animate-scroll space-x-12">
                    {/* First set of sponsors */}
                    {allSponsors.map((sponsor) => (
                        <div
                            key={sponsor.key}
                            className="flex items-center justify-center h-26 min-w-[120px]  grayscale hover:grayscale-0 transition-all duration-300"
                        >
                            {sponsor.type === 'component' ? (
                                <div className="max-h-full max-w-full flex items-center justify-center">
                                    {sponsor.component}
                                </div>
                            ) : (
                                <img
                                    src={sponsor.src}
                                    alt={sponsor.alt}
                                    className={`${sponsor.className} object-contain`}
                                />
                            )}
                        </div>
                    ))}

                    {/* Duplicate set for seamless loop */}
                    {allSponsors.map((sponsor) => (
                        <div
                            key={sponsor.key}
                            className="flex items-center justify-center min-w-[120px] h-26 transition-all duration-300"
                        >
                            {sponsor.type === 'component' ? (
                                <div className="max-h-full max-w-full flex items-center justify-center">
                                    {sponsor.component}
                                </div>
                            ) : (
                                <img
                                    src={sponsor.src}
                                    alt={sponsor.alt}
                                    className={`${sponsor.className} object-contain`}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScrollingSponsors;