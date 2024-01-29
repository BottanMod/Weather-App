
const API_KEY = 'd3277a5406cc4519b6f120326242201';
const BASE_URL = 'http://api.weatherapi.com/v1';

const WeatherService = {
  getWeatherForecast: async (city) => {
    try {
      const response = await fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=7`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather forecast:', error);
      throw error;
    }
  },
};

export default WeatherService;

