import { Text, View, StyleSheet } from 'react-native';
import SpurtTile from '../components/SpurtTile';

function HomeScreen() {
  return (
    <View>
      <Text>Welcome Back</Text>
      <Text style={styles.header}>Today's Spurts</Text>
      <SpurtTile />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
})