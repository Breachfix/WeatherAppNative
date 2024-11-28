import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WeatherContext, WeatherContextProps } from '../context/WeatherContext';
import BackButton from '../components/BackButton';

interface ContactProps {
  navigation: any; // Replace `any` with the correct type if using a navigation library like React Navigation
}

const Contact: React.FC<ContactProps> = ({ navigation }) => {
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
    <View style={[styles.container, { backgroundColor: theme.colors[1] }]}>
      <BackButton navigation={navigation} />
      <Text style={[styles.title, { color: theme.textColor }]}>Contact Us</Text>
      <Text style={[styles.description, { color: theme.textColor }]}>
        Email: support@weatherappnative.com
      </Text>
      <Text style={[styles.description, { color: theme.textColor }]}>
        Phone: +1-234-567-890
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
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
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

export default Contact;