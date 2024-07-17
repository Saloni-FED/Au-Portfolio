import React from "react";
import About from "@/Components/About/About";
import Stats from "@/Components/About/Stats";
const page = () => {
  return (
    <div className="pt-32 text-white mx-auto container bg-black">
      <img src="/images/About(BLUR).png" className=" mx-auto w-64 sc:block hidden"/>
      <div>
        <About/>
        <Stats/>
      </div>
    </div>
  );
};

export default page;
