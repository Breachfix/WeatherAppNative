import React, { useContext, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
  FlatList,
  Image,
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

  // Function to get the name of the day
  const getDayName = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  };

  // Render a forecast item
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
        <Icon name="thermometer-half" style={styles.icon} /> {item.main.temp}°{unit === 'metric' ? 'C' : 'F'}
      </Text>
      {/* Humidity */}
      <Text style={styles.details}>
        <Icon name="tint" style={styles.icon} /> Humidity: {item.main.humidity}%
      </Text>
      {/* Rain Volume */}
      <Text style={styles.details}>
        <Icon name="cloud-rain" style={styles.icon} /> Rain: {item.rain?.['3h'] || 0} mm
      </Text>
    </View>
  );

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
              <Text>
                Wind Speed: {weatherData.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}
              </Text>
            </View>
            <View style={styles.weatherDetail}>
              <Icon name="moon" style={styles.icon} />
              <Text>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</Text>
            </View>
          </View>
        )}
        {forecastData && (
          <View>
            <Text style={styles.title}>5-Day Forecast</Text>
            <FlatList
              data={forecastData.filter((item, index) => index < 5)} // Limit to 5 items
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderForecastItem}
              horizontal={true} // Horizontal scrolling
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.forecastContainer}
            />
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
  forecastContainer: {
    marginTop: 10,
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
  error: {
    color: '#ff3b30',
    marginVertical: 10,
    fontSize: 16,
  },
});

export default Home;
