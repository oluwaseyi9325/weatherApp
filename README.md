# WeatherApp

A simple React Native weather application that displays current weather information for a specified location.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/weather-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd weather-app
    ```

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

## Starting the App

To start the app, run the following commands:

1. Install Expo CLI globally (if not already installed):

    ```bash
    npm install -g expo-cli
    ```

2. Start the Expo development server:

    ```bash
    npm start
    ```

3. Open the Expo Go app on your device and scan the QR code to run the app.

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
