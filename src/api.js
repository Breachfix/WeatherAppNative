import axios from 'axios';

const API_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = 'your_openweather_api_key'; // Add to .env in production

export const fetchWeather = async (location) => {
  const { data } = await axios.get(`${API_URL}/weather`, {
    params: {
      q: location,
      appid: API_KEY,
    },
  });
  return data;
};