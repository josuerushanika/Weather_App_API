const timeE1 = document.getElementById('time');
const dateE1 = document.getElementById('date');
const currentWeatherItemsE1 = document.getElementById('current-weather-items');
const timeZone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastE1 = document.getElementById('weather-forecas');
const currentTempE1 = document.getElementById('current-temp');

const days = ['sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 

const API_KEY = '945d1d539a59d87aaf9d9e83220f2e81';

setInterval(() => {
   const time = new Date();
   const month = time.getMonth();
   const date = time.getDate();
   const day = time.getDay();
   const hour = time.getHours();
   const hoursIn12hrFormat = hour >= 13 ? hour %12: hour
   const minutes = time.getMinutes();
   const ampm = hour >= 12 ? 'PM' : 'AM'

   time.innerHTML =  hoursIn12hrFormat + ':'+minutes+ '' +`<span id="am-pm">${ampm}</span>`
   dateE1.innerHTML = days[day]+ ','+date+ '' + months[month]
},1000)

function getWeatherData () {
    navigator.geolocation.getCurrentPosition((success) => {
        console.log(success);

        let {latitude, longitude} = success.coords;
        
        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then (res => res.json()).then(data =>{
            console.log(data);
            showWeatherData(data);
        })

    })
}

function showWeatherData (data){
  let {humidity,pressure,sunrise,sunset, wind_speed} = data.current;

  currentWeatherItemsE1.innerHTML =  
     `<div class="weather-item">
     <div>${humidity}%</div>
     <div>95.2%</div>
  </div>
  <div class="weather-item">
     <div>Pressure</div>
     <div>${pressure}</div>
  </div>
  <div class="weather-item">
     <div>Wind Speed</div>
     <div>${wind_speed}{</div>
  </div>

  <div class="weather-item">
  <div>Wind Speed</div>
  <div>${sunrise}{</div>
</div>
  
  `

}