import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Animated } from 'react-native';
import { WeatherContext } from '../context/WeatherContext';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Forecast = () => {
  const { forecastData, unit } = useContext(WeatherContext);
  const [animations, setAnimations] = useState([]);

  useEffect(() => {
    // Initialize animations for forecast items
    setAnimations(forecastData.map(() => new Animated.Value(0)));
  }, [forecastData]);

  useEffect(() => {
    // Animate forecast items as they appear
    animations.forEach((anim, index) => {
      Animated.timing(anim, {
        toValue: 1,
        duration: 500,
        delay: index * 100,
        useNativeDriver: true,
      }).start();
    });
  }, [animations]);

  const renderForecastItem = ({ item, index }) => (
    <Animated.View
      style={[
        styles.forecastDay,
        { opacity: animations[index], transform: [{ translateY: animations[index].interpolate({ inputRange: [0, 1], outputRange: [20, 0] }) }] },
      ]}
    >
      {/* Day and Date */}
      <Text style={styles.day}>
        <Icon name="calendar-alt" style={styles.icon} /> {new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'long' })}
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

      {/* Additional Details */}
      <View style={styles.details}>
        <Text>
          <Icon name="tint" style={styles.icon} /> Humidity: {item.main.humidity}%
        </Text>
        <Text>
          <Icon name="cloud-rain" style={styles.icon} /> Rain: {item.rain?.['3h'] || 0} mm
        </Text>
      </View>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Next 5-Day Forecast</Text>
      <FlatList
        data={forecastData.filter((item) => item.dt_txt.includes('12:00:00'))}
        renderItem={renderForecastItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.forecastContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  forecastContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20, // Supported in newer versions of React Native
  },
  forecastDay: {
    width: 180,
    minHeight: 280,
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#b5cfea', // Default light theme
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 14,
    justifyContent: 'space-around',
    alignItems: 'center',
    transform: [{ translateY: 20 }],
    opacity: 0,
  },
  day: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  weatherIcon: {
    width: 55,
    height: 55,
    marginVertical: 10,
  },
  temperature: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff6347', // Tomato color
  },
  details: {
    alignItems: 'center',
    gap: 6,
    color: '#555',
  },
  icon: {
    fontSize: 16,
    marginRight: 6,
    color: '#007bff',
  },
});

export default Forecast;
