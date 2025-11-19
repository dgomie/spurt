import { Text, View, StyleSheet } from 'react-native';
import SpurtTile from '../components/SpurtTile';
import DateWeatherTile from '../components/DateWeatherTile';

const exerciseDummyData = {
  title: 'exercise title',
  time: 'time to complete',
  icon: 'workout icon',
};

function HomeScreen() {
  function onPressHandler() {
    console.log('Pressed');
  }
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>Current Weather</Text>
      <DateWeatherTile />
      <Text style={styles.header}>Today's Spurts</Text>
      <SpurtTile exercise={exerciseDummyData} onPressHandler={onPressHandler} />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mainContainer: {
    marginTop: 15,
  }
});
