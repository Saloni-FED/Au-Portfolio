// src/App.js
import React from "react";

const BlogDetail = () => {
  return (
    <div className="bg-pink-100 min-h-screen pt-32">
      <div className="max-w-8xl mx-auto flex gap-4 max-lg:flex-col">
        <div className="lg:w-[60%] border">Hello</div>
        <div className="lg:w-[40%] border">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-lg font-semibold mb-4">Connect now!!!</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Phone no."
                className="w-full p-2 border rounded"
              />
              <textarea
                placeholder="Reason for connecting"
                className="w-full p-2 border rounded"
              ></textarea>
              <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white rounded"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
