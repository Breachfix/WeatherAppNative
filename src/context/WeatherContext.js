
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import * as Location from 'expo-location';
import { API_KEY } from '@env';

export const WeatherContext = createContext();

const defaultTheme = {
  colors: ['#ffffff', '#ffffff'], // Default gradient
  textColor: '#000',
};

export const WeatherProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState('metric');
  const [lastSearchedCity, setLastSearchedCity] = useState(null);

  const apiKey = API_KEY;

  // Fetch weather data by city
  const fetchWeather = async (city) => {
    setError(null);
    setLastSearchedCity(city);
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          q: city,
          appid: apiKey,
          units: unit,
        },
      });
      setWeatherData(response.data);
    } catch (err) {
      setError('Could not fetch weather data. Please try again.');
    }
  };

  // Fetch forecast data by city
  const fetchForecast = async (city) => {
    setError(null);
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
        params: {
          q: city,
          appid: apiKey,
          units: unit,
        },
      });
      setForecastData(response.data.list);
    } catch (err) {
      setError('Could not fetch forecast data. Please try again.');
    }
  };

  // Fetch weather based on location
  const fetchWeatherByLocation = async (lat, lon) => {
    setError(null);
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          lat,
          lon,
          appid: apiKey,
          units: unit,
        },
      });
      setWeatherData(response.data);
    } catch (err) {
      setError('Could not fetch location-based weather. Please try again.');
    }
  };

  // Toggle temperature unit
  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  };

  // Refetch weather and forecast data on unit change
  useEffect(() => {
    if (lastSearchedCity) {
      fetchWeather(lastSearchedCity);
      fetchForecast(lastSearchedCity);
    }
  }, [unit]);

  // Fetch location-based weather on initial load
  useEffect(() => {
    const getLocationWeather = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied.');
        return;
      }
      try {
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        fetchWeatherByLocation(latitude, longitude);
      } catch (err) {
        setError('Could not fetch location-based weather. Please try again.');
      }
    };

    if (!lastSearchedCity) {
      getLocationWeather();
    }
  }, [lastSearchedCity]);

  return (
    <WeatherContext.Provider
      value={{
        theme,
        setTheme,
        weatherData,
        forecastData,
        fetchWeather,
        fetchForecast,
        toggleUnit,
        unit,
        error,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
