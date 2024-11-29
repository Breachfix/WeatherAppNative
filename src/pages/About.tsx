import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { WeatherContext, WeatherContextProps } from '../context/WeatherContext';

const About: React.FC = () => {
  const context = useContext<WeatherContextProps | undefined>(WeatherContext);

  // Handle the case where context might be undefined
  if (!context) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Theme data not available</Text>
      </View>
    );
  }

  const { theme } = context;

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors[0] }]}>
      <Text style={[styles.title, { color: theme.textColor }]}>About WeatherAppNative</Text>
      <Text style={[styles.description, { color: theme.textColor }]}>
        Welcome to WeatherApp! Created by Guy, this platform was designed to help people stay informed
        about weather conditions in a simple and engaging way. Our mission is to make weather updates
        and forecasts accessible, relevant, and easy to understand for everyone.
      </Text>
      <Text style={[styles.description, { color: theme.textColor }]}>
        With WeatherApp, you can track weather changes, explore forecasts, and stay prepared for
        whatever the weather may bring. We also provide helpful health insights to ensure you make
        the most out of each day.
      </Text>
      <Text style={[styles.footer, { color: theme.textColor }]}>
        Thank you for using WeatherAppNative. We are committed to making weather forecasting better
        and more accessible for everyone!
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
    marginBottom: 15,
    textAlign: 'justify',
  },
  footer: {
    fontSize: 16,
    marginTop: 20,
    fontStyle: 'italic',
    textAlign: 'center',
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

export default About;