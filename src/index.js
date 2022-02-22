import "./style.css";
import * as weather from "./modules/weather";

weather.get("london").then((data) => {
  console.log(data);
});

const form = document.querySelector(".cityForm");
form.addEventListener("submit", function (e) {
  weather.get(city.value).then((data) => {
    console.log(data);
  });
  e.preventDefault();
});
