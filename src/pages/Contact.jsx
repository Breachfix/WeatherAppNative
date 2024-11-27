import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WeatherContext } from '../context/WeatherContext';
import BackButton from '../components/BackButton';

const Contact = ({navigation}) => {
  const { theme } = useContext(WeatherContext);

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
  },
  description: {
    fontSize: 16,
  },
});

export default Contact;