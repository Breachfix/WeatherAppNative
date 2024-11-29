
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';
import About from './src/pages/About';
import Contact from './src/pages/Contact';
import Settings from './src/pages/Settings';
import Profile from './src/pages/Profile';
import PrivacyPolicy from './src/pages/PrivacyPolicy';
import TermsOfService from './src/pages/TermsOfService';
import { WeatherProvider, WeatherContext } from './src/context/WeatherContext';

const Tab = createBottomTabNavigator();
const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingsStack.Screen name="SettingsMain" component={Settings} />
      <SettingsStack.Screen name="Profile" component={Profile} />
      <SettingsStack.Screen name="Contact" component={Contact} />
      <SettingsStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <SettingsStack.Screen name="TermsOfService" component={TermsOfService} />
    </SettingsStack.Navigator>
  );
}

export default function App() {
  return (
    <WeatherProvider>
      <AppContent />
    </WeatherProvider>
  );
}

const AppContent: React.FC = () => {
  const context = useContext(WeatherContext);

  if (!context) {
    return null; // Fallback if context is undefined
  }

  const { theme } = context;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <LinearGradient colors={theme.colors} style={styles.gradientBackground}>
        <SafeAreaView style={styles.safeArea}>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }): BottomTabNavigationOptions => ({
                tabBarIcon: ({ focused, color, size }) => {
                  const iconName =
                    route.name === 'Home'
                      ? 'home'
                      : route.name === 'About'
                      ? 'info-circle'
                      : 'cog';
                  return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: theme.colors[4],
                tabBarInactiveTintColor: theme.colors[3],
                headerShown: false,
                tabBarStyle: {
                  position: 'absolute',
                  backgroundColor: theme.colors[0],
                  height: Platform.OS === 'ios' ? 80 : 60,
                  borderTopWidth: 0,
                  shadowColor: theme.colors[6],
                  shadowOpacity: 0.1,
                  shadowRadius: 3,
                  shadowOffset: { width: 0, height: -1 }, // Ensure `width` is included
                  elevation: 5,
                },
              })}
            >
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="About" component={About} />
              <Tab.Screen name="Settings" component={SettingsStackScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  gradientBackground: {
    flex: 1,
  },
});