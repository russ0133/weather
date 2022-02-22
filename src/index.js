import "./css/style.css";
const API_KEY = "01fa0b60d576a2763f846f47bcf10d33";

function parseJsonData(json) {
  let weatherData = {
    name: null,
    country: null,
    temp: null,
    weather: null,
    weatherDescription: null,
  };
  weatherData.name = json.name;
  weatherData.country = json.sys.country;
  weatherData.temp = json.main.temp.toFixed(1);
  weatherData.weather = json.weather[0].main;
  weatherData.weatherDescription = json.weather[0].description;
  return weatherData;
}

async function getWeather(location) {
  try {
    let fetchString =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      location +
      "&APPID=" +
      API_KEY +
      "&units=metric&lang=pt_br";
    console.log(fetchString);
    const fetchAPI = await fetch(fetchString, { mode: "cors" });
    const fetchData = await fetchAPI.json();
    if (fetchData.cod == "400") throw `HTTP: ${fetchData.cod} - Invalid input.`;

    const weatherData = parseJsonData(fetchData);
    console.log(fetchData);
    console.log(
      `Agora em ${weatherData.name}/${weatherData.country} a temperatura é ${weatherData.temp} graus, com ${weatherData.weatherDescription}.`
    );
  } catch (err) {
    console.error(err);
  }
}

getWeather("London");

window.testa = getWeather;
