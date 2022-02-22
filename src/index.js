import "./style.css";
import * as weather from "./modules/weather";

weather.get("london").then((data) => {
  console.log(data);
});

const form = document.querySelector("#cityForm");
const content = document.querySelector("#result");
const cityname = document.querySelector("#city-name");

form.addEventListener("submit", function (e) {
  weather.get(city.value).then((data) => {
    let test = `Agora em ${data.name}/${data.country} a temperatura é ${data.temp} graus. O clima atual é: ${data.weatherDescription}.`;
    console.log(test);
    content.innerText = test;
    cityname.innerText = data.name;
  });
  e.preventDefault();
});
