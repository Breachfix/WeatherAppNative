import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { WeatherContext } from '../context/WeatherContext';
import BackButton from '../components/BackButton';


const Profile = ({ navigation }) => {
  const { theme } = useContext(WeatherContext);

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
});

export default Profile;