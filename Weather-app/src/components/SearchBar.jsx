// SearchBar.jsx
import React, { useState } from 'react';
import './SearchBar.css'; // Import the CSS file

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    const searchQuery = city.trim() || 'Stockholm'; // Use 'Stockholm' if input is empty or only contains spaces
    onSearch(searchQuery);
  };
  return (
    <div className="search-bar-container">
      <h3>Weather Application</h3>
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
