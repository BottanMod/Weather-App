// DetailContainer.jsx
import React from 'react';
import DetailCard from '../components/DetailCard';

// DetailContainer.jsx
const DetailContainer = ({ forecastData }) => {
    console.log('DetailContainer forecastData:', forecastData);
  
    return (
      <div>
        <h1>Weather Details</h1>
        <DetailCard forecastData={forecastData} />
        {/* You can include additional components or content related to details */}
      </div>
    );
  };
  

export default DetailContainer;
