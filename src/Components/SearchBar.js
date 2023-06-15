import React from 'react';
import './SearchBar.css';

const SearchBar = ({ handleChange }) => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
