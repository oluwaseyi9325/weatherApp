import React, { useState } from 'react';
import { Text, View, TextInput, Button, ActivityIndicator, KeyboardAvoidingView, Platform, ImageBackground } from 'react-native';
import axios from 'axios';
import WeatherDisplay from './Components/WeatherDisplay';
import { BlurView } from 'expo-blur';
import { styles } from './App.styles';

const App: React.FC = () => {
  const [location, setLocation] = useState<string>('');
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  
   const LOCATION_KEY=process.env.secret_key||"705229e904100a25b8129b2a69b46fbe"
  const fetchWeather = async () => {
    setLoading(true);
    setError('');
    try {
      let response;
      if (isNaN(Number(location))) {
        response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${LOCATION_KEY}`
        );
      } else {
        response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?zip=${location}&units=metric&appid=${LOCATION_KEY}`
        );
      }
      setWeather(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError('Could not fetch weather data. Please try again!');
    }
  };

  return (
    <ImageBackground
      source={require("./assets/bg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <BlurView intensity={50} style={styles.blur}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Weather App</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter city or zip code"
              value={location}
              onChangeText={setLocation}
              placeholderTextColor="#ccc"
            />
            <Button title="Get Weather" onPress={fetchWeather} color="#1e90ff" />
            {loading && <ActivityIndicator size="large" color="#1e90ff" />}
            {error ? <Text style={styles.error}>{error}</Text> : <WeatherDisplay weather={weather} />}
          </View>
        </KeyboardAvoidingView>
      </BlurView>
    </ImageBackground>
  );
};



export default App;
