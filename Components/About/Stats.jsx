// components/Stats.js
import React from 'react';

const stats = [
  { label: 'shows', value: '130', subtext: "live show's" },
  { label: 'clients', value: '130', subtext: "live show's" },
  { label: 'locations', value: '130', subtext: "live show's" },
];

const Stats = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around items-center py-8 bg-black text-white max-w-7xl mx-auto">
      {stats.map((stat, index) => (
        <div key={index} className="text-center mx-4 my-2">
          <div className="text-red-500 text-4xl font-bold font-stalemate md:text-[100px]">{stat.label}</div>
          <div className="text-white text-3xl mt-2">{stat.value}</div>
          <div className="text-red-500 text-xl mt-1">{stat.subtext}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
