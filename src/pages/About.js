import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => (
  <View style={styles.container}>
    <Text style={styles.title}>About WeatherApp</Text>
    <Text style={styles.description}>
      WeatherApp provides real-time weather data with a modern, responsive design.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
});

export default About;