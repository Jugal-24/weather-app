// Function to get coordinates from a location name
async function getCoordinates() {
    const location = document.getElementById('location').value;
    const apiKey = '078494d08a574495b438f931c9ffe875'; // Replace with your actual OpenCage API key

    if (location) {
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(location)}&key=${apiKey}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.results && data.results.length > 0) {
                const { lat, lng } = data.results[0].geometry;
                // Call the getWeather function with the retrieved latitude and longitude
                document.getElementById('coordinatesResult').innerHTML = `Latitude: ${lat}, Longitude: ${lng}`;
                getWeather(lat, lng);
            } else {
                document.getElementById('weatherResult').innerHTML = "Location not found.";
            }
        } catch (error) {
            document.getElementById('weatherResult').innerHTML = "Error fetching data.";
        }
    } else {
        document.getElementById('weatherResult').innerHTML = "Please enter a location.";
    }
}

// Function to get weather data based on latitude and longitude
async function getWeather(lat, lon) {
    const apiKey = 'c0fd7cd32302b14bf3dfe4f030deb5f9'; // Replace with your actual OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data && data.weather) {
            const description = data.weather[0].description.toLowerCase();
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            document.getElementById('weatherResult').innerHTML = `
                Weather: ${description}<br>
                Temperature: ${temperature}°C<br>
                Humidity: ${humidity}%<br>
                Wind Speed: ${windSpeed} m/s
            `;

            // Change background color based on weather description
            document.body.className = ""; // Reset existing class

            if (description.includes("thunderstorm")) {
                document.body.classList.add("thunderstorm");
            } else if (description.includes("drizzle")) {
                document.body.classList.add("drizzle");
            } else if (description.includes("rain")) {
                document.body.classList.add("rain");
            } else if (description.includes("snow")) {
                document.body.classList.add("snow");
            } else if (description.includes("mist") || description.includes("fog") || description.includes("haze")) {
                document.body.classList.add("mist");
            } else if (description.includes("smoke") || description.includes("dust") || description.includes("ash")) {
                document.body.classList.add("smoke");
            } else if (description.includes("sand")) {
                document.body.classList.add("sand");
            } else if (description.includes("squall") || description.includes("tornado")) {
                document.body.classList.add("squall");
            } else {
                document.body.classList.add("default"); // Default background color
            }
        } else {
            document.getElementById('weatherResult').innerHTML = "Weather data not found.";
        }
    } catch (error) {
        document.getElementById('weatherResult').innerHTML = "Error fetching weather data.";
    }
}

