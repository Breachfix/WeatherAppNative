import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import * as Location from 'expo-location';
import { API_KEY } from '@env';

// Define the structure of the Theme
export interface Theme {
  colors: [string, string, ...string[]]; // Require at least two colors
  textColor: string;
}

// Define the structure of the WeatherContext
export interface WeatherContextProps {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  weatherData: WeatherData | null;
  forecastData: ForecastData[];
  fetchWeather: (city: string) => Promise<void>;
  fetchForecast: (city: string) => Promise<void>;
  toggleUnit: () => void;
  unit: 'metric' | 'imperial';
  error: string | null;
  currentWeather: WeatherData | null;
}

// Define types for weather and forecast data
export interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
  weather: Array<{ description: string; icon: string }>;
}

export interface ForecastData {
  dt_txt: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: Array<{ description: string; icon: string }>;
}

// Default theme
const defaultTheme: Theme = {
  colors: ['#ffffff', '#ffffff'], // At least two colors
  textColor: '#000',
};

// Create the context
export const WeatherContext = createContext<WeatherContextProps | undefined>(undefined);

interface WeatherProviderProps {
  children: ReactNode;
}

// Helper function to check if two objects are different
const isDataDifferent = (prev: any, next: any): boolean => JSON.stringify(prev) !== JSON.stringify(next);

// Provider Component
export const WeatherProvider: React.FC<WeatherProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [lastSearchedCity, setLastSearchedCity] = useState<string | null>(null);

  const apiKey = API_KEY;

  // Fetch weather by city name
  const fetchWeather = async (city: string) => {
    setError(null);
    setLastSearchedCity(city);
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: { q: city, appid: apiKey, units: unit },
      });
      if (isDataDifferent(weatherData, response.data)) {
        setWeatherData(response.data);
      }
    } catch (err) {
      setError('Could not fetch weather data. Please try again.');
    }
  };

  // Fetch forecast by city name
  const fetchForecast = async (city: string) => {
    setError(null);
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
        params: { q: city, appid: apiKey, units: unit },
      });
      if (isDataDifferent(forecastData, response.data.list)) {
        setForecastData(response.data.list);
      }
    } catch (err) {
      setError('Could not fetch forecast data. Please try again.');
    }
  };

  // Toggle temperature unit
  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  };

  // Fetch weather and forecast when the unit changes
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
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
          params: { lat: latitude, lon: longitude, appid: apiKey, units: unit },
        });
        if (isDataDifferent(weatherData, response.data)) {
          setWeatherData(response.data);
        }
      } catch (err) {
        setError('Could not fetch location-based weather. Please try again.');
      }
    };

    if (!lastSearchedCity) {
      getLocationWeather().catch(() => setError('Could not fetch initial weather data.'));
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
        currentWeather: weatherData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};