import React from "react";
import Card from "./Card";
import OurVision from "./OurVision";
const Mission = () => {
  const cards = [
    {
      title: "Skilled Matchmaking",
      description:
        "We connect clients with professional makeup artists suited to their specific needs.",
    },
    {
      title: "Real-Time Booking",
      description:
        "Our innovative system allows for immediate appointment scheduling.",
    },
    {
      title: "Adaptive Pricing",
      description:
        "We provide competitive pricing tailored to meet diverse customer needs.",
    },
    {
      title: "Quality Assurance",
      description:
        "With standardized products and a commitment to excellence, we ensure a consistent and premium service experience for every client.",
    },
  ];

  return (
    <div className="container mx-auto  mt-28">
      <div className="flex justify-center">
        <div className="relative inline-block  mt-6">
          <h2 className="text-3xl sm:text-4xl font-sora font-semibold">
            Our Mission
          </h2>
          <div className="absolute w-[30%] h-[2px] bg-white mt-1 md:pl-10"></div>
        </div>
      </div>
      <div className="text-center mt-5  font-song-myung text-[24px] font-normal">
        <p>
          Making <span className="text-red-500">Professional Beauty</span>
        </p>
        <p>services accessible at home</p>
        <p>
          Because <span className="text-red-500">everyone deserve</span> to look
        </p>
        <p>
          and feel their <span className="text-red-500">best</span>
        </p>
      </div>

      <div>
        <div className="conatiner 2xl:w-[85%] flex max-sc:flex-wrap  justify-center p-4 mx-auto lg:w-[95%]">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>

      <div>
       <OurVision/>
      </div>
    </div>
  );
};

export default Mission;
