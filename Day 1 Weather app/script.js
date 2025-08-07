const Url =
  "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=e243932d4573c702a154bfef5c50c8b3";
const searchInput = document.querySelector(".loc-input"); // --
const searchBtn = document.querySelector(".search-icon"); // --
const weatherIcon = document.querySelector(".img-weather img");
const heroTemp = document.querySelector(".temp h1");
const heroLoc = document.querySelector(".location"); // --
const humidity = document.querySelector(".hum-percentage"); // --
const windSpeed = document.querySelector(".wind-speed"); // --
document.querySelector(".container").style.display = "";ent.querySelector(".speed"); // --

let getweather = async () => {
  const loc = searchInput.value;
  let reqUrl = Url.replace("{city name}", loc);
  let weather = await fetch(reqUrl);
  if (!weather.ok) {
    document.querySelector(".content").style.display = "none";
    document.querySelector(".error").style.display = "block";
  }else {
  let data = await weather.json();
  heroLoc.innerHTML = data.name;
  humidity.innerText = data.main.humidity + "%";
  windSpeed.innerText = data.wind.speed + " km/h";
  let newherotemp = data.main.temp - 273.15;
  newherotemp = Math.round(newherotemp);
  heroTemp.innerText = newherotemp + "°c";
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].main.toLowerCase()}@2x.png`;
  document.querySelector(".content").style.display = "block";
  }
};

searchBtn.addEventListener("click", () => {
  getweather();
});
searchInput.addEventListener("keydown", (evt) => {
  if (evt.key === "Enter") {
    getweather();
  }
});
