// WeatherCard.js
/*import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData || !weatherData.location) {
    return <div>Loading...</div>; // Or some placeholder content
  }

  const { name } = weatherData.location;
  const temperature = weatherData.current?.temp_c;
  const condition = weatherData.current.condition?.text;
  const image = weatherData.current.condition?.icon;
  const minTemp = weatherData.forecast?.forecastday[0]?.day?.mintemp_c;

  

  return (
    
    <div>
      <div className='card'>

<h2>{name}</h2>
<h3>{condition}</h3>
<h1>{temperature}°C</h1>
<img
              src={image}
              alt="weather image"
              className="card-img"
            />
</div>     
    </div>
  );
};

export default WeatherCard;
*/
// WeatherCard.js
import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ forecastData }) => {
  if (!forecastData || !forecastData.location) {
    return <div>Loading...</div>; // Or some placeholder content
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
        <h3>{condition}</h3>
        <h1>{temperature}°C</h1>
        <h3>Min Temperature: {minTemp}°C</h3>
        <h3>Max Temperature: {maxTemp}°C</h3>
        <img src={image} alt="weather image" className="card-img" />
      </div>
    </div>
  );
};

export default WeatherCard;
