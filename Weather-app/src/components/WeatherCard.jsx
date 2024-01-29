import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ forecastData }) => {
  if (!forecastData || !forecastData.location) {
    return <div>Loading...</div>; 
  }

  const { name } = forecastData.location;
  const temperature = forecastData.current?.temp_c;
  const condition = forecastData.current.condition?.text;
  const image = forecastData.current.condition?.icon;
  const minTemp = forecastData.forecast?.forecastday[0]?.day?.mintemp_c;
  const maxTemp = forecastData.forecast?.forecastday[0]?.day?.maxtemp_c;
  return (
    <div className='center-div'>
      <div className='weather-card'>
        <h2>{name}</h2>
        <img src={image} alt="weather image" className="card-img" />
        <h2>{temperature}°C</h2>
        <h3>Min Temperature: {minTemp}°C</h3>
        <h3>Max Temperature: {maxTemp}°C</h3>
        <h3>{condition}</h3>
        
      </div>
    </div>
  );
};

export default WeatherCard;
