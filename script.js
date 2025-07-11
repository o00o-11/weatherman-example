const getCurrenWeather = (lat, lon) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4a3724571f65ec296cde31a258ed847b`;

  console.log(URL);
}

const getPosition = (position) => {
  const { latitude, longitude } = position.coords;
  getCurrenWeather(latitude, longitude);
};

const errorHandle = (error) => {
  console.error(error);
};

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(getPosition, errorHandle)
} else {
  console.log("geolocation is not available");
}
