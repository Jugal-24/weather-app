# Weather App

A simple web application that provides the current weather conditions for a specified location. The application uses the **OpenCage Geocoding API** to convert a location name into its corresponding latitude and longitude coordinates. With these coordinates, it then fetches detailed weather data using the **OpenWeatherMap API**.

## Features

- **Location-based Weather Information**: Enter any location name to get the latest weather conditions, including temperature, humidity, wind speed, and a brief weather description.
- **Automatic Background Color Change**: The background color changes dynamically based on the weather description to provide a visual representation of the conditions.
- **User-friendly Interface**: Simple and intuitive interface with a sliding animation for a smooth user experience.

## How It Works

1. **User Input**: The user enters the name of a location (e.g., "New York").
2. **Geocoding with OpenCage API**: The app makes a call to the OpenCage Geocoding API to retrieve the latitude and longitude of the specified location.
3. **Weather Data Fetching**: Using the obtained coordinates, the app then calls the OpenWeatherMap API to fetch real-time weather information.
4. **Display and Styling**: The weather data is displayed on the page, and the background color updates based on the weather conditions to reflect them visually.

## Technologies Used

- **HTML, CSS, JavaScript**: Core web technologies for structure, styling, and functionality.
- **OpenCage Geocoding API**: For converting location names into geographic coordinates.
- **OpenWeatherMap API**: For retrieving current weather conditions based on geographic coordinates.

## API Setup

To use this app, you’ll need API keys for both OpenCage and OpenWeatherMap. Follow these steps to obtain and integrate them:

1. **OpenCage API Key**:
   - Sign up on [OpenCage Geocoding API](https://opencagedata.com/).
   - Obtain your API key from your account dashboard.
   - Replace the placeholder `'YOUR_OPENCAGE_API_KEY'` in `script.js` with your OpenCage API key.

2. **OpenWeatherMap API Key**:
   - Sign up on [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).
   - Obtain your API key from your account dashboard.
   - Replace the placeholder `'YOUR_WEATHER_API_KEY'` in `script.js` with your OpenWeatherMap API key.

## Usage

1. Clone or download this repository to your local machine.
2. Open `index.html` in your preferred web browser.
3. Enter a location name in the input field and click "Get weather update" to see the weather conditions.

## Example

For example, entering "Paris" as the location might return:
   - **Weather**: Clear sky
   - **Temperature**: 15°C
   - **Humidity**: 60%
   - **Wind Speed**: 3 m/s

The page background will also change color to match the general description of the weather.

## License

This project is open source and available under the [MIT License](LICENSE).
