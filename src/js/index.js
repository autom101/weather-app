//Import css
import "../css/reset.css";
import "../css/styles.css";

//Import js

const getWeather = async () => {
  const fetchWeather = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=73de09befe32494386305144230205&q=" +
      "Edmonton" +
      "&aqi=no",
    {
      mode: "cors",
    }
  );
  const weatherObj = await fetchWeather.json();
  console.log(weatherObj);
};

getWeather();
