// import React, { useContext, useEffect } from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   View,
//   Text,
//   StyleSheet,
//   Button,
//   ActivityIndicator,
//   FlatList,
//   Image,
// } from 'react-native';
// import { WeatherContext } from '../context/WeatherContext';
// import SearchBar from '../components/SearchBar';
// import Icon from 'react-native-vector-icons/FontAwesome5';

// const Home = () => {
//   const { theme, weatherData, forecastData, fetchForecast, toggleUnit, unit, error } =
//     useContext(WeatherContext);

//   useEffect(() => {
//     if (weatherData) fetchForecast(weatherData.name);
//   }, [weatherData, unit]);

//   // Function to get the name of the day
//   const getDayName = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { weekday: 'long' });
//   };

//   // Render a forecast item
//   const renderForecastItem = ({ item }) => (
//     <View style={styles.forecastBox}>
//       {/* Day Name */}
//       <Text style={styles.day}>
//         <Icon name="calendar-alt" style={styles.icon} /> {getDayName(item.dt_txt)}
//       </Text>
//       {/* Weather Icon */}
//       <Image
//         source={{
//           uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
//         }}
//         style={styles.weatherIcon}
//       />
//       {/* Temperature */}
//       <Text style={styles.temperature}>
//         <Icon name="thermometer-half" style={styles.icon} /> {item.main.temp}°{unit === 'metric' ? 'C' : 'F'}
//       </Text>
//       {/* Humidity */}
//       <Text style={styles.details}>
//         <Icon name="tint" style={styles.icon} /> Humidity: {item.main.humidity}%
//       </Text>
//       {/* Rain Volume */}
//       <Text style={styles.details}>
//         <Icon name="cloud-rain" style={styles.icon} /> Rain: {item.rain?.['3h'] || 0} mm
//       </Text>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView contentContainerStyle={styles.container}>
//       <Text style={[styles.title, { color: theme.textColor }]}>Welcome to the Home Page</Text>
//         <SearchBar />
//         <Button
//           title={`Switch to ${unit === 'metric' ? 'Fahrenheit' : 'Celsius'}`}
//           onPress={toggleUnit}
//           color="#007AFF"
//         />
//         {error && <Text style={styles.error}>{error}</Text>}
//         {weatherData && (
//           <View style={styles.weatherBox}>
//             <Text style={styles.title}>Current Weather in {weatherData.name}</Text>
//             <View style={styles.weatherDetail}>
//               <Icon name="sun" style={styles.icon} />
//               <Text>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</Text>
//             </View>
//             <View style={styles.weatherDetail}>
//               <Icon name="temperature-high" style={styles.icon} />
//               <Text>
//                 Temperature: {weatherData.main.temp}°{unit === 'metric' ? 'C' : 'F'}
//               </Text>
//             </View>
//             <View style={styles.weatherDetail}>
//               <Icon name="tint" style={styles.icon} />
//               <Text>Humidity: {weatherData.main.humidity}%</Text>
//             </View>
//             <View style={styles.weatherDetail}>
//               <Icon name="wind" style={styles.icon} />
//               <Text>
//                 Wind Speed: {weatherData.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}
//               </Text>
//             </View>
//             <View style={styles.weatherDetail}>
//               <Icon name="moon" style={styles.icon} />
//               <Text>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</Text>
//             </View>
//           </View>
//         )}
//         {forecastData && (
//           <View>
//             <Text style={styles.title}>5-Day Forecast</Text>
//             <FlatList
//               data={forecastData.filter((item, index) => index < 5)} // Limit to 5 items
//               keyExtractor={(item, index) => index.toString()}
//               renderItem={renderForecastItem}
//               horizontal={true} // Horizontal scrolling
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.forecastContainer}
//             />
//           </View>
//         )}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   container: {
//     padding: 20,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   weatherBox: {
//     marginVertical: 20,
//     padding: 15,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     backgroundColor: '#fff',
//   },
//   weatherDetail: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 5,
//   },
//   forecastContainer: {
//     marginTop: 10,
//   },
//   forecastBox: {
//     width: 150,
//     padding: 15,
//     marginRight: 10,
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//     alignItems: 'center',
//   },
//   day: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 5,
//   },
//   weatherIcon: {
//     width: 50,
//     height: 50,
//     marginBottom: 10,
//   },
//   temperature: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#e74c3c',
//     marginBottom: 5,
//   },
//   details: {
//     fontSize: 12,
//     color: '#555',
//     marginBottom: 3,
//     textAlign: 'center',
//   },
//   icon: {
//     marginRight: 5,
//     fontSize: 14,
//     color: '#555',
//   },
//   error: {
//     color: '#ff3b30',
//     marginVertical: 10,
//     fontSize: 16,
//   },
// });

// export default Home;
import React, { useContext, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Image,
  Button,
} from 'react-native';
import { WeatherContext } from '../context/WeatherContext';
import SearchBar from '../components/SearchBar';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Home = () => {
  const {
    theme,
    weatherData,
    forecastData,
    fetchForecast,
    toggleUnit,
    unit,
    error,
  } = useContext(WeatherContext);

  useEffect(() => {
    if (weatherData) fetchForecast(weatherData.name);
  }, [weatherData, unit]);

  const getDayName = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  };

  const renderForecastItem = ({ item }) => (
    <View style={[styles.forecastBox, { backgroundColor: theme.colors[1] }]}>
      <Text style={[styles.day, { color: theme.textColor }]}>
        <Icon name="calendar-alt" style={styles.icon} /> {getDayName(item.dt_txt)}
      </Text>
      <Image
        source={{
          uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
        }}
        style={styles.weatherIcon}
      />
      <Text style={[styles.temperature, { color: '#e74c3c' }]}>
        <Icon name="thermometer-half" style={styles.icon} /> {item.main.temp}°{unit === 'metric' ? 'C' : 'F'}
      </Text>
      <Text style={[styles.details, { color: theme.textColor }]}>
        <Icon name="tint" style={styles.icon} /> Humidity: {item.main.humidity}%
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient colors={theme.colors} style={styles.gradientBackground}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={[styles.title, { color: theme.textColor }]}>Welcome to the Weather App</Text>
          <SearchBar />
          <Button
            title={`Switch to ${unit === 'metric' ? 'Fahrenheit' : 'Celsius'}`}
            onPress={toggleUnit}
            color="#007AFF"
          />
          {error && <Text style={styles.error}>{error}</Text>}
          {weatherData && (
            <View style={[styles.weatherBox, { backgroundColor: theme.colors[0] }]}>
              <Text style={[styles.title, { color: theme.textColor }]}>
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
            </View>
          )}
          {forecastData && (
            <FlatList
              data={forecastData.filter((_, index) => index % 8 === 0)} // Daily forecast
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  weatherBox: {
    padding: 20,
    borderRadius: 12,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  weatherDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  detailText: {
    fontSize: 14,
    marginLeft: 10,
  },
  forecastContainer: {
    paddingVertical: 10,
  },
  forecastBox: {
    width: 180,
    padding: 20,
    marginRight: 10,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  day: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
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
  error: {
    color: '#e74c3c',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 10,
    fontSize: 14,
  },
});

export default Home;