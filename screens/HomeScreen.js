import { Text, View, StyleSheet } from 'react-native';
import SpurtTile from '../components/SpurtTile';

function HomeScreen() {
  return (
    <View>
      <Text>Spurt Home Screen</Text>
      <SpurtTile />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({})