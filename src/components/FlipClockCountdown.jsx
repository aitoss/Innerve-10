import React from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css"; // Include default styles
import "../index.css"; // Include your custom styles

const FlipClockStyled = ({ targetDate }) => {
  return (
    <FlipClockCountdown

    dividerStyle={{
        // color:"black"
    }}
      to="2025-02-07T00:10:00"
      className="flex gap-4 sm:gap-6 md:gap-[96px] items-center justify-center font-[pixellari] px-4"
      labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
      labelStyle={{
        fontFamily: "angrybirds",
        fontSize: "20px", // Default font size for small screens
        textTransform: "uppercase",
      }}
      digitBlockStyle={{
        backgroundColor: "#FA5596",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        fontFamily: "pixellari",
        color: "#fff",
        fontSize: "5rem", // Adjust font size for smaller screens
        width: "5rem",    // Smaller width for compact displays
        height: "7rem",
        
      }}
      separatorStyle={{
        color: "#FA5596",
        size: "16px", // Smaller separator size for mobile
        "@media (min-width: 768px)": {
          size: "24px",
        },
      }}

      spacing={{
        // Custom spacing between clock digits
        unit: "24px", // Adjust spacing between digits (you can change this value as needed)
        label: "16px", // Adjust spacing between labels (you can change this value as needed)
      }}

      showSeparators={false}
    />
  );
};

export default FlipClockStyled;
