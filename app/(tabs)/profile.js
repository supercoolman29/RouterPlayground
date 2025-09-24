import { StyleSheet, Text, View } from 'react-native';
import LinkButton from '../../components/LinkButton';

export default function About() {
  return (
    <View style={styles.container}>
      <Text>About Page</Text>
      <LinkButton page="/" title= "Go back to home page"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4edf8fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
