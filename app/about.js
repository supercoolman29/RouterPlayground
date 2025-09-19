import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native';
import LinkButton from '../components/LinkButton';

export default function About() {
  return (
    <View style={styles.container}>
      <Text>About Page</Text>
      <LinkButton page="contact" title= "Go to contact page"/>
      <LinkButton page="/" title= "Go back to home page"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b33d3dff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
