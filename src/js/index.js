//Import css
import "../css/reset.css";
import "../css/styles.css";

//Import js
import config from "../../config.js";

const getWeather = async () => {
  const fetchWeather = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=" +
      config.weatherApi_key +
      "&q=" +
      "London",
    {
      mode: "cors",
    }
  );
  const weatherObj = await fetchWeather.json();
  console.log(weatherObj);
};

getWeather();
