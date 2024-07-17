import React from "react";
import About from "@/Components/About/About";
const page = () => {
  return (
    <div className=" pt-40 text-white mx-auto container ">
      <img src="/images/About(BLUR).png" className=" mx-auto w-64 sc:block hidden"/>
      <div>
        <About/>
      </div>
    </div>
  );
};

export default page;
