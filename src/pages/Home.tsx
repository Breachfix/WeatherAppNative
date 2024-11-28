import React, { useContext, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import { WeatherContext, WeatherContextProps } from '../context/WeatherContext';
import SearchBar from '../components/SearchBar';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Home: React.FC = () => {
  const context = useContext<WeatherContextProps | undefined>(WeatherContext);

  if (!context) {
    return (
      <SafeAreaView style={styles.errorContainer}>
        <Text style={styles.errorText}>Weather data not available</Text>
      </SafeAreaView>
    );
  }

  const {
    theme,
    weatherData,
    forecastData,
    fetchForecast,
    toggleUnit,
    unit,
    error,
  } = context;

  useEffect(() => {
    if (weatherData) fetchForecast(weatherData.name);
  }, [weatherData, unit, fetchForecast]);

  const getDayName = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  };

  const renderForecastItem = ({ item }: { item: any }) => (
    <LinearGradient
      colors={['rgba(255,255,255,0.8)', theme.colors[1]] as [string, string]}
      style={styles.forecastBox}
    >
      <Text style={[styles.day, { color: theme.textColor }]}>
        <Icon name="calendar-alt" style={styles.icon} /> {getDayName(item.dt_txt)}
      </Text>
      <Image
        source={{
          uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
        }}
        style={styles.weatherIcon}
      />
      <Text style={[styles.temperature, { color: '#ff6347' }]}>
        <Icon name="thermometer-half" style={styles.icon} /> {item.main.temp}°{unit === 'metric' ? 'C' : 'F'}
      </Text>
      <Text style={[styles.details, { color: theme.textColor }]}>
        <Icon name="tint" style={styles.icon} /> Humidity: {item.main.humidity}%
      </Text>
      <Text style={[styles.details, { color: theme.textColor }]}>
        <Icon name="wind" style={styles.icon} /> Wind: {item.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}
      </Text>
      <Text style={[styles.details, { color: theme.textColor }]}>
        <Icon name="cloud-rain" style={styles.icon} /> Rain: {item.rain?.['3h'] || 0} mm
      </Text>
    </LinearGradient>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient colors={theme.colors as [string, string]} style={styles.gradientBackground}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={[styles.title, { color: theme.textColor }]}>
            🌤️ Welcome to the Weather App
          </Text>
          <SearchBar />
          <Text
            style={[styles.unitToggle, { color: theme.textColor }]}
            onPress={toggleUnit}
          >
            Switch to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
          </Text>
          {error && <Text style={styles.error}>{error}</Text>}
          {weatherData && (
            <View style={[styles.weatherBox, { backgroundColor: theme.colors[0] }]}>
              <Text style={[styles.weatherTitle, { color: theme.textColor }]}>
                Current Weather in {weatherData.name}
              </Text>
              <View style={styles.weatherDetail}>
                <Icon name="sun" style={styles.icon} />
                <Text style={[styles.detailText, { color: theme.textColor }]}>
                  Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
                </Text>
              </View>
              <View style={styles.weatherDetail}>
                <Icon name="moon" style={styles.icon} />
                <Text style={[styles.detailText, { color: theme.textColor }]}>
                  Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
                </Text>
              </View>
              <View style={styles.weatherDetail}>
                <Icon name="temperature-high" style={styles.icon} />
                <Text style={[styles.detailText, { color: theme.textColor }]}>
                  Temp: {weatherData.main.temp}°{unit === 'metric' ? 'C' : 'F'}
                </Text>
              </View>
              <View style={styles.weatherDetail}>
                <Icon name="tint" style={styles.icon} />
                <Text style={[styles.detailText, { color: theme.textColor }]}>
                  Humidity: {weatherData.main.humidity}%
                </Text>
              </View>
            </View>
          )}
          {forecastData && (
            <FlatList
              data={forecastData.filter((_, index) => index % 8 === 0)}
              keyExtractor={(_, index) => index.toString()}
              renderItem={renderForecastItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.forecastContainer}
            />
          )}
          {!weatherData && <ActivityIndicator size="large" color="#007AFF" />}
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  weatherBox: {
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  weatherDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  weatherTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 14,
    marginLeft: 10,
  },
  forecastContainer: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  forecastBox: {
    width: 200,
    padding: 15,
    marginHorizontal: 8,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 6,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
  },
  day: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  weatherIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  temperature: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    textAlign: 'center',
  },
  unitToggle: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  error: {
    color: '#e74c3c',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 8,
    fontSize: 14,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: '#e74c3c',
  },
});

export default Home;