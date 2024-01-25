// DetailCard.js
import React from 'react';
import './DetailCard.css';

const DetailCard = ({ dayData }) => {
  if (!dayData || !dayData.day) {
    return <div>Loading...</div>;
  }

  const { date, day } = dayData;
  const minTemperature = day.mintemp_c;
  const maxTemperature = day.maxtemp_c;
  const condition = day.condition?.text;
  const image = day.condition?.icon;

  return (
    <div className="detail-card">
      <h2>{new Date(date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</h2>
      <h3>{condition}</h3>
      <p>Min Temperature: {minTemperature}°C</p>
      <p>Max Temperature: {maxTemperature}°C</p>
      <img src={image} alt="weather image" className="card-img" />
    </div>
  );
};

export default DetailCard;
