// DetailContainer.jsx
/*import React from 'react';
import DetailCard from '../components/DetailCard';


const DetailContainer = ({ forecastData }) => {
  console.log('DetailContainer forecastData:', forecastData);

  // Check if forecastData is undefined or not an array
  if (!forecastData || !Array.isArray(forecastData)) {
    console.log('Invalid forecastData format:', forecastData);
    return <div>No forecast data available</div>;
  }

  return (
    <div>
      <h1>Weather Details</h1>
      <div className="week-forecast">
        {forecastData.slice(0, 7).map((dayData, index) => (
          <DetailCard key={index} dayData={dayData} />
        ))}
      </div>
    </div>
  );
};

export default DetailContainer;*/
// DetailContainer.js

// DetailContainer.js
import React from 'react';
import DetailCard from '../components/DetailCard';

const DetailContainer = ({ forecastData }) => {
  if (!forecastData || !Array.isArray(forecastData)) {
    return <p>eroor</p>
  }

  // Här använder vi `.slice(1)` för att exkludera dagens väder från listan.
  const upcomingDays = forecastData.slice(1);

  return (
    <div>
      <h2>Veckans väder</h2>
      <div className="week-forecast">
        {upcomingDays.map((dayData, index) => (
          <DetailCard key={index} dayData={dayData} />
        ))}
      </div>
    </div>
  );
};

export default DetailContainer;




