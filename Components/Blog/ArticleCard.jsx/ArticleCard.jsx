"use client";
import React from "react";

const ArticleCard = () => {
  return (
    <div className="bg-custom-cat p-6 rounded-2xl max-w-4xl mx-auto my-10 border border-bo-color font-sora">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/2 flex-shrink-0">
          <img
            src="/images/img.png" // Replace with your image path
            alt="Article"
            className="rounded-lg object-cover w-full h-48 md:h-full"
          />
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
          <div className="text-sm text-gray-500">MAY 18, 2024 - 5MIN READ</div>
          <h2 className="text-2xl font-extrabold mt-6">
            How To Remove Tan: Effective Home Remedies For Glowing Skin
          </h2>
          <button className="mt-44 px-4 py-2  bg-white text-black border border-gray-300 rounded-full hover:bg-gray-200 transition duration-300 w-full">
            READ NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
