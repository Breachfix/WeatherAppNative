import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { WeatherContext, WeatherContextProps } from '../context/WeatherContext';
import BackButton from '../components/BackButton';

interface ProfileProps {
  navigation: any; // Replace `any` with a more specific navigation type if available
}

const Profile: React.FC<ProfileProps> = ({ navigation }) => {
  const context = useContext<WeatherContextProps | undefined>(WeatherContext);

  if (!context) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Unable to load theme data</Text>
      </View>
    );
  }

  const { theme } = context;

  return (
    <View style={[styles.container, { backgroundColor: theme.colors[0] }]}>
      <BackButton navigation={navigation} />
      <Image
        source={{ uri: 'https://via.placeholder.com/100' }}
        style={styles.profileImage}
      />
      <Text style={[styles.name, { color: theme.textColor }]}>John Doe</Text>
      <Text style={[styles.email, { color: theme.textColor }]}>john.doe@example.com</Text>
      <Text style={[styles.description, { color: theme.textColor }]}>
        This is your profile page. Manage your account and preferences here.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
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

export default Profile;