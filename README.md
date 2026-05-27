Just Another Weather App
This is a simple weather application that provides current weather information for a specified location.

Features
Current weather conditions
Temperature in Celsius and Fahrenheit
Humidity and wind speed
Weather icons for visual representation
Technologies Used
HTML5
CSS3
JavaScript (Fetch API)
OpenWeatherMap API
Usage
To use the app, simply enter a city name in the search bar and click the "Get Weather" button. The app will fetch and display the current weather information for that location.

Example Code Snippet
// Fetch weather data from OpenWeatherMap API
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        // Process and display weather data
    })
    .catch(error => console.error('Error fetching weather data:', error));
