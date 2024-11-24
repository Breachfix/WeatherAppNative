import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from './src/pages/Home';
import About from './src/pages/About';
import Contact from './src/pages/Contact';
import { WeatherProvider } from './src/context/WeatherContext'; // Import WeatherProvider

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <WeatherProvider> {/* Wrap the app in WeatherProvider */}
      <SafeAreaView style={styles.safeArea}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') iconName = 'home';
                else if (route.name === 'About') iconName = 'info-circle';
                else if (route.name === 'Contact') iconName = 'phone';
                return <Icon name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#007AFF',
              tabBarInactiveTintColor: 'gray',
              headerShown: false,
            })}
          >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="About" component={About} />
            <Tab.Screen name="Contact" component={Contact} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </WeatherProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
