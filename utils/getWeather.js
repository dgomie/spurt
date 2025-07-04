import * as Location from 'expo-location';
import Constants from 'expo-constants';

export async function getWeather() {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      throw new Error('Location permission not granted');
    }

    const location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;

    const API_KEY = Constants.expoConfig?.extra?.openWeatherApiKey;
    if (!API_KEY) {
      throw new Error('API key is missing. Please check your configuration.');
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) throw new Error(data.message || 'Error fetching weather');
    return data;
  } catch (error) {
    console.error('Weather fetch error:', error);
    return null;
  }
}
