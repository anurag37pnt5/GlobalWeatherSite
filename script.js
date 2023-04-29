const apiKey = '9963cad83c99e758dc3fb007b82781ac';
const weatherForm = document.getElementById('weather-form');
const weatherDiv = document.getElementById('weather');

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperature = Math.round(data.main.temp);
            const description = data.weather[0].description;
            weatherDiv.innerHTML = `<p>Current weather in ${city}:</p><p>${temperature}°F - ${description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherDiv.innerHTML = `<p>Unable to fetch weather data for ${city}. Please check the city name and try again.</p>`;
        });
});
