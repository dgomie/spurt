import 'dotenv/config';

export default {
  expo: {
    name: 'spurt',
    slug: 'spurt',
    version: '1.0.0',
    extra: {
      openWeatherApiKey: process.env.OPENWEATHER_API_KEY,
    },
  },
};