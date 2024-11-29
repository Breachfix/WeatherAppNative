// import React, { useContext } from 'react';
// import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
// import { WeatherContext } from '../context/WeatherContext';
// import Icon from 'react-native-vector-icons/FontAwesome5';

// const Forecast = () => {
//   const { forecastData, currentWeather, unit } = useContext(WeatherContext);

//   // Function to get the name of the day (e.g., Monday, Tuesday)
//   const getDayName = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { weekday: 'long' });
//   };

//   // Process the daily forecast data to show only 7 days
//   const dailyForecast = forecastData
//     .filter((item) => item.dt_txt.includes('12:00:00')) // Filter forecasts for midday
//     .slice(0, 7); // Limit to 7 days

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
//         <Icon name="thermometer-half" style={styles.icon} /> {item.main.temp.toFixed(1)}°{unit === 'metric' ? 'C' : 'F'}
//       </Text>
//       {/* Humidity */}
//       <Text style={styles.details}>
//         <Icon name="tint" style={styles.icon} /> Humidity: {item.main.humidity}%
//       </Text>
//       {/* Rain Volume */}
//       <Text style={styles.details}>
//         <Icon name="cloud-rain" style={styles.icon} /> Rain: {item.rain?.['3h'] || 0} mm
//       </Text>
//       {/* Sunrise and Sunset */}
//       <Text style={styles.details}>
//         <Icon name="sun" style={styles.icon} /> Sunrise: {new Date(currentWeather.sys.sunrise * 1000).toLocaleTimeString()}
//       </Text>
//       <Text style={styles.details}>
//         <Icon name="moon" style={styles.icon} /> Sunset: {new Date(currentWeather.sys.sunset * 1000).toLocaleTimeString()}
//       </Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>7-Day Forecast</Text>
//       <FlatList
//         data={dailyForecast}
//         renderItem={renderForecastItem}
//         keyExtractor={(item, index) => index.toString()}
//         horizontal={true} // Show items horizontally
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.forecastContainer}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginVertical: 20,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   forecastContainer: {
//     paddingHorizontal: 10,
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
// });

// export default Forecast;






// import React, { useContext, useEffect } from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   Image,
//   Animated,
// } from 'react-native';
// import { WeatherContext } from '../context/WeatherContext';
// import Icon from 'react-native-vector-icons/FontAwesome5';

// const Forecast = () => {
//   const { theme, forecastData, error } = useContext(WeatherContext);

//   const getDayName = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { weekday: 'long' });
//   };

//   const renderForecastItem = ({ item }) => (
//     <Animated.View
//       style={[
//         styles.forecastDay,
//         {
//           backgroundColor: theme.colors[0], // Dynamically set theme
//           shadowColor: 'rgba(0, 0, 0, 0.15)',
//         },
//       ]}
//     >
//       {/* Day Name */}
//       <Text style={[styles.dayTitle, { color: theme.textColor }]}>
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
//       <Text style={[styles.temperature, { color: '#ff6347' }]}>
//         <Icon name="thermometer-half" style={styles.icon} /> {item.main.temp}°
//       </Text>
//       {/* Humidity */}
//       <Text style={[styles.details, { color: theme.textColor }]}>
//         <Icon name="tint" style={styles.icon} /> Humidity: {item.main.humidity}%
//       </Text>
//       {/* Rain Volume */}
//      <Text style={[styles.details, { color: theme.textColor }]}>
//        <Icon name="cloud-rain" style={styles.icon} /> Rain: {item.rain?.['3h'] || 0} mm
//      </Text>
// {/* Sunrise */}
// <Text style={[styles.details, { color: theme.textColor }]}>
//   <Icon name="sun" style={styles.icon} /> Sunrise: {new Date(currentWeather.sys.sunrise * 1000).toLocaleTimeString()}
// </Text>
// {/* Sunset */}
// <Text style={[styles.details, { color: theme.textColor }]}>
//   <Icon name="moon" style={styles.icon} /> Sunset: {new Date(currentWeather.sys.sunset * 1000).toLocaleTimeString()}
// </Text>
//     </Animated.View>
//   );

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView contentContainerStyle={styles.container}>
//         <Text style={[styles.title, { color: theme.textColor }]}>5-Day Forecast</Text>
//         {error && <Text style={styles.error}>{error}</Text>}
//         <FlatList
//           data={forecastData.filter((item, index) => index % 8 === 0)} // One per day
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={renderForecastItem}
//           horizontal={true}
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.forecastContainer}
//         />
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
//   forecastContainer: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     gap: 20,
//   },
//   forecastDay: {
//     padding: 20,
//     borderRadius: 12,
//     width: 180,
//     minHeight: 280,
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.15,
//     shadowRadius: 14,
//     transform: [{ translateY: 20 }],
//     opacity: 0,
//     elevation: 6,
//   },
//   dayTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 5,
//     display: 'flex',
//     alignItems: 'center',
//   },
//   weatherIcon: {
//     width: 55,
//     height: 55,
//     margin: 10,
//   },
//   temperature: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     display: 'flex',
//     alignItems: 'center',
//   },
//   details: {
//     fontSize: 12,
//     color: '#555',
//     textAlign: 'center',
//   },
//   icon: {
//     marginRight: 8,
//     fontSize: 14,
//   },
//   error: {
//     color: '#e74c3c',
//     fontWeight: 'bold',
//     marginTop: 15,
//   },
// });

// export default Forecast;





// import React, { useContext } from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   Image,
// } from 'react-native';
// import { WeatherContext } from '../context/WeatherContext';
// import Icon from 'react-native-vector-icons/FontAwesome5';

// const Forecast = () => {
//   const { theme, forecastData, currentWeather, error } = useContext(WeatherContext);

//   const getDayName = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { weekday: 'long' });
//   };

//   const renderForecastItem = ({ item }) => (
//     <View
//       style={[
//         styles.forecastBox,
//         { backgroundColor: theme.colors[0], shadowColor: theme.colors[1] },
//       ]}
//     >
//       {/* Day Name */}
//       <Text style={[styles.day, { color: theme.textColor }]}>
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
//       <Text style={[styles.temperature, { color: '#e74c3c' }]}>
//         <Icon name="thermometer-half" style={styles.icon} /> {item.main.temp.toFixed(1)}°
//       </Text>
//       {/* Humidity */}
//       <Text style={[styles.details, { color: theme.textColor }]}>
//         <Icon name="tint" style={styles.icon} /> Humidity: {item.main.humidity}%
//       </Text>
//       {/* Rain Volume */}
//       <Text style={[styles.details, { color: theme.textColor }]}>
//         <Icon name="cloud-rain" style={styles.icon} /> Rain: {item.rain?.['3h'] || 0} mm
//       </Text>
//       {/* Sunrise and Sunset */}
//       <Text style={[styles.details, { color: theme.textColor }]}>
//         <Icon name="sun" style={styles.icon} /> Sunrise: {new Date(currentWeather.sys.sunrise * 1000).toLocaleTimeString()}
//       </Text>
//       <Text style={[styles.details, { color: theme.textColor }]}>
//         <Icon name="moon" style={styles.icon} /> Sunset: {new Date(currentWeather.sys.sunset * 1000).toLocaleTimeString()}
//       </Text>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView contentContainerStyle={styles.container}>
//         <Text style={[styles.title, { color: theme.textColor }]}>5-Day Forecast</Text>
//         {error && <Text style={styles.error}>{error}</Text>}
//         <FlatList
//           data={forecastData.filter((_, index) => index % 8 === 0)} // Daily forecast
//           keyExtractor={(_, index) => index.toString()}
//           renderItem={renderForecastItem}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.forecastContainer}
//         />
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
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   forecastContainer: {
//     flexDirection: 'row',
//     paddingVertical: 10,
//   },
//   forecastBox: {
//     width: 160,
//     padding: 15,
//     marginHorizontal: 8,
//     borderRadius: 12,
//     alignItems: 'center',
//     elevation: 5,
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.15,
//     shadowRadius: 10,
//   },
//   day: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 8,
//     textAlign: 'center',
//   },
//   weatherIcon: {
//     width: 60,
//     height: 60,
//     marginBottom: 10,
//   },
//   temperature: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   details: {
//     fontSize: 14,
//     textAlign: 'center',
//     marginBottom: 3,
//   },
//   icon: {
//     marginRight: 8,
//     fontSize: 14,
//   },
//   error: {
//     color: '#e74c3c',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginTop: 10,
//   },
// });

// export default Forecast;


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