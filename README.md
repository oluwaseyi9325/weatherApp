# WeatherApp

A simple React Native weather application that displays current weather information for a specified location.

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
    ```bash
    npm install
    ```
4. Add your OpenWeatherMap API key in `App.js`:
    ```javascript
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=YOUR_API_KEY`
    );
    ```
5. Start the app:
    ```bash
    expo start
    ```

## Features

- Enter a city or zip code to get current weather information
- Displays temperature, weather description, and an icon
- Loading state and error handling

## Technologies Used

- React Native
- Expo
- Axios

## Testing

Run the tests:
```bash
npm test
