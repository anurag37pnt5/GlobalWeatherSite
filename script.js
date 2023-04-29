const API_KEY = "9963cad83c99e758dc3fb007b82781ac";
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

function getWeatherData(city) {
  const url = `${CORS_PROXY}http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}
