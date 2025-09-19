import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import LinkButton from '../components/LinkButton';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Main Page</Text>
      <LinkButton page="about" title= "Go to about page"/>
      <LinkButton page="contact" title= "Go to contact page"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
