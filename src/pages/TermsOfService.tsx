import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { WeatherContext, WeatherContextProps } from '../context/WeatherContext';
import BackButton from '../components/BackButton';

interface TermsOfServiceProps {
  navigation: any; // Replace `any` with a more specific navigation type if available
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ navigation }) => {
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
    <ScrollView style={[styles.container, { backgroundColor: theme.colors[0] }]}>
      <BackButton navigation={navigation} />
      <Text style={[styles.title, { color: theme.textColor }]}>Terms of Service</Text>

      <Text style={[styles.sectionTitle, { color: theme.textColor }]}>1. Agreement to Terms</Text>
      <Text style={[styles.description, { color: theme.textColor }]}>
        By accessing WeatherApp, you agree to these Terms of Service. If you do not agree, you must refrain from using
        our services.
      </Text>

      <Text style={[styles.sectionTitle, { color: theme.textColor }]}>2. Service Description</Text>
      <Text style={[styles.description, { color: theme.textColor }]}>
        - WeatherApp provides weather updates, forecasts, and health insights.
        - Services are offered "as-is" without guarantees for absolute accuracy.
        - We reserve the right to modify or discontinue services without prior notice.
      </Text>

      <Text style={[styles.sectionTitle, { color: theme.textColor }]}>3. User Responsibilities</Text>
      <Text style={[styles.description, { color: theme.textColor }]}>
        As a user, you agree to:
        - Use the app for lawful purposes.
        - Respect intellectual property rights of content provided.
        - Not engage in activities that compromise app security.
      </Text>

      <Text style={[styles.sectionTitle, { color: theme.textColor }]}>4. Limitation of Liability</Text>
      <Text style={[styles.description, { color: theme.textColor }]}>
        - WeatherApp is not liable for damages arising from inaccuracies, service interruptions, or user reliance on provided data.
        - Users are encouraged to cross-verify critical weather information.
      </Text>

      <Text style={[styles.sectionTitle, { color: theme.textColor }]}>5. Governing Law</Text>
      <Text style={[styles.description, { color: theme.textColor }]}>
        These Terms are governed by the laws of your jurisdiction. Disputes will be resolved in the appropriate courts of law.
      </Text>

      <Text style={[styles.footer, { color: theme.textColor }]}>
        For any inquiries, please contact us at support@weatherappnative.com.
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

export default TermsOfService;