// DetailCard.js
import React from 'react';

const DetailCard = ({ detailData }) => {
  // Render detailed information based on the provided data
  return (
    <div>
      <h2>Details</h2>
      <p>Wind Speed: {detailData.windSpeed} m/s</p>
      <p>Humidity: {detailData.humidity}%</p>
      {/* Add more detailed information */}
    </div>
  );
};

export default DetailCard;
