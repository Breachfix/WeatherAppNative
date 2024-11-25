import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { WeatherContext } from '../context/WeatherContext';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Forecast = () => {
  const { forecastData, currentWeather, unit } = useContext(WeatherContext);

  // Function to get the name of the day (e.g., Monday, Tuesday)
  const getDayName = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  };

  // Process the daily forecast data to show only 7 days
  const dailyForecast = forecastData
    .filter((item) => item.dt_txt.includes('12:00:00')) // Filter forecasts for midday
    .slice(0, 7); // Limit to 7 days

  const renderForecastItem = ({ item }) => (
    <View style={styles.forecastBox}>
      {/* Day Name */}
      <Text style={styles.day}>
        <Icon name="calendar-alt" style={styles.icon} /> {getDayName(item.dt_txt)}
      </Text>
      {/* Weather Icon */}
      <Image
        source={{
          uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
        }}
        style={styles.weatherIcon}
      />
      {/* Temperature */}
      <Text style={styles.temperature}>
        <Icon name="thermometer-half" style={styles.icon} /> {item.main.temp.toFixed(1)}°{unit === 'metric' ? 'C' : 'F'}
      </Text>
      {/* Humidity */}
      <Text style={styles.details}>
        <Icon name="tint" style={styles.icon} /> Humidity: {item.main.humidity}%
      </Text>
      {/* Rain Volume */}
      <Text style={styles.details}>
        <Icon name="cloud-rain" style={styles.icon} /> Rain: {item.rain?.['3h'] || 0} mm
      </Text>
      {/* Sunrise and Sunset */}
      <Text style={styles.details}>
        <Icon name="sun" style={styles.icon} /> Sunrise: {new Date(currentWeather.sys.sunrise * 1000).toLocaleTimeString()}
      </Text>
      <Text style={styles.details}>
        <Icon name="moon" style={styles.icon} /> Sunset: {new Date(currentWeather.sys.sunset * 1000).toLocaleTimeString()}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>7-Day Forecast</Text>
      <FlatList
        data={dailyForecast}
        renderItem={renderForecastItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true} // Show items horizontally
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.forecastContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  forecastContainer: {
    paddingHorizontal: 10,
  },
  forecastBox: {
    width: 150,
    padding: 15,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    alignItems: 'center',
  },
  day: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  weatherIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  temperature: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 5,
  },
  details: {
    fontSize: 12,
    color: '#555',
    marginBottom: 3,
    textAlign: 'center',
  },
  icon: {
    marginRight: 5,
    fontSize: 14,
    color: '#555',
  },
});

export default Forecast;
