import "./style.css";
import * as weather from "./modules/weather";
import Icon from "./moscou.jpg";

weather.get("london").then((data) => {
  console.log(data);
});

const form = document.querySelector("#cityForm");
const content = document.querySelector("#result");
const cityname = document.querySelector("#city-name");
const img = document.querySelector("img");

img.src = Icon;

form.addEventListener("submit", function (e) {
  weather.get(city.value).then((data) => {
    let test = `The temperature in ${data.name}/${data.country} is now ${data.temp} celcius. The current weather is: ${data.weatherDescription}.`;
    console.log(test);
    content.innerText = test;
    cityname.innerText = data.name;
  });
  e.preventDefault();
});
