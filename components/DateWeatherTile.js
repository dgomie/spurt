import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';
import useWeather from '../hooks/useWeather';

function DateWeatherTile() {
  const { weather, loading } = useWeather();

  if (loading) return <ActivityIndicator size="large" />;
  console.log(weather)

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.data}>Date</Text>
      <Text>Current Temp: {weather?.main?.temp}°C</Text>
      <Text>Condition: {weather?.weather[0]?.description}</Text>
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
    borderTopLeftRadius: 24,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 24,
    margin: 24,
  },

  data: {
    margin: 12,
  },
});
