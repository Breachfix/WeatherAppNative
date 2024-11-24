// import React, { useContext, useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Button, ActivityIndicator, ScrollView } from 'react-native';
// import { WeatherContext } from '../context/WeatherContext';
// import SearchBar from '../components/SearchBar';
// import Icon from 'react-native-vector-icons/FontAwesome5';

// const Home = () => {
//   const {
//     weatherData,
//     forecastData,
//     fetchForecast,
//     toggleUnit,
//     unit,
//     error,
//   } = useContext(WeatherContext);

//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     console.log('Weather data in Home:', weatherData); // Debugging log
//     if (weatherData) {
//       setIsLoading(true);
//       fetchForecast(weatherData.name).finally(() => setIsLoading(false));
//     }
//   }, [weatherData, unit]);

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <SearchBar />
//       <Button
//         title={`Switch to ${unit === 'metric' ? 'Fahrenheit' : 'Celsius'}`}
//         onPress={toggleUnit}
//         color="#007AFF"
//       />
//       {error && <Text style={styles.error}>{error}</Text>}
//       {weatherData && (
//         <View style={styles.weatherBox}>
//           <Text style={styles.title}>Current Weather in {weatherData.name}</Text>
//           <View style={styles.weatherDetail}>
//             <Icon name="sun" style={styles.icon} />
//             <Text>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</Text>
//           </View>
//           <View style={styles.weatherDetail}>
//             <Icon name="temperature-high" style={styles.icon} />
//             <Text>
//               Temperature: {weatherData.main.temp}°{unit === 'metric' ? 'C' : 'F'}
//             </Text>
//           </View>
//         </View>
//       )}
//       {forecastData && (
//         <View>
//           <Text style={styles.title}>Forecast</Text>
//           {isLoading ? (
//             <ActivityIndicator size="large" color="#007AFF" />
//           ) : (
//             forecastData.map((forecast, index) => (
//               <View key={index} style={styles.forecastItem}>
//                 <Text>{forecast.date}: {forecast.temp}°{unit === 'metric' ? 'C' : 'F'}</Text>
//               </View>
//             ))
//           )}
//         </View>
//       )}
//     </ScrollView>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#f5f5f5',
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
//   forecastItem: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderColor: '#ddd',
//   },
//   icon: {
//     fontSize: 18,
//     marginRight: 10,
//     color: '#007AFF',
//   },
//   error: {
//     color: '#ff3b30',
//     marginVertical: 10,
//     fontSize: 16,
//   },
// });

// export default Home;
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const SearchBar = () => {
  const { fetchWeather } = useContext(WeatherContext);
  const [city, setCity] = useState('');

  const handleSearch = () => {
    fetchWeather(city);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Search" onPress={handleSearch} color="#007AFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default SearchBar;
