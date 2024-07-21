"use client"
import React, { useEffect, useState } from 'react';
import { fetchLatestBlogs } from '../../../firebase/firebaseFunction';
import { format } from 'date-fns';

const PopularPosts = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const getBlogs = async () => {
      const blogsData = await fetchLatestBlogs();
      setBlogs(blogsData.slice(0, 4));
    };

    getBlogs();
  }, []);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formattedTime = format(now, 'HH:mm:ss');
      setCurrentTime(formattedTime);
    };

    // Update the clock every second
    const intervalId = setInterval(updateClock, 1000);

    // Initial call to set the clock immediately
    updateClock();

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="p-4 max-w-3xl mx-auto font-sora mt-10">
      <h2 className="text-2xl font-normal mb-4">Popular posts</h2>
      <div className="w-60 h-[2px] bg-gray-400 mb-6"></div>
      <div className="space-y-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-center p-4">
            <img src={blog.image} alt={blog.title} className="w-full sm:w-32 h-32 rounded-lg object-cover border" />
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-medium">{blog.title}</h3>
              <p className="text-sm text-gray-600">
                {format(new Date(blog.createdAt.toDate()), 'd MMMM, yyyy')}
              </p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default PopularPosts;
