import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StyleSheet, Platform, StatusBar, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from './src/pages/Home';
import About from './src/pages/About';
import Contact from './src/pages/Contact';
import Settings from './src/pages/Settings';
import Profile from './src/pages/Profile';
import { WeatherProvider } from './src/context/WeatherContext';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <WeatherProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
      <SafeAreaView style={styles.safeArea}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') iconName = 'home';
                else if (route.name === 'About') iconName = 'info-circle';
                else if (route.name === 'Contact') iconName = 'phone';
                else if (route.name === 'Settings') iconName = 'cog';
                else if (route.name === 'Profile') iconName = 'user';
                return <Icon name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#007AFF',
              tabBarInactiveTintColor: 'gray',
              headerShown: false,
              tabBarStyle: {
                position: 'absolute',
                backgroundColor: '#f5f5f5', // Desired background color
                height: Platform.OS === 'ios' ? 80 : 60,
                borderTopWidth: 0, // No border for seamless look
                shadowColor: '#000',
                shadowOpacity: 0.1,
                shadowRadius: 3,
                shadowOffset: { height: -1 }, // Slight shadow for elevation
                elevation: 5, // Android shadow
                borderTopWidth: 0,
                bottom: 0,
              },
            })}
          >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="About" component={About} />
            <Tab.Screen name="Contact" component={Contact} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Profile" component={Profile} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>

      </KeyboardAvoidingView>
    </WeatherProvider>
  );
  
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
