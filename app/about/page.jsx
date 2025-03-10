import React from "react";
import About from "@/Components/About/About";
import Stats from "@/Components/About/Stats";
import Founder from "@/Components/About/Founder";
import Mission from "@/Components/About/Mission";
import WhatWeDo from "@/Components/About/WhatWeDo";
import OurCommitment from "@/Components/About/OurCommitment";
import WhyChooseUs from "@/Components/About/WhyChooseUs";
import ContactForm from "@/Components/About/ContactForm";
// import { metadata } from "../layout";
// import FounderProfile from "@/Components/About/FounderProfile";
export const metadata = {
  title:
    "About Aistear Unica - Empowering Artists & Connecting You with Creativity",
  description:
    " Learn about Aistear Unica's mission to empower artists & connect you with exceptional makeup artists & artistic brilliance in India. Discover our story & values.",

  keywords:
    "makeup artist India, bridal makeup artist India, aistear unica, makeup for weddings, hire makeup artists",
};
const page = () => {
  return (
    <div className="md:pt-30 py-28 text-white mx-auto container bg-black">
      <img
        src="/images/About(BLUR).png"
        className=" mx-auto w-64 sc:block hidden"
      />
      <div>
        <About />
        <Stats />
        <Founder />
        <Mission />
        <WhatWeDo />
        <OurCommitment />
        <WhyChooseUs />
        <ContactForm />
      </div>
    </div>
  );
};

export default page;
