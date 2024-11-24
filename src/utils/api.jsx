import axios from 'axios';
import { API_KEY } from '@env'; // Install react-native-dotenv for this

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: API_KEY,
    units: 'metric', // or 'imperial' for Fahrenheit
  },
});

// Fetch current weather by city name
export const getWeatherByCity = async (city) => {
  const response = await api.get('/weather', { params: { q: city } });
  return response.data;
};

// Fetch 5-day forecast by city name
export const getForecastByCity = async (city) => {
  const response = await api.get('/forecast', { params: { q: city } });
  return response.data.list; // Extracting list of forecasts
};

// Export axios instance for custom use if needed
export default api;
