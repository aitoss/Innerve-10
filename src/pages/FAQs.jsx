import React, { useState, useEffect } from "react";
import Pink_Board from "../assets/Faq_board.png";

const FAQs = () => {
  const [selectedCategory, setSelectedCategory] = useState("GENERAL");
  const [openQuestion, setOpenQuestion] = useState(null);

  const categories = ["GENERAL", "REGISTRATION", "STAY & TRAVEL", "EXPENSES"];
  const faqsData = {
    GENERAL: [
      {
        question: "What are the highlights of Innerve 10?",
        answer:
          "A 24-hour hackathon with challenging problems, exciting swags and goodies for participants. We also conduct seminars and interactions with industry experts.",
      },
      {
        question: "What are the different phases of the hackathon?",
        answer:
          "Phase 1, the Idea Submission Round, will be conducted online, while Phase 2, the Building Round, will take place offline at the AIT Campus.",
      },
      {
        question: "Who is eligible to participate?",
        answer:
          "Innerve 10 welcomes participants passionate about coding with keen interest in problem-solving.",
      },
      {
        question: "What kind of prizes can participants expect?",
        answer:
          "Prizes include cash rewards, goodies, certificates, and special surprises for the winners.",
      },
    ],
    REGISTRATION: [
      {
        question: "How do I apply for Innerve 10",
        answer:
          "Our registration forms are out. Kindly refer to the filling instructions available on the website.",
      },
      {
        question: "Is there a registration fee for Innerve?",
        answer: "There is no registration fee. It's open for all.",
      },
      {
        question: "Is there a minimum or maximum size for the team?",
        answer: "Yes, 2-4 participants are allowed per team.",
      },
      {
        question: "What are the dates of Phase 1 & 2?",
        answer:
          "Idea Pitching: 15th Dec - 15th Jan & 24hrs Hackathon: 8th Feb - 10th Feb",
      },
    ],
    "STAY & TRAVEL": [
      {
        question: "Where can participants find accommodation during Innerve 10?",
        answer: "Lodging is available at the AIT Campus itself.",
      },
      {
        question: "How do I book accommodation?",
        answer:
          "We will be providing accomodation for participants on our own, there will be no hassle from your side. All finalists will be provided with lodging.",
      },
      {
        question: "How to reach the venue?",
        answer:
          "Please contact the OSS Club, our team will be available to assist you with the location and travel details.",
      },
      {
        question: "What to bring during in-person reporting at the venue?",
        answer:
          "Carry your documents and devices. Stay on the lookout for further updates.",
      },
    ],
    EXPENSES: [
      {
        question: "What expenses does Innerve 10 cover for participants?",
        answer:
          "Innerve 10 covers the registration fees for all participants, ensuring a seamless experience for attendees.",
      },
      {
        question: "Are travel-related expenses reimbursable for participants?",
        answer:
          "The OSS Club will not cover  travel expenses for participants.",
      },
      {
        question: "Is there any additional cost for mess and lodgings?",
        answer: "There will be no additional expenses.",
      },
    ],
  };

  useEffect(() => {
    setOpenQuestion(null);
  }, [selectedCategory]);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="w-screen h-[61rem] md:h-[60rem] lg:h-[50rem] text-white">
      <div className="text-center py-6">
        <h1
          className="text-[8rem] bg-center md:text-5xl lg:text-8xl font-bold font-angrybirds 
          animate-fade-in transition-all duration-300"
        >
          FAQs
        </h1>
        <p className="text-gray-400 mt-2 text-[1rem] md:text-[2rem] font-angrybirds">
          Quick answers to questions you may have
        </p>
      </div>

      <div className="flex flex-col md:flex-row h-full ">
        <div className="w-full md:w-1/5 flex flex-col items-center  mt-[3rem]  gap-4 p-4 md:ml-[4rem] md:mr-[4rem]">
          {categories.map((category) => (
            // test
            <button
              key={category}
              className={`font-angrybirds text-1rem md:text-[2rem] w-[15rem] h-[3rem] md:w-[20rem] mb-[1rem]  md:h-[4.31rem] py-2 px-3 rounded-lg text-center font-semibold 
              transition-all duration-300 transform hover:scale-105 text-white
              ${
                selectedCategory === category
                  ? "shadow-lg"
                  : "hover:bg-transparent"
              }`}
              style={{
                backgroundImage: `url(${Pink_Board})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="w-full md:w-3/5 mx-auto p-4">
          {/* <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center font-angrybirds">
            {selectedCategory} FAQs
          </h2> */}
          <div className="space-y-4">
            {faqsData[selectedCategory].map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-600 pb-4 transition-all duration-300 hover:border-pink-500"
              >
                <div
                  className="flex justify-between items-center cursor-pointer 
                    transition-all duration-300 hover:text-pink-500"
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="md:text-[32px] md:mb-[1.5rem] md:mt-[1.5rem] text-left text-[1rem] font-semibold font-tthoves">
                    {faq.question}
                  </span>
                  <span
                    className={`text-2xl transform transition-transform duration-600 
                    ${openQuestion === index ? "rotate-180" : "rotate-0"}`}
                  >
                    {openQuestion === index ? "−" : "+"}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-600 transform
                    ${
                      openQuestion === index
                        ? "max-h-96 opacity-100 translate-y-0"
                        : "max-h-0 opacity-0 -translate-y-2"
                    }`}
                >
                  <div className="mt-2 text-left md:text-[1.5rem] text-gray-300 transition-opacity duration-300">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
