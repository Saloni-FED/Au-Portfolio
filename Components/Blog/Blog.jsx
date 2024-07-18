import React from "react";
import Carousel from "./Carousel";
const Blog = () => {
  return (
    <div className="w-full bg-pink-100">
      <div className="container text-black">
        <p className="lg:pl-10 font-sora font-normal text-sm">Home / Knowledge Centre</p>
        <h1 className="font-sora font-semibold lg:pl-10 md:text-2xl text-xl">Knowledge Centre</h1>
        <Carousel/>
      </div>
    </div>
  );
};

export default Blog;
