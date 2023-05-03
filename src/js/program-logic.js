import emoticonSad from "../img/emoticon-sad-outline.svg";
import { format } from "date-fns";

const getWeather = async (city) => {
  try {
    const weather = await fetch(
      "http://api.weatherapi.com/v1/current.json?key=73de09befe32494386305144230205&q=" +
        city +
        "&aqi=no",
      {
        mode: "cors",
      }
    );
    const weatherObj = await weather.json();
    return weatherObj;
  } catch (error) {
    console.log(error);
    return;
  }
};

const updateWeatherDisplay = (weatherData, providedLocation) => {
  const weatherContainer = document.querySelector(".weather-container");

  const weatherTitle = document.querySelector(".weather-title");
  const weatherTime = document.querySelector(".weather-time");
  const weatherCondition = document.querySelector(".weather-condition");
  const weatherConditionIcon = document.querySelector(
    ".weather-condition-icon"
  );
  const weatherTemperature = document.querySelector(".weather-temperature");
  const weatherHumidity = document.querySelector(".weather-humidity");
  const weatherWind = document.querySelector(".weather-wind");

  try {
    const time = weatherData.current.last_updated_epoch * 1000;
    const conditionText = weatherData.current.condition.text;
    const conditionIcon = weatherData.current.condition.icon;

    const temperature = weatherData.current.temp_c;
    const humidity = weatherData.current.humidity;
    const wind = weatherData.current.gust_kph;

    weatherTitle.textContent = "Weather at " + providedLocation;

    weatherTime.textContent = format(time, "E K:m bbb");
    weatherCondition.textContent = conditionText;

    weatherConditionIcon.src = conditionIcon;

    weatherTemperature.textContent = temperature + String.fromCodePoint(8451);
    weatherHumidity.textContent = "Humidity: " + humidity;
    weatherWind.textContent = "Wind: " + wind + "kph";
  } catch (error) {
    console.log(error);
    weatherTitle.textContent = "is not valid, try again";
    weatherTime.textContent = "N/A";
    weatherCondition.textContent = "N/A";
    weatherConditionIcon.src = emoticonSad;
    weatherTemperature.textContent = "N/A" + String.fromCodePoint(8451);
    weatherHumidity.textContent = "Humidity: " + "N/A";
    weatherWind.textContent = "Wind: " + "N/A" + "kph";
  } finally {
    weatherContainer.classList.remove("hide");
  }
};

const handleFormSubmit = async (form) => {
  const searchData = new FormData(form);
  const city = searchData.get("city");

  const weatherData = await getWeather(city);
  console.log(weatherData);

  updateWeatherDisplay(weatherData, city);
};

const createFormSubmitListener = (form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleFormSubmit(form);
  });
};

const createFormLogic = () => {
  const searchForm = document.querySelector("form");
  createFormSubmitListener(searchForm);
};

const createProgramLogic = async () => {
  createFormLogic();
};

export default createProgramLogic;
