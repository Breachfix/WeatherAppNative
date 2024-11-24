// src/pages/About.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About WeatherAppNative</Text>
      <Text style={styles.description}>
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
    color: '#555',
  },
});

export default About;
