import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-black text-white py-10 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-2/3">
          <h1 className="md:text-[70px] font-bold mb-4 font-sora max-sc:text-2xl">About us</h1>
          <p className="text-xl italic text-red-600 mb-8 font-stalemate lg:text-[74px]">Elevating <span className="font-normal text-white">beauty</span>, one visit at a time.</p>
          <p className="mb-6 font-sora font-semibold">Welcome to Aistear Unica—your premier destination for exceptional Makeup Services delivered right to your doorstep. Founded in 2023 by Ms. Sarika, a seasoned entrepreneur with over 15 years in the Beauty and Makeup industry, Aistear Unica is more than just a service; it's a movement towards empowering clients with confidence and elegance, regardless of the occasion.</p>
          <p className="mb-6 font-sora font-semibold">"Aistear Unica" merges the essence of two languages—Irish and Latin—to craft a name that resonates with uniqueness and exploration. 'Aistear' means 'journey' or 'adventure' in Irish, while 'Unica' translates to 'unique' or 'only one' in Latin. This fusion symbolizes a 'Unique Journey' or a 'One-of-a-kind Adventure,' embodying our mission to deliver a distinct and tailored experience. At Aistear Unica, we see every customer's journey as uniquely their own. Our commitment to innovation and personalization is woven into our name, ensuring that our solutions not only meet your individual needs but celebrate them. Embark on your personalized adventure with Aistear Unica, where innovation meets individuality.</p>
        </div>
        <div className="lg:w-[25%] mt-10 lg:mt-0 lg:ml-10">
          <img src="/images/img.png" alt="Makeup Service" className="rounded-lg shadow-lg w-full"/>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
