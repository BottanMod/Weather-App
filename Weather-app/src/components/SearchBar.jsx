// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the onSearch prop with the entered city
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter City:
        <input type="text" value={city} onChange={handleInputChange} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
