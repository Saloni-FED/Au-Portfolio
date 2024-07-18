import React from 'react';

const Card = ({ title, description, time }) => {
  return (
    <div className="border-2  border-bo-color rounded-2xl p-2 font-sora">
      <img 
        src="/images/img.png" 
        alt="Image" 
        className="rounded-t-lg w-64 h-44 object-cover" 
      />
      <div className="mt-2">
        <p className="text-gray-500 text-sm">{time}</p>
        <h3 className="text-lg font-semibold mt-4">{title}</h3>
        <p className="text-gray-700 pb-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
