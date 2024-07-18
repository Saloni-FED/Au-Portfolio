"use client";
import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import Categories from "./Categories/Categories";
import { fetchLatestBlogs } from "../../firebase/firebaseFunction.js";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLatestBlogs();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full bg-pink-100">
      <div className="container text-black mx-auto">
        <p className="lg:pl-10 font-sora font-normal text-sm">
          Home / Knowledge Centre
        </p>
        <h1 className="font-sora font-semibold lg:pl-10 md:text-2xl text-xl">
          Knowledge Centre
        </h1>
        <Carousel />
        <Categories />
      
      </div>
    </div>
  );
};

export default Blog;
