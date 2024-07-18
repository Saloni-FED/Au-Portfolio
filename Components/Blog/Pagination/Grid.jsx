"use client"
import React, { useState } from 'react';
import Card from './Card';
import Pagination from './Pagination';

const itemsPerPage = 6;

const Grid = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-4xl mx-auto">
        {currentItems.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} time={item.time} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};

export default Grid;
