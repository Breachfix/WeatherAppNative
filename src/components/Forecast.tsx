

import React, { useContext } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import { WeatherContext, WeatherContextProps } from '../context/WeatherContext';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface ForecastItemProps {
  item: {
    dt_txt: string;
    main: {
      temp: number;
      humidity: number;
    };
    weather: {
      icon: string;
    }[];
    rain?: {
      '3h'?: number;
    };
  };
}

const Forecast: React.FC = () => {
  const context = useContext(WeatherContext) as WeatherContextProps;
  const { theme, forecastData, currentWeather, error } = context;

  const getDayName = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  };

  const renderForecastItem = ({ item }: ForecastItemProps) => (
    <View
      style={[
        styles.forecastBox,
        { backgroundColor: theme.colors[0], shadowColor: theme.colors[1] },
      ]}
    >
      {/* Day Name */}
      <Text style={[styles.day, { color: theme.textColor }]}>
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
      <Text style={[styles.temperature, { color: '#e74c3c' }]}>
        <Icon name="thermometer-half" style={styles.icon} /> {item.main.temp.toFixed(1)}°
      </Text>
      {/* Humidity */}
      <Text style={[styles.details, { color: theme.textColor }]}>
        <Icon name="tint" style={styles.icon} /> Humidity: {item.main.humidity}%
      </Text>
      {/* Rain Volume */}
      <Text style={[styles.details, { color: theme.textColor }]}>
        <Icon name="cloud-rain" style={styles.icon} /> Rain: {item.rain?.['3h'] || 0} mm
      </Text>
      {/* Sunrise and Sunset */}
      {currentWeather && (
        <>
          <Text style={[styles.details, { color: theme.textColor }]}>
            <Icon name="sun" style={styles.icon} /> Sunrise: {new Date(currentWeather.sys.sunrise * 1000).toLocaleTimeString()}
          </Text>
          <Text style={[styles.details, { color: theme.textColor }]}>
            <Icon name="moon" style={styles.icon} /> Sunset: {new Date(currentWeather.sys.sunset * 1000).toLocaleTimeString()}
          </Text>
        </>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={[styles.title, { color: theme.textColor }]}>5-Day Forecast</Text>
        {error && <Text style={styles.error}>{error}</Text>}
        <FlatList
          data={forecastData.filter((_, index) => index % 8 === 0)} // Daily forecast
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderForecastItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.forecastContainer}
        />
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  forecastContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  forecastBox: {
    width: 160,
    padding: 15,
    marginHorizontal: 8,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 5,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
  day: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  weatherIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  temperature: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 3,
  },
  icon: {
    marginRight: 8,
    fontSize: 14,
  },
  error: {
    color: '#e74c3c',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Forecast;