const API_KEY = "01fa0b60d576a2763f846f47bcf10d33";

export async function get(location) {
  try {
    let fetchString =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      location +
      "&APPID=" +
      API_KEY +
      "&units=metric&lang=pt_br";
    const fetchAPI = await fetch(fetchString, { mode: "cors" });
    const fetchData = await fetchAPI.json();
    if (fetchData.cod == "400") throw `HTTP: ${fetchData.cod} - Invalid input.`;

    const weatherData = parseJsonWeatherData(fetchData);
    let test = `Agora em ${weatherData.name}/${weatherData.country} a temperatura é ${weatherData.temp} graus. O clima atual é: ${weatherData.weatherDescription}.`;
    return test;
  } catch (err) {
    console.error(err);
  }
}

function parseJsonWeatherData(json) {
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
