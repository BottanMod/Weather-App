// WeatherContainer.jsx
import React, { useState, useEffect } from 'react';
import WeatherCard from '../components/WeatherCard';
import DetailContainer from './DetailContainer';
import WeatherService from '../services/WeatherServices';
import SearchBar from '../components/SearchBar';

const WeatherContainer = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch weather data for the default city (Stockholm)
    fetchWeatherData('Stockholm');
  }, []);

  const fetchWeatherData = async (city) => {
    setLoading(true);
    try {
      const [currentData, forecastData] = await Promise.all([
        WeatherService.getCurrentWeather(city),
        WeatherService.getWeatherForecast(city),
      ]);

      setWeatherData(currentData);
      setForecastData(forecastData);
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
      {forecastData && <DetailContainer forecastData={forecastData} />}
    </div>
  );
};

export default WeatherContainer;
