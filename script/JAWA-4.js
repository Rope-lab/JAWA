// Get weather information for a city
// Set a default city to display weather information when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const defaultCity = 'Stockholm';
    document.querySelector('.search-box input').value = defaultCity;
    getWeather();
});
function getWeather() {
    const cityName = document.querySelector('.search-box input').value;
    // Implementation for fetching weather data would go here
    // Display weather information on the page usin openweather api
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2f3f32634ce5619eda18c5070e13c3f0&units=metric`)
        .then(response => response.json())
        .then(data => {
            // Process and display weather data
                const todayContainer = document.getElementById('today');
                /* const iconImg = document.getElementById('weather-icon');
                iconImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`; */
                console.log(data);
                todayContainer.innerHTML = `
                    <h2>${data.name} idag</h2>
                    <p>Temperatur: ${data.main.temp} °C</p>
                    <p>Luftfuktighet: ${data.main.humidity}%</p>
                    <p>Vind: ${data.wind.speed} m/s</p>
                    <p>Beskrivning: ${data.weather[0].description}</p>
                    <p><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon" class="weather-icon"></p>
                `;
                // Get forecast data for tomorrow and the day after tomorrow using the One Call API
                // ${getWeatherIcon(data.weather[0].icon)}
        })

        .catch(error => console.error('Error fetching weather data:', error));

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=2f3f32634ce5619eda18c5070e13c3f0&units=metric`)
        .then(response => response.json())
        .then(data => {
            // Process and display forecast data
                const tomorrowContainer = document.getElementById('tomorrow');
                const dayAfterTomorrowContainer = document.getElementById('day-after-tomorrow');
                const tomorrowData = data.list[8];
                const dayAfterTomorrowData = data.list[16];
                console.log(tomorrowData);
                console.log(dayAfterTomorrowData);
                let tomorrowDay = getDayOfWeek(tomorrowData.dt_txt);
                let dayAfterTomorrowDay = getDayOfWeek(dayAfterTomorrowData.dt_txt);
                tomorrowContainer.innerHTML = `
                    <h2>${tomorrowDay}</h2>
                    <p>Temperatur: ${tomorrowData.main.temp} °C</p>
                    <p>Luftfuktighet: ${tomorrowData.main.humidity}%</p>
                    <p>Vind: ${tomorrowData.wind.speed} m/s</p>
                    <p>Beskrivning: ${tomorrowData.weather[0].description}</p>
                    <p><img src="http://openweathermap.org/img/wn/${tomorrowData.weather[0].icon}.png" alt="Weather Icon" class="weather-icon"></p>
                `;
                dayAfterTomorrowContainer.innerHTML = `
                    <h2>${dayAfterTomorrowDay}</h2>
                    <p>Temperatur: ${dayAfterTomorrowData.main.temp} °C</p>
                    <p>Luftfuktighet: ${dayAfterTomorrowData.main.humidity}%</p>
                    <p>Vind: ${dayAfterTomorrowData.wind.speed} m/s</p>
                    <p>Beskrivning: ${dayAfterTomorrowData.weather[0].description}</p>
                    <p><img src="http://openweathermap.org/img/wn/${dayAfterTomorrowData.weather[0].icon}.png" alt="Weather Icon" class="weather-icon"></p>
                `;
        })

        .catch(error => console.error('Error fetching weather data:', error));
}

function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    const options = { weekday: 'long' };
    return date.toLocaleDateString(undefined, options);
}
function getWeatherIcon(iconCode) {
    // Implementation for fetching weather icons from OpenWeatherMap
    let iconImg = document.getElementById('weather-icon');
    iconImg.src = `http://openweathermap.org/img/wn/${iconCode}.png`;
}
//getWeather();