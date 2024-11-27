

import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { WeatherContext } from '../context/WeatherContext';
import BackButton from '../components/BackButton';

const PrivacyPolicy = ({ navigation }) => {
  const { theme } = useContext(WeatherContext);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <BackButton navigation={navigation} />
      <Text style={[styles.title, { color: theme.textColor }]}>Privacy Policy</Text>

      <Text style={[styles.sectionTitle, { color: theme.textColor }]}>1. Introduction</Text>
      <Text style={[styles.description, { color: theme.textColor }]}>
        Your privacy is a top priority at WeatherApp. This Privacy Policy outlines how we collect, use, and protect your
        information when you interact with our app.
      </Text>

      <Text style={[styles.sectionTitle, { color: theme.textColor }]}>2. Information We Collect</Text>
      <Text style={[styles.description, { color: theme.textColor }]}>
        We collect the following information to deliver accurate and tailored weather updates:
        {'\n'}- Personal Information: Location data (if allowed), user-provided details like email addresses.
        {'\n'}- Usage Information: App usage patterns, interactions, and preferences.
        {'\n'}- Device Information: IP address, device type, and operating system for app optimization.
      </Text>

      <Text style={[styles.sectionTitle, { color: theme.textColor }]}>3. How We Use Your Information</Text>
      <Text style={[styles.description, { color: theme.textColor }]}>
        {'\n'}- To Provide Services: Your location helps deliver precise weather data.
        {'\n'}- To Improve Features: Usage analytics guide app improvements.
        {'\n'}- To Communicate Updates: Notify users of critical weather alerts or app updates.
      </Text>

      <Text style={[styles.sectionTitle, { color: theme.textColor }]}>4. Data Sharing Policy</Text>
      <Text style={[styles.description, { color: theme.textColor }]}>
        We do not sell or share your personal information with third parties except:
        {'\n'}- When required by law.
        {'\n'}- To trusted service providers who work on our behalf under strict confidentiality agreements.
      </Text>

      <Text style={[styles.sectionTitle, { color: theme.textColor }]}>5. Data Security</Text>
      <Text style={[styles.description, { color: theme.textColor }]}>
        We implement robust security measures to safeguard your data, including encryption, secure storage, and access control.
        However, no method of data transmission or storage is entirely secure.
      </Text>

      <Text style={[styles.sectionTitle, { color: theme.textColor }]}>6. Your Rights</Text>
      <Text style={[styles.description, { color: theme.textColor }]}>
        You have the right to:
        {'\n'}- Access, modify, or delete your personal information.
        {'\n'}- Opt-out of data collection (e.g., disable location services).
        {'\n'}- Request clarification on our data practices.
      </Text>

      <Text style={[styles.footer, { color: theme.textColor }]}>
        For more information, please contact us at privacy@weatherappnative.com.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 26,
  },
  footer: {
    fontSize: 16,
    marginTop: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default PrivacyPolicy;