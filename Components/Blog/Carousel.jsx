"use client";
import React, { useState, useEffect } from "react";
import { fetchLatestBlogs } from "../../firebase/firebaseFunction.js";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLatestBlogs();
        setSlides(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full flex justify-center items-center bg-pink-100 my-10 overflow-x-hidden">
      <div className="w-full max-w-4xl">
        <div className="py-3">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="w-full flex-shrink-0 flex justify-center items-center transition-shadow duration-500"
              >
                <div
                  className={`bg-white rounded-3xl flex flex-col items-center shadow-custom relative ${
                    index === currentIndex ? "h-[400px] " : "h-[350px]"
                  }`}
                  style={{ width: "85%", margin: "0 10px" }}
                >
                  <img
                    src={slide.image || "/images/default.png"} // Use a default image if none provided
                    alt={slide.title}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                  <div className="absolute bottom-2 md:px-7 w-full">
                    <div className="mt-4 w-full bg-white md:pl-10 font-sora relative rounded-lg px-3" style={{borderTopLeftRadius:"10px"}}>
                      <div className="absolute bg-white pt-2 w-40 -top-8 h-10  -left-[0.22px] pl-9 hidden md:block" style={{borderTopLeftRadius:"15px", borderTopRightRadius:"15px"}}>
                        <span className="bg-black text-white text-xs uppercase px-6 py-1 rounded-full -mt-10" >
                          Latest
                        </span>
                      </div>

                      <h2 className="text-lg font-semibold pt-3">
                        {slide.title}
                      </h2>
                      <p className="text-gray-600">{slide.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-10 pr-10">
          <button
            onClick={prevSlide}
            className="transform -translate-y-1/2 rounded-full px-3 py-2 shadow border border-black"
          >
            &larr;
          </button>
          <button
            onClick={nextSlide}
            className="transform -translate-y-1/2 border rounded-full px-3 py-2 shadow bg-black text-white"
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
