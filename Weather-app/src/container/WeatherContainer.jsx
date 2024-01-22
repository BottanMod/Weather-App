// WeatherContainer.js
import React, { useState, useEffect } from 'react';
import WeatherCard from '../components/WeatherCard';
import DetailCard from '../components/DetailCard';
import WeatherService from '../services/WeatherService';
import SearchBar from '../components/SearchBar';

const WeatherContainer = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch weather data for the default city (Stockholm)
    fetchWeatherData('Stockholm');
  }, []);

  const fetchWeatherData = async (city) => {
    setLoading(true);
    try {
      const data = await WeatherService.getCurrentWeather(city);
      setWeatherData(data);
    } catch (error) {
      setError('Error fetching weather data');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (city) => {
    // Trigger a new API call with the entered city
    fetchWeatherData(city);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {weatherData && <WeatherCard weatherData={weatherData} />}
      {weatherData && <DetailCard detailData={weatherData.additionalDetails} />}
    </div>
  );
};

export default WeatherContainer;
