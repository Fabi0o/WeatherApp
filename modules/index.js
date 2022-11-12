import { variables } from "./variables.js";
let fetchGeoLoc = () => {
  let geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${variables.cityName}&limit=1&appid=d4bd38577edc9a392e8e0085c74b24fc`;
  fetch(geoURL)
    .then((resp) => resp.json())
    .then((data) => {
      variables.geoResp = data;
      variables.lat = variables.geoResp[0].lat;
      variables.lon = variables.geoResp[0].lon;
      console.log(variables.lat);
      fetchWeather();
    });
};

let fetchWeather = () => {
  let weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${variables.lat}&lon=${variables.lon}&units=metric&appid=d4bd38577edc9a392e8e0085c74b24fc`;
  fetch(weatherURL)
    .then((resp) => resp.json())
    .then((data) => console.log(data));
};
fetchGeoLoc();
