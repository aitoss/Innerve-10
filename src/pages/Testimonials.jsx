import React from "react";
import Piggy from "../assets/piggy.svg";
import TestimonialsCard from "../components/TestimonialsCard";

const data = [
  {
    content:
      "Innerve provided an excellent platform for innovation and self-challenge. I had the opportunity to engage with talented individuals, work on pioneering ideas, and observe diverse approaches to problem-solving. The energy and learning experiences were exceptional. I highly recommend it",
    name: "Priya Verma, Data Scientist",
    collegeName: "RVCE Bangalore",
  },
  {
    content:
      "Innerve 8 was an incredible experience! The challenges were both exciting and tough, pushing me to think creatively and outside the box. The collaborative atmosphere made problem-solving even more rewarding, and I’ve learned a ton from my teammates. Can't wait for the next one!",
    name: "Anjali Gupta, Developer",
    collegeName: "NIT Ranchi",
  },
  {
    content:
      "Participating in Innerve 9 was a transformative experience. The hackathon not only allowed me to enhance my coding skills but also provided the opportunity to work on real-world projects alongside dedicated developers. The mentorship provided was exceptional, and the event was exceptionally well-organized.",
    name: "Jaskirat Singh, UI/UX designer",
    collegeName: "Graphic Era",
  },
];

const Testimonials = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div className="relative font-angrybirds text-[64px] sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[128px] leading-[100%] mb-12 md:mb-16 text-center">
      <img
        src={Piggy}
        alt="Piggy"
        className="absolute w-[20px] h-[20px] sm:w-[15px] md:w-[20px] lg:w-[25px] top-[64%] left-[53.5%] transform -translate-x-1/2 -translate-y-1/2 rotate-[-6.39deg] xl:top-[61%] xl:left-[53%] xl:h-[30px] xl:w-[30px] lg:top-[64%] lg:left-[53%]"
      />
        TESTIMONIALS
      </div>
      <div className="pt-8 md:pt-12 flex flex-wrap gap-8 md:gap-12 justify-center">
        {data.map((testimonial, index) => (
          <TestimonialsCard
            key={index}
            content={testimonial.content}
            name={testimonial.name}
            collegeName={testimonial.collegeName}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;