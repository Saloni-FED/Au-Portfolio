import React from "react";

const Mission = () => {
  return (
    <div className="container mx-auto  mt-28">
      <div className="flex justify-center">
        <div className="relative inline-block  mt-6">
          <h2 className="text-3xl sm:text-4xl font-sora font-semibold">
            Our Founder
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
        <p>and feel their <span className="text-red-500">best</span></p>
      </div>
    </div>
  );
};

export default Mission;
