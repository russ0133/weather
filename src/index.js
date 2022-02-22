import "./style.css";
import * as weather from "./modules/weather";

weather.get("london").then((data) => {
  console.log(data);
});

const form = document.querySelector("#cityForm");
const content = document.querySelector("#result");
form.addEventListener("submit", function (e) {
  weather.get(city.value).then((data) => {
    console.log(data);
    content.innerText = data;
  });
  e.preventDefault();
});
