// DetailCard.jsx
import React from 'react';




const DetailCard = ({ forecastData }) => {
    console.log('DetailCard forecastData:', forecastData);

  // Check if forecastData is undefined or null
  if (!forecastData) {
    return <div>No detailsssasdsss available</div>; // Or some placeholder content
  }

  // Extract information from the first day's forecast (you may adjust this based on your requirements)
  const firstDayForecast = forecastData[0];
  if (!firstDayForecast) {
    return <div>No details available</div>; // Or some placeholder content
  }

  // Destructure properties from the first day's forecast
  const { date, day } = firstDayForecast;

  // Extract additional details
  const { mintemp_c, maxtemp_c, avgtemp_c, maxwind_kph } = day;

  // Render detailed information based on the provided data
  return (
    <div>
      <h2>Details for {date}</h2>
      <p>Min Temperature: {mintemp_c} °C</p>
      <p>Max Temperature: {maxtemp_c} °C</p>
      <p>Average Temperature: {avgtemp_c} °C</p>
      <p>Max Wind Speed: {maxwind_kph} km/h</p>
      {/* Add more detailed information */}
    </div>
  );
};

export default DetailCard;
