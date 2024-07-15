import React, { useState } from "react";
import "./FilterBar.css"; // Make sure to import the CSS file

const FilterBar = ({ initialFilter = "feed", onFilterChange }) => {
  const [filter, setFilter] = useState(initialFilter);
  const filters = [
    { value: "feed", text: "Feed" },
    { value: "trending", text: "Trending" },
    { value: "thematic", text: "Thematic" },
    { value: "mostLiked", text: "Most Liked" },
    { value: "mostViewed", text: "Most Viewed" },
  ];
  return (
    <div className="filter-bar">
      {filters?.map(({ value, text }) => (
        <button
          className={filter == value ? "active" : ""}
          onClick={() => {
            setFilter(value);
            onFilterChange(value);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
