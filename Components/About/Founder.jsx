// components/About.js
import React from "react";

const Founder = () => {
  return (
    <div className="bg-black text-white  px-6 sm:px-12 w-full mx-auto ">
      <div className="text-left mb-12 ">
        <div className="relative inline-block md:pl-20 mt-2">
          <h2 className="text-3xl sm:text-4xl font-sora font-semibold">
            Our Founder
          </h2>
          <div className="absolute w-[30%] h-[2px] bg-white mt-1 md:pl-10"></div>
        </div>
      </div>
      <div className="flex  items-center sm:flex-row sm:pl-28 gap-20 sm:space-x-12 w-full md:-mr-10">
        <div className="mb-8 sm:mb-0  flex flex-wrap  lg:gap-4 gap-2relative">
          <img src="/images/image 1.png" alt="Founder" className="w-56 2xl:w-96 xl:w-[21rem]" />
          <div className="mt-4">
            <h2  className="text-xl sm:text-4xl font-normal text-red-500 font-sora ">Wamika </h2>
            <h2 className="text-xl sm:text-4xl font-normal text-red-500 font-sora md:pl-5">Dahiya</h2>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:justify-center  lg:pl-[28rem] lg:-mt-56 lg:-ml-56">
        <p className="lg:w-[80%] font-sora md:text-right text-left text-[20px] max-sc:mt-2 max-sc:text-[15px] lg:pl-72">
          15+ years of working experience in makeup industry & trainer.
          Expertise in bridal makeup, hairstyling & draping. I have done
          250+Bridal Makeup & 1000+Party Makeup.
        </p>
      </div>

      <div className="text-center mt-20">
        <div className="relative inline-block 2xl:pl-[59rem] xl:pl-[44rem] lg:pl-[30rem]">
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl font-bold">Our Journey</h2>
            <div className="absolute right-0 top-full 2xl:mt-3 mt-1 w-[30%] h-[2px] bg-white "></div>
          </div>
        </div>
        <div className="2xl:mt-12 mt-4 text-left font-sora md:text-left md:w-[90%] text-[20px] lg:pl-32 max-sc:mt-16 max-sc:text-[15px]">
          <p>
            Sarika's vision for Aistear Unica was born out of a desire to
            revolutionize the traditional makeup service industry. With vast
            experience serving over 20,000 clients, including 250 brides, and
            2000 Makeups, Sarika recognized the challenges many faced—from
            finding Skilled Makeup Artists to coping with inconsistent service
            quality and availability issues. Determined to offer a unique
            solution, Aistear Unica was created to address these challenges by
            combining top-tier technology with unmatched service delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founder;
