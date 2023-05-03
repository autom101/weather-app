const getWeather = async () => {
  const weather = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=73de09befe32494386305144230205&q=" +
      "Edmonton" +
      "&aqi=no",
    {
      mode: "cors",
    }
  );
  const weatherObj = await weather.json();
  console.log(weatherObj.current);
};

export default getWeather;
