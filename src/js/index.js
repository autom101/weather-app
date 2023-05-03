//import img

//Import css
import "../css/reset.css";
import "../css/styles.css";

//Import js
import createDom from "./dom";
import getWeather from "./weather";

onload = async () => {
  createDom();
  const weatherData = await getWeather();
  console.log(weatherData);
};
