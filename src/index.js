import "./css/style.css";
const API_KEY = "01fa0b60d576a2763f846f47bcf10d33";

async function getWeather(location) {
  try {
    let fetchString =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      location +
      "&APPID=" +
      API_KEY;
    console.log(fetchString);
    const fetchAPI = await fetch(fetchString, { mode: "cors" });
    const fetchData = await fetchAPI.json();
    if (fetchData.cod == "400") throw `HTTP: ${fetchData.cod} - Invalid input.`;
    console.log();
  } catch (err) {
    console.error(err);
  }
}

getWeather();

window.testa = getWeather;
