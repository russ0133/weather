const API_KEY = "01fa0b60d576a2763f846f47bcf10d33";
const CONDITION_THUNDERSTORM = 0;
const CONDITION_DRIZZLE = 1;
const CONDITION_RAIN = 2;
const CONDITION_SNOW = 3;
const CONDITION_ATMOS = 4;
const CONDITION_CLEAR = 5;
const CONDITION_CLOUDS = 6;
const body = document.querySelector("body");
export async function get(location) {
  try {
    let fetchString =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      location +
      "&APPID=" +
      API_KEY +
      "&units=metric";
    const fetchAPI = await fetch(fetchString, { mode: "cors" });
    const fetchData = await fetchAPI.json();
    if (fetchData.cod == "400") throw `HTTP: ${fetchData.cod} - Invalid input.`;
    console.log(fetchData);
    const weatherData = parseJsonWeatherData(fetchData);
    console.log(weatherData.weatherid);
    updateBackgroundColorBasedOnClimate(weatherData.weatherid);
    return weatherData;
  } catch (err) {
    console.error(err);
  }
}

function updateBackgroundColorBasedOnClimate(climateid) {
  let condition = getWeatherCondition(climateid);
  if (condition == CONDITION_THUNDERSTORM) {
    body.style.backgroundColor = "black";
  } else if (condition == CONDITION_DRIZZLE) {
    body.style.backgroundColor = "lightblue";
  } else if (condition == CONDITION_RAIN) {
    body.style.backgroundColor = "grey";
  } else if (condition == CONDITION_SNOW) {
    body.style.backgroundColor = "whitesmoke";
  } else if (condition == CONDITION_ATMOS) {
    body.style.backgroundColor = "grey";
  } else if (condition == CONDITION_CLEAR) {
    body.style.backgroundColor = "white";
  } else if (condition == CONDITION_CLOUDS) {
    body.style.backgroundColor = "white";
  }
}
function getWeatherCondition(conditionid) {
  if (conditionid >= 200 && conditionid <= 299) return CONDITION_THUNDERSTORM;
  else if (conditionid >= 300 && conditionid <= 399) return CONDITION_DRIZZLE;
  else if (conditionid >= 500 && conditionid <= 599) return CONDITION_RAIN;
  else if (conditionid >= 600 && conditionid <= 699) return CONDITION_SNOW;
  else if (conditionid >= 700 && conditionid <= 799) return CONDITION_ATMOS;
  else if (conditionid == 800) return CONDITION_CLEAR;
  else if (conditionid > 800 && conditionid <= 804) return CONDITION_CLOUDS;
  else return undefined;
}

function parseJsonWeatherData(json) {
  let weatherData = {
    name: null,
    country: null,
    temp: null,
    weatherid: null,
    weatherDescription: null,
  };
  weatherData.name = json.name;
  weatherData.country = json.sys.country;
  weatherData.temp = json.main.temp.toFixed(1);
  weatherData.weatherid = json.weather[0].id;
  weatherData.weatherDescription = json.weather[0].description;
  return weatherData;
}
