import React from "react";
import About from "@/Components/About/About";
import Stats from "@/Components/About/Stats";
import Founder from "@/Components/About/Founder";
import Mission from "@/Components/About/Mission";
import WhatWeDo from "@/Components/About/WhatWeDo";
import OurCommitment from "@/Components/About/OurCommitment";
import WhyChooseUs from "@/Components/About/WhyChooseUs";
import ContactForm from "@/Components/About/ContactForm";
// import FounderProfile from "@/Components/About/FounderProfile";
const page = () => {
  return (
    <div className="md:pt-32 py-28 text-white mx-auto container bg-black">
      <img src="/images/About(BLUR).png" className=" mx-auto w-64 sc:block hidden"/>
      <div>
        <About/>
        <Stats/>
        <Founder/>
        <Mission/>
        <WhatWeDo/>
        <OurCommitment/>
        <WhyChooseUs/>
        <ContactForm/>
      </div>
    </div>
  );
};

export default page;
