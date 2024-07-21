// src/App.js
"use client";
import React, { useState, useEffect, useRef } from "react";
import PopularPosts from "./PopularPost/PopularPost";
import { useParams } from "next/navigation";
import { fetchLatestBlogs } from "@/firebase/firebaseFunction";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const contentRef = useRef(null);

  const getBlogDetails = async () => {
    try {
      const blogsData = await fetchLatestBlogs();
      const foundBlog = blogsData.find((b) => b.slug === slug);
      setBlog(foundBlog);
    } catch (err) {
      setError("Failed to load blog details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogDetails();
  }, [slug]);

  useEffect(() => {
    if (contentRef.current && blog) {
      const styleElements = `
        <style>
        p{
        font-weight: 300
        }
          h1, h2, h3, h4, h5, h6 {
            font-weight: bold;
            margin-top: 10px;
          }
          h3 {
            margin-top: 10px;
            margin-bottom: 10px;
          }
            h2{
            font-size:24px
            }
          ul, ol {
            margin-left: 1.5rem;
            margin-top: 10px;
            padding-left: 1.5rem; /* Ensure padding for list items */
          }
          li {
            margin-bottom: 0.5rem;
            list-style-type: disc; /* Black dots for unordered lists */
            color: black; /* Color of list bullets */
          }
          ol {
            list-style-type: decimal; /* Numbering for ordered lists */
          }
        </style>
      `;
      contentRef.current.innerHTML = styleElements + blog.editorDescription;
    }
  }, [blog]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="bg-pink-100 min-h-screen pt-32">
      <div className="max-w-8xl mx-auto flex gap-4 max-lg:flex-col">
        <div className="lg:w-[60%] ">
          {blog ? (
            <div className="lg:px-10 pl-2">
              <h1 className="font-sora font-bold text-4xl">{blog.title}</h1>
              <div className="mt-10">
                <img
                  src={blog.image}
                  className="w-[80%] border rounded-2xl"
                  alt={blog.title}
                />
              </div>
              <div className="mt-10 font-sora" ref={contentRef} />
            </div>
          ) : (
            <p>Blog not found</p>
          )}
        </div>
        <div className="lg:w-[40%] lg:p-9">
          {/* Form and PopularPosts components here */}
          <div className="flex flex-col justify-center items-center pb-4 bg-white md:px-2 rounded-2xl border-2 border-bo-color px-2 w-full max-w-sm">
            <h1 className="text-xl font-sora text-center my-4 ">
              Connect now!!!
            </h1>
            <div className="w-full max-w-[20rem] px-4 py-6 space-y-3 bg-white rounded-2xl border-2 border-slate-300">
              <form className="space-y-3">
                {/* Form Fields */}
                <div>
                  <input
                    placeholder="Name"
                    type="text"
                    className="mt-1 block w-full px-2 py-1.5 bg-white border-b-2 border-gray-300 focus:outline-none focus:ring-0"
                  />
                </div>
                <div>
                  <input
                    placeholder="Email"
                    type="email"
                    className="mt-4 block w-full px-2 py-1.5 bg-white border-b-2 border-gray-300 focus:outline-none focus:ring-0"
                  />
                </div>
                <div>
                  <input
                    placeholder="Phone No."
                    type="tel"
                    className="mt-4 block w-full px-2 py-1.5 bg-white border-b-2 border-gray-300 focus:outline-none focus:ring-0"
                  />
                </div>
                <div>
                  <select
                    className="block w-full bg-white border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500 mt-5 text-gray-400 pb-1.5"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      Select a reason
                    </option>
                    <option>Reason 1</option>
                    <option>Reason 2</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Add a note"
                    className="mt-4 block w-full px-2 py-1.5 bg-white border-b-2 border-gray-300 focus:outline-none focus:ring-0"
                  ></textarea>
                </div>
              </form>
            </div>
            <button className="mt-4 font-sora bg-[#51D5FF80] px-12 py-1.5 rounded-full shadow-custom-sub">
              SUBMIT
            </button>
          </div>

          <PopularPosts />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
