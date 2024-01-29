import React from 'react';
import DetailCard from '../components/DetailCard';
import './DetailContainer.css';

const DetailContainer = ({ forecastData }) => {
  if (!forecastData || !Array.isArray(forecastData)) {
    return <p></p>
  }


  const upcomingDays = forecastData.slice(1);

  return (
    <div className='detail-container'>
    <h2>Forecast</h2>
    <div className="week-forecast-container">
      
      {upcomingDays.map((dayData, index) => (
        <DetailCard key={index} dayData={dayData} />
      ))}
    </div>
  </div>
  );
};

export default DetailContainer;




