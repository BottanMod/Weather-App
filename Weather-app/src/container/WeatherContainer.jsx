
import React, { useState, useEffect } from 'react';
import WeatherCard from '../components/WeatherCard';
import WeatherService from '../services/WeatherServices';
import SearchBar from '../components/SearchBar';
import DetailContainer from './DetailContainer'; 

const WeatherContainer = () => {
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeatherData('Stockholm');
  }, []);

  const fetchWeatherData = async (city) => {
    setLoading(true);
    try {
      const data = await WeatherService.getWeatherForecast(city);
      setForecastData(data);
    } catch (error) {
      setError('Error fetching weather forecast data');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (city) => {
    fetchWeatherData(city);
  };

  return (
    <div className="weather-container">
      <SearchBar onSearch={handleSearch} />
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {forecastData && (
        <div>
          <WeatherCard forecastData={forecastData} />
          <DetailContainer forecastData={forecastData.forecast?.forecastday} />
        </div>
      )}
    </div>
  );
};

export default WeatherContainer;


