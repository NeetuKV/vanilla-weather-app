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
function formatDate1(timestamp) {
  //let date = new Date(timestamp);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let today = new Date();
  let day = today.getDay();
  //calcuate date
  let da = days[day];
  return `${da}`;
}
function displayTemperature(response) {
  console.log(response.data);
  let temeratureElement = document.querySelector("#temperature");
  celciusTemperature = response.data.main.temp;
  temeratureElement.innerHTML = Math.round(celciusTemperature);
  let temp1Element = document.querySelector("#temp1");
  temp1Element.innerHTML = Math.round(response.data.main.temp);
  let temp2Element = document.querySelector("#temp2");
  temp2Element.innerHTML = Math.round(response.data.main.temp);
  let temp3Element = document.querySelector("#temp3");
  temp3Element.innerHTML = Math.round(response.data.main.temp);
  let temp4Element = document.querySelector("#temp4");
  temp4Element.innerHTML = Math.round(response.data.main.temp);
  let temp5Element = document.querySelector("#temp5");
  temp5Element.innerHTML = Math.round(response.data.main.temp);
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
  let dateElement1 = document.querySelector("#date1");
  dateElement1.innerHTML = formatDate1(response.data.dt * 1000);
  let dateElement2 = document.querySelector("#date2");
  dateElement2.innerHTML = formatDate1(response.data.dt * 1000);
  let dateElement3 = document.querySelector("#date3");
  dateElement3.innerHTML = formatDate1(response.data.dt * 1000);
  let dateElement4 = document.querySelector("#date4");
  dateElement4.innerHTML = formatDate1(response.data.dt * 1000);
  let dateElement5 = document.querySelector("#date5");
  dateElement5.innerHTML = formatDate1(response.data.dt * 1000);
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);

  let iconElement1 = document.querySelector("#icon1");
  iconElement1.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement1.setAttribute("alt", response.data.weather[0].description);
  let iconElement2 = document.querySelector("#icon2");
  iconElement2.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement2.setAttribute("alt", response.data.weather[0].description);
  let iconElement3 = document.querySelector("#icon3");
  iconElement3.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement3.setAttribute("alt", response.data.weather[0].description);
  let iconElement4 = document.querySelector("#icon4");
  iconElement4.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement4.setAttribute("alt", response.data.weather[0].description);
  let iconElement5 = document.querySelector("#icon5");
  iconElement5.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement5.setAttribute("alt", response.data.weather[0].description);
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
