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
  return weatherObj;
};

const handleFormSubmit = async (form) => {
  const weatherData = await getWeather();
  console.log(weatherData);
};

const createFormSubmitListener = (form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleFormSubmit(form);
  });
};

const createFormLogic = () => {
  const searchForm = document.querySelector("form");
  const searchIcon = document.querySelector(".search-icon");
  createFormSubmitListener(searchForm);
};

const createProgramLogic = async () => {
  createFormLogic();
};

export default createProgramLogic;
