import React, { createContext, useState, useEffect } from 'react';
import { getWeatherByCity, getForecastByCity } from '../utils/api';
import * as Location from 'expo-location'; // For geolocation

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState('metric');
  const [lastSearchedCity, setLastSearchedCity] = useState(null);

  // Fetch weather data by city name
  const fetchWeather = async (city) => {
    try {
      const data = await getWeatherByCity(city);
      console.log('Fetched weather data:', data); // Debugging log
      setWeatherData(data);
      setLastSearchedCity(city);
    } catch (err) {
      console.error('Error fetching weather data:', err);
      setError('Could not fetch weather data. Please try again.');
    }
  };
  

  // Fetch forecast data by city name
  const fetchForecast = async (city) => {
    try {
      const data = await getForecastByCity(city);
      console.log('Fetched forecast data:', data); // Debugging log
      setForecastData(data);
    } catch (err) {
      console.error('Error fetching forecast data:', err);
      setError('Could not fetch forecast data. Please try again.');
    }
  };
  

  // Fetch weather by geolocation
  const fetchWeatherByLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied.');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      const response = await api.get('/weather', {
        params: { lat: latitude, lon: longitude, units: unit },
      });
      setWeatherData(response.data);
    } catch (err) {
      setError('Could not fetch location-based weather. Please try again.');
    }
  };

  // Toggle temperature units
  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  };

  // Refetch data on unit change
  useEffect(() => {
    if (lastSearchedCity) {
      fetchWeather(lastSearchedCity);
      fetchForecast(lastSearchedCity);
    }
  }, [unit]);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        forecastData,
        fetchWeather,
        fetchForecast,
        fetchWeatherByLocation,
        toggleUnit,
        unit,
        error,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
