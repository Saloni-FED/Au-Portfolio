// components/Stats.js
import React from 'react';

const stats = [
  { label: 'shows', value: '130', subtext: "live show's" },
  { label: 'clients', value: '130', subtext: "live show's" },
  { label: 'locations', value: '130', subtext: "live show's" },
];

const Stats = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-evenly items-center py-5 bg-black text-white max-w-7xl mx-auto">
      {stats.map((stat, index) => (
        <div key={index} className="text-center mx-4 my-2">
          <div className="text-red-500 text-4xl font-thin font-stalemate md:text-[75px]">{stat.label}</div>
          <div className="text-white md:text-3xl text-xl md:-mt-5 -mt-6 font-sora">{stat.value}</div>
          <div className="text-white font-sora text-xl mt-1">{stat.subtext}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
