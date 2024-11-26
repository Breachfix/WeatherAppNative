import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WeatherContext } from '../context/WeatherContext';

const About = () => {
  const { theme } = useContext(WeatherContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors[2] }]}>
      <Text style={[styles.title, { color: theme.textColor }]}>About WeatherAppNative</Text>
      <Text style={[styles.description, { color: theme.textColor }]}>
        WeatherAppNative provides real-time weather updates for your favorite cities.
        Built with React Native, it works seamlessly on iOS, Android, and the web.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});

export default About;