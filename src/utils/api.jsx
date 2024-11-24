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
  try {
    const response = await api.get('/weather', { params: { q: city } });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather by city:', error.response || error.message);
    throw new Error('Failed to fetch weather data. Please check your API key or city name.');
  }
};

export const getForecastByCity = async (city) => {
  try {
    const response = await api.get('/forecast', { params: { q: city } });
    return response.data.list;
  } catch (error) {
    console.error('Error fetching forecast by city:', error.response || error.message);
    throw new Error('Failed to fetch forecast data. Please try again.');
  }
};


// Export axios instance for custom use if needed
export default api;
