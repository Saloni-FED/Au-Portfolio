import React from "react";
import search from "../../../public/images/search.png";
import ArticleCard from "../ArticleCard.jsx/ArticleCard";
import Grid from "../Pagination/Grid";

const Categories = () => {
  const items = [
    // Add your items here
    {
      title: "How To Remove Tan: Effective Home Remedies for Glowing Skin",
      description: "Tanning is a common skin woe that many of us face...",
      time: "2 hours ago",
    },
    {
      title: "How To Remove Tan: Effective Home Remedies for Glowing Skin",
      description: "Tanning is a common skin woe that many of us face...",
      time: "2 hours ago",
    },
    {
      title: "How To Remove Tan: Effective Home Remedies for Glowing Skin",
      description: "Tanning is a common skin woe that many of us face...",
      time: "2 hours ago",
    },
    {
      title: "How To Remove Tan: Effective Home Remedies for Glowing Skin",
      description: "Tanning is a common skin woe that many of us face...",
      time: "2 hours ago",
    },
    {
      title: "How To Remove Tan: Effective Home Remedies for Glowing Skin",
      description: "Tanning is a common skin woe that many of us face...",
      time: "2 hours ago",
    },
    {
      title: "How To Remove Tan: Effective Home Remedies for Glowing Skin",
      description: "Tanning is a common skin woe that many of us face...",
      time: "2 hours ago",
    },
    {
      title: "How To Remove Tan: Effective Home Remedies for Glowing Skin",
      description: "Tanning is a common skin woe that many of us face...",
      time: "2 hours ago",
    },
    {
      title: "How To Remove Tan: Effective Home Remedies for Glowing Skin",
      description: "Tanning is a common skin woe that many of us face...",
      time: "2 hours ago",
    },
    {
      title: "How To Remove Tan: Effective Home Remedies for Glowing Skin",
      description: "Tanning is a common skin woe that many of us face...",
      time: "2 hours ago",
    },
    {
      title: "How To Remove Tan: Effective Home Remedies for Glowing Skin",
      description: "Tanning is a common skin woe that many of us face...",
      time: "2 hours ago",
    },
    {
      title: "How To Remove Tan: Effective Home Remedies for Glowing Skin",
      description: "Tanning is a common skin woe that many of us face...",
      time: "2 hours ago",
    },
    {
      title: "How To Remove Tan: Effective Home Remedies for Glowing Skin",
      description: "Tanning is a common skin woe that many of us face...",
      time: "2 hours ago",
    },
    {
      title: "How To Remove Tan: Effective Home Remedies for Glowing Skin",
      description: "Tanning is a common skin woe that many of us face...",
      time: "2 hours ago",
    },
    {
      title: "How To Remove Tan: Effective Home Remedies for Glowing Skin",
      description: "Tanning is a common skin woe that many of us face...",
      time: "2 hours ago",
    },
    {
      title: "How To Remove Tan: Effective Home Remedies for Glowing Skin",
      description: "Tanning is a common skin woe that many of us face...",
      time: "2 hours ago",
    },
    {
      title: "How To Remove Tan: Effective Home Remedies for Glowing Skin",
      description: "Tanning is a common skin woe that many of us face...",
      time: "2 hours ago",
    },
    {
      title: "How To Remove Tan: Effective Home Remedies for Glowing Skin",
      description: "Tanning is a common skin woe that many of us face...",
      time: "2 hours ago",
    },
    {
      title: "How To Remove Tan: Effective Home Remedies for Glowing Skin",
      description: "Tanning is a common skin woe that many of us face...",
      time: "2 hours ago",
    },
    {
      title: "How To Remove Tan: Effective Home Remedies for Glowing Skin",
      description: "Tanning is a common skin woe that many of us face...",
      time: "2 hours ago",
    },
    // Add more items...
  ];
  return (
    <div className=" 2xl:px-10 mx-auto ">
      <h1 className="font-sora font-semibold md:text-2xl text-xl">
        Categories
      </h1>
      <div className="flex flex-col sm:flex-row gap-2 md:justify-between mt-5">
        <div className="flex justify-start md:justify-center  gap-2 font-sora font-[300] lg:w-[30%]">
          <div className="bg-custom-cat border border-bo-color rounded-full lg:[text-17px] text-[12px] w-fit h-fit px-7 py-2">
            MAKE UP
          </div>
          <div className="bg-custom-cat border border-bo-color rounded-full lg:[text-17px] text-[12px] w-fit h-fit px-7 py-2">
            MAKE UP
          </div>
          <div className="bg-custom-cat border border-bo-color rounded-full lg:[text-17px] text-[12px] w-fit h-fit px-7 py-2">
            MAKE UP
          </div>
        </div>
        <div className="md:w-[30%] border rounded-full w-full border-bo-color relative">
          <input
            type="text"
            className="w-full bg-custom-cat rounded-full h-full pl-10 pr-4 py-4"
            placeholder="Search a Keyword"
            style={{
              backgroundImage: `url(${search.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left 10px center",
              backgroundSize: "20px",
            }}
          />
        </div>
      </div>

      <ArticleCard />

      <div className="container mx-auto p-4">
        <Grid items={items} />
      </div>
    </div>
  );
};

export default Categories;
