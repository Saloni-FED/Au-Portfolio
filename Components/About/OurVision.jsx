import React from "react";

const OurVision = () => {
  return (
    <div className="text-white container  mt-32 2xl:pl-56 lg:pl-32 box-border">
      <div className="lg:w-[80%] mx-auto px-2 flex items-center justify-center">
        <div className="flex  gap-7 items-center max-sc:flex max-sc:flex-col">
          <div>
            <img src="/images/vision.png" alt="Vision" className="" />
          </div>
          <div className="mt-6 lg:ml-6 w-[90%]">
            <div className="relative inline-block ">
              <h2 className="text-3xl sm:text-4xl font-sora font-semibold">
                Our Vision
              </h2>
              <div className="absolute w-[30%] h-[2px] bg-white mt-1 md:pl-10"></div>
            </div>
            <div className="mt-5  2xl:w-[65%] lg:w-[80%]">
              <p>
                To become the leader in home-based and venue makeup services
                across India, transforming how beauty services are delivered. We
                aim to expand our reach while maintaining the integrity and
                quality that Aistear Unica is known for.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
