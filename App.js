import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native';
import Home from './src/pages/Home';
import About from './src/pages/About';
import Contact from './src/pages/Contact';
import Navbar from './src/components/Navbar';
import Footer from './src/components/Footer';
import { WeatherProvider } from './src/context/WeatherContext'; // Add this

const Stack = createStackNavigator();

export default function App() {
  return (
    <WeatherProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <Navbar />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Contact" component={Contact} />
          </Stack.Navigator>
          <Footer />
        </View>
      </NavigationContainer>
    </WeatherProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
