// src/components/Footer.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>WeatherAppNative © 2024</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#007AFF',
    padding: 10,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Footer;
