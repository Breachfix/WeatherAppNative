// import React from 'react';
// import { TouchableOpacity, Text, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';

// const BackButton = ({ navigation }) => {
//   return (
//     <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//       <Icon name="arrow-left" size={20} color="#007AFF" />
//       <Text style={styles.backText}>Back</Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   backButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   backText: {
//     marginLeft: 8,
//     fontSize: 16,
//     color: '#007AFF',
//     fontWeight: 'bold',
//   },
// });

// export default BackButton;

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StackNavigationProp } from '@react-navigation/stack';

// Define props for the BackButton component
interface BackButtonProps {
  navigation: StackNavigationProp<any, any>; // Adjust 'any' to match your navigation type
}

const BackButton: React.FC<BackButtonProps> = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.goBack()}
    >
      <Icon name="arrow-left" size={20} color="#007AFF" />
      <Text style={styles.backText}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#007AFF',
    fontWeight: 'bold',
  },
});

export default BackButton;