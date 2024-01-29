// DetailCard.js
import React from 'react';
import './DetailCard.css';

const DetailCard = ({ dayData }) => {
  if (!dayData || !dayData.day) {
    return <div>Loading...</div>;
  }

  const { date, day } = dayData;
  const temperature = day.avgtemp_c;
  const minTemperature = day.mintemp_c;
  const maxTemperature = day.maxtemp_c;
  const condition = day.condition?.text;
  const image = day.condition?.icon;

  return (
    <div className="detail-card">
      <h2>{new Date(date).toLocaleDateString('en-US', 
      { weekday: 'long', month: 'long', day: 'numeric' })}</h2>
      <img src={image} alt="weather image" className="card-img" />
      <h3>{temperature}°C</h3>
      <p>Min: {minTemperature}°C / Max: {maxTemperature}°C</p>
         
      <p>{condition}</p>
    </div>
  );
};

export default DetailCard;
