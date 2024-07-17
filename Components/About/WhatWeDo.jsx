import React from "react";

const WhatWeDo = () => {
  return (
    <div className="container mt-24">
      <div className="2xl:w-[90%] mx-auto max-sc:px-4">
        <div className="flex lg:justify-center ">
          <div className="relative inline-block ">
            <h2 className="text-3xl sm:text-4xl font-sora font-semibold">
              What we do ?
            </h2>
            <div className="absolute w-[30%] h-[2px] bg-white mt-1 md:pl-10"></div>
          </div>
        </div>
        <div className="lg:text-center text-left mt-7 font-sora font-semibold">
          <p>
            At Aistear Unica, we specialize in providing a seamless makeup
            service at home.
          </p>
          <p>
            Leveraging a state-of-the-art digital platform, we enable customers
            to easily
          </p>
          <p>
            book professional makeup artists for any event. Our services are
            characterized by:
          </p>
        </div>
        
        <div className="text-white xl:w-[55%]  mx-auto mt-10 md:w-[80%] ">
          <ul className="list-disc ml-6 space-y-5 font-sora fold-semibold">
            <li>
              Advanced Virtual Try-Ons: Utilize cutting-edge technology to
              preview makeup looks before application.
            </li>
            <li>
              Personalized Services: Custom recommendations based on individual
              customer profiles.
            </li>
            <li>
              Professional Standards: High-quality products suited to diverse
              skin and weather conditions.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
