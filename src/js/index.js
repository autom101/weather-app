//Import css
import "../css/reset.css";
import "../css/styles.css";

//Import js
import createDom from "./dom";
import getWeather from "./weather";

onload = () => {
  getWeather();
};
