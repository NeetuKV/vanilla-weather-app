function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  //calcuate date
  return `${day} ${hours}:${minutes}`;
}

function displayForcast() {
  let forecastElement = document.querySelector("#forecast");
  let days = ["Mon", "Tue", "Wed"];
  let forecastHTML = `<div class="row">`;
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `
        <div class="col-2">
          <div class="weather-forecast-date">${day}</div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt=""
            width="42"
          />
          <div class="weather-forecast-temperature">
            <span class="weather-forecast-temperature-max">18</span>
            <span class="weather-forecast-temperature-min">12</span>
          </div>
        </div>
      `;
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
  console.log(forecastHTML);
}
function displayTemperature(response) {
  console.log(response.data);
  let temeratureElement = document.querySelector("#temperature");
  celciusTemperature = response.data.main.temp;
  temeratureElement.innerHTML = Math.round(celciusTemperature);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.dt * 1000);

  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}
function search(city) {
  let apiKey = "f61ab93bd3a752952443b3a7d6737cef";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  //console.log(cityInputElement.value);
  search(cityInputElement.value);
}
//control of html by js(forms info)
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

//change from celcius to farenheit
let celciusTemperature = null;
function changeToFarenheit(event) {
  event.preventDefault();
  //remove active class to celcius link and remove active class from farenheit link
  celciusLink.classList.remove("active");
  farenheitLink.classList.add("active");
  let temperatureElement = document.querySelector("#temperature");
  let farenheitTemperature = (celciusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(farenheitTemperature);
}
let farenheitLink = document.querySelector("#farenheit-link");
farenheitLink.addEventListener("click", changeToFarenheit);

//change from farenheit to celcius

function changeToCelcius(event) {
  event.preventDefault();
  //remove active class to farenheit link and remove active class from celcius link
  farenheitLink.classList.remove("active");
  celciusLink.classList.add("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celciusTemperature);
}
let celciusLink = document.querySelector("#celcius-link");
celciusLink.addEventListener("click", changeToCelcius);

search("New York");
//displayForcast();
