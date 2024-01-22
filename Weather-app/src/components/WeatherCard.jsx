// WeatherCard.js
import React from 'react';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData || !weatherData.location) {
    return <div>Loading...</div>; // Or some placeholder content
  }

  const { name } = weatherData.location;
  const temperature = weatherData.current?.temp_c;

  return (
    <div>
      <h2>{name}</h2>
      <p>{temperature}°C</p>
      {/* Display other relevant information here */}
    </div>
  );
};

export default WeatherCard;
