import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import LinkButton from '../components/LinkButton';

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text>Contact Page</Text>
      <LinkButton page="about" title= "Go to about page"/>
      <LinkButton page="/" title= "Go back to home page"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#748cf8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
