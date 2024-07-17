import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="flex flex-col  bg-white 2xl:pt-[15rem]  lg:rounded-3xl rounded-md shadow-md m-4 w-full md:w-1/4  2xl:h-96 lg:h-80 lg:pt-44">
      <div className="  w-full bg-black h-[0.5px]"></div>
      <h2 className="text-base font-bold mb-2 font-sora text-black mt-5 text-left px-3">{title}</h2>
      <p className="text-gray-700 text-left px-3 mt-1 font-sora font-normal text-[13px] pb-1 lg:text-[10px] 2xl:text-[12px]">{description}</p>
    </div>
  );
};

export default Card;
