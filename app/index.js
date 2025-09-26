import { Link } from 'expo-router';
import LinkButton from '../components/LinkButton';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Main Page</Text>
      <LinkButton page="about" title= "Go to about page"/>
      <LinkButton page="contact" title= "Go to contact page"/>
      <LinkButton page="profile" title= "Go to profile page"/>
      <LinkButton page= "camera" title= "Go to camera page"/>
      <LinkButton page= "gallery" title= "Go to gallery page"/>
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
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 64,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: '100%',
    paddingHorizontal: 64,
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
