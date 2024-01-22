// WeatherCard.js
import React from 'react';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData || !weatherData.location) {
    return <div>Loading...</div>; // Or some placeholder content
  }

  const { name } = weatherData.location;
  const temperature = weatherData.current?.temp_c;
  const condition = weatherData.current.condition?.text;
  const image = weatherData.current.condition?.icon;
  

  return (
    <div>
      <h2>{name}</h2>
      <p>{condition}</p>
      <img
              src={image}
              alt="weather image"
              className="card-img"
            />
      <p>{temperature}°C</p>
      
      {/* Display other relevant information here */}
    </div>
  );
};

export default WeatherCard;
