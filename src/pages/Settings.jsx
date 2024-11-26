// import React, { useContext } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Picker } from '@react-native-picker/picker'; // Import Picker from the new package
// import { WeatherContext } from '../context/WeatherContext';

// const themes = {
//   sunny: {
//     backgroundColor: '#ffeb99',
//     textColor: '#333',
//   },
//   rainy: {
//     backgroundColor: '#a8d8f0',
//     textColor: '#333',
//   },
//   cloudy: {
//     backgroundColor: '#d3dce6',
//     textColor: '#333',
//   },
//   snowy: {
//     backgroundColor: '#f0f8ff',
//     textColor: '#333',
//   },
// };

// const Settings = () => {
//   const { theme, setTheme } = useContext(WeatherContext);

//   const handleThemeChange = (value) => {
//     setTheme(themes[value]);
//   };

//   return (
//     <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
//       <Text style={[styles.title, { color: theme.textColor }]}>Settings</Text>
//       <Text style={[styles.subtitle, { color: theme.textColor }]}>Select Theme</Text>
//       <Picker
//         selectedValue={theme}
//         onValueChange={(value) => handleThemeChange(value)}
//         style={styles.picker}
//       >
//         <Picker.Item label="Sunny" value="sunny" />
//         <Picker.Item label="Rainy" value="rainy" />
//         <Picker.Item label="Cloudy" value="cloudy" />
//         <Picker.Item label="Snowy" value="snowy" />
//       </Picker>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   subtitle: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   picker: {
//     height: 50,
//     width: '100%',
//     backgroundColor: '#fff',
//   },
// });

// export default Settings;

import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { WeatherContext } from '../context/WeatherContext';

import LinearGradient from 'react-native-linear-gradient';

const themes = {
  light: {
    colors: ['rgba(135, 206, 250, 0.6)', 'rgba(176, 224, 230, 0.6)', 'rgba(240, 248, 255, 0.6)'],
    textColor: '#333',
  },
  dark: {
    colors: ['rgba(50, 50, 70, 0.8)', 'rgba(30, 30, 50, 0.8)', 'rgba(20, 20, 30, 0.8)'],
    textColor: '#e0e0e0',
  },
  sunny: {
    colors: ['rgba(255, 223, 186, 0.8)', 'rgba(255, 236, 179, 0.8)', 'rgba(255, 249, 196, 0.8)'],
    textColor: '#333',
  },
  cloudy: {
    colors: ['rgba(176, 196, 222, 0.8)', 'rgba(201, 211, 225, 0.8)', 'rgba(225, 236, 248, 0.8)'],
    textColor: '#333',
  },
  rainy: {
    colors: ['rgba(100, 149, 237, 0.8)', 'rgba(70, 130, 180, 0.8)', 'rgba(65, 105, 225, 0.8)'],
    textColor: '#333',
  },
  snowy: {
    colors: ['rgba(240, 248, 255, 0.8)', 'rgba(224, 255, 255, 0.8)', 'rgba(175, 238, 238, 0.8)'],
    textColor: '#333',
  },
};


const Settings = () => {
  const { theme, setTheme } = useContext(WeatherContext);

  const handleThemeChange = (themeName) => {
    setTheme(themes[themeName]);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.title, { color: theme.textColor }]}>Settings</Text>
      <Text style={[styles.subtitle, { color: theme.textColor }]}>Select a Theme:</Text>
      <View style={styles.themeOptions}>
        {Object.keys(themes).map((themeName) => (
          <TouchableOpacity
            key={themeName}
            style={[
              styles.themeCard,
              themeName === 'sunny' && { backgroundColor: '#ffeb99' },
              themeName === 'rainy' && { backgroundColor: '#a8d8f0' },
              themeName === 'cloudy' && { backgroundColor: '#d3dce6' },
              themeName === 'snowy' && { backgroundColor: '#f0f8ff' },
            ]}
            onPress={() => handleThemeChange(themeName)}
          >
            <Text style={styles.themeText}>{themeName.charAt(0).toUpperCase() + themeName.slice(1)}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  themeOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  themeCard: {
    width: '45%',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  themeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Settings;
