const getPosition = (position) => {
  const { latitude, longitude } = position.coords;
  console.log("위도 : ", latitude);
  console.log("경도 : ", longitude);
};

const errorHandle = (error) => {
  console.error(error);
};

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(getPosition, errorHandle)
} else {
  console.log("geolocation is not available");
}
