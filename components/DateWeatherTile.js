import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';
import useWeather from '../hooks/useWeather';

function DateWeatherTile() {
  const { weather, loading } = useWeather();

  if (loading) return <ActivityIndicator size="large" />;

  const currentDate = new Date().toLocaleDateString();
  
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.data}>{currentDate}</Text>
      <Text style={styles.data}>
        Current Temp: {weather?.main?.temp !== undefined ? Math.round(weather.main.temp) : "N/A"}°F
      </Text>
      <Text style={styles.data}>
        {weather?.weather[0]?.description || "No description available"}
      </Text>
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
    margin: 8,
  },
});
