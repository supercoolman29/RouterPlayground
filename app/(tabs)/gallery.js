import { StyleSheet, Text, View } from 'react-native';
import LinkButton from '../../components/LinkButton';

export default function About() {
  return (
    <View style={styles.container}>
      <Text>Gallery</Text>
      <LinkButton page="/" title= "Go back to home page"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#df4eb4ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});