

import React, { useState, useContext } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Keyboard,
  Animated,
} from 'react-native';
import { WeatherContext, WeatherContextProps } from '../context/WeatherContext';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SearchBar: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [inputFocused, setInputFocused] = useState<boolean>(false); // For animation on focus
  const { fetchWeather, theme } = useContext(WeatherContext) as WeatherContextProps;

  const handleSearch = () => {
    if (city.trim()) {
      fetchWeather(city);
      setCity(''); // Clear input after search
      Keyboard.dismiss(); // Dismiss the keyboard
    }
  };

  return (
    <LinearGradient
      colors={theme.colors}
      style={[styles.container, { shadowColor: theme.textColor }]}
    >
      <Animated.View
        style={[
          styles.inputContainer,
          {
            borderColor: inputFocused ? theme.textColor : theme.colors[1],
            transform: [
              {
                scale: inputFocused ? 1.05 : 1, // Scale animation on focus
              },
            ],
          },
        ]}
      >
        <Icon name="search" style={[styles.icon, { color: theme.textColor }]} />
        <TextInput
          style={[styles.input, { color: theme.textColor }]}
          placeholder="Search for a city"
          placeholderTextColor={theme.textColor}
          value={city}
          onChangeText={setCity}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          onSubmitEditing={handleSearch}
        />
      </Animated.View>
      <TouchableOpacity
        onPress={handleSearch}
        style={[styles.button, { backgroundColor: theme.colors[2] }]}
      >
        <LinearGradient
          colors={[theme.colors[0], theme.colors[1]]}
          style={styles.gradientButton}
        >
          <Text style={[styles.buttonText, { color: theme.textColor }]}>
            Search
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    borderRadius: 15,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    padding: 8,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent background
    elevation: 4,
  },
  icon: {
    fontSize: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  button: {
    marginLeft: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  gradientButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default SearchBar;