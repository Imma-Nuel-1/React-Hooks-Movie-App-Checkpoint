import React, { useState } from "react";

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);

  const handleFilter = () => {
    onFilter(title, rating);
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Search by Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min Rating"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Filter;
