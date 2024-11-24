import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { fetchWeather } from '../utils/api';

const Home = () => {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchWeather(location);
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Weather</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter location"
        value={location}
        onChangeText={setLocation}
      />
      <Button title="Get Weather" onPress={handleSearch} />
      {weather && (
        <View style={styles.weather}>
          <Text>Temperature: {weather.main.temp}°C</Text>
          <Text>Condition: {weather.weather[0].description}</Text>
        </View>
      )}
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  weather: {
    marginTop: 20,
  },
});

export default Home;