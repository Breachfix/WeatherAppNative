import React, { useContext, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
} from 'react-native';
import { WeatherContext } from '../context/WeatherContext';
import SearchBar from '../components/SearchBar';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Home = () => {
  const { weatherData, forecastData, fetchForecast, toggleUnit, unit, error } =
    useContext(WeatherContext);

  useEffect(() => {
    if (weatherData) fetchForecast(weatherData.name);
  }, [weatherData, unit]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <SearchBar />
        <Button
          title={`Switch to ${unit === 'metric' ? 'Fahrenheit' : 'Celsius'}`}
          onPress={toggleUnit}
          color="#007AFF"
        />
        {error && <Text style={styles.error}>{error}</Text>}
        {weatherData && (
          <View style={styles.weatherBox}>
            <Text style={styles.title}>Current Weather in {weatherData.name}</Text>
            <View style={styles.weatherDetail}>
              <Icon name="sun" style={styles.icon} />
              <Text>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</Text>
            </View>
            <View style={styles.weatherDetail}>
              <Icon name="temperature-high" style={styles.icon} />
              <Text>
                Temperature: {weatherData.main.temp}°{unit === 'metric' ? 'C' : 'F'}
              </Text>
            </View>
            <View style={styles.weatherDetail}>
              <Icon name="tint" style={styles.icon} />
              <Text>Humidity: {weatherData.main.humidity}%</Text>
            </View>
            <View style={styles.weatherDetail}>
              <Icon name="wind" style={styles.icon} />
              <Text>Wind Speed: {weatherData.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}</Text>
            </View>
            <View style={styles.weatherDetail}>
              <Icon name="moon" style={styles.icon} />
              <Text>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</Text>
            </View>
          </View>
        )}
        {forecastData && (
          <View>
            <Text style={styles.title}>Forecast</Text>
            {forecastData.map((forecast, index) => (
              <View key={index} style={styles.forecastItem}>
                <Text>
                  Date: {new Date(forecast.dt_txt).toLocaleDateString()}{" "}
                  {new Date(forecast.dt_txt).toLocaleTimeString()}
                </Text>
                <Text>
                  Temp: {forecast.main.temp}°{unit === 'metric' ? 'C' : 'F'}
                </Text>
                <Text>Humidity: {forecast.main.humidity}%</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  weatherBox: {
    marginVertical: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  weatherDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  forecastItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  icon: {
    fontSize: 18,
    marginRight: 10,
    color: '#007AFF',
  },
  error: {
    color: '#ff3b30',
    marginVertical: 10,
    fontSize: 16,
  },
});

export default Home;
