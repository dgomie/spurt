import { Text, View, StyleSheet } from 'react-native';

function DateWeatherTile() {
  return (
    <View style={styles.mainContainer}>
      <Text>Date</Text>
      <Text>Weather Icon</Text>
      <Text>Weather Temp</Text>
    </View>
  );
}

export default DateWeatherTile;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A1C181',
    padding: 16,
    gap: 12,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 24,
    margin: 24,
  },
});
