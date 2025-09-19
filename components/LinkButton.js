import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function LinkButton({page, title}) {
  return (
    <View style={styles.container}>
      <Link href={page}>{title}</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:75,
    width: 300,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
