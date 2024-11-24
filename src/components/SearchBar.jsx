import React, { useState, useContext } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { WeatherContext } from '../context/WeatherContext';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const { fetchWeather } = useContext(WeatherContext);

  const handleSearch = () => {
    if (city.trim()) {
      fetchWeather(city);
      setCity(''); // Clear input after search
    }
  };

  return (
    <View style={styles.searchBar}>
      <View style={styles.inputContainer}>
        <Icon name="search" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter city name"
          value={city}
          onChangeText={setCity}
        />
      </View>
      <TouchableOpacity onPress={handleSearch} style={styles.button}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  icon: {
    fontSize: 18,
    marginRight: 10,
    color: '#007AFF',
  },
  input: {
    flex: 1,
    height: 40,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SearchBar;
