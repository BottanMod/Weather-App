// SearchBar.jsx
import React, { useState } from 'react';
import './SearchBar.css'; // Import the CSS file

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    onSearch(city);
    // Additional logic if needed
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="search-bar-input"
        placeholder="Enter city name"
      />
      <button onClick={handleSearch} className="search-bar-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
