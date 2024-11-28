// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import { SafeAreaView, StyleSheet, Platform, StatusBar, KeyboardAvoidingView } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import Home from './src/pages/Home';
// import About from './src/pages/About';
// import Contact from './src/pages/Contact';
// import Settings from './src/pages/Settings';
// import Profile from './src/pages/Profile';
// import PrivacyPolicy from './src/pages/PrivacyPolicy';
// import TermsOfService from './src/pages/TermsOfService';
// import { WeatherProvider } from './src/context/WeatherContext';

// const Tab = createBottomTabNavigator();
// const SettingsStack = createStackNavigator();

// function SettingsStackScreen() {
//   return (
//     <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
//       <SettingsStack.Screen name="SettingsMain" component={Settings} />
//       <SettingsStack.Screen name="Profile" component={Profile} />
//       <SettingsStack.Screen name="Contact" component={Contact} />
//       <SettingsStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
//       <SettingsStack.Screen name="TermsOfService" component={TermsOfService} />
//     </SettingsStack.Navigator>
//   );
// }


// export default function App() {
//   return (
//     <WeatherProvider>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={{ flex: 1 }}
//       >
//       <SafeAreaView style={styles.safeArea}>
//         <NavigationContainer>
//           <Tab.Navigator
//             screenOptions={({ route }) => ({
//               tabBarIcon: ({ focused, color, size }) => {
//                 let iconName;
//                 if (route.name === 'Home') iconName = 'home';
//                 else if (route.name === 'About') iconName = 'info-circle';
//                 else if (route.name === 'Settings') iconName = 'cog';
//                 return <Icon name={iconName} size={size} color={color} />;
//               },
//               tabBarActiveTintColor: '#007AFF',
//               tabBarInactiveTintColor: 'gray',
//               headerShown: false,
//               tabBarStyle: {
//                 position: 'absolute',
//                 backgroundColor: '#f5f5f5', // Desired background color
//                 height: Platform.OS === 'ios' ? 80 : 60,
//                 borderTopWidth: 0, // No border for seamless look
//                 shadowColor: '#000',
//                 shadowOpacity: 0.1,
//                 shadowRadius: 3,
//                 shadowOffset: { height: -1 }, // Slight shadow for elevation
//                 elevation: 5, // Android shadow
//                 borderTopWidth: 0,
//                 bottom: 0,
//               },
//             })}
//           >
//             <Tab.Screen name="Home" component={Home} />
//             <Tab.Screen name="About" component={About} />
//             <Tab.Screen name="Settings" component={SettingsStackScreen} />
//           </Tab.Navigator>
//         </NavigationContainer>
//       </SafeAreaView>

//       </KeyboardAvoidingView>
//     </WeatherProvider>
//   );
  
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#f7f7f7',
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//   },
// });


// import React, { useContext } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import {
//   SafeAreaView,
//   StyleSheet,
//   Platform,
//   StatusBar,
//   KeyboardAvoidingView,
//   View,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import { LinearGradient } from 'expo-linear-gradient';
// import Home from './src/pages/Home';
// import About from './src/pages/About';
// import Contact from './src/pages/Contact';
// import Settings from './src/pages/Settings';
// import Profile from './src/pages/Profile';
// import PrivacyPolicy from './src/pages/PrivacyPolicy';
// import TermsOfService from './src/pages/TermsOfService';
// import { WeatherProvider, WeatherContext } from './src/context/WeatherContext';

// const Tab = createBottomTabNavigator();
// const SettingsStack = createStackNavigator();

// function SettingsStackScreen() {
//   return (
//     <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
//       <SettingsStack.Screen name="SettingsMain" component={Settings} />
//       <SettingsStack.Screen name="Profile" component={Profile} />
//       <SettingsStack.Screen name="Contact" component={Contact} />
//       <SettingsStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
//       <SettingsStack.Screen name="TermsOfService" component={TermsOfService} />
//     </SettingsStack.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <WeatherProvider>
//       <AppContent />
//     </WeatherProvider>
//   );
// }

// const AppContent = () => {
//   const { theme } = useContext(WeatherContext);

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={{ flex: 1 }}
//     >
//       <LinearGradient colors={theme.colors} style={styles.gradientBackground}>
//         <SafeAreaView style={styles.safeArea}>
//           <NavigationContainer>
//             <Tab.Navigator
//               screenOptions={({ route }) => ({
//                 tabBarIcon: ({ focused, color, size }) => {
//                   let iconName;
//                   if (route.name === 'Home') iconName = 'home';
//                   else if (route.name === 'About') iconName = 'info-circle';
//                   else if (route.name === 'Settings') iconName = 'cog';
//                   return <Icon name={iconName} size={size} color={color} />;
//                 },
//                 tabBarActiveTintColor: '#007AFF',
//                 tabBarInactiveTintColor: 'gray',
//                 headerShown: false,
//                 tabBarStyle: {
//                   position: 'absolute',
//                   backgroundColor: theme.colors[0],
//                   height: Platform.OS === 'ios' ? 80 : 60,
//                   borderTopWidth: 0,
//                   shadowColor: '#000',
//                   shadowOpacity: 0.1,
//                   shadowRadius: 3,
//                   shadowOffset: { height: -1 },
//                   elevation: 5,
//                 },
//               })}
//             >
//               {/* Correct Screen Components */}
//               <Tab.Screen name="Home" component={Home} />
//               <Tab.Screen name="About" component={About} />
//               <Tab.Screen name="Settings" component={SettingsStackScreen} />
//             </Tab.Navigator>
//           </NavigationContainer>
//         </SafeAreaView>
//       </LinearGradient>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//   },
//   gradientBackground: {
//     flex: 1,
//   },
// });



import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';
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

const AppContent = () => {
  const { theme } = useContext(WeatherContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <LinearGradient colors={theme.colors} style={styles.gradientBackground}>
        <SafeAreaView style={styles.safeArea}>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  if (route.name === 'Home') iconName = 'home';
                  else if (route.name === 'About') iconName = 'info-circle';
                  else if (route.name === 'Settings') iconName = 'cog';
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
                  shadowOffset: { height: -1 },
                  elevation: 5,
                },
              })}
            >
              {/* Correct Screen Components */}
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