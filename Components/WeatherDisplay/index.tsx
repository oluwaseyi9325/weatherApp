import React from 'react';
import { View, Text, Image} from 'react-native';
import { styles } from './WeatherDisplay.styles';

interface Weather {
  temp: number;
  weather: { description: string; icon: string }[];
}

interface WeatherDisplayProps {
  weather: Weather | null;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }:any) => {
  if (!weather || !weather.weather || weather.weather.length === 0) return null;

  const { temp, weather: weatherDetails } = weather;
  const { description, icon } = weatherDetails[0];

  return (
    <View style={styles.container}>
      <Text style={styles.temp}>{Math.round(weather?.main?.temp)}°C</Text>
      <Text style={styles.description}>{weather?.weather[0]?.description}</Text>
      <Image
        style={styles.icon}
        source={{ uri: `http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}.png` }}
      />
    </View>
  );
};



export default WeatherDisplay;
